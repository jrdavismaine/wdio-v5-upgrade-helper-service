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

        browser.addCommand('element', async selector => $(selector));

        browser.addCommand('elements', async selector => $$(selector));

        browser.addCommand('getText', async selector => $(selector).getText());
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
