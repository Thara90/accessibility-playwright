import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Accessibility_1', async ({ page }, testInfo) => {
  await page.goto('https://commitquality.com/practice-api');
  await expect(page.locator(".back-link")).toBeVisible();

  //analyze whole page
  const axeBuilder = await new AxeBuilder({ page }).analyze();

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(axeBuilder, null, 2),
    contentType: 'application/json'
  });
  expect(axeBuilder.violations).toEqual([]);
  
  //analyze only a specific component
  // const axeBuilder = await new AxeBuilder({ page })
  //   .include(".back-link")
  //   .analyze();
  // expect(axeBuilder.violations).toEqual([]);

  //exclude components
  // const axeBuilder = await new AxeBuilder({ page })
  //   .exclude("h2")
  //   .analyze();
  // expect(axeBuilder.violations).toEqual([]);

  //with tags
  // const axeBuilder = await new AxeBuilder({ page })
  //   .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
  //   .analyze();
  // expect(axeBuilder.violations).toEqual([]);

  //disable rules
  //   const axeBuilder = await new AxeBuilder({ page })
  //   .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
  //   .disableRules('region')
  //   .analyze();
  // expect(axeBuilder.violations).toEqual([]);

});

