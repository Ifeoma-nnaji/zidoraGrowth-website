"use strict";

const projectService = require("../services/projectService");

/**
 * Create a project.
 * POST /api/projects
 */
const createProject = async (req, res, next) => {
  try {
    const project = await projectService.createProject(req.body);

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all projects.
 * GET /api/projects
 */
const getProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getProjects({
      publicOnly: req.publicOnly === true,
      featuredOnly: req.featuredOnly === true,
    });

    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};


const getProjectById = async (req, res, next) => {
  try {
    const project = await projectService.getProjectById(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a project by slug.
 * GET /api/projects/slug/:slug
 */
const getProjectBySlug = async (req, res, next) => {
  try {
    const project = await projectService.getProjectBySlug(
      req.params.slug,
      req.publicOnly === true
    );

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update a project.
 * PATCH /api/projects/:id
 */
const updateProject = async (req, res, next) => {
  try {
    const project = await projectService.updateProject(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};


const deleteProject = async (req, res, next) => {
  try {
    const result = await projectService.deleteProject(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  getProjectBySlug,
  updateProject,
  deleteProject,
};