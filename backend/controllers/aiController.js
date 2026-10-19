"use strict";

const OpenAI = require("openai");

const MAX_MESSAGE_LENGTH = 2000;

const chatWithAI = async (req, res) => {
  try {
    const message =
      typeof req.body?.message === "string"
        ? req.body.message.trim()
        : "";

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message.",
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        success: false,
        message: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({
        success: false,
        message:
          "The AI assistant is not configured yet. Please contact Zidora Growth.",
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 30000,
      maxRetries: 1,
    });

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions:
        "You are Ask Zidora AI, the helpful website assistant for Zidora Growth. " +
        "Zidora Growth provides digital marketing, social media services, " +
        "website design and maintenance, AI automation, and technology coaching. " +
        "Answer clearly, professionally, and concisely. Help visitors understand " +
        "these services and guide them toward the contact page when they need a quote. " +
        "Do not invent prices, guarantees, company facts, or service details that " +
        "have not been provided. If you do not know something, say so.",
      input: message,
      max_output_tokens: 500,
    });

    const answer = response.output_text?.trim();

    if (!answer) {
      return res.status(502).json({
        success: false,
        message:
          "The AI assistant could not generate a response. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        answer,
      },
    });
  } catch (error) {
    console.error("Ask Zidora AI request failed:", {
      status: error.status,
      code: error.code,
      type: error.type,
    });

    if (error.status === 401) {
      return res.status(503).json({
        success: false,
        message: "The AI assistant is temporarily unavailable.",
      });
    }

    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        message: "The AI assistant is busy. Please try again shortly.",
      });
    }

    return res.status(502).json({
      success: false,
      message:
        "We could not get a response right now. Please try again shortly.",
    });
  }
};

module.exports = {
  chatWithAI,
};
