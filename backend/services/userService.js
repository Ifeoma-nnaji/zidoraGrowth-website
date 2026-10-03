"use strict";

const bcrypt = require("bcryptjs");

const { User } = require("../models");
const AppError = require("../errors/AppError");

/**
 * Create a new admin/editor user.
 */
const createUser = async ({
  first_name,
  last_name,
  email,
  password,
  role = "editor",
}) => {
  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await User.findOne({
    where: {
      email: normalizedEmail,
    },
  });

  if (existingUser) {
    throw new AppError(
      "A user with this email already exists",
      409
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    email: normalizedEmail,
    password: hashedPassword,
    role,
    is_active: true,
  });

  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role,
    is_active: user.is_active,
    created_at: user.created_at,
  };
};

/**
 * Get all admin/editor users.
 */
const getUsers = async () => {
  return User.findAll({
    attributes: {
      exclude: ["password"],
    },
    order: [["created_at", "DESC"]],
  });
};

/**
 * Get a single user by ID.
 */
const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: {
      exclude: ["password"],
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

/**
 * Update a user's account status.
 */
const updateUserStatus = async (userId, isActive) => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await user.update({
    is_active: isActive,
  });

  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role,
    is_active: user.is_active,
  };
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserStatus,
};