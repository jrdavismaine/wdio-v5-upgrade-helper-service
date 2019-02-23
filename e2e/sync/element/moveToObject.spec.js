import assert from 'assert';

describe('element moveToObject test suite: ', () => {
    before(() => {
        browser.url('/hovers');
    });

    it('element.moveToObject() test', () => {
        $('#content > div > div:nth-child(4)').moveToObject();
        browser.pause(1000);
        const name = browser.$('#content > div > div:nth-child(4) .figcaption h5').getText();
        assert.equal(name, 'name: user2');
    });

    it('element.moveToObject(x, y) test', () => {
        const e = $('#content > div > div:nth-child(5)');
        const { x, y } = e.getLocation();
        $('#content > div > div:nth-child(5)').moveToObject(x + 10, y + 10);
        browser.pause(1000);
        const name = browser.$('#content > div > div:nth-child(5) .figcaption h5').getText();
        assert.equal(name, 'name: user3');
    });
});
