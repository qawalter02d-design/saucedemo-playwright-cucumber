import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async checkout() {
    await this.page.click('#checkout');
  }

  async fillInformation() {
    await this.page.fill('#first-name', 'Walter');
    await this.page.fill('#last-name', 'QA');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }
}