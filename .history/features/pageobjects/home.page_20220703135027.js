const Page = require('./page');
const expectChai = require('chai').expect;

class HomePage extends Page {
  currency = '//div[@class="header-right-action  pt-1 pe-2 multi_currency" ] //button[@id="currency"]';
  inputEmail = '//div[@class="form-group"]//input';
  inputPassword = '//div[@class="form-group mb-2"]//input';
  submitButton = 'button[type="submit"]';

  get getCurrency() {
    return $(this.currency);
  }

  get getEmail() {
    return $(this.inputEmail);
  }

  get getPassword() {
    return $(this.inputPassword);
  }

  get btnSubmit() {
    return $(this.submitButton);
  }

  async checkVisibleCurrency() {
    const isDisplayed = await $(this.getCurrency).cl;

    return isDisplayed;
  }

}

module.exports = new HomePage();
