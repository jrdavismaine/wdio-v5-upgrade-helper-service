import assert from 'assert';

describe('Alert commands test suite: ', () => {
    before(() => {
        browser.url('/javascript_alerts');
        browser.pause(3000);
    });

    context('Alert box: alertAccept, alertText command alias test', () => {
        before(() => {
            browser.$$('button')[0].click();
        });

        it('alertText', () => {
            assert.equal(browser.alertText(), 'I am a JS Alert');
        });

        it('alertAccept', () => {
            browser.alertAccept();
            assert.equal($('#result').getText(), 'You successfully clicked an alert');
        });
    });

    // QA TEST
    context('Alert box: alertDismiss command alias test', () => {
        before(() => {
            browser.$$('button')[0].click();
        });

        it('Accept alert', () => {
            browser.alertDismiss();
            assert.equal($('#result').getText(), 'You successfully clicked an alert');
        });
    });

    context('Confirm box: alertAccept, alertText command alias test', () => {
        before(() => {
            browser.$$('button')[1].click();
        });

        it('alertText', () => {
            assert.equal(browser.alertText(), 'I am a JS Confirm');
        });

        it('alertAccept', () => {
            browser.alertAccept();
            assert.equal($('#result').getText(), 'You clicked: Ok');
        });
    });

    context('Confirm box: alertDismiss command alias test', () => {
        before(() => {
            browser.$$('button')[1].click();
        });

        it('alertDismiss', () => {
            browser.alertDismiss();
            assert.equal($('#result').getText(), 'You clicked: Cancel');
        });
    });
});
