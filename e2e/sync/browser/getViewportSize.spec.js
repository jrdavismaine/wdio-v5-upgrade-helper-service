import assert from 'assert';

describe('Alert commands test suite: ', () => {
    before(() => {
        browser.url('/');
        browser.pause(3000);
    });

    it('Verify getViewportSize returns same object as getWindowSize', () => {
        assert.deepEqual(browser.getViewportSize(), browser.getWindowSize());
    });

    it('Verify getViewportSize(\'width\') returns same width as getWindowSize', () => {
        assert.equal(browser.getViewportSize('width'), browser.getWindowSize().width);
    });

    it('Verify getViewportSize(\'height\') returns same height as getWindowSize', () => {
        assert.equal(browser.getViewportSize('height'), browser.getWindowSize().height);
    });

    it('Verify getViewportSize(\'width\') returns a number and not an object', () => {
        assert.equal(typeof browser.getViewportSize('width'), 'number');
    });

    it('Verify getViewportSize(\'height\') returns a number and not an object', () => {
        assert.equal(typeof browser.getViewportSize('height'), 'number');
    });
});
