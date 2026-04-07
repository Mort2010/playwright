// Import the basics
const { test } = require('../../fixtures/pageFactory')
const { expect } = require('@playwright/test');
const { HomePage } = require('../../pages/demo_sauce/HomePage');

// Go to the URL
test.beforeEach(async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com');
});

test('has title', async ({ start }) => {
 const home = await start(HomePage, '/');

  // Expect a title "to contain" a substring. Warning this is case sensitive.
  await expect.soft(home.page).toHaveTitle(/Sauce Demo/);

  // If case is not a problem use
  await expect.soft(home.page).toHaveTitle(/sauce demo/i);
});

test('shows 3 products', async ({ start }) => {
  const home = await start(HomePage, '/');
  const items = home.page.locator('.product');

  // Checks 3 items are visible in the product list
  await expect(items).toHaveCount(3);
  for (let i = 0; i < 3; i++) {
    await expect(items.nth(i)).toBeVisible();
  }

});