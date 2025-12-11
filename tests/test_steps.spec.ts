// tests/
// test_steps.spec.ts
import { test } from "@playwright/test";

test("Steps in Test", async ({ page }) => {
  await test.step("Open PMtool", async () => {
    await page.goto("https://tredgate.com/pmtool");
  });
  await test.step("Login to PMtool", async () => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator('[type="submit"]').click();
  });
});
