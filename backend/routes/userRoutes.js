"use strict";

const express = require("express");
const { body, param } = require("express-validator");

const userController = require("../controllers/userController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();

/**
 * All user-management routes require authentication.
 */
router.use(authMiddleware);

/**
 * Create a new admin/editor user.
 * Admin only.
 */
router.post(
  "/",
  authorizeRoles("admin"),
  [
    body("first_name")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ max: 100 })
      .withMessage("First name cannot exceed 100 characters"),

    body("last_name")
      .trim()
      .notEmpty()
      .withMessage("Last name is required")
      .isLength({ max: 100 })
      .withMessage("Last name cannot exceed 100 characters"),

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

    body("role")
      .optional()
      .isIn(["admin", "editor"])
      .withMessage("Role must be admin or editor"),
  ],
  validate,
  userController.createUser
);

/**
 * Get all users.
 * Admin only.
 */
router.get(
  "/",
  authorizeRoles("admin"),
  userController.getUsers
);

/**
 * Get a single user.
 * Admin only.
 */
router.get(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("User ID must be a positive integer"),
  ],
  validate,
  userController.getUserById
);

/**
 * Activate or deactivate a user.
 * Admin only.
 */
router.patch(
  "/:id/status",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("User ID must be a positive integer"),

    body("is_active")
      .isBoolean()
      .withMessage("is_active must be true or false"),
  ],
  validate,
  userController.updateUserStatus
);

module.exports = router;