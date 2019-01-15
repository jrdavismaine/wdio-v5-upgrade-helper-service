import assert from 'assert';

describe('browser.moveToObject test suite: ', () => {
    beforeEach(() => {
        browser.url('/hovers');
    });

    it('browser.moveToObject(\'.selector\') test', () => {
        browser.moveToObject('#content > div > div:nth-child(4)');
        browser.pause(1000);
        const name = browser.$('#content > div > div:nth-child(4) .figcaption h5').getText();
        assert.equal(name, 'name: user2');
    });

    it('element.moveToObject(\'.selector\', x, y) test', () => {
        const e = $('#content > div > div:nth-child(5)');
        const { x, y } = e.getLocation();
        browser.moveToObject('#content > div > div:nth-child(5)', x, y);
        browser.pause(1000);
        const name = browser.$('#content > div > div:nth-child(5) .figcaption h5').getText();
        assert.equal(name, 'name: user3');
    });
});
