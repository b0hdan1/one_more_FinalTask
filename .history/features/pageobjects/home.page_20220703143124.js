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

  async clickOnCurrencyButton() {
    return await $(this.currency).click();
  }

  async selectCurrency(currency) {
    const selectedCurrency = `//ul[@class="dropdown-menu show"]//a[contains(text(), "${currency}")]`;

    return await $(selectedCurrency).click();
  }

  async checkCorrectCurency(currency) {
    const 

    return await 
  }

}

module.exports = new HomePage();