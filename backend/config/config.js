"use strict";

const env = require("./env.config");
const dbConfig = require("./db.config");

module.exports = {
  development: {
    ...dbConfig.development,
  },

  test: {
    ...dbConfig.test,
  },

  production: {
    ...dbConfig.production,
  },

  app: {
    name: "Zidora Growth",
    port: env.port,
  },

  auth: {
    jwtSecret: env.jwt.secret,
    jwtExpiresIn: env.jwt.expiresIn,
  },

  database: env.database,
};