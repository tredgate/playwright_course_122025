// tests/
// page_objects.spec.ts

import { test } from "@playwright/test";
import { LoginPage } from "../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../src/pages/pmtool/dashboard_page.ts";

test("Login via Page Object Model", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillUsername("playwright_jaro24");
  await loginPage.fillPassword("Playwright!2024");
  await loginPage.clickLogin();
});

test("POM: Groupped Method", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login("playwright_jaro24", "Playwright!2024");
});

test("POM: Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login("playwright_jaro24", "Playwright!2024");
  // * Atomické metody
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
  // * Přihlásíme se znovu
  await loginPage.login("playwright_jaro24", "Playwright!2024");
  // * Souhrná metoda odhlášení
  await dashboardPage.logout();
});
