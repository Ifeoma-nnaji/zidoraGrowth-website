"use strict";

const { Service } = require("../models");
const AppError = require("../errors/AppError");

/**
 * Create a new service.
 */
const createService = async (data) => {
  const {
    name,
    slug,
    short_description,
    description,
    icon,
    is_featured = false,
    is_active = true,
    sort_order = 0,
  } = data;

  const existingService = await Service.findOne({
    where: { slug },
  });

  if (existingService) {
    throw new AppError(
      "A service with this slug already exists",
      409
    );
  }

  return Service.create({
    name: name.trim(),
    slug: slug.trim().toLowerCase(),
    short_description,
    description,
    icon,
    is_featured,
    is_active,
    sort_order,
  });
};

/**
 * Get all services.
 *
 * Public website can use this to display active services.
 */
const getServices = async (options = {}) => {
  const where = {};

  if (options.publicOnly) {
    where.is_active = true;
  }

  return Service.findAll({
    where,
    order: [
      ["sort_order", "ASC"],
      ["created_at", "DESC"],
    ],
  });
};

/**
 * Get a single service by ID.
 */
const getServiceById = async (serviceId) => {
  const service = await Service.findByPk(serviceId);

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  return service;
};

/**
 * Get a single service by slug.
 */
const getServiceBySlug = async (slug, publicOnly = false) => {
  const where = { slug };

  if (publicOnly) {
    where.is_active = true;
  }

  const service = await Service.findOne({
    where,
  });

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  return service;
};

/**
 * Update a service.
 */
const updateService = async (serviceId, data) => {
  const service = await Service.findByPk(serviceId);

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  if (data.slug && data.slug !== service.slug) {
    const existingService = await Service.findOne({
      where: {
        slug: data.slug.trim().toLowerCase(),
      },
    });

    if (
      existingService &&
      existingService.id !== service.id
    ) {
      throw new AppError(
        "A service with this slug already exists",
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

  await service.update(updateData);

  return service;
};

/**
 * Delete a service.
 */
const deleteService = async (serviceId) => {
  const service = await Service.findByPk(serviceId);

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  await service.destroy();

  return {
    id: serviceId,
  };
};

module.exports = {
  createService,
  getServices,
  getServiceById,
  getServiceBySlug,
  updateService,
  deleteService,
};