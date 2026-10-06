import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { get, put } from "@vercel/blob";

const SETTINGS_PATH = "site-settings.json";
const SESSION_COOKIE = "sk_transport_admin";
const SESSION_TTL_SECONDS = 8 * 60 * 60;
const MAX_SETTINGS_BYTES = 64 * 1024;
const MENU_TARGETS = new Set(["#home", "#services", "#capabilities", "#routes", "#about", "#book", "#contact"]);
const VEHICLE_PHOTOS = [
  "photo-1519003722824-194d4455a60c",
  "photo-1601584115197-04ecc0da31d7",
  "photo-1501706362039-c06b2d715385",
  "photo-1519003722824-194d4455a60c",
  "photo-1601584115197-04ecc0da31d7",
  "photo-1492144534655-ae79c964c9d7",
  "photo-1501706362039-c06b2d715385"
];
export const DEFAULT_SETTINGS = {
  business: "S K Transport",
  owner: "Sushil Kumar",
  address: "Noopur near Sugar Mill Deoband, Deoband, 247554",
  primary: "8445486229",
  secondary: "7078862293",
  email: "sainihimanshu27958@gmail.com",
  alternateEmail: "",
  vehicles: ["Truck", "DCM", "Chhoti Gadi", "Badi Gadi", "Mini Truck", "Car", "Tractor Trali"],
  vehiclePhotos: VEHICLE_PHOTOS.map((photo) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=700&q=78`),
  menuItems: [
    { en: "Our fleet", hi: "हमारी गाड़ियाँ", href: "#services" },
    { en: "Services", hi: "सेवाएँ", href: "#capabilities" },
    { en: "Routes", hi: "रूट", href: "#routes" },
    { en: "About us", hi: "हमारे बारे में", href: "#about" },
    { en: "Contact", hi: "संपर्क", href: "#contact" }
  ],
  routes: [
    { from: "Deoband", to: "Delhi" },
    { from: "Deoband", to: "Lucknow" },
    { from: "Deoband", to: "Jaipur" },
    { from: "Deoband", to: "Mumbai" },
    { from: "Deoband", to: "Ahmedabad" },
    { from: "Deoband", to: "Bengaluru" }
  ]
};

const loginAttempts = new Map();

function respond(res, status, data, headers = {}) {
  res.status(status);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "same-origin");
  for (const [name, value] of Object.entries(headers)) res.setHeader(name, value);
  res.end(JSON.stringify(data));
}

function setCookie(res, value, maxAge) {
  const secure = process.env.VERCEL === "1" ? "; Secure" : "";
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=${value}; HttpOnly; SameSite=Strict; Path=/api; Max-Age=${maxAge}${secure}`);
}

function isSameOrigin(req) {
  const origin = req.headers.origin;
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  if (typeof origin !== "string" || typeof host !== "string") return false;
  try {
    const originUrl = new URL(origin);
    const forwardedProto = req.headers["x-forwarded-proto"];
    const expectedProtocol = typeof forwardedProto === "string"
      ? `${forwardedProto.split(",")[0].trim()}:`
      : process.env.VERCEL === "1" ? "https:" : originUrl.protocol;
    return originUrl.host === host && originUrl.protocol === expectedProtocol;
  } catch {
    return false;
  }
}

function credentialsConfigured() {
  return typeof process.env.ADMIN_PASSWORD === "string"
    && process.env.ADMIN_PASSWORD.length >= 14
    && typeof process.env.ADMIN_SESSION_SECRET === "string"
    && Buffer.byteLength(process.env.ADMIN_SESSION_SECRET) >= 32;
}

function equalSecret(candidate, expected) {
  const candidateBytes = Buffer.from(candidate);
  const expectedBytes = Buffer.from(expected);
  return candidateBytes.length === expectedBytes.length && timingSafeEqual(candidateBytes, expectedBytes);
}

function sessionSignature(payload) {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET).update(payload).digest("base64url");
}

function readCookie(req) {
  const cookies = req.headers.cookie || "";
  const entry = cookies.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${SESSION_COOKIE}=`));
  return entry ? entry.slice(SESSION_COOKIE.length + 1) : "";
}

export function hasAdminSession(req) {
  if (!credentialsConfigured()) return false;
  const [payload, signature, extra] = readCookie(req).split(".");
  if (!payload || !signature || extra) return false;
  const expected = sessionSignature(payload);
  if (!equalSecret(signature, expected)) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Number.isInteger(session.exp) && session.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function requireSameOrigin(req, res) {
  if (isSameOrigin(req)) return true;
  respond(res, 403, { error: "This request is not allowed." });
  return false;
}

export function requireAdminSession(req, res) {
  if (!hasAdminSession(req)) {
    respond(res, 401, { error: "Please log in to continue." });
    return false;
  }
  return true;
}

export function adminConfigurationReady() {
  return credentialsConfigured() && (
    (typeof process.env.BLOB_STORE_ID === "string" && typeof process.env.VERCEL_OIDC_TOKEN === "string")
    || typeof process.env.BLOB_READ_WRITE_TOKEN === "string"
  );
}

export function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body);
  return {};
}

function text(value, field, maxLength, optional = false) {
  if (typeof value !== "string") throw new Error(`Invalid ${field}.`);
  const clean = value.trim();
  if ((!clean && !optional) || clean.length > maxLength) throw new Error(`Invalid ${field}.`);
  return clean;
}

function email(value, field, optional = false) {
  const clean = text(value, field, 120, optional);
  if (clean && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) throw new Error(`Invalid ${field}.`);
  return clean;
}

function phone(value, field) {
  const clean = text(value, field, 20);
  const digits = clean.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) throw new Error(`Invalid ${field}.`);
  return clean;
}

export function validateSettings(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid settings.");
  if (Buffer.byteLength(JSON.stringify(value)) > MAX_SETTINGS_BYTES) throw new Error("Settings are too large.");
  if (!Array.isArray(value.vehicles) || value.vehicles.length < 1 || value.vehicles.length > 20) throw new Error("Invalid vehicle list.");
  if (!Array.isArray(value.vehiclePhotos) || value.vehiclePhotos.length !== value.vehicles.length) throw new Error("Invalid vehicle photos.");
  if (!Array.isArray(value.menuItems) || value.menuItems.length > 12) throw new Error("Invalid menu links.");
  if (!Array.isArray(value.routes) || value.routes.length > 30) throw new Error("Invalid routes.");

  const vehicles = value.vehicles.map((vehicle) => text(vehicle, "vehicle", 40));
  const vehiclePhotos = value.vehiclePhotos.map((photo) => {
    const clean = text(photo, "vehicle photo URL", 2048, true);
    if (clean && new URL(clean).protocol !== "https:") throw new Error("Vehicle photo URLs must use HTTPS.");
    return clean;
  });
  const menuItems = value.menuItems.map((item) => {
    if (!item || typeof item !== "object" || !MENU_TARGETS.has(item.href)) throw new Error("Invalid menu link.");
    return {
      en: text(item.en, "English menu label", 50),
      hi: text(item.hi, "Hindi menu label", 50),
      href: item.href
    };
  });
  const routes = value.routes.map((route) => {
    if (!route || typeof route !== "object") throw new Error("Invalid route.");
    return {
      from: text(route.from, "route origin", 100),
      to: text(route.to, "route destination", 100)
    };
  });

  return {
    business: text(value.business, "business name", 80),
    owner: text(value.owner, "proprietor", 80),
    address: text(value.address, "address", 180),
    primary: phone(value.primary, "primary phone"),
    secondary: phone(value.secondary, "alternate phone"),
    email: email(value.email, "primary email"),
    alternateEmail: email(value.alternateEmail, "alternate email", true),
    vehicles,
    vehiclePhotos,
    menuItems,
    routes
  };
}

export async function readSharedSettings() {
  const blob = await get(SETTINGS_PATH, { access: "private", useCache: false });
  if (!blob || blob.statusCode !== 200 || !blob.stream) return structuredClone(DEFAULT_SETTINGS);
  const data = await new Response(blob.stream).json();
  return validateSettings(data);
}

export async function writeSharedSettings(settings) {
  const clean = validateSettings(settings);
  await put(SETTINGS_PATH, JSON.stringify(clean), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60
  });
  return clean;
}

function clientKey(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

export function checkLoginRateLimit(req) {
  const now = Date.now();
  const key = clientKey(req);
  const attempt = loginAttempts.get(key);
  if (attempt && attempt.blockedUntil > now) return false;
  if (attempt && attempt.blockedUntil) loginAttempts.delete(key);
  return true;
}

export function recordLoginFailure(req) {
  const now = Date.now();
  const key = clientKey(req);
  const current = loginAttempts.get(key);
  const count = current && current.windowEnd > now ? current.count + 1 : 1;
  loginAttempts.set(key, {
    count,
    windowEnd: now + 15 * 60 * 1000,
    blockedUntil: count >= 5 ? now + 15 * 60 * 1000 : 0
  });
  if (loginAttempts.size > 10000) {
    for (const [entryKey, entry] of loginAttempts) {
      if (entry.windowEnd < now) loginAttempts.delete(entryKey);
    }
  }
}

export function clearLoginFailures(req) {
  loginAttempts.delete(clientKey(req));
}

export function createSessionCookie(res) {
  const payload = Buffer.from(JSON.stringify({
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
    nonce: randomBytes(16).toString("base64url")
  })).toString("base64url");
  setCookie(res, `${payload}.${sessionSignature(payload)}`, SESSION_TTL_SECONDS);
}

export function clearSessionCookie(res) {
  setCookie(res, "", 0);
}

export function credentialsMatch(username, password) {
  const expectedUsername = process.env.ADMIN_USERNAME || "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD;
  return typeof expectedPassword === "string"
    && equalSecret(username, expectedUsername)
    && equalSecret(password, expectedPassword);
}

export function isPasswordConfigured() {
  return credentialsConfigured();
}

export function settingsConfigurationReady() {
  return (typeof process.env.BLOB_STORE_ID === "string" && typeof process.env.VERCEL_OIDC_TOKEN === "string")
    || typeof process.env.BLOB_READ_WRITE_TOKEN === "string";
}

export { respond };
