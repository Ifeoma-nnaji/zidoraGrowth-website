"use strict";

const express = require("express");
const { body, param, query } = require("express-validator");

const leadController = require("../controllers/leadController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();

/**
 * PUBLIC
 *
 * Submit a new enquiry.
 * POST /api/leads
 */
router.post(
  "/",
  [
    body("service_id")
      .optional({ nullable: true })
      .isInt({ min: 1 })
      .withMessage("service_id must be a positive integer"),

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

    body("phone")
      .optional({ nullable: true })
      .isLength({ max: 30 })
      .withMessage("Phone cannot exceed 30 characters"),

    body("company_name")
      .optional({ nullable: true })
      .isLength({ max: 200 })
      .withMessage("Company name cannot exceed 200 characters"),

    body("website")
      .optional({ nullable: true })
      .isURL()
      .withMessage("Website must be a valid URL"),

    body("message")
      .optional({ nullable: true }),

    body("budget")
      .optional({ nullable: true })
      .isLength({ max: 100 })
      .withMessage("Budget cannot exceed 100 characters"),

    body("source")
      .optional({ nullable: true })
      .isLength({ max: 100 })
      .withMessage("Source cannot exceed 100 characters"),
  ],
  validate,
  leadController.createLead
);

/**
 * PROTECTED CRM ROUTES
 *
 * Everything below this point requires authentication.
 */
router.use(authMiddleware);

/**
 * Get leads.
 * GET /api/leads
 *
 * Admins and editors can view leads.
 */
router.get(
  "/",
  authorizeRoles("admin", "editor"),
  [
    query("status")
      .optional()
      .isIn([
        "new",
        "contacted",
        "qualified",
        "proposal",
        "won",
        "lost",
      ])
      .withMessage("Invalid lead status"),

    query("service_id")
      .optional()
      .isInt({ min: 1 })
      .withMessage("service_id must be a positive integer"),

    query("assigned_to")
      .optional()
      .isInt({ min: 1 })
      .withMessage("assigned_to must be a positive integer"),
  ],
  validate,
  leadController.getLeads
);

/**
 * Get one lead.
 * GET /api/leads/:id
 */
router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Lead ID must be a positive integer"),
  ],
  validate,
  leadController.getLeadById
);

/**
 * Update lead status.
 * PATCH /api/leads/:id/status
 */
router.patch(
  "/:id/status",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Lead ID must be a positive integer"),

    body("status")
      .notEmpty()
      .isIn([
        "new",
        "contacted",
        "qualified",
        "proposal",
        "won",
        "lost",
      ])
      .withMessage("Invalid lead status"),
  ],
  validate,
  leadController.updateLeadStatus
);

/**
 * Assign a lead.
 * PATCH /api/leads/:id/assign
 *
 * Admin only.
 */
router.patch(
  "/:id/assign",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Lead ID must be a positive integer"),

    body("assigned_to")
      .notEmpty()
      .isInt({ min: 1 })
      .withMessage("assigned_to must be a positive integer"),
  ],
  validate,
  leadController.assignLead
);

/**
 * Update internal notes.
 * PATCH /api/leads/:id/notes
 *
 * Admins and editors can update notes.
 */
router.patch(
  "/:id/notes",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Lead ID must be a positive integer"),

    body("notes")
      .optional({ nullable: true }),
  ],
  validate,
  leadController.updateLeadNotes
);

module.exports = router;