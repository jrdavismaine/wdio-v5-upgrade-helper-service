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

    element.addCommand('getElementSize', (property = '') => {
        if (property !== '') {
            return element.getSize(property);
        }
        return element.getSize();
    });
};
export default addCommandsToElement;
