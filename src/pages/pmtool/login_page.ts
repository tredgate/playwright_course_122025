// src/pages/pmtool/
// login_page.ts

import { Locator, Page, test } from "@playwright/test";

export class LoginPage {
  // * Properties - url (jen na první stránce), identifikace prvků
  readonly url = "https://tredgate.com/pmtool";
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // * Constructor - vstupní parametr: page (posílat z testu) + nastavení lokátorů
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("[type='submit']");
  }

  // * Metody - identifikace interakcí s prvky
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async open() {
    await this.page.goto(this.url);
  }

  // * Souhrná metoda - pro testy, které netestují přihlašování
  async login(username: string, password: string) {
    await test.step("Login to PMtool", async () => {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLogin();
    });
  }
}
