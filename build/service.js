"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addCommandsToElement = _interopRequireDefault(require("./addCommandsToElement"));

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
    browser.addCommand('element', async selector => $(selector));
    browser.addCommand('elements', async selector => $$(selector));
    browser.addCommand('getAttribute', async (selector, attributeName) => {
      const e = await $(selector);
      return e.getAttribute(attributeName);
    });
    /* The getCookie param was a string in v4. Reason for not changing to array.
        https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/getCookie.js */

    /**
     * The getCookie param was a string in v4. Reason for not changing to array.
     * Also if a name parameter is not passed an array of cookies will be returned,
     * otherwise the cookie object is returned. If not found then the return obj will be undefined.
     */

    browser.addCommand('getCookie', async name => {
      if (name === undefined) {
        return browser.getCookies();
      }

      const cookie = await browser.getCookies(name);
      return cookie[0];
    });
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
    /**
     * In v4 the param is an object, in v5 width and height is passed.
     * Keeping as an object for backwards compatability.
     *
     * REF: https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/setViewportSize.js
     */

    browser.addCommand('setViewportSize', async widthHeightObject => {
      const {
        width,
        height
      } = widthHeightObject;
      await browser.setWindowSize(width, height);
    });
    /* Same as getSource. */

    browser.addCommand('source', async () => browser.getPageSource());
    browser.addCommand('switchTab', async windowHandle => browser.switchToWindow(windowHandle));
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
      (0, _addCommandsToElement.default)(result);
    }

    if (commandName === '$$' && result !== undefined) {
      if (result.length > 0) {
        result.forEach(element => {
          (0, _addCommandsToElement.default)(element);
        });
      }
    }
  }

}

exports.default = UpgradeService;