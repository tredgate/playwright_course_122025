import { expect, test } from "@playwright/test";

test("Negative Asserts - hidden element, not having text", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator("#username")).toBeVisible();
  await expect(
    page.locator("#username-error"),
    "Username validation is not visible"
  ).not.toBeVisible();
  await expect(
    page.locator("#password-error"),
    "Password validation is not visible"
  ).toBeHidden();
});
