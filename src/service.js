export default class UpgradeService {
    before() {
        // Add commands to the browser scope.
        browser.addCommand('alertAccept', function () {
            this.acceptAlert();
        });

        browser.addCommand('alertDismiss', function () {
            this.dismissAlert();
        });

        browser.addCommand('alertText', function () {
            return this.getAlertText();
        });

        browser.addCommand('click', function (selector) {
            this.$(selector).click();
        });

        browser.addCommand('element', function (selector) {
            return this.$(selector);
        });


        browser.addCommand('elements', function (selector) {
            return this.$$(selector);
        });

        browser.addCommand('getAttribute', function (selector, attributeName) {
            return this.$(selector).getAttribute(attributeName);
        });

        /**
         * The getCookie param was a string in v4. Reason for not changing to array.
         * Also if a name parameter is not passed an array of cookies will be returned,
         * otherwise the cookie object is returned. If not found then the return obj will be undefined.
         */
        browser.addCommand('getCookie', function (name) {
            if (name === undefined) {
                return this.getCookies();
            }
            const cookie = this.getCookies(name);
            return cookie[0];
        });

        browser.addCommand('getCssProperty', function (selector, propertyName) {
            return this.$(selector).getCSSProperty(propertyName);
        });

        browser.addCommand('getSource', function () {
            return this.getPageSource();
        });

        browser.addCommand('getText', function (selector) {
            return this.$(selector).getText();
        });

        browser.addCommand('isExisting', function (selector) {
            return this.$(selector).isExisting();
        });

        browser.addCommand('isVisible', function (selector) {
            return this.$(selector).isDisplayed();
        });

        browser.addCommand('moveToObject', function (selector, x = undefined, y = undefined) {
            this.$(selector).moveTo(x, y);
        });

        browser.addCommand('reload', function () {
            this.reloadSession();
        });

        browser.addCommand('screenshot', function () {
            this.takeScreenshot();
        });

        browser.addCommand('scroll', function () {
            this.scrollIntoView();
        });

        browser.addCommand('setCookie', function (cookieObj) {
            this.setCookies(cookieObj);
        });

        browser.addCommand('setValue', function (selector, value) {
            this.$(selector).setValue(value);
        });

        /**
         * In v4 the param is an object, in v5 width and height is passed.
         * Keeping as an object for backwards compatability.
         *
         * REF: https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/setViewportSize.js
         */
        browser.addCommand('setViewportSize', function (widthHeightObject) {
            const { width, height } = widthHeightObject;
            this.setWindowSize(width, height);
        });

        /* Same as getSource. */
        browser.addCommand('source', function () {
            return this.getPageSource();
        });


        browser.addCommand('switchTab', function (windowHandle) {
            this.switchToWindow(windowHandle);
        });

        browser.addCommand('title', function () {
            return this.getTitle();
        });

        browser.addCommand('waitForVisible', function (selector, ms, reverse = false) {
            this.$(selector).waitForDisplayed(ms, reverse);
        });

        browser.addCommand('waitForExist', function (selector, ms, reverse = false) {
            this.$(selector).waitForExist(ms, reverse);
        });

        browser.addCommand('windowHandles', function () {
            return this.getWindowHandles();
        });

        browser.addCommand('windowHandleFullscreen', function () {
            this.fullscreenwindow();
        });

        browser.addCommand('windowHandleMaximize', function () {
            this.maximizeWindow();
        });

        // Add commands to element instance
        browser.addCommand('waitForVisible', function (ms, reverse = false) {
            /* Handle waitForVisible(true) or waitForVisible(false); Using waitForVisible this way
                is not valid but worked at one point. Adding for backwards compatability. */
            if (typeof ms === 'boolean') {
                this.waitForDisplayed(undefined, ms);
            } else {
                this.waitForDisplayed(ms, reverse);
            }
        }, true);

        // Add commands to the element scope.
        browser.addCommand('isVisible', function () {
            return this.isDisplayed();
        }, true);

        browser.addCommand('getCssProperty', function (cssProperty) {
            return this.getCSSProperty(cssProperty);
        }, true);

        browser.addCommand('clearElement', function () {
            this.clearValue();
        }, true);

        browser.addCommand('moveToObject', function (x = undefined, y = undefined) {
            this.moveTo(x, y);
        }, true);
    }
}
