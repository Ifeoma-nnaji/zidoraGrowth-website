import process from "node:process";
import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  await expect(page).toHaveTitle(/Zidora Growth/i);
});

test("main website pages load", async ({ page }) => {
  const routes = [
    "/about",
    "/contact",
    "/blog",
    "/services/digital-marketing",
    "/services/social-media",
    "/services/web-digital",
    "/services/ai-automation",
    "/services/tech-coaching",
  ];

  for (const route of routes) {
    const response = await page.goto(route);

    expect(response, `No document response for ${route}`).not.toBeNull();
    expect(response.status(), `Unexpected status for ${route}`).toBeLessThan(400);
    await expect(page.locator("body")).toBeVisible();
  }
});

test("Ask Zidora AI button opens the chat window", async ({ page }) => {
  await page.goto("/");

  const askButton = page.getByRole("button", {
    name: /open zidora growth ai assistant/i,
  });

  await expect(askButton).toBeVisible();
  await askButton.click();

  await expect(
    page.getByRole("dialog", { name: /ask zidora ai/i })
  ).toBeVisible();

  await expect(
    page.getByPlaceholder(/ask us anything/i)
  ).toBeVisible();
});

test("backend health endpoint responds successfully", async ({ request }) => {
  const apiBaseUrl =
    process.env.API_BASE_URL || "http://localhost:3000";

  const response = await request.get(`${apiBaseUrl}/api/health`);

  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({
    success: true,
    message: "Zidora Growth API is healthy",
  });
});
