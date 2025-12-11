// tests/
// failing.spec.ts
import { expect, test } from "@playwright/test";

test("Failing test", async ({ page }) => {
  type User = {
    username: string;
    password: string;
  };
  const user: User = {
    username: "pw_academy",
    password: "",
  };
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#password").fill(user.password);
  user.password = "Password";
  await page.locator("#NOT_EXISTING").fill("TEST");
  await expect(page.locator("#not_existing")).toBeVisible();
});
