import assert from 'assert';
import domElementUtility from '../fixtures/domElementUtility';

describe('wait commands test suite: ', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('Element is hidden for 5000 ms, then visible', () => {
        domElementUtility(true, 3000);
        $('#elem').waitForVisible(5000);
        assert($('#elem').isVisible());
    });

    it('Element is not visible by timeout', () => {
        domElementUtility(false, 7000);
        $('#elem').waitForVisible(5000);
        // assert.throws(() => { $('#elem').waitForVisible(5000); }, Error);
    });
});
