import { page , locator , expect }from'@playwright/test';
export class LoginPage {
 readonly page: page;
 readonly usernameInput: locator;
 readonly passwordInput: locator;
 readonly loginButton: locator;
 readonly errorMessage: locator;

    constructor(page: page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage( text: string) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(text);
    }
}

