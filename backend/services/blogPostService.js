"use strict";

const { BlogPost, User, BlogCategory } = require("../models");
const AppError = require("../errors/AppError");

const createBlogPost = async (data, authorId) => {
  const {
    category_id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    meta_title,
    meta_description,
    status = "draft",
    published_at,
  } = data;

  const existingPost = await BlogPost.findOne({
    where: { slug },
  });

  if (existingPost) {
    throw new AppError(
      "A blog post with this slug already exists",
      409
    );
  }

  const author = await User.findByPk(authorId);

  if (!author || !author.is_active) {
    throw new AppError(
      "Blog post author does not exist or is inactive",
      400
    );
  }

  if (category_id) {
    const category = await BlogCategory.findByPk(category_id);

    if (!category) {
      throw new AppError(
        "Selected blog category does not exist",
        400
      );
    }
  }

  let finalPublishedAt = published_at || null;

  if (status === "published" && !finalPublishedAt) {
    finalPublishedAt = new Date();
  }

  return BlogPost.create({
    author_id: authorId,
    category_id: category_id || null,
    title: title.trim(),
    slug: slug.trim().toLowerCase(),
    excerpt,
    content,
    featured_image,
    meta_title,
    meta_description,
    status,
    published_at: finalPublishedAt,
  });
};

const getBlogPosts = async (options = {}) => {
  const where = {};

  if (options.status) {
    where.status = options.status;
  }

  if (options.category_id) {
    where.category_id = options.category_id;
  }

  if (options.publicOnly) {
    where.status = "published";
  }

  return BlogPost.findAll({
    where,
    include: [
      {
        model: User,
        as: "author",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "email",
        ],
      },
      {
        model: BlogCategory,
        as: "category",
        attributes: [
          "id",
          "name",
          "slug",
        ],
      },
    ],
    order: [
      ["published_at", "DESC"],
      ["created_at", "DESC"],
    ],
  });
};

const getBlogPostById = async (postId) => {
  const post = await BlogPost.findByPk(postId, {
    include: [
      {
        model: User,
        as: "author",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "email",
        ],
      },
      {
        model: BlogCategory,
        as: "category",
        attributes: [
          "id",
          "name",
          "slug",
        ],
      },
    ],
  });

  if (!post) {
    throw new AppError("Blog post not found", 404);
  }

  return post;
};

const getBlogPostBySlug = async (
  slug,
  publicOnly = false
) => {
  const where = { slug };

  if (publicOnly) {
    where.status = "published";
  }

  const post = await BlogPost.findOne({
    where,
    include: [
      {
        model: User,
        as: "author",
        attributes: [
          "id",
          "first_name",
          "last_name",
        ],
      },
      {
        model: BlogCategory,
        as: "category",
        attributes: [
          "id",
          "name",
          "slug",
        ],
      },
    ],
  });

  if (!post) {
    throw new AppError("Blog post not found", 404);
  }

  return post;
};

const updateBlogPost = async (postId, data) => {
  const post = await BlogPost.findByPk(postId);

  if (!post) {
    throw new AppError("Blog post not found", 404);
  }

  if (data.slug && data.slug !== post.slug) {
    const existingPost = await BlogPost.findOne({
      where: {
        slug: data.slug.trim().toLowerCase(),
      },
    });

    if (
      existingPost &&
      existingPost.id !== post.id
    ) {
      throw new AppError(
        "A blog post with this slug already exists",
        409
      );
    }
  }

  if (data.category_id) {
    const category = await BlogCategory.findByPk(
      data.category_id
    );

    if (!category) {
      throw new AppError(
        "Selected blog category does not exist",
        400
      );
    }
  }

  const updateData = {
    ...data,
  };

  if (updateData.title) {
    updateData.title = updateData.title.trim();
  }

  if (updateData.slug) {
    updateData.slug = updateData.slug.trim().toLowerCase();
  }

  if (
    updateData.status === "published" &&
    !updateData.published_at
  ) {
    updateData.published_at = new Date();
  }

  await post.update(updateData);

  return getBlogPostById(postId);
};

const deleteBlogPost = async (postId) => {
  const post = await BlogPost.findByPk(postId);

  if (!post) {
    throw new AppError("Blog post not found", 404);
  }

  await post.destroy();

  return {
    id: postId,
  };
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  updateBlogPost,
  deleteBlogPost,
};