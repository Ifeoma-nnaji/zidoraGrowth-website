"use strict";

const { Testimonial } = require("../models");
const AppError = require("../errors/AppError");

/**
 * Create a testimonial.
 */
const createTestimonial = async (data) => {
  const {
    name,
    company,
    role,
    content,
    image,
    rating,
    is_featured = false,
    is_published = false,
    sort_order = 0,
  } = data;

  return Testimonial.create({
    name: name.trim(),
    company,
    role,
    content: content.trim(),
    image,
    rating,
    is_featured,
    is_published,
    sort_order,
  });
};

/**
 * Get testimonials.
 *
 * Public website:
 * Only published testimonials.
 *
 * Admin/editor:
 * All testimonials.
 */
const getTestimonials = async (options = {}) => {
  const where = {};

  if (options.publicOnly) {
    where.is_published = true;
  }

  if (options.featuredOnly) {
    where.is_featured = true;
  }

  return Testimonial.findAll({
    where,
    order: [
      ["sort_order", "ASC"],
      ["created_at", "DESC"],
    ],
  });
};

/**
 * Get a testimonial by ID.
 */
const getTestimonialById = async (testimonialId) => {
  const testimonial = await Testimonial.findByPk(
    testimonialId
  );

  if (!testimonial) {
    throw new AppError("Testimonial not found", 404);
  }

  return testimonial;
};

/**
 * Update a testimonial.
 */
const updateTestimonial = async (
  testimonialId,
  data
) => {
  const testimonial = await Testimonial.findByPk(
    testimonialId
  );

  if (!testimonial) {
    throw new AppError("Testimonial not found", 404);
  }

  const updateData = {
    ...data,
  };

  if (updateData.name) {
    updateData.name = updateData.name.trim();
  }

  if (updateData.content) {
    updateData.content = updateData.content.trim();
  }

  await testimonial.update(updateData);

  return testimonial;
};

/**
 * Delete a testimonial.
 */
const deleteTestimonial = async (testimonialId) => {
  const testimonial = await Testimonial.findByPk(
    testimonialId
  );

  if (!testimonial) {
    throw new AppError("Testimonial not found", 404);
  }

  await testimonial.destroy();

  return {
    id: testimonialId,
  };
};

module.exports = {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};