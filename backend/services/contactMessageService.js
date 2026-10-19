"use strict";

const { ContactMessage } = require("../models");
const AppError = require("../errors/AppError");


const createMessage = async (data) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    subject,
    message,
  } = data;

  return ContactMessage.create({
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    email: email.toLowerCase().trim(),
    phone,
    subject: subject.trim(),
    message: message.trim(),
    status: "unread",
  });
};

/**
 * Get all contact messages.
 */
const getMessages = async (options = {}) => {
  const where = {};

  if (options.status) {
    where.status = options.status;
  }

  return ContactMessage.findAll({
    where,
    order: [["created_at", "DESC"]],
  });
};

/**
 * Get one contact message.
 */
const getMessageById = async (messageId) => {
  const contactMessage = await ContactMessage.findByPk(
    messageId
  );

  if (!contactMessage) {
    throw new AppError("Contact message not found", 404);
  }

  return contactMessage;
};

/**
 * Update contact message status.
 */
const updateMessageStatus = async (messageId, status) => {
  const contactMessage = await ContactMessage.findByPk(
    messageId
  );

  if (!contactMessage) {
    throw new AppError("Contact message not found", 404);
  }

  await contactMessage.update({
    status,
  });

  return contactMessage;
};

/**
 * Delete a contact message.
 */
const deleteMessage = async (messageId) => {
  const contactMessage = await ContactMessage.findByPk(
    messageId
  );

  if (!contactMessage) {
    throw new AppError("Contact message not found", 404);
  }

  await contactMessage.destroy();

  return {
    id: messageId,
  };
};

module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage,
};
