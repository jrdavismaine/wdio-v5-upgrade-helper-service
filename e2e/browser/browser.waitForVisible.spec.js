import assert from 'assert';

describe('browser.waitForVisible test suite: ', () => {
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
});
