import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../utils/credentials';
let browser: any;
let page: any;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let checkoutPage: CheckoutPage;

Given('que inicio sesión y agrego un producto', async function () {
browser = await chromium.launch({ headless: true });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
 await loginPage.login(users.standard.username, users.standard.password);
  await inventoryPage.addProductToCart();
});

When('completo el proceso de checkout', async function () {
  await checkoutPage.openCart();
  await checkoutPage.checkout();
  await checkoutPage.fillInformation();
  await checkoutPage.finishOrder();
});

Then('debo visualizar mensaje de compra exitosa', async function () {
  const successMessage = page.locator('.complete-header');
  await expect(successMessage).toHaveText('Thank you for your order!');
  await browser.close();
});