import assert from 'assert';
import cheerio from 'cheerio';

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
    });

    it('browser isVisible test', () => {
        assert.equal(browser.isVisible('.heading'), true);
    });

    context('Click link test', () => {
        after(() => {
            browser.back();
        });

        it('browser click test', () => {
            const selector = 'li > a';
            const firstLink = $$(selector)[0];
            const firstLinkHref = firstLink.getAttribute('href');
            browser.click(selector);
            assert.equal(browser.getUrl(), firstLinkHref);
        });
    });

    it('browser getCssProperty test', () => {
        const fontFamily = browser.getCssProperty('h2', 'font-family').value;
        assert(fontFamily, 'helvetica');
    });

    it('browser getSource test', () => {
        const h2Text = browser.$('h2').getText().trim();
        const html = browser.getPageSource();
        const $ = cheerio.load(html);
        assert.equal($('h2').text().trim(), h2Text);
    });
});
