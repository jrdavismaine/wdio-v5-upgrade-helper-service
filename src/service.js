/* eslint-disable */
// Element prototype
// https://github.com/webdriverio/webdriverio/issues/1796

import addCommandsToElement from './addCommandsToElement';

export default class UpgradeService {

    before() {
        browser.addCommand("waitForVisible", async function(selector, ms, reverse = false) {
            const e = await $(selector);
            await e.waitForDisplayed(ms, reverse = false);
        });

        browser.addCommand("alertAccept", async function() {
            await browser.acceptAlert();   
        });
    }

    afterCommand(commandName, args, result, error) {
        const element = result;
        if (commandName === '$' && result !== undefined) {
            addCommandsToElement(element);
        }

        if (commandName === '$$') {
            const elements = result;
            if (elements.length > 0) {
                elements.forEach(element => {
                    addCommandsToElement(element);
                });
            }
        }
    };
}