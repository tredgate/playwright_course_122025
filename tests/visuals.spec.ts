// tests/
// visuals.spec.ts

import { expect, test } from "@playwright/test";

test("Simple Full Page Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await expect(page).toHaveScreenshot("full_page.png", {
    fullPage: true,
  });
});

test("Failing Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
  await expect(page).toHaveScreenshot("failing.png", {
    fullPage: true,
  });
});
