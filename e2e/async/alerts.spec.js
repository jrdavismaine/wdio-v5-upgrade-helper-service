import assert from 'assert';

describe('Alert commands test suite: ', async () => {
    before(async () => {
        await browser.url('/javascript_alerts');
        await browser.pause(3000);
    });

    context('Alert box: alertAccept, alertText command alias test', async () => {
        before(async () => {
            await browser.$$('button')[0].click();
        });

        it('alertText', async () => {
            assert.equal(await browser.alertText(), 'I am a JS Alert');
        });

        it('alertAccept', async () => {
            await browser.alertAccept();
            const result = await $('#result');
            assert.equal(await result.getText(), 'You successfuly clicked an alert');
        });
    });

    context('Alert box: alertDismiss command alias test', async () => {
        before(async () => {
            await browser.$$('button')[0].click();
        });

        it('Accept alert', async () => {
            await browser.alertDismiss();
            const result = await $('#result');
            assert.equal(await result.getText(), 'You successfuly clicked an alert');
        });
    });

    context('Confirm box: alertAccept, alertText command alias test', async () => {
        before(async () => {
            await browser.$$('button')[1].click();
        });

        it('alertText', async () => {
            assert.equal(await browser.alertText(), 'I am a JS Confirm');
        });

        it('alertAccept', async () => {
            await browser.alertAccept();
            const result = await $('#result');
            assert.equal(await result.getText(), 'You clicked: Ok');
        });
    });

    context('Confirm box: alertDismiss command alias test', async () => {
        before(async () => {
            await browser.$$('button')[1].click();
        });

        it('alertDismiss', async () => {
            await browser.alertDismiss();
            const result = await $('#result');
            assert.equal(await result.getText(), 'You clicked: Cancel');
        });
    });
});
