"use strict";

const express = require("express");
const { body, param } = require("express-validator");

const serviceController = require("../controllers/serviceController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();

/**
 * PUBLIC ROUTES
 */

/**
 * Get all active services.
 * GET /api/services
 */
router.get("/", (req, res, next) => {
  req.publicOnly = true;
  next();
}, serviceController.getServices);

/**
 * Get an active service by slug.
 * GET /api/services/slug/:slug
 */
router.get(
  "/slug/:slug",
  [
    param("slug")
      .trim()
      .notEmpty()
      .withMessage("Service slug is required"),
  ],
  validate,
  (req, res, next) => {
    req.publicOnly = true;
    next();
  },
  serviceController.getServiceBySlug
);

/**
 * ADMIN ROUTES
 *
 * Everything below this point requires authentication.
 */
router.use(authMiddleware);

/**
 * Get all services including inactive services.
 * GET /api/services/admin/all
 */
router.get(
  "/admin/all",
  authorizeRoles("admin", "editor"),
  serviceController.getServices
);

/**
 * Get a service by ID.
 * GET /api/services/:id
 */
router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Service ID must be a positive integer"),
  ],
  validate,
  serviceController.getServiceById
);


router.post(
  "/",
  authorizeRoles("admin", "editor"),
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Service name is required")
      .isLength({ max: 150 })
      .withMessage("Service name cannot exceed 150 characters"),

    body("slug")
      .trim()
      .notEmpty()
      .withMessage("Service slug is required")
      .isLength({ max: 180 })
      .withMessage("Service slug cannot exceed 180 characters")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Service slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("short_description")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage(
        "Short description cannot exceed 500 characters"
      ),

    body("description")
      .optional({ nullable: true }),

    body("icon")
      .optional({ nullable: true })
      .isLength({ max: 100 })
      .withMessage("Icon cannot exceed 100 characters"),

    body("is_featured")
      .optional()
      .isBoolean()
      .withMessage("is_featured must be true or false"),

    body("is_active")
      .optional()
      .isBoolean()
      .withMessage("is_active must be true or false"),

    body("sort_order")
      .optional()
      .isInt()
      .withMessage("sort_order must be an integer"),
  ],
  validate,
  serviceController.createService
);


router.patch(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Service ID must be a positive integer"),

    body("name")
      .optional()
      .trim()
      .isLength({ max: 150 })
      .withMessage("Service name cannot exceed 150 characters"),

    body("slug")
      .optional()
      .trim()
      .isLength({ max: 180 })
      .withMessage("Service slug cannot exceed 180 characters")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Service slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("short_description")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage(
        "Short description cannot exceed 500 characters"
      ),

    body("description")
      .optional({ nullable: true }),

    body("icon")
      .optional({ nullable: true })
      .isLength({ max: 100 })
      .withMessage("Icon cannot exceed 100 characters"),

    body("is_featured")
      .optional()
      .isBoolean()
      .withMessage("is_featured must be true or false"),

    body("is_active")
      .optional()
      .isBoolean()
      .withMessage("is_active must be true or false"),

    body("sort_order")
      .optional()
      .isInt()
      .withMessage("sort_order must be an integer"),
  ],
  validate,
  serviceController.updateService
);


router.delete(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Service ID must be a positive integer"),
  ],
  validate,
  serviceController.deleteService
);

module.exports = router;