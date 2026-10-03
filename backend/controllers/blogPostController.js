"use strict";

const blogPostService = require("../services/blogPostService");

const createBlogPost = async (req, res, next) => {
  try {
    const post = await blogPostService.createBlogPost(
      req.body,
      req.user.id
    );

    return res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const getBlogPosts = async (req, res, next) => {
  try {
    const posts = await blogPostService.getBlogPosts({
      status: req.query.status,
      category_id: req.query.category_id,
      publicOnly: req.publicOnly === true,
    });

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
  try {
    const post = await blogPostService.getBlogPostById(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const getBlogPostBySlug = async (req, res, next) => {
  try {
    const post = await blogPostService.getBlogPostBySlug(
      req.params.slug,
      req.publicOnly === true
    );

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const updateBlogPost = async (req, res, next) => {
  try {
    const post = await blogPostService.updateBlogPost(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Blog post updated successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  try {
    const result = await blogPostService.deleteBlogPost(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Blog post deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  updateBlogPost,
  deleteBlogPost,
};