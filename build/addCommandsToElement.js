'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const addCommandsToElement = element => {
    element.addCommand('waitForVisible', async (ms, reverse = false) => {
        /* Handle waitForVisible(true) or waitForVisible(false); Using waitForVisible this way
           is not valid but worked at one point. Adding for backwards compatability. */
        if (typeof ms === 'boolean') {
            await element.waitForDisplayed(undefined, ms);
        } else {
            await element.waitForDisplayed(ms, reverse);
        }
    });

    element.addCommand('isVisible', async () => element.isDisplayed());

    element.addCommand('getCssProperty', async cssProperty => element.getCSSProperty(cssProperty));

    element.addCommand('clearElement', async () => element.clearValue());

    element.addCommand('getElementSize', async (property = '') => {
        if (property !== '') {
            return element.getSize(property);
        }
        return element.getSize();
    });
};
exports.default = addCommandsToElement;