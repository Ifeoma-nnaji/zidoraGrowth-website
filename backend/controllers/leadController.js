"use strict";

const leadService = require("../services/leadService");

/**
 * Create a new lead.
 * POST /api/leads
 */
const createLead = async (req, res, next) => {
  try {
    const lead = await leadService.createLead(req.body);

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all leads.
 * GET /api/leads
 */
const getLeads = async (req, res, next) => {
  try {
    const leads = await leadService.getLeads({
      status: req.query.status,
      service_id: req.query.service_id,
      assigned_to: req.query.assigned_to,
    });

    return res.status(200).json({
      success: true,
      data: leads,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single lead.
 * GET /api/leads/:id
 */
const getLeadById = async (req, res, next) => {
  try {
    const lead = await leadService.getLeadById(req.params.id);

    return res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update lead status.
 * PATCH /api/leads/:id/status
 */
const updateLeadStatus = async (req, res, next) => {
  try {
    const lead = await leadService.updateLeadStatus(
      req.params.id,
      req.body.status
    );

    return res.status(200).json({
      success: true,
      message: "Lead status updated successfully",
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Assign lead to a team member.
 * PATCH /api/leads/:id/assign
 */
const assignLead = async (req, res, next) => {
  try {
    const lead = await leadService.assignLead(
      req.params.id,
      req.body.assigned_to
    );

    return res.status(200).json({
      success: true,
      message: "Lead assigned successfully",
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update internal lead notes.
 * PATCH /api/leads/:id/notes
 */
const updateLeadNotes = async (req, res, next) => {
  try {
    const lead = await leadService.updateLeadNotes(
      req.params.id,
      req.body.notes
    );

    return res.status(200).json({
      success: true,
      message: "Lead notes updated successfully",
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  assignLead,
  updateLeadNotes,
};