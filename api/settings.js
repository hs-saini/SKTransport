import {
  adminConfigurationReady,
  DEFAULT_SETTINGS,
  readSharedSettings,
  requireAdminSession,
  requireSameOrigin,
  respond,
  settingsConfigurationReady,
  validateSettings,
  writeSharedSettings
} from "../server/admin.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!settingsConfigurationReady()) {
      return respond(res, 200, DEFAULT_SETTINGS);
    }
    try {
      const settings = await readSharedSettings();
      return respond(res, 200, settings);
    } catch (error) {
      console.error("Could not read shared S K Transport settings.", error);
      return respond(res, 503, { code: "STORAGE_UNAVAILABLE", error: "Shared settings are temporarily unavailable." });
    }
  }

  if (req.method !== "PUT") {
    res.setHeader("Allow", "GET, PUT");
    return respond(res, 405, { error: "Method not allowed." });
  }
  if (!requireSameOrigin(req, res) || !requireAdminSession(req, res)) return;
  if (!adminConfigurationReady()) {
    return respond(res, 503, { error: "Admin authentication and shared storage are not configured yet." });
  }

  try {
    const settings = validateSettings(req.body);
    const saved = await writeSharedSettings(settings);
    return respond(res, 200, { settings: saved });
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError || error instanceof RangeError || (error instanceof Error && error.message.startsWith("Invalid ")) || (error instanceof Error && error.message.startsWith("Settings are "))) {
      return respond(res, 400, { error: error.message });
    }
    console.error("Could not save shared S K Transport settings.", error);
    return respond(res, 503, { error: "Settings could not be saved. Check the Vercel private Blob connection." });
  }
}
