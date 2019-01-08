import assert from 'assert';

describe('browser command test suite: ', () => {
    before(() => {
        browser.url('/');
    });

    /* ELEMENT EXISTS ON PAGE TESTS */
    it('element exists: browser.waitForVisible(\'.heading\') no error', () => {
        assert.doesNotThrow(() => { browser.waitForVisible('.heading'); });
    });

    it('element exists: browser.waitForVisible(\'.heading\', 1000) no error', () => {
        assert.doesNotThrow(() => { browser.waitForVisible('.heading', 1000); });
    });

    /* ELEMENT DOES NOT EXIST ON PAGE TESTS */
    it('element does not exist: browser.waitForVisible(\'.noheading\') error', () => {
        assert.throws(() => { browser.waitForVisible('.noheading'); });
    });

    it('element does not exist: browser.waitForVisible(\'.noheading\', 1000) error', () => {
        assert.throws(() => { browser.waitForVisible('.noheading', 1000); });
    });
});
