/**
 *
 * @param {boolean} waitForVisible - If true wait for element to be visible,
 * otherwise wait for element to be hidden. Emulates clicking a pop-up that
 * goes away after a certain timeout.
 */
module.exports = (isVisibleAtStartOfTest = true, timeout = 10000) => {
    const visibilityState = (isVisibleAtStartOfTest) ? 'hidden' : 'visible';
    const hiddenState = (isVisibleAtStartOfTest) ? 'visible' : 'hidden';
    const f = `
        var e = document.createElement('div');
        e.textContent = 'Dom element test'; 
        e.style.visibility = '${visibilityState}';
        e.id = 'elem';
        document.body.appendChild(e);
        setTimeout(function () {
            document.getElementById('elem').style.visibility = '${hiddenState}';
        }, ${timeout});`;
    browser.execute(f);
};
