import {
  chai,
  should,
  expect,
} from 'chai';
import Page from './page';

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
    return (this.submitButton);
  }

  async checkVisibleCurrency() {
    await this.getCurrency
  }

}

module.exports = new HomePage();