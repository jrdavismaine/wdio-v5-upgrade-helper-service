import addCommandsToElement from './addCommandsToElement';

export default class UpgradeService {
    before() {
        browser.addCommand('waitForVisible', async (selector, ms, reverse = false) => {
            const e = await $(selector);
            await e.waitForDisplayed(ms, reverse = false);
        });

        browser.addCommand('alertAccept', async () => {
            await browser.acceptAlert();
        });

        browser.addCommand('alertDismiss', async () => {
            await browser.dismissAlert();
        });

        browser.addCommand('alertText', async () => {
            await browser.getAlertText();
        });

        browser.addCommand('element', async selector => $(selector));

        browser.addCommand('elements', async selector => $$(selector));

        browser.addCommand('getText', async (selector) => {
            const e = await $(selector);
            return e.getText();
        });

        browser.addCommand('windowHandles', async () => browser.getWindowHandles());

        browser.addCommand('windowHandleFullscreen', async () => browser.fullscreenwindow());

        browser.addCommand('windowHandleMaximize', async () => browser.maximizeWindow());

        browser.addCommand('screenshot', async () => browser.takeScreenshot());

        browser.addCommand('reload', async () => browser.reloadSession());

        browser.addCommand('scroll', async () => browser.scrollIntoView());

        browser.addCommand('getSource', async () => browser.getPageSource());

        browser.addCommand('source', async () => browser.getPageSource());

        browser.addCommand('title', async () => browser.getTitle());

        /* 
            The getCookie param was a string in v4. Reason for not changing to array.
            https://github.com/webdriverio-boneyard/v4/blob/master/lib/commands/getCookie.js 
        */
        browser.addCommand('getCookie', async (name = null) => browser.getCookies(name));
        
        browser.addCommand('setCookie', async (cookieObj) => browser.setCookies(cookieObj));

        browser.addCommand('deleteCookie', async (name = null) => browser.deleteCookies(name));
    }

    afterCommand(commandName, args, result, error) {
        if (commandName === '$' && result !== undefined) {
            addCommandsToElement(result);
        }

        if (commandName === '$$') {
            if (result.length > 0) {
                result.forEach((element) => {
                    addCommandsToElement(element);
                });
            }
        }
    }
}
