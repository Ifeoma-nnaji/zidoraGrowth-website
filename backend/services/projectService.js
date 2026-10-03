"use strict";

const { Project } = require("../models");
const AppError = require("../errors/AppError");

/**
 * Create a project.
 */
const createProject = async (data) => {
  const {
    title,
    slug,
    client_name,
    short_description,
    description,
    featured_image,
    website_url,
    category,
    results,
    is_featured = false,
    is_published = false,
    sort_order = 0,
  } = data;

  const existingProject = await Project.findOne({
    where: { slug },
  });

  if (existingProject) {
    throw new AppError(
      "A project with this slug already exists",
      409
    );
  }

  return Project.create({
    title: title.trim(),
    slug: slug.trim().toLowerCase(),
    client_name,
    short_description,
    description,
    featured_image,
    website_url,
    category,
    results,
    is_featured,
    is_published,
    sort_order,
  });
};

/**
 * Get all projects.
 *
 * Public website:
 * Only published projects.
 *
 * Admin/editor:
 * All projects.
 */
const getProjects = async (options = {}) => {
  const where = {};

  if (options.publicOnly) {
    where.is_published = true;
  }

  if (options.featuredOnly) {
    where.is_featured = true;
  }

  return Project.findAll({
    where,
    order: [
      ["sort_order", "ASC"],
      ["created_at", "DESC"],
    ],
  });
};

/**
 * Get a project by ID.
 */
const getProjectById = async (projectId) => {
  const project = await Project.findByPk(projectId);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
};

/**
 * Get a project by slug.
 */
const getProjectBySlug = async (
  slug,
  publicOnly = false
) => {
  const where = { slug };

  if (publicOnly) {
    where.is_published = true;
  }

  const project = await Project.findOne({
    where,
  });

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
};

/**
 * Update a project.
 */
const updateProject = async (projectId, data) => {
  const project = await Project.findByPk(projectId);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  if (data.slug && data.slug !== project.slug) {
    const existingProject = await Project.findOne({
      where: {
        slug: data.slug.trim().toLowerCase(),
      },
    });

    if (
      existingProject &&
      existingProject.id !== project.id
    ) {
      throw new AppError(
        "A project with this slug already exists",
        409
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

  await project.update(updateData);

  return project;
};


const deleteProject = async (projectId) => {
  const project = await Project.findByPk(projectId);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  await project.destroy();

  return {
    id: projectId,
  };
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  getProjectBySlug,
  updateProject,
  deleteProject,
};