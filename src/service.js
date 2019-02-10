export default class UpgradeService {
    before() {
        // Add commands to the browser scope.
        browser.addCommand('alertAccept', function () {
            return this.acceptAlert();
        });

        browser.addCommand('alertDismiss', function () {
            return this.dismissAlert();
        });

        browser.addCommand('alertText', function () {
            return this.getAlertText();
        });

        browser.addCommand('click', async function (selector) {
            const element = await this.$(selector);
            return element.click();
        });

        browser.addCommand('element', function (selector) {
            return this.$(selector);
        });


        browser.addCommand('elements', function (selector) {
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

        browser.addCommand('getSource', function () {
            return this.getPageSource();
        });

        browser.addCommand('getText', async function (selector) {
            const element = await this.$(selector);
            return element.getText();
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

        browser.addCommand('reload', function () {
            return this.reloadSession();
        });

        browser.addCommand('screenshot', function () {
            return this.takeScreenshot();
        });

        browser.addCommand('scroll', function () {
            return this.scrollIntoView();
        });

        browser.addCommand('setCookie', function (cookieObj) {
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
        browser.addCommand('setViewportSize', function (widthHeightObject) {
            const { width, height } = widthHeightObject;
            return this.setWindowSize(width, height);
        });

        /* Same as getSource. */
        browser.addCommand('source', function () {
            return this.getPageSource();
        });


        browser.addCommand('switchTab', function (windowHandle) {
            return this.switchToWindow(windowHandle);
        });

        browser.addCommand('title', function () {
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

        browser.addCommand('windowHandles', function () {
            return this.getWindowHandles();
        });

        browser.addCommand('windowHandleFullscreen', function () {
            return this.fullscreenwindow();
        });

        browser.addCommand('windowHandleMaximize', function () {
            return this.maximizeWindow();
        });

        // Add commands to element instance
        browser.addCommand('waitForVisible', function (ms, reverse = false) {
            /* Handle waitForVisible(true) or waitForVisible(false); Using waitForVisible this way
                is not valid but worked at one point. Adding for backwards compatability. */
            if (typeof ms === 'boolean') {
                return this.waitForDisplayed(undefined, ms);
            }
            return this.waitForDisplayed(ms, reverse);
        }, true);

        // Add commands to the element scope.
        browser.addCommand('isVisible', function () {
            return this.isDisplayed();
        }, true);

        browser.addCommand('getCssProperty', function (cssProperty) {
            return this.getCSSProperty(cssProperty);
        }, true);

        browser.addCommand('clearElement', function () {
            return this.clearValue();
        }, true);

        browser.addCommand('moveToObject', function (x = undefined, y = undefined) {
            return this.moveTo(x, y);
        }, true);
    }
}
