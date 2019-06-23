const assert = require('assert');
const launchBrowser = require('./fixtures/launchBrowser');
const { startServer } = require('./fixtures/startSeleniumServer');

describe('Standalone mode test', async function() {
    let selServerProcess;
    let browser;
    before('setup', async () => {
        selServerProcess = await startServer();
        browser = await launchBrowser();
    });

    after('teardown', async function() {
        await browser.deleteSession();
        // Avoid race condition from when browser closes and server terminated.
        await browser.pause(3000);
        await selServerProcess.kill();
        
    });

    it('browser.elements, browser.element command test', async function() {
        await browser.url('https://duckduckgo.com/');
        const inputElems = await browser.elements('#search_form_input_homepage');
        await inputElems[0].setValue('WebdriverIO');
        const submitBtn = await browser.element('#search_button_homepage');
        await submitBtn.click();
        const title = await browser.getTitle();
        assert(title.indexOf('WebdriverIO') > -1);
    });

    it('browser.getText, browser.getAttribute, browser.getCssProperty, element.getCssProperty command test', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        const taglineText = await browser.getText('#content h2');
        assert(taglineText.indexOf('Available Examples') > -1);
        const styleObject = await browser.getCssProperty('#content h2', 'color');
        assert.equal(styleObject.property, 'color');
        const attribute = await browser.getAttribute('.heading', 'class');
        assert.equal(attribute, 'heading');
        const headingElement = await browser.$('#content h2');
        const colorStyle = await headingElement.getCssProperty('color');
        assert.equal(colorStyle.property, 'color');
    });

    it('browser.waitForVisible, browser.isExisting command test', async function() {
        await browser.url('https://the-internet.herokuapp.com/login');
        const username = await browser.element('#username');
        const password = await browser.element('#password');
        const submitButton = await browser.element('button[type=\'submit\']');
        await username.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');
        await submitButton.click();
        await browser.waitForVisible('.subheader');
        assert.equal(await browser.isExisting('.subheader'), true);
    });

    it('element.waitForVisible, element.getText command test', async function() {
        await browser.url('https://the-internet.herokuapp.com/status_codes');
        const statusCode200Link = await browser.element('li a');
        await statusCode200Link.click();

        const statusCodePageHeader = await browser.element('h3');
        await statusCodePageHeader.waitForVisible();
        assert(await statusCodePageHeader.getText(), 'Status Codes');
    });
});
