export default class UpgradeService {
    before() {
        // Add commands to the browser scope.
        browser.addCommand('alertAccept', async function () {
            return this.acceptAlert();
        });

        browser.addCommand('alertDismiss', async function () {
            return this.dismissAlert();
        });

        browser.addCommand('alertText', async function () {
            return this.getAlertText();
        });

        browser.addCommand('click', async function (selector) {
            const element = await this.$(selector);
            return element.click();
        });

        browser.addCommand('element', async function (selector) {
            return this.$(selector);
        });


        browser.addCommand('elements', async function (selector) {
            return this.$$(selector);
        });

        browser.addCommand('getAttribute', async function (selector, attributeName) {
            const element = await this.$(selector);
            return element.getAttribute(attributeName);
        });

        /**
         * The getCookie param was a string in v4. Reason for not changing to array.
         * Also if a name parameter is not passed an array of cookies will be returned,
         * otherwise the cookie object is returned. If not found then the return obj will be undefined.
         */
        browser.addCommand('getCookie', async function (name) {
            if (name === undefined) {
                return this.getCookies();
            }
            const cookie = await this.getCookies(name);
            return cookie[0];
        });

        browser.addCommand('getCssProperty', async function (selector, propertyName) {
            const element = await this.$(selector);
            return element.getCSSProperty(propertyName);
        });

        browser.addCommand('getSource', async function () {
            return this.getPageSource();
        });

        browser.addCommand('getText', async function (selector) {
            const element = await this.$(selector);
            return element.getText();
        });

        // In V4 dimension with choices width|height were valid, V5 getWindowSize ignores any function parameters.
        // Adding for backwards compatability.
        browser.addCommand('getViewportSize', async function (dimension = '') {
            if (dimension.toLowerCase() === 'width' || dimension.toLowerCase() === 'height') {
                return this.getWindowSize()[dimension];
            }
            return this.getWindowSize();
        });

        browser.addCommand('isExisting', async function (selector) {
            const element = await this.$(selector);
            return element.isExisting();
        });

        browser.addCommand('isVisible', async function (selector) {
            const element = await this.$(selector);
            return element.isDisplayed();
        });

        browser.addCommand('moveToObject', async function (selector, x = undefined, y = undefined) {
            const element = await this.$(selector);
            return element.moveTo(x, y);
        });

        browser.addCommand('reload', async function () {
            return this.reloadSession();
        });

        browser.addCommand('screenshot', async function () {
            return this.takeScreenshot();
        });

        browser.addCommand('scroll', async function () {
            return this.scrollIntoView();
        });

        browser.addCommand('setCookie', async function (cookieObj) {
            return this.setCookies(cookieObj);
        });

        browser.addCommand('setValue', async function (selector, value) {
            const element = await this.$(selector);
            return element.setValue(value);
        });

        /**
         * In v4 the param is an object, in v5 width and height is passed.
         * Keeping as an object for backwards compatability.
         *
         * REF: https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/setViewportSize.js
         */
        browser.addCommand('setViewportSize', async function (widthHeightObject) {
            const { width, height } = widthHeightObject;
            return this.setWindowSize(width, height);
        });

        /* Same as getSource. */
        browser.addCommand('source', async function () {
            return this.getPageSource();
        });


        browser.addCommand('switchTab', async function (windowHandle) {
            return this.switchToWindow(windowHandle);
        });

        browser.addCommand('title', async function () {
            return this.getTitle();
        });

        browser.addCommand('waitForVisible', async function (selector, ms, reverse = false) {
            const element = await this.$(selector);
            return element.waitForDisplayed(ms, reverse);
        });

        browser.addCommand('waitForExist', async function (selector, ms, reverse = false) {
            const element = await this.$(selector);
            return element.waitForExist(ms, reverse);
        });

        browser.addCommand('windowHandles', async function () {
            return this.getWindowHandles();
        });

        browser.addCommand('windowHandleFullscreen', async function () {
            return this.fullscreenwindow();
        });

        browser.addCommand('windowHandleMaximize', async function () {
            return this.maximizeWindow();
        });

        // Add commands to element instance
        browser.addCommand('waitForVisible', async function (ms, reverse = false) {
            return this.waitForDisplayed(ms, reverse);
        }, true);

        // Add commands to the element scope.
        browser.addCommand('isVisible', async function () {
            return this.isDisplayed();
        }, true);

        browser.addCommand('getCssProperty', async function (cssProperty) {
            return this.getCSSProperty(cssProperty);
        }, true);

        browser.addCommand('clearElement', async function () {
            return this.clearValue();
        }, true);

        browser.addCommand('moveToObject', async function (x = undefined, y = undefined) {
            return this.moveTo(x, y);
        }, true);

        browser.addCommand('selectByValue', async function (optionText) {
            return this.selectByVisibleText(optionText);
        }, true);
    }
}
