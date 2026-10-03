"use strict";

const { BlogCategory } = require("../models");
const AppError = require("../errors/AppError");

/**
 * Create a blog category.
 */
const createCategory = async (data) => {
  const {
    name,
    slug,
    description,
  } = data;

  const existingCategory = await BlogCategory.findOne({
    where: { slug },
  });

  if (existingCategory) {
    throw new AppError(
      "A blog category with this slug already exists",
      409
    );
  }

  return BlogCategory.create({
    name: name.trim(),
    slug: slug.trim().toLowerCase(),
    description,
  });
};

/**
 * Get all blog categories.
 */
const getCategories = async () => {
  return BlogCategory.findAll({
    order: [["name", "ASC"]],
  });
};

/**
 * Get a category by ID.
 */
const getCategoryById = async (categoryId) => {
  const category = await BlogCategory.findByPk(categoryId);

  if (!category) {
    throw new AppError("Blog category not found", 404);
  }

  return category;
};

/**
 * Get a category by slug.
 */
const getCategoryBySlug = async (slug) => {
  const category = await BlogCategory.findOne({
    where: { slug },
  });

  if (!category) {
    throw new AppError("Blog category not found", 404);
  }

  return category;
};

/**
 * Update a blog category.
 */
const updateCategory = async (categoryId, data) => {
  const category = await BlogCategory.findByPk(categoryId);

  if (!category) {
    throw new AppError("Blog category not found", 404);
  }

  if (data.slug && data.slug !== category.slug) {
    const existingCategory = await BlogCategory.findOne({
      where: {
        slug: data.slug.trim().toLowerCase(),
      },
    });

    if (
      existingCategory &&
      existingCategory.id !== category.id
    ) {
      throw new AppError(
        "A blog category with this slug already exists",
        409
      );
    }
  }

  const updateData = {
    ...data,
  };

  if (updateData.name) {
    updateData.name = updateData.name.trim();
  }

  if (updateData.slug) {
    updateData.slug = updateData.slug.trim().toLowerCase();
  }

  await category.update(updateData);

  return category;
};

const deleteCategory = async (categoryId) => {
  const category = await BlogCategory.findByPk(categoryId);

  if (!category) {
    throw new AppError("Blog category not found", 404);
  }

  await category.destroy();

  return {
    id: categoryId,
  };
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  getCategoryBySlug,
  updateCategory,
  deleteCategory,
};