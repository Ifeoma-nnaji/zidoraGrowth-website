"use strict";

const express = require("express");
const { body, param } = require("express-validator");

const projectController = require("../controllers/projectController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();

/**
 * PUBLIC ROUTES
 */

/**
 * Get all published projects.
 * GET /api/projects
 */
router.get(
  "/",
  (req, res, next) => {
    req.publicOnly = true;
    next();
  },
  projectController.getProjects
);

/**
 * Get featured published projects.
 * GET /api/projects/featured
 */
router.get(
  "/featured",
  (req, res, next) => {
    req.publicOnly = true;
    req.featuredOnly = true;
    next();
  },
  projectController.getProjects
);

/**
 * Get published project by slug.
 * GET /api/projects/slug/:slug
 */
router.get(
  "/slug/:slug",
  [
    param("slug")
      .trim()
      .notEmpty()
      .withMessage("Project slug is required"),
  ],
  validate,
  (req, res, next) => {
    req.publicOnly = true;
    next();
  },
  projectController.getProjectBySlug
);

/**
 * PROTECTED ADMIN ROUTES
 */
router.use(authMiddleware);

/**
 * Get all projects including unpublished projects.
 * GET /api/projects/admin/all
 */
router.get(
  "/admin/all",
  authorizeRoles("admin", "editor"),
  projectController.getProjects
);

/**
 * Get project by ID.
 * GET /api/projects/:id
 */
router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Project ID must be a positive integer"),
  ],
  validate,
  projectController.getProjectById
);

/**
 * Create a project.
 * POST /api/projects
 */
router.post(
  "/",
  authorizeRoles("admin", "editor"),
  [
    body("title")
      .trim()
      .notEmpty()
      .withMessage("Project title is required")
      .isLength({ max: 200 })
      .withMessage("Project title cannot exceed 200 characters"),

    body("slug")
      .trim()
      .notEmpty()
      .withMessage("Project slug is required")
      .isLength({ max: 220 })
      .withMessage("Project slug cannot exceed 220 characters")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Project slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("client_name")
      .optional({ nullable: true })
      .isLength({ max: 200 })
      .withMessage("Client name cannot exceed 200 characters"),

    body("short_description")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage(
        "Short description cannot exceed 500 characters"
      ),

    body("description")
      .optional({ nullable: true }),

    body("featured_image")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage(
        "Featured image path cannot exceed 500 characters"
      ),

    body("website_url")
      .optional({ nullable: true })
      .isURL()
      .withMessage("Website URL must be a valid URL"),

    body("category")
      .optional({ nullable: true })
      .isLength({ max: 150 })
      .withMessage("Category cannot exceed 150 characters"),

    body("results")
      .optional({ nullable: true }),

    body("is_featured")
      .optional()
      .isBoolean()
      .withMessage("is_featured must be true or false"),

    body("is_published")
      .optional()
      .isBoolean()
      .withMessage("is_published must be true or false"),

    body("sort_order")
      .optional()
      .isInt()
      .withMessage("sort_order must be an integer"),
  ],
  validate,
  projectController.createProject
);

/**
 * Update a project.
 * PATCH /api/projects/:id
 */
router.patch(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Project ID must be a positive integer"),

    body("title")
      .optional()
      .trim()
      .isLength({ max: 200 })
      .withMessage("Project title cannot exceed 200 characters"),

    body("slug")
      .optional()
      .trim()
      .isLength({ max: 220 })
      .withMessage("Project slug cannot exceed 220 characters")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Project slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("client_name")
      .optional({ nullable: true })
      .isLength({ max: 200 })
      .withMessage("Client name cannot exceed 200 characters"),

    body("short_description")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage(
        "Short description cannot exceed 500 characters"
      ),

    body("description")
      .optional({ nullable: true }),

    body("featured_image")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage(
        "Featured image path cannot exceed 500 characters"
      ),

    body("website_url")
      .optional({ nullable: true })
      .isURL()
      .withMessage("Website URL must be a valid URL"),

    body("category")
      .optional({ nullable: true })
      .isLength({ max: 150 })
      .withMessage("Category cannot exceed 150 characters"),

    body("results")
      .optional({ nullable: true }),

    body("is_featured")
      .optional()
      .isBoolean()
      .withMessage("is_featured must be true or false"),

    body("is_published")
      .optional()
      .isBoolean()
      .withMessage("is_published must be true or false"),

    body("sort_order")
      .optional()
      .isInt()
      .withMessage("sort_order must be an integer"),
  ],
  validate,
  projectController.updateProject
);

/**
 * Delete a project.
 * DELETE /api/projects/:id
 *
 * Admin only.
 */
router.delete(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Project ID must be a positive integer"),
  ],
  validate,
  projectController.deleteProject
);

module.exports = router;