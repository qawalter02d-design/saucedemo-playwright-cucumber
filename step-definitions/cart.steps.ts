import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../utils/credentials';
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
  await inventoryPage.openCart();

  const product = page.locator('.inventory_item_name');
  await expect(product).toHaveText('Sauce Labs Backpack');

  await browser.close();
});