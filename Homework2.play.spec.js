const { test, expect } = require('@playwright/test');
const { pageObject } = require ('./front-end_test/pageObject.js');

test.beforeEach(async ({ page }) => {
    const pageobject = new pageObject(page);
    await pageobject.OpenMainPageDouSite();
  });
  
test('test', async ({ page }) => {
    const pageobject = new pageObject(page);
  // await page.goto('https://dou.ua/');
//   await page.click('text=Стрічка');
await pageobject.linkLenta.click();
  await expect(page).toHaveURL('https://dou.ua/lenta/');
  await page.click('text=DOU Подкаст');
  await expect(page).toHaveURL('https://dou.ua/lenta/tags/dou%20podcast/?from=special');
  await page.click('text=Всі теми');
  await expect(page).toHaveURL('https://dou.ua/lenta/tags/');
  await page.click('text=Business Analysis');
  await pageObject.OpenBusinessAnalysisPage();
  // await expect(page).toHaveURL('https://dou.ua/lenta/tags/Business%20Analysis/');
});