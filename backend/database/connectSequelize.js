"use strict";

const sequelize = require("./sequelize");

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();

    console.log("Sequelize connected successfully.");

    return sequelize;
  } catch (error) {
    console.error("Sequelize connection failed:", error.message);
    throw error;
  }
};

module.exports = connectSequelize;