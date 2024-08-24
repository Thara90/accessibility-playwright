import { test, expect } from '../tests/fixtures';

test('Accessibility_1', async ({ page , makeAxeBuilder}) => {
    await page.goto('https://commitquality.com/practice-api');
    await expect(page.locator(".back-link")).toBeVisible();

    const axeBuilder = await makeAxeBuilder().analyze();
    expect(axeBuilder.violations).toEqual([]);
});