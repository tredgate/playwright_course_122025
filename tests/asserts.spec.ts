import { expect, test } from "@playwright/test";

test("toContainText - element contains some text", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await expect(
    page.locator("#welcome-page-header"),
    "Welcome Page Header Contain Text"
  ).toContainText("Vítej v testovací aplikaci");
});

test("toHaveText - element text equals expected text", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await expect(
    page.locator("#welcome-page-header"),
    "Welcome Page Header have Text"
  ).toHaveText("Vítej v testovací aplikaci Tredgate Project");
});

test("toBeVisible - element exist and is visible on the page", async ({
  page,
}) => {
  await page.goto("https://tredgate.com/pmtool");
  const logo = page.locator(".login-page-logo img");
  await expect(logo, "Page Logo is Visible").toBeVisible();
});

test("toHaveValue - input element value (content) check", async ({ page }) => {
  const usernameValue = "test username";
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill(usernameValue);
  await expect(
    page.locator("#username"),
    "Username Input have Value"
  ).toHaveValue(usernameValue);
});
