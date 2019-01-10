import assert from 'assert';

class LoginForm {
    get username() {
        return $('#username');
    }
}

describe('Clear element test', () => {
    const email = 'element@test.org';

    let loginForm;
    before(() => {
        browser.url('/login');
        loginForm = new LoginForm();
        loginForm.username.setValue(email);
    });

    it('Clear data, verify blank', () => {
        loginForm.username.clearElement();
        assert.equal(loginForm.username.getValue(), '');
    });

    it('Enter data, hide text-field, confirm \'element not interactable\' error is thrown', () => {
        const script = `
            var e = document.createElement('input');
            e.type = 'text'; 
            e.style.visibility = 'visible';
            e.id = 'elem';
            document.forms[0].appendChild(e);`;
        browser.execute(script);
        browser.pause(2000);
        const input = browser.$('#elem');
        input.setValue(email);
        browser.execute('document.getElementById(\'elem\').style.visibility = \'hidden\';');
        try {
            input.clearElement();
        } catch (error) {
            assert(error.message.indexOf('element not interactable') > -1);
        }
    });
});
