import assert from "node:assert/strict";
import test from "node:test";

process.env.ADMIN_PASSWORD = "TestOnly-Admin-Password-2026!";
process.env.ADMIN_SESSION_SECRET = "unit-test-session-secret-with-at-least-32-bytes";
process.env.BLOB_READ_WRITE_TOKEN = "test-only-blob-token";
process.env.VERCEL = "";

const { default: adminSessionHandler } = await import("../api/admin-session.js");
const { default: settingsHandler } = await import("../api/settings.js");
const { hasAdminSession, validateSettings } = await import("../server/admin.js");

function mockResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: "",
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },
    end(value) {
      this.body = value;
    }
  };
}

function request(method, body = {}, extraHeaders = {}) {
  return {
    method,
    headers: {
      host: "transport.example",
      origin: "https://transport.example",
      "x-forwarded-proto": "https",
      ...extraHeaders
    },
    body,
    socket: { remoteAddress: "203.0.113.15" }
  };
}

test("validates shared settings and rejects non-HTTPS photo URLs", () => {
  const settings = {
    business: "S K Transport",
    owner: "Sushil Kumar",
    address: "Deoband",
    primary: "8445486229",
    secondary: "7078862293",
    email: "bookings@example.com",
    alternateEmail: "",
    vehicles: ["Truck"],
    vehiclePhotos: ["https://images.example/truck.jpg"],
    menuItems: [{ en: "Routes", hi: "रूट", href: "#routes" }],
    routes: [{ from: "Deoband", to: "Delhi" }]
  };
  assert.deepEqual(validateSettings(settings), settings);
  assert.throws(() => validateSettings({
    ...settings,
    vehiclePhotos: ["http://images.example/truck.jpg"]
  }), /HTTPS/);
});

test("admin login issues an HTTP-only session cookie and accepts that session", async () => {
  const res = mockResponse();
  await adminSessionHandler(request("POST", {
    username: "admin",
    password: process.env.ADMIN_PASSWORD
  }), res);

  assert.equal(res.statusCode, 200);
  assert.equal(JSON.parse(res.body).authenticated, true);
  assert.match(res.headers["set-cookie"], /HttpOnly/);
  assert.match(res.headers["set-cookie"], /SameSite=Strict/);
  assert.match(res.headers["set-cookie"], /Path=\/api/);

  const authenticatedRequest = request("GET", {}, {
    cookie: res.headers["set-cookie"].split(";")[0]
  });
  assert.equal(hasAdminSession(authenticatedRequest), true);
});

test("rejects bad credentials and cross-origin login requests", async () => {
  const invalidCredentials = mockResponse();
  await adminSessionHandler(request("POST", {
    username: "admin",
    password: "incorrect"
  }), invalidCredentials);
  assert.equal(invalidCredentials.statusCode, 401);

  const crossOrigin = mockResponse();
  await adminSessionHandler(request("POST", {
    username: "admin",
    password: process.env.ADMIN_PASSWORD
  }, { origin: "https://attacker.example" }), crossOrigin);
  assert.equal(crossOrigin.statusCode, 403);
});

test("settings writes require an authenticated session", async () => {
  const res = mockResponse();
  await settingsHandler(request("PUT", {}), res);
  assert.equal(res.statusCode, 401);
});

test("public settings return defaults while storage is not configured", async () => {
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  delete process.env.BLOB_READ_WRITE_TOKEN;
  try {
    const res = mockResponse();
    await settingsHandler(request("GET"), res);
    assert.equal(res.statusCode, 200);
    assert.equal(JSON.parse(res.body).business, "S K Transport");
  } finally {
    process.env.BLOB_READ_WRITE_TOKEN = blobToken;
  }
});
