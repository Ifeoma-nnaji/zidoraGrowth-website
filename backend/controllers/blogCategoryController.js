"use strict";

const blogCategoryService = require("../services/blogCategoryService");


const createCategory = async (req, res, next) => {
  try {
    const category =
      await blogCategoryService.createCategory(req.body);

    return res.status(201).json({
      success: true,
      message: "Blog category created successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories =
      await blogCategoryService.getCategories();

    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const category =
      await blogCategoryService.getCategoryById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const getCategoryBySlug = async (req, res, next) => {
  try {
    const category =
      await blogCategoryService.getCategoryBySlug(
        req.params.slug
      );

    return res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const category =
      await blogCategoryService.updateCategory(
        req.params.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Blog category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const result =
      await blogCategoryService.deleteCategory(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      message: "Blog category deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  getCategoryBySlug,
  updateCategory,
  deleteCategory,
};