import { test, expect } from '@playwright/test';

test('Renders home page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Home | kittr');
});
