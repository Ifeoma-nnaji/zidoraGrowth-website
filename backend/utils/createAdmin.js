"use strict";

const bcrypt = require("bcryptjs");

const { User } = require("../models");
const connectDb = require("../database/connectDb");

const createAdmin = async () => {
  try {
    await connectDb();

    const email = "admin@zidoragrowth.com";
    const password = "ChangeThisPassword123!";

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      console.log("Admin user already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await User.create({
      first_name: "Zidora",
      last_name: "Admin",
      email,
      password: hashedPassword,
      role: "admin",
      is_active: true,
    });

    console.log("Admin account created successfully.");
    console.log("Email:", admin.email);
    console.log("Password:", password);

    process.exit(0);
  } catch (error) {
    console.error("Failed to create admin:", error.message);
    process.exit(1);
  }
};

createAdmin();