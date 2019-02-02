import assert from 'assert';
import cheerio from 'cheerio';

describe('browser click command test suite: ', () => {
    before(() => {
        browser.url('/');
    });

    it('browser click test', () => {
        const selector = 'li > a';
        const firstLink = $$(selector)[0];
        const firstLinkHref = firstLink.getAttribute('href');
        browser.click(selector);
        assert.equal(browser.getUrl(), firstLinkHref);
    });
});
