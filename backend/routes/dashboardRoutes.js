"use strict";

const express = require("express");

const dashboardController = require("../controllers/dashboardController");
const authMiddleware = require("../errors/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();


router.use(authMiddleware);

router.get(
  "/stats",
  authorizeRoles("admin", "editor"),
  dashboardController.getDashboardStats
);

module.exports = router;