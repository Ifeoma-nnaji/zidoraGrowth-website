"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../app");

test("GET /api/health returns a healthy API response", async () => {
  const response = await request(app).get("/api/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.message, "Zidora Growth API is healthy");
});

test("GET / returns the API welcome response", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.message, "Zidora Growth API is running");
});

test("Unknown API routes return JSON 404", async () => {
  const response = await request(app).get("/api/route-that-does-not-exist");

  assert.equal(response.status, 404);
  assert.equal(response.body.success, false);
});
