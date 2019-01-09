import assert from 'assert';

describe('browser command test suite: ', () => {
    context('get cookies test suite', () => {
        before(() => {
            browser.url('/abtest');
        });
    
        /**
         * In v4, getCookie('cookieName') returns an object.
         * In v5 getCookies('cookieName') returns an array.
         * 
         * Confirm the implementation of the getCookie wrapper function
         * behaves the same as v5, e.g. emulates v4.
         */
        it('Confirm v4 getCookie(\'cookiename\') wrapper function returns a type of object, not array', () => {
            assert.equal(typeof browser.getCookie('rack.session'), 'object');
        });
    
        it('Confirm v4 getCookie(\'cookiename\') wrapper function does not return an array', () => {
            assert.equal(Array.isArray(browser.getCookie('rack.session')), false);
        });
    
        it('Confirm v4 getCookie() wrapper function returns an array', () => {
            assert.equal(Array.isArray(browser.getCookie()), true);
        });
    
        it('Confirm v5 getCookies() command returns an array', () => {
            assert.equal(Array.isArray(browser.getCookies()), true);
        });
    
        it('Confirm v4 wrapper function getCookie() equals v5 getCookies() command', () => {
            assert.deepEqual(browser.getCookie(), browser.getCookies());
        });
    
        it('Confirm v4 wrapper function getCookie(\'rack.session\') equals v5 getCookies(\'rack.session\')[0]', () => {
            assert.deepEqual(browser.getCookie('rack.session'), browser.getCookies('rack.session')[0]);
        });
    });

    context('set cookie, delete cookie suite', () => {
        before(`Setup, add cookie using setCookie({name: 'test', value: 'cookietest'})`, () => {
            browser.url('/abtest');
            browser.setCookie({name: 'test', value: 'cookietest'});
        });

        it('confirm new cookie exists', () => {
            assert.deepEqual(browser.getCookie('test').value, 'cookietest');
        });

        it(`delete cookie using browser.deleteCookie('test')`, () => {
            browser.deleteCookie('test');
            assert.equal(browser.getCookie('test'), undefined);
        })

        it(`delete all cookies using browser.deleteCookie()`, () => {
            browser.deleteCookies();
            assert.equal(browser.getCookie().length, 0);
        })
    });

});
