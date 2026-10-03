"use strict";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../models");
const env = require("../config/env.config");
const AppError = require("../errors/AppError");

/**
 * Generate a JWT for an authenticated user.
 */
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    env.jwt.secret,
    {
      expiresIn: env.jwt.expiresIn,
    }
  );
};

/**
 * Authenticate a user using email and password.
 */
const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email: email.toLowerCase().trim(),
    },
  });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  if (!user.is_active) {
    throw new AppError("Your account has been deactivated", 403);
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatches) {
    throw new AppError("Invalid email or password", 401);
  }

  await user.update({
    last_login_at: new Date(),
  });

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
      is_active: user.is_active,
      last_login_at: user.last_login_at,
    },
  };
};

/**
 * Get the currently authenticated user's profile.
 */
const getProfile = async (userId) => {
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

module.exports = {
  generateToken,
  login,
  getProfile,
};