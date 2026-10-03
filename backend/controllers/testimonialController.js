"use strict";

const testimonialService = require("../services/testimonialService");

const createTestimonial = async (req, res, next) => {
  try {
    const testimonial =
      await testimonialService.createTestimonial(req.body);

    return res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};


const getTestimonials = async (req, res, next) => {
  try {
    const testimonials =
      await testimonialService.getTestimonials({
        publicOnly: req.publicOnly === true,
        featuredOnly: req.featuredOnly === true,
      });

    return res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    next(error);
  }
};


const getTestimonialById = async (req, res, next) => {
  try {
    const testimonial =
      await testimonialService.getTestimonialById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

const updateTestimonial = async (req, res, next) => {
  try {
    const testimonial =
      await testimonialService.updateTestimonial(
        req.params.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};


const deleteTestimonial = async (req, res, next) => {
  try {
    const result =
      await testimonialService.deleteTestimonial(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};