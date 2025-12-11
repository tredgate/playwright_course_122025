import { test } from "@playwright/test";

test("Exercise: fill form", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator("#full-name").fill("Petr Tester");
  await page.locator("#email").fill("petr@testuje.cz");
  await page.locator("#contact-date").fill("2026-01-20");
  await page.locator("#role").selectOption("student");
  await page.locator("#comments").fill("Dlouhý komentář - 123 TEST");
  await page.locator("#newsletter").check();
  await page.locator('[data-testid="button-submit"]').click();
});
