"use strict";

const sequelize = require("./sequelize");

const connectDb = async () => {
  try {
    await sequelize.authenticate();

    console.log("MySQL database connected successfully.");
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDb;