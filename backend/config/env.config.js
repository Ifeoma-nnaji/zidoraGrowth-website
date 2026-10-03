"use strict";

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
  override: true,
});

const env = {
  port: Number(process.env.PORT) || 3000,

  database: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME || "zidora_growth",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  },

  nodeEnv: process.env.NODE_ENV || "development",
};

module.exports = env;