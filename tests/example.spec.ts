import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Accessibility with axe tool', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-api');
  await expect(page.locator(".back-link")).toBeVisible();

  //analyze whole page
  const axeBuilder = await new AxeBuilder({ page }).analyze();
  expect(axeBuilder.violations).toEqual([]);
});

