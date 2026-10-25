import process from "node:process";
import express from "express";
import bcrypt from "bcrypt";
import rateLimit from "express-rate-limit";
import Admin from "../models/Admin.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: { message: "Too many login attempts. Try again later." },
});

router.post("/login", loginLimiter, async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = req.body.password;

    if (!email || typeof password !== "string" || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).json({ message: "Login failed" });
      }

      req.session.adminId = admin._id.toString();

      req.session.save((saveError) => {
        if (saveError) {
          return res.status(500).json({ message: "Could not create session" });
        }

        res.json({
          message: "Login successful",
          admin: { email: admin.email },
        });
      });
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ admin: { email: req.admin.email } });
});

router.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Logout failed" });
    }

    res.clearCookie("portfolio.sid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.json({ message: "Logged out" });
  });
});

export default router;