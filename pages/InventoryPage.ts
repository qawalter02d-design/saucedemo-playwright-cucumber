import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addProductToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async getCartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}