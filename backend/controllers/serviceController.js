"use strict";

const serviceService = require("../services/serviceService");

/**
 * Create a service.
 * POST /api/services
 */
const createService = async (req, res, next) => {
  try {
    const service = await serviceService.createService(req.body);

    return res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all services.
 * GET /api/services
 */
const getServices = async (req, res, next) => {
  try {
    const services = await serviceService.getServices({
      publicOnly: req.publicOnly === true,
    });

    return res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a service by ID.
 * GET /api/services/:id
 */
const getServiceById = async (req, res, next) => {
  try {
    const service = await serviceService.getServiceById(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a service by slug.
 * GET /api/services/slug/:slug
 */
const getServiceBySlug = async (req, res, next) => {
  try {
    const service = await serviceService.getServiceBySlug(
      req.params.slug,
      req.publicOnly === true
    );

    return res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update a service.
 * PATCH /api/services/:id
 */
const updateService = async (req, res, next) => {
  try {
    const service = await serviceService.updateService(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a service.
 * DELETE /api/services/:id
 */
const deleteService = async (req, res, next) => {
  try {
    const result = await serviceService.deleteService(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Service deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createService,
  getServices,
  getServiceById,
  getServiceBySlug,
  updateService,
  deleteService,
};