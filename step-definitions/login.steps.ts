import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/credentials';
let browser: any;
let page: any;
let loginPage: LoginPage;

Given('que estoy en la página de login', async function () {
 browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('inicio sesión con usuario estándar', async function () {
  await loginPage.login(users.standard.username, users.standard.password);
});

When('inicio sesión con usuario bloqueado', async function () {
  await loginPage.login(users.locked.username, users.locked.password);
});

Then('debo visualizar la página de inventario', async function () {
  await expect(page).toHaveURL(/inventory/);
  await browser.close();
});


Then('debo visualizar mensaje de error', async function () {
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await browser.close();
});