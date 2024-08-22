import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
  });