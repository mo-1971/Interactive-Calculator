const { test, expect } = require('@playwright/test');

test('calculator performs basic arithmetic', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');

  const display = page.locator('#display');

  // Test 1: Addition
  await page.locator('button', { hasText: '1' }).first().click();
  await page.locator('button', { hasText: '2' }).click();
  await page.locator('button', { hasText: '+' }).click();
  await page.locator('button', { hasText: '3' }).click();
  await page.locator('button', { hasText: '=' }).click();
  await expect(display).toHaveText('15');

  // Test 2: Clear
  await page.locator('#clear').click();
  await expect(display).toHaveText('0');

  // Test 3: Multiplication
  await page.locator('button', { hasText: '4' }).click();
  await page.locator('button', { hasText: '*' }).click();
  await page.locator('button', { hasText: '5' }).click();
  await page.locator('button', { hasText: '=' }).click();
  await expect(display).toHaveText('20');
});
