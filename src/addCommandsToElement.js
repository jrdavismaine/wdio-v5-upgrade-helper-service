const addCommandsToElement = (element) => {
    element.addCommand('waitForVisible', async (ms, reverse = false) => {
        await element.waitForDisplayed(ms, reverse);
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
export default addCommandsToElement;
