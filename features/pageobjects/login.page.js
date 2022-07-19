const Page = require('./page');
 
class LoginPage extends Page {
    get inputUsername () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (username = 'testerio723@gmail.com', password = 'qwerty') {
        await this.open();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
