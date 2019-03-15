import assert from 'assert';

describe('selectByValue test', () => {
    before(() => {
        browser.url('/dropdown');
        browser.pause(2000);
    });

    it('Select drop-down option using selectByValue', () => {
        const dropdown = $('#dropdown');
        dropdown.selectByValue('Option 2');
        assert.equal(dropdown.getValue(), 2);
    });
});
