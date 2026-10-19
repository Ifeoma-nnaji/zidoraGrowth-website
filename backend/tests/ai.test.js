"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../app");

test("AI endpoint rejects an empty message", async () => {
  const response = await request(app)
    .post("/api/ai/chat")
    .send({ message: "   " });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});

test("AI endpoint rejects messages longer than 2000 characters", async () => {
  const response = await request(app)
    .post("/api/ai/chat")
    .send({ message: "a".repeat(2001) });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});

test("AI endpoint reports missing API configuration safely", async () => {
  const originalKey = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;

  try {
    const response = await request(app)
      .post("/api/ai/chat")
      .send({ message: "What services does Zidora Growth offer?" });

    assert.equal(response.status, 503);
    assert.equal(response.body.success, false);
    assert.match(response.body.message, /not configured/i);
  } finally {
    if (originalKey === undefined) {
      delete process.env.OPENAI_API_KEY;
    } else {
      process.env.OPENAI_API_KEY = originalKey;
    }
  }
});
