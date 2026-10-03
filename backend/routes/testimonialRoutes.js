"use strict";

const express = require("express");
const { body, param } = require("express-validator");

const testimonialController = require("../controllers/testimonialController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    req.publicOnly = true;
    next();
  },
  testimonialController.getTestimonials
);


router.get(
  "/featured",
  (req, res, next) => {
    req.publicOnly = true;
    req.featuredOnly = true;
    next();
  },
  testimonialController.getTestimonials
);

router.use(authMiddleware);

router.get(
  "/admin/all",
  authorizeRoles("admin", "editor"),
  testimonialController.getTestimonials
);

router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Testimonial ID must be a positive integer"
      ),
  ],
  validate,
  testimonialController.getTestimonialById
);

router.post(
  "/",
  authorizeRoles("admin", "editor"),
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ max: 200 })
      .withMessage("Name cannot exceed 200 characters"),

    body("company")
      .optional({ nullable: true })
      .isLength({ max: 200 })
      .withMessage("Company cannot exceed 200 characters"),

    body("role")
      .optional({ nullable: true })
      .isLength({ max: 150 })
      .withMessage("Role cannot exceed 150 characters"),

    body("content")
      .trim()
      .notEmpty()
      .withMessage("Testimonial content is required"),

    body("image")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage("Image path cannot exceed 500 characters"),

    body("rating")
      .optional({ nullable: true })
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be between 1 and 5"),

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
  testimonialController.createTestimonial
);

router.patch(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Testimonial ID must be a positive integer"
      ),

    body("name")
      .optional()
      .trim()
      .isLength({ max: 200 })
      .withMessage("Name cannot exceed 200 characters"),

    body("company")
      .optional({ nullable: true })
      .isLength({ max: 200 })
      .withMessage("Company cannot exceed 200 characters"),

    body("role")
      .optional({ nullable: true })
      .isLength({ max: 150 })
      .withMessage("Role cannot exceed 150 characters"),

    body("content")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Testimonial content cannot be empty"),

    body("image")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage("Image path cannot exceed 500 characters"),

    body("rating")
      .optional({ nullable: true })
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be between 1 and 5"),

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
  testimonialController.updateTestimonial
);


router.delete(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Testimonial ID must be a positive integer"
      ),
  ],
  validate,
  testimonialController.deleteTestimonial
);

module.exports = router;