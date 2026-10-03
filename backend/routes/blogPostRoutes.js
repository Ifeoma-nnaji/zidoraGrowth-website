"use strict";

const express = require("express");
const { body, param, query } = require("express-validator");

const blogPostController = require("../controllers/blogPostController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();


router.get(
  "/",
  [
    query("category_id")
      .optional()
      .isInt({ min: 1 })
      .withMessage("category_id must be a positive integer"),
  ],
  validate,
  (req, res, next) => {
    req.publicOnly = true;
    next();
  },
  blogPostController.getBlogPosts
);


router.get(
  "/slug/:slug",
  [
    param("slug")
      .trim()
      .notEmpty()
      .withMessage("Blog post slug is required"),
  ],
  validate,
  (req, res, next) => {
    req.publicOnly = true;
    next();
  },
  blogPostController.getBlogPostBySlug
);



router.use(authMiddleware);


router.get(
  "/admin/all",
  authorizeRoles("admin", "editor"),
  [
    query("status")
      .optional()
      .isIn(["draft", "published", "archived"])
      .withMessage("Invalid blog post status"),

    query("category_id")
      .optional()
      .isInt({ min: 1 })
      .withMessage("category_id must be a positive integer"),
  ],
  validate,
  blogPostController.getBlogPosts
);


router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Blog post ID must be a positive integer"),
  ],
  validate,
  blogPostController.getBlogPostById
);

router.post(
  "/",
  authorizeRoles("admin", "editor"),
  [
    body("category_id")
      .optional({ nullable: true })
      .isInt({ min: 1 })
      .withMessage("category_id must be a positive integer"),

    body("title")
      .trim()
      .notEmpty()
      .withMessage("Blog post title is required")
      .isLength({ max: 255 })
      .withMessage("Blog post title cannot exceed 255 characters"),

    body("slug")
      .trim()
      .notEmpty()
      .withMessage("Blog post slug is required")
      .isLength({ max: 280 })
      .withMessage("Blog post slug cannot exceed 280 characters")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Blog post slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("excerpt")
      .optional({ nullable: true }),

    body("content")
      .trim()
      .notEmpty()
      .withMessage("Blog post content is required"),

    body("featured_image")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage("Featured image path cannot exceed 500 characters"),

    body("meta_title")
      .optional({ nullable: true })
      .isLength({ max: 255 })
      .withMessage("Meta title cannot exceed 255 characters"),

    body("meta_description")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage("Meta description cannot exceed 500 characters"),

    body("status")
      .optional()
      .isIn(["draft", "published", "archived"])
      .withMessage("Invalid blog post status"),

    body("published_at")
      .optional({ nullable: true })
      .isISO8601()
      .withMessage("published_at must be a valid date"),
  ],
  validate,
  blogPostController.createBlogPost
);

router.patch(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Blog post ID must be a positive integer"),

    body("category_id")
      .optional({ nullable: true })
      .isInt({ min: 1 })
      .withMessage("category_id must be a positive integer"),

    body("title")
      .optional()
      .trim()
      .isLength({ max: 255 })
      .withMessage("Blog post title cannot exceed 255 characters"),

    body("slug")
      .optional()
      .trim()
      .isLength({ max: 280 })
      .withMessage("Blog post slug cannot exceed 280 characters")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Blog post slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("excerpt")
      .optional({ nullable: true }),

    body("content")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Blog post content cannot be empty"),

    body("featured_image")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage("Featured image path cannot exceed 500 characters"),

    body("meta_title")
      .optional({ nullable: true })
      .isLength({ max: 255 })
      .withMessage("Meta title cannot exceed 255 characters"),

    body("meta_description")
      .optional({ nullable: true })
      .isLength({ max: 500 })
      .withMessage("Meta description cannot exceed 500 characters"),

    body("status")
      .optional()
      .isIn(["draft", "published", "archived"])
      .withMessage("Invalid blog post status"),

    body("published_at")
      .optional({ nullable: true })
      .isISO8601()
      .withMessage("published_at must be a valid date"),
  ],
  validate,
  blogPostController.updateBlogPost
);

router.delete(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Blog post ID must be a positive integer"),
  ],
  validate,
  blogPostController.deleteBlogPost
);

module.exports = router;