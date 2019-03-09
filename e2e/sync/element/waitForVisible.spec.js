import assert from 'assert';

describe('waitForVisible command test suite: ', () => {
    beforeEach(() => {
        browser.url('/');
    });

    /* ELEMENT EXISTS ON PAGE TESTS */
    it('element exists: element.waitForVisible() no error', () => {
        const e = $('.heading');
        assert.doesNotThrow(() => { e.waitForVisible(); });
    });

    it('element exists: element.waitForVisible(1000) no error', () => {
        const e = $('.heading');
        assert.doesNotThrow(() => { e.waitForVisible(1000); });
    });

    it('element exists: element.waitForVisible(1000, false) no error', () => {
        const e = $('.heading');
        assert.doesNotThrow(() => { e.waitForVisible(1000, false); });
    });

    it('element exists: element.waitForVisible(1000, true) error, element always visible', () => {
        const e = $('.heading');
        assert.throws(() => { e.waitForVisible(1000, true); });
    });

    /* ELEMENT DOES NOT EXIST ON PAGE TESTS */
    it('element does not exist: element.waitForVisible() error', () => {
        const e = $('.noheading');
        assert.throws(() => { e.waitForVisible(); });
    });

    it('element does not exist: element.waitForVisible(1000) error', () => {
        const e = $('.noheading');
        assert.throws(() => { e.waitForVisible(1000); });
    });

    it('element does not exist: element.waitForVisible(1000, false) error', () => {
        const e = $('.noheading');
        assert.throws(() => { e.waitForVisible(1000, false); });
    });
});
