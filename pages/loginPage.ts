import { test, expect, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

    constructor(page: page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error-button"]');
    }
 async goto() {
    await this.page.goto('/');
 }

 async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
 }
 async getErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
 }
};
