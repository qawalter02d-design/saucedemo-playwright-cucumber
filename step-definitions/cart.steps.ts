import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

let browser: any;
let page: any;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('que inicio sesión con credenciales válidas', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
});

When('agrego un producto al carrito', async function () {
  await inventoryPage.addProductToCart();
});

Then('debo visualizar un producto en el carrito', async function () {
  const cartBadge = await inventoryPage.getCartBadge();
  await expect(cartBadge).toHaveText('1');
  await page.waitForTimeout(2000);
  await browser.close();
});