import assert from 'assert';

export default class TestClass {
    get getterWithBrowserElement() {
        return browser.element('div');
    }

    get getterWithBrowserElements() {
        return browser.elements('div');
    }

    get getterWithBrowser$() {
        return browser.$('div');
    }

    get getterWithBrowser$$() {
        return browser.$$('div');
    }

    get getterWith$() {
        return $('div');
    }

    get getterWith$$() {
        return $$('div');
    }
}

describe('Verify commands in addCommandsToElem are being added to the element prototype: ', () => {
    before(() => {
        browser.url('/');
        browser.pause(3000);
    });

    context('Via webdriverio browser commands:', () => {
        it('Get element with browser.$', () => {
            const e = browser.$('.heading');
            assert.equal(typeof e.waitForVisible, 'function');
        });

        it('Get element with browser.$$', () => {
            const e = browser.$$('.heading')[0];
            assert.equal(typeof e.waitForVisible, 'function');
        });

        it('Get element with $', () => {
            const e = $('.heading');
            assert.equal(typeof e.waitForVisible, 'function');
        });

        it('Get element with $$', () => {
            const e = $$('.heading')[0];
            assert.equal(typeof e.waitForVisible, 'function');
        });

        it('Get element with browser.element', () => {
            const e = browser.element('.heading');
            assert.equal(typeof e.waitForVisible, 'function');
        });

        it('Get element with browser.elements', () => {
            const e = browser.elements('.heading')[0];
            assert.equal(typeof e.waitForVisible, 'function');
        });
    });

    context('Via class getter methods:', () => {
        let testClass;
        before(() => {
            testClass = new TestClass();
        });

        it('testClass.getterWithBrowserElement', () => {
            assert.equal(typeof testClass.getterWithBrowserElement.waitForVisible, 'function');
        });

        it('testClass.getterWithBrowserElements', () => {
            assert.equal(typeof testClass.getterWithBrowserElements[0].waitForVisible, 'function');
        });

        it('testClass.getterWithBrowser$', () => {
            assert.equal(typeof testClass.getterWithBrowser$.waitForVisible, 'function');
        });

        it('testClass.getterWithBrowser$$', () => {
            assert.equal(typeof testClass.getterWithBrowser$$[0].waitForVisible, 'function');
        });

        it('testClass.getterWith$', () => {
            assert.equal(typeof testClass.getterWith$.waitForVisible, 'function');
        });

        it('testClass.getterWith$$', () => {
            assert.equal(typeof testClass.getterWith$$[0].waitForVisible, 'function');
        });
    });

    context('Verify element command not on prototype is undefined:', () => {
        let testClass;
        before(() => {
            testClass = new TestClass();
        });

        it('testClass.getterWithBrowserElement', () => {
            assert.equal(testClass.getterWithBrowserElement.waitForDisplayedAndVisible, undefined);
        });

        it('testClass.getterWithBrowserElements', () => {
            assert.equal(testClass.getterWithBrowserElements[0].waitForDisplayedAndVisible, undefined);
        });

        it('testClass.getterWithBrowser$', () => {
            assert.equal(testClass.getterWithBrowser$.waitForDisplayedAndVisible, undefined);
        });

        it('testClass.getterWithBrowser$$', () => {
            assert.equal(testClass.getterWithBrowser$$[0].waitForDisplayedAndVisible, undefined);
        });

        it('testClass.getterWith$', () => {
            assert.equal(testClass.getterWith$.waitForDisplayedAndVisible, undefined);
        });

        it('testClass.getterWith$$', () => {
            assert.equal(testClass.getterWith$$[0].waitForDisplayedAndVisible, undefined);
        });
    });
});
