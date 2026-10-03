"use strict";

const express = require("express");
const { body, param } = require("express-validator");

const blogCategoryController = require("../controllers/blogCategoryController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validate = require("../middleware/validate");

const router = express.Router();


router.get(
  "/",
  blogCategoryController.getCategories
);

router.get(
  "/slug/:slug",
  [
    param("slug")
      .trim()
      .notEmpty()
      .withMessage("Category slug is required"),
  ],
  validate,
  blogCategoryController.getCategoryBySlug
);


router.use(authMiddleware);

router.get(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Category ID must be a positive integer"
      ),
  ],
  validate,
  blogCategoryController.getCategoryById
);

router.post(
  "/",
  authorizeRoles("admin", "editor"),
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Category name is required")
      .isLength({ max: 150 })
      .withMessage(
        "Category name cannot exceed 150 characters"
      ),

    body("slug")
      .trim()
      .notEmpty()
      .withMessage("Category slug is required")
      .isLength({ max: 180 })
      .withMessage(
        "Category slug cannot exceed 180 characters"
      )
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Category slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("description")
      .optional({ nullable: true }),
  ],
  validate,
  blogCategoryController.createCategory
);

router.patch(
  "/:id",
  authorizeRoles("admin", "editor"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Category ID must be a positive integer"
      ),

    body("name")
      .optional()
      .trim()
      .isLength({ max: 150 })
      .withMessage(
        "Category name cannot exceed 150 characters"
      ),

    body("slug")
      .optional()
      .trim()
      .isLength({ max: 180 })
      .withMessage(
        "Category slug cannot exceed 180 characters"
      )
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .withMessage(
        "Category slug must contain only lowercase letters, numbers and hyphens"
      ),

    body("description")
      .optional({ nullable: true }),
  ],
  validate,
  blogCategoryController.updateCategory
);

router.delete(
  "/:id",
  authorizeRoles("admin"),
  [
    param("id")
      .isInt({ min: 1 })
      .withMessage(
        "Category ID must be a positive integer"
      ),
  ],
  validate,
  blogCategoryController.deleteCategory
);

module.exports = router;