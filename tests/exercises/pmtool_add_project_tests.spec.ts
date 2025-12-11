import { test, expect } from "@playwright/test";

test("Exercise: Asserts", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await page.locator("#Projects").click();
  await expect(
    page.locator(".table-scrollable table"),
    "Projects Table is Visible"
  ).toBeVisible();
  await page.locator('[test_id="Add Project"]').click();
  await expect(
    page.locator('div[data-testid="Name"] input'),
    "Input Name is Visible"
  ).toBeVisible();
  await expect(
    page.locator("button[type='submit']"),
    "Save Button have Text"
  ).toHaveText("Save");
});
