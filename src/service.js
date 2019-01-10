import addCommandsToElement from './addCommandsToElement';

export default class UpgradeService {
    before() {
        browser.addCommand('alertAccept', () => {
            browser.acceptAlert();
        });

        browser.addCommand('alertDismiss', () => {
            browser.dismissAlert();
        });

        browser.addCommand('alertText', () => {
            browser.getAlertText();
        });

        browser.addCommand('click', (selector) => {
            const e = $(selector);
            e.click();
        });

        browser.addCommand('element', selector => $(selector));

        browser.addCommand('elements', selector => $$(selector));

        browser.addCommand('getAttribute', (selector, attributeName) => {
            const e = $(selector);
            return e.getAttribute(attributeName);
        });

        /**
         * The getCookie param was a string in v4. Reason for not changing to array.
         * Also if a name parameter is not passed an array of cookies will be returned,
         * otherwise the cookie object is returned. If not found then the return obj will be undefined.
         */
        browser.addCommand('getCookie', (name) => {
            if (name === undefined) {
                return browser.getCookies();
            }
            const cookie = browser.getCookies(name);
            return cookie[0];
        });

        browser.addCommand('getCssProperty', (selector, propertyName) => {
            const e = $(selector);
            return e.getCSSProperty(propertyName);
        });

        browser.addCommand('getSource', () => browser.getPageSource());

        browser.addCommand('getText', (selector) => {
            const e = $(selector);
            return e.getText();
        });

        browser.addCommand('isExisting', (selector) => {
            const e = $(selector);
            return e.isExisting();
        });

        browser.addCommand('isVisible', (selector) => {
            const e = $(selector);
            return e.isDisplayed();
        });

        browser.addCommand('reload', () => browser.reloadSession());

        browser.addCommand('screenshot', () => browser.takeScreenshot());

        browser.addCommand('scroll', () => browser.scrollIntoView());

        browser.addCommand('setCookie', cookieObj => browser.setCookies(cookieObj));

        browser.addCommand('setValue', (selector, value) => {
            const e = $(selector);
            e.setValue(value);
        });

        /**
         * In v4 the param is an object, in v5 width and height is passed.
         * Keeping as an object for backwards compatability.
         *
         * REF: https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/setViewportSize.js
         */
        browser.addCommand('setViewportSize', (widthHeightObject) => {
            const { width, height } = widthHeightObject;
            browser.setWindowSize(width, height);
        });

        /* Same as getSource. */
        browser.addCommand('source', () => browser.getPageSource());

        browser.addCommand('switchTab', windowHandle => browser.switchToWindow(windowHandle));

        browser.addCommand('title', () => browser.getTitle());

        browser.addCommand('waitForVisible', (selector, ms, reverse = false) => {
            const e = $(selector);
            e.waitForDisplayed(ms, reverse);
        });

        browser.addCommand('waitForExist', (selector, ms, reverse = false) => {
            const e = $(selector);
            e.waitForExist(ms, reverse);
        });

        browser.addCommand('windowHandles', () => browser.getWindowHandles());

        browser.addCommand('windowHandleFullscreen', () => browser.fullscreenwindow());

        browser.addCommand('windowHandleMaximize', () => browser.maximizeWindow());
    }

    afterCommand(commandName, args, result, error) {
        if (commandName === '$' && result !== undefined) {
            addCommandsToElement(result);
        }

        if (commandName === '$$' && result !== undefined) {
            if (result.length > 0) {
                result.forEach((element) => {
                    addCommandsToElement(element);
                });
            }
        }
    }
}
