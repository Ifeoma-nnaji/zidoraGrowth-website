"use strict";

const authService = require("../services/authService");

/**
 * Login
 * POST /api/auth/login
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get authenticated user's profile
 * GET /api/auth/me
 */
const getProfile = async (req, res, next) => {
  try {
    const user = await authService.getProfile(req.user.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  getProfile,
};