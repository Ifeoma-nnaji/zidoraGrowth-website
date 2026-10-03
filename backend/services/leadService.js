"use strict";

const { Lead, Service, User } = require("../models");
const AppError = require("../errors/AppError");

/**
 * Create a new lead.
 */
const createLead = async (data) => {
  const {
    service_id,
    first_name,
    last_name,
    email,
    phone,
    company_name,
    website,
    message,
    budget,
    source,
  } = data;

  if (service_id) {
    const service = await Service.findByPk(service_id);

    if (!service || !service.is_active) {
      throw new AppError("Selected service is not available", 400);
    }
  }

  return Lead.create({
    service_id: service_id || null,
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    email: email.toLowerCase().trim(),
    phone,
    company_name,
    website,
    message,
    budget,
    source,
    status: "new",
  });
};

/**
 * Get all leads.
 */
const getLeads = async (options = {}) => {
  const where = {};

  if (options.status) {
    where.status = options.status;
  }

  if (options.service_id) {
    where.service_id = options.service_id;
  }

  if (options.assigned_to) {
    where.assigned_to = options.assigned_to;
  }

  return Lead.findAll({
    where,
    include: [
      {
        model: Service,
        as: "service",
        attributes: ["id", "name", "slug"],
      },
      {
        model: User,
        as: "assignedUser",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "email",
        ],
      },
    ],
    order: [["created_at", "DESC"]],
  });
};

/**
 * Get one lead by ID.
 */
const getLeadById = async (leadId) => {
  const lead = await Lead.findByPk(leadId, {
    include: [
      {
        model: Service,
        as: "service",
        attributes: ["id", "name", "slug"],
      },
      {
        model: User,
        as: "assignedUser",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "email",
        ],
      },
    ],
  });

  if (!lead) {
    throw new AppError("Lead not found", 404);
  }

  return lead;
};

/**
 * Update lead status.
 */
const updateLeadStatus = async (leadId, status) => {
  const lead = await Lead.findByPk(leadId);

  if (!lead) {
    throw new AppError("Lead not found", 404);
  }

  await lead.update({
    status,
  });

  return lead;
};

/**
 * Assign a lead to an admin/editor.
 */
const assignLead = async (leadId, assignedTo) => {
  const lead = await Lead.findByPk(leadId);

  if (!lead) {
    throw new AppError("Lead not found", 404);
  }

  const user = await User.findByPk(assignedTo);

  if (!user || !user.is_active) {
    throw new AppError(
      "Assigned user does not exist or is inactive",
      400
    );
  }

  await lead.update({
    assigned_to: assignedTo,
  });

  return getLeadById(leadId);
};

/**
 * Update internal lead notes.
 */
const updateLeadNotes = async (leadId, notes) => {
  const lead = await Lead.findByPk(leadId);

  if (!lead) {
    throw new AppError("Lead not found", 404);
  }

  await lead.update({
    notes,
  });

  return lead;
};

module.exports = {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  assignLead,
  updateLeadNotes,
};