"use strict";

const contactMessageService = require("../services/contactMessageService");

/**
 * Create a contact message.
 * POST /api/contact-messages
 */
const createMessage = async (req, res, next) => {
  try {
    const message = await contactMessageService.createMessage(
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all contact messages.
 * GET /api/contact-messages
 */
const getMessages = async (req, res, next) => {
  try {
    const messages = await contactMessageService.getMessages({
      status: req.query.status,
    });

    return res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get one contact message.
 * GET /api/contact-messages/:id
 */
const getMessageById = async (req, res, next) => {
  try {
    const message =
      await contactMessageService.getMessageById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update contact message status.
 * PATCH /api/contact-messages/:id/status
 */
const updateMessageStatus = async (req, res, next) => {
  try {
    const message =
      await contactMessageService.updateMessageStatus(
        req.params.id,
        req.body.status
      );

    return res.status(200).json({
      success: true,
      message: "Message status updated successfully",
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a contact message.
 * DELETE /api/contact-messages/:id
 */
const deleteMessage = async (req, res, next) => {
  try {
    const result =
      await contactMessageService.deleteMessage(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      message: "Contact message deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage,
};