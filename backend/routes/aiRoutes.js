"use strict";

const express = require("express");
const { rateLimit } = require("express-rate-limit");
const { chatWithAI } = require("../controllers/aiController");

const router = express.Router();

const aiChatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many AI requests. Please try again in 15 minutes.",
  },
});

router.post("/chat", aiChatLimiter, chatWithAI);

module.exports = router;
