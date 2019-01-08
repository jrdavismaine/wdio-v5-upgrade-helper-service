import assert from 'assert';

/**
 * 
 * @param {boolean} waitForVisible - If true wait for element to be visible,
 * otherwise wait for element to be hidden. Emulates clicking a pop-up that
 * goes away after a certain timeout.
 */
const domElementUtility = (isVisibleAtStartOfTest = true, timeout = 10000) => {
    const visibilityState = (isVisibleAtStartOfTest) ? 'hidden' : 'visible';
    const hiddenState = (isVisibleAtStartOfTest) ? 'visible' : 'hidden';
    const f = `var e = document.createElement('div');
    e.textContent = 'Dom element test'; 
    e.style.visibility = '${visibilityState}';
    e.id = 'elem';
    document.body.appendChild(e);
    setTimeout(function () {
        document.getElementById('elem').style.visibility = '${hiddenState}';
    }, ${timeout});`
    browser.execute(f);
}

describe('browser command test suite: ', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('Element is hidden for 5000 ms, then visible', () => {
        domElementUtility(true, 3000);
        $('#elem').waitForVisible(5000);
        assert($('#elem').isVisible());
    });

    it('Element is visible for 5000 ms, then hidden', () => {
        domElementUtility(true, 5000);
        $('#elem').waitForVisible(7000, true);
        assert(!$('#elem').isVisible());
    });

    it('Element is not visible by timeout', () => {
        domElementUtility(false, 7000);
        $('#elem').waitForVisible(5000);
        // assert.throws(() => { $('#elem').waitForVisible(5000); }, Error);
    });

});
