const addCommandsToElement = (element) => {
    element.addCommand('waitForVisible', (ms, reverse = false) => {
        /* Handle waitForVisible(true) or waitForVisible(false); Using waitForVisible this way
           is not valid but worked at one point. Adding for backwards compatability. */
        if (typeof ms === 'boolean') {
            element.waitForDisplayed(undefined, ms);
        } else {
            element.waitForDisplayed(ms, reverse);
        }
    });

    element.addCommand('isVisible', () => element.isDisplayed());

    element.addCommand('getCssProperty', cssProperty => element.getCSSProperty(cssProperty));

    element.addCommand('clearElement', () => element.clearValue());

    element.addCommand('moveToObject', (x = undefined, y = undefined) => {
        element.moveTo(x, y);
    });
};
export default addCommandsToElement;
