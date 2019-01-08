import assert from 'assert';

describe('browser command test suite: ', () => {
    before(() => {
        browser.url('/');
    });

    it('browser element test', () => {
        const link = browser.element('.heading');
        assert.equal(link.getText(), 'Welcome to the-internet');
    });

    it('browser elements test', () => {
        assert.equal(browser.elements('a').length > 0, true, 'Fail, an array of anchor tag links was not returned.');
    });

    it('browser getText test', () => {
        const linkText = browser.getText('.heading');
        assert.equal(linkText, 'Welcome to the-internet');
    });

    it('browser getAttribute test', () => {
        const attr = browser.getAttribute('.heading', 'class');
        assert.equal(attr, 'heading');
    });

    it('browser isExisting test', () => {
        assert.equal(browser.isExisting('.heading'), true);
    })
});