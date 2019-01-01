const addCommandsToElement = (element) => {
    element.addCommand('waitForVisible', async (ms, reverse = false) => {
        await element.waitForDisplayed(ms, reverse);
    });

    element.addCommand('isVisible', async () => element.isDisplayed());
};
export default addCommandsToElement;
