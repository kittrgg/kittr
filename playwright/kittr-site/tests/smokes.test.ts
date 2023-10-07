import { test, expect } from '@playwright/test';

test('Renders home page', async ({ page }) => {
	await page.goto('/');
	expect(page);
});

test('Renders games page', async ({ page }) => {
	await page.goto('/games');
	expect(page);
	page.getByText('Warzone 2.0');
});

test('Renders channels page', async ({ page }) => {
	await page.goto('/channels');
	expect(page);
	page.getByText('HusKerrs');
});

test('Logs into dashboard and shows channels', async ({ page }) => {
	if (!process.env.PLAYWRIGHT_USER_PASSWORD) {
		throw new Error('No PLAYWRIGHT_USER_PASSWORD');
	}

	await page.goto('/dashboard');
	await expect(page).toHaveTitle('Dashboard | kittr');
	await page.click("[name='email']");
	await page.keyboard.type('anthonyshew@gmail.com');
	await page.click("[name='password']");
	await page.keyboard.type(process.env.PLAYWRIGHT_USER_PASSWORD);
	page.getByText('anthonyshew');
});
