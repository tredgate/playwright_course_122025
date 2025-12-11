// tests/
// iframe_actions.spec.ts
import { test } from "@playwright/test";

test("Operating with iframes", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  const iframePage = page.frameLocator(
    '[data-testid="test-automation-iframe"]'
  );
  await iframePage.locator("#name").fill("Vypisujeme do iframe!");
});
