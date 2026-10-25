import "dotenv/config";

import process from "node:process";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Admin from "./models/Admin.js";

async function createAdmin() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (!process.env.MONGODB_URI || !email || !password) {
    throw new Error("Set MONGODB_URI, ADMIN_EMAIL and ADMIN_PASSWORD in .env");
  }

  if (password.length < 12) {
    throw new Error("Use an admin password with at least 12 characters");
  }

  await mongoose.connect(process.env.MONGODB_URI);

  const existing = await Admin.findOne({ email });

  if (existing) {
    console.log("Admin already exists. No changes made.");
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("Admin account created successfully.");
  }

  await mongoose.disconnect();
}

createAdmin().catch(async (error) => {
  console.error(error.message);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
