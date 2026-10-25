import Admin from "../models/Admin.js";

export default async function requireAuth(req, res, next) {
  try {
    if (!req.session.adminId) {
      return res.status(401).json({ message: "Please log in" });
    }

    const admin = await Admin.findById(req.session.adminId);

    if (!admin) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.admin = admin;
    next();
  } catch {
    res.status(500).json({ message: "Server error" });
  }
}
