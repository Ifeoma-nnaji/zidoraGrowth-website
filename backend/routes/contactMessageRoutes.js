"use strict";

const express = require("express");
const { body, param, query } = require("express-validator");

const contactMessageController = require("../controllers/contactMessageController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();

/**
 * PUBLIC
 *
 * Submit a contact message.
 * POST /api/contact-messages
 */
router.post(
  "/",
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

    body("phone")
      .optional({ nullable: true })
      .isLength({ max: 30 })
      .withMessage("Phone cannot exceed 30 characters"),

    body("subject")
      .trim()
      .notEmpty()
      .withMessage("Subject is required")
      .isLength({ max: 255 })
      .withMessage("Subject cannot exceed 255 characters"),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required"),
  ],
  validate,
  contactMessageController.createMessage
);

/**
 * PROTECTED ADMIN ROUTES
 */
router.use(authMiddleware);

/**
 * Get all contact messages.
 * GET /api/contact-messages
 *
 * Admins and editors can view messages.
 */
router.get(
  "/",
  authorizeRoles("admin", "editor"),
  [
    query("status")
      .optional()
      .isIn([
        "unread",
        "read",
        "replied",
        "archived",
      ])
      .withMessage("Invalid message status"),
  ],
  validate,
  contactMessageController.getMessages
);


router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Contact message ID must be a positive integer"
      ),
  ],
  validate,
  contactMessageController.getMessageById
);

router.patch(
  "/:id/status",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Contact message ID must be a positive integer"
      ),

    body("status")
      .notEmpty()
      .isIn([
        "unread",
        "read",
        "replied",
        "archived",
      ])
      .withMessage("Invalid message status"),
  ],
  validate,
  contactMessageController.updateMessageStatus
);

router.delete(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Contact message ID must be a positive integer"
      ),
  ],
  validate,
  contactMessageController.deleteMessage
);

module.exports = router;