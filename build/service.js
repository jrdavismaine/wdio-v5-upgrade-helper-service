'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addCommandsToElement = require('./addCommandsToElement');

var _addCommandsToElement2 = _interopRequireDefault(_addCommandsToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpgradeService {
    before() {
        browser.addCommand('alertAccept', async () => {
            await browser.acceptAlert();
        });

        browser.addCommand('alertDismiss', async () => {
            await browser.dismissAlert();
        });

        browser.addCommand('alertText', async () => {
            await browser.getAlertText();
        });

        browser.addCommand('click', async selector => {
            const e = await $(selector);
            await e.click();
        });

        browser.addCommand('deleteCookie', async (name = null) => browser.deleteCookies(name));

        browser.addCommand('element', async selector => $(selector));

        browser.addCommand('elements', async selector => $$(selector));

        browser.addCommand('getAttribute', async (selector, attributeName) => {
            const e = await $(selector);
            return e.getAttribute(attributeName);
        });

        /* The getCookie param was a string in v4. Reason for not changing to array.
            https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/getCookie.js */
        browser.addCommand('getCookie', async (name = null) => browser.getCookies(name));

        browser.addCommand('getCssProperty', async (selector, propertyName) => {
            const e = await $(selector);
            return e.getCSSProperty(propertyName);
        });

        browser.addCommand('getSource', async () => browser.getPageSource());

        browser.addCommand('getText', async selector => {
            const e = await $(selector);
            return e.getText();
        });

        browser.addCommand('isExisting', async selector => {
            const e = await $(selector);
            return e.isExisting();
        });

        browser.addCommand('isVisible', async selector => {
            const e = await $(selector);
            return e.isDisplayed();
        });

        browser.addCommand('reload', async () => browser.reloadSession());

        browser.addCommand('screenshot', async () => browser.takeScreenshot());

        browser.addCommand('scroll', async () => browser.scrollIntoView());

        browser.addCommand('setCookie', async cookieObj => browser.setCookies(cookieObj));

        browser.addCommand('setValue', async (selector, value) => {
            const e = await $(selector);
            await e.setValue(value);
        });

        browser.addCommand('source', async () => browser.getPageSource());

        browser.addCommand('title', async () => browser.getTitle());

        browser.addCommand('waitForVisible', async (selector, ms, reverse = false) => {
            const e = await $(selector);
            await e.waitForDisplayed(ms, reverse);
        });

        browser.addCommand('waitForExist', async (selector, ms, reverse = false) => {
            const e = await $(selector);
            await e.waitForExist(ms, reverse);
        });

        browser.addCommand('windowHandles', async () => browser.getWindowHandles());

        browser.addCommand('windowHandleFullscreen', async () => browser.fullscreenwindow());

        browser.addCommand('windowHandleMaximize', async () => browser.maximizeWindow());
    }

    afterCommand(commandName, args, result, error) {
        if (commandName === '$' && result !== undefined) {
            (0, _addCommandsToElement2.default)(result);
        }

        if (commandName === '$$') {
            if (result.length > 0) {
                result.forEach(element => {
                    (0, _addCommandsToElement2.default)(element);
                });
            }
        }
    }
}
exports.default = UpgradeService;