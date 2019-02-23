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
});
