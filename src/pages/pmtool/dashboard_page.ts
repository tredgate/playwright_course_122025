// src/pages/pmtool/
// dashboard_page.ts
import { Locator, Page, test, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly bellIcon: Locator;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bellIcon = page.locator("#user_notifications_report i");
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
  }

  async clickProfile() {
    await expect(this.bellIcon).toBeVisible();
    await this.profileButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async logout() {
    await test.step("Logout from PMtool", async () => {
      await this.clickProfile();
      await this.clickLogout();
    });
  }
}
