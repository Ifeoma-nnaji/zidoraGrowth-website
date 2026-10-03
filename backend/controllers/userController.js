"use strict";

const userService = require("../services/userService");

/**
 * Create a new admin/editor user.
 * POST /api/users
 */
const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all users.
 * GET /api/users
 */
const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get one user.
 * GET /api/users/:id
 */
const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Activate or deactivate a user.
 * PATCH /api/users/:id/status
 */
const updateUserStatus = async (req, res, next) => {
  try {
    const { is_active } = req.body;

    const user = await userService.updateUserStatus(
      req.params.id,
      is_active
    );

    return res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserStatus,
};