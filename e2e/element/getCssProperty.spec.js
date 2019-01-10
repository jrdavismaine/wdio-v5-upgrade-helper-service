import assert from 'assert';

describe('getCssProperty wrapper command test', () => {
    before(() => {
        browser.url('/login');
    });

    it('Confirm body background is white using the getCssProperty wrapper command.', () => {
        const bodyElement = $('body');
        const { hex } = bodyElement.getCssProperty('background-color').parsed;
        assert.equal(hex, '#ffffff');
    });
});
