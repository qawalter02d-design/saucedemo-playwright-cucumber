import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let browser: any;
let page: any;
let loginPage: LoginPage;

Given('que estoy en la página de login', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When(
  'ingreso usuario {string} y contraseña {string}',
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  }
);

Then('debo visualizar la página de inventario', async function () {
  await expect(page).toHaveURL(/inventory/);
  await browser.close();
});


Then('debo visualizar mensaje de error', async function () {
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await browser.close();
});