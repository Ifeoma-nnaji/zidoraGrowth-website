"use strict";

const express = require("express");
const { body } = require("express-validator");

const authController = require("../controllers/authController");
const validate = require("../middleware/validate");
const authMiddleware = require("../errors/authMiddleware");

const router = express.Router();

/**
 * POST /api/auth/login
 *
 * Authenticate an admin/editor and return a JWT.
 */
router.post(
  "/login",
  [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email address")
      .normalizeEmail(),

    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  validate,
  authController.login
);

/**
 * GET /api/auth/me
 *
 * Return the currently authenticated user's profile.
 */
router.get(
  "/me",
  authMiddleware,
  authController.getProfile
);

module.exports = router;