import {
  checkLoginRateLimit,
  clearLoginFailures,
  clearSessionCookie,
  createSessionCookie,
  credentialsMatch,
  hasAdminSession,
  adminConfigurationReady,
  readJsonBody,
  requireSameOrigin,
  respond,
  recordLoginFailure
} from "../server/admin.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return respond(res, hasAdminSession(req) ? 200 : 401, { authenticated: hasAdminSession(req) });
  }

  if (!requireSameOrigin(req, res)) return;

  if (req.method === "DELETE") {
    clearSessionCookie(res);
    return respond(res, 200, { authenticated: false });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST, DELETE");
    return respond(res, 405, { error: "Method not allowed." });
  }

  if (!adminConfigurationReady()) {
    return respond(res, 503, { error: "Admin login is not ready. Connect a private Blob store and configure the Vercel admin secrets." });
  }
  if (!checkLoginRateLimit(req)) {
    return respond(res, 429, { error: "Too many attempts. Wait 15 minutes and try again." });
  }

  let body;
  try {
    body = readJsonBody(req);
  } catch {
    return respond(res, 400, { error: "Invalid login request." });
  }
  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (username.length > 80 || password.length > 256 || !credentialsMatch(username, password)) {
    recordLoginFailure(req);
    return respond(res, 401, { error: "Incorrect username or password." });
  }

  clearLoginFailures(req);
  createSessionCookie(res);
  return respond(res, 200, { authenticated: true });
}
