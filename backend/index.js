"use strict";

const app = require("./app");
const connectDb = require("./database/connectDb");
const env = require("./config/env.config");

const startServer = async () => {
  try {
    await connectDb();

    app.listen(env.port, () => {
      console.log(
        `Zidora Growth backend running on http://localhost:${env.port}`
      );
    });
  } catch (error) {
    console.error("Failed to start Zidora Growth:", error.message);
    process.exit(1);
  }
};

startServer();