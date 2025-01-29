import { remote, Browser } from 'webdriverio';
import { LoginPage } from '../pages/LoginPage';  

describe('SauceDemo tests', () => {
    let browser: Browser;
    let page: LoginPage;

    beforeEach(async () => {
        browser = await remote({
            logLevel: 'info',
            path: '/',
            capabilities: {
                browserName: 'chrome'
            }
        });

        await browser.setWindowSize(1280, 720);
        page = new LoginPage(browser);
        await page.open();
    });

    afterEach(async () => {
        await browser.deleteSession();beforeEach(async () => {
        browser = await remote({
            logLevel: 'info',
            path: '/',
            capabilities: {
                browserName: 'chrome'
            }
        });

        await browser.setWindowSize(1280, 720);
        page = new LoginPage(browser);
        await page.open();
    });

    afterEach(async () => {
        await browser.deleteSession();
    });
    });

    it('Valid data', async () => {
        expect(await browser.getUrl()).toContain('https:');
        await page.login('standard_user', 'secret_sauce');
        expect(await page.getPasswordFieldType()).toBe('disc');
        await browser.pause(500);

        //Checking the correctness of page elements
        expect(await page.getTitleText()).toBe('Products');
        expect(await browser.getUrl()).toContain('/inventory.html');
        expect(await page.isInventoryListDisplayed()).toBe(true);
        expect(await page.getInventoryItemsCount()).toBe(6);
    });

    it('Password invalid', async () => {
        expect(await browser.getUrl()).toContain('https:');
        await page.login('standard_user', 'secret_sauce111111111111111111111');
        expect(await page.isErrorIconDisplayed()).toBe(true);
        expect(await page.isErrorButtonDisplayed()).toBe(true);
        expect(await page.getErrorMessage()).toBe('Epic sadface: Username and password do not match any user in this service');
    });

    it('Login invalid', async () => {
        expect(await browser.getUrl()).toContain('https:');
        await page.login('standard_user11111111111111', 'secret_sauce');
        expect(await page.isErrorIconDisplayed()).toBe(true);
        expect(await page.isErrorButtonDisplayed()).toBe(true);
        expect(await page.getErrorMessage()).toBe('Epic sadface: Username and password do not match any user in this service');
    });

    it('Empty fields', async () => {
        expect(await browser.getUrl()).toContain('https:');
        await page.login('', '');
        expect(await page.isErrorIconDisplayed()).toBe(true);
        expect(await page.isErrorButtonDisplayed()).toBe(true);
        expect(await page.getErrorMessage()).toBe('Epic sadface: Username is required');
    });
});

















// import { remote } from 'webdriverio';

// describe('template spec', () => {
//     it('Valid', async () => {
//         const browser = await remote({
//             logLevel: 'info',
//             path: '/',
//             capabilities: {
//                 browserName: 'chrome'
//             }
//         });

//         await browser.setWindowSize(1280, 720);
//         await browser.url('https://www.saucedemo.com/');
//         expect(await browser.getUrl()).toContain('https:');

//         await (await browser.$('[data-test="username"]')).setValue('standard_user');
        
//         const password = await browser.$('[data-test="password"]');
//         expect((await password.getCSSProperty('-webkit-text-security')).value).toBe('disc');
//         await password.setValue('secret_sauce');

//         await browser.pause(500);
        
//         await (await browser.$('[data-test="login-button"]')).click();

//         const title = await browser.$('.title');
//         expect(await title.getText()).toBe('Products');
//         expect(await browser.getUrl()).toContain('/inventory.html');

//         const inventoryList = await browser.$('[data-test="inventory-list"]');
//         expect(await inventoryList.isDisplayed()).toBe(true);

//         const inventoryItems = await browser.$$('.inventory_list .inventory_item');
//         expect(inventoryItems.length).toBe(6);

//         await browser.deleteSession();
//     });

//     it('Password invalid', async () => {
//         const browser = await remote({
//             logLevel: 'info',
//             path: '/',
//             capabilities: {
//                 browserName: 'chrome'
//             }
//         });

//         await browser.setWindowSize(1280, 720);
//         await browser.url('https://www.saucedemo.com/');
//         expect(await browser.getUrl()).toContain('https:');

//         await (await browser.$('[data-test="username"]')).setValue('standard_user');

//         const password = await browser.$('[data-test="password"]');
//         expect((await password.getCSSProperty('-webkit-text-security')).value).toBe('disc');
//         await password.setValue('secret_sauce111111111111111111111');

//         await (await browser.$('[data-test="login-button"]')).click();

//         expect(await (await browser.$('div.form_group:nth-child(1) > svg')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('div.form_group:nth-child(2) > svg')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('.error-button')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('[data-test="error"]')).getText()).toBe('Epic sadface: Username and password do not match any user in this service');

//         await browser.deleteSession();
//     });

//     it('Login invalid', async () => {
//         const browser = await remote({
//             logLevel: 'info',
//             path: '/',
//             capabilities: {
//                 browserName: 'chrome'
//             }
//         });

//         await browser.setWindowSize(1280, 720);
//         await browser.url('https://www.saucedemo.com/');
//         expect(await browser.getUrl()).toContain('https:');

//         await (await browser.$('[data-test="username"]')).setValue('standard_user11111111111111');

//         const password = await browser.$('[data-test="password"]');
//         expect((await password.getCSSProperty('-webkit-text-security')).value).toBe('disc');
//         await password.setValue('secret_sauce');

//         await (await browser.$('[data-test="login-button"]')).click();

//         expect(await (await browser.$('div.form_group:nth-child(1) > svg')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('div.form_group:nth-child(2) > svg')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('.error-button')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('[data-test="error"]')).getText()).toBe('Epic sadface: Username and password do not match any user in this service');

//         await browser.deleteSession();
//     });

//     it('Empty fields', async () => {
//         const browser = await remote({
//             logLevel: 'info',
//             path: '/',
//             capabilities: {
//                 browserName: 'chrome'
//             }
//         });

//         await browser.setWindowSize(1280, 720);
//         await browser.url('https://www.saucedemo.com/');
//         expect(await browser.getUrl()).toContain('https:');

//         await (await browser.$('[data-test="login-button"]')).click();

//         expect(await (await browser.$('div.form_group:nth-child(1) > svg')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('div.form_group:nth-child(2) > svg')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('.error-button')).isDisplayed()).toBe(true);
//         expect(await (await browser.$('[data-test="error"]')).getText()).toBe('Epic sadface: Username is required');

//         await browser.deleteSession();
//     });
// });
