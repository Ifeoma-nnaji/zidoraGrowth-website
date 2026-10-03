"use strict";

const sequelize = require("../database/sequelize");

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();

    console.log("MySQL database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDatabase;