const { getEmail } = require('./home.page');
const Page = require('./page');
const expectChai = require('chai').expect;

class VisaPage extends Page {
  fromCountry = '//span[@id="select2-from_country-container"]';
  inputCountry = '//input[@class="select2-search__field"]';
  toCountry = '//span[@id="select2-to_country-container"]';
  calendar = '//input[@id="date"]';
  nextMonth = '//th[@class="next"]';
  submitButton = '//button[@id="submit"]';
  inputName = '//input [@name="first_name"]';
  inputLastName = '//input [@name="last_name"]';
  inputPhone = '//input [@name="phone"]';
  inputEmail = '//input [@name="email"]';
  inputDate = '//input [@name="date"]';

  get getFromCountryOptions() {
    return $(this.fromCountry);
  }

  get getinputFromCountry() {
    return $(this.inputCountry);
  }

  get getToCountryOptions() {
    return $(this.toCountry);
  }

  get getCalendar() {
    return $(this.calendar);
  }

  get getNextMonth() {
    return $(this.nextMonth);
  }

  get getSubmitButton() {
    return $(this.submitButton);
  }

  get getInputName() {
    return $(this.inputName);
  }

  get getInputLastName() {
    return $(this.inputLastName);
  }

  get getInputPhone() {
    return $(this.inputPhone);
  }

  get getInputEmail() {
    return $(this.inputEmail);
  }

  get getInputDate() {
    return $(this.inputDate);
  }

  async clickFromCountryOptions(country) {
    await this.getFromCountryOptions.click();
    await this.getinputFromCountry.setValue(country);
    await this.getinputFromCountry.keys('\uE007');
  }

  async clickToCountryOptions(country) {
    await this.getToCountryOptions.click();
    await this.getinputFromCountry.setValue(country);
    await this.getinputFromCountry.keys('\uE007'); 
  }

  async selectDayFromNextMonth(day) {
    const selectedDay = `//td[@class="day "][contains(text(), ${day})]`;
    await this.getCalendar.click();
    await this.getNextMonth.click();
    await $(selectedDay).click();
  }

  async clickOnSubmitButton() {
    await this.getSubmitButton.click();
  }

  async checkCurrentUrl(url) {
    const currentUrl = await browser.getUrl();

    return expectChai(currentUrl).equal(url);
  }

  async fillVisaFields(vasaFields) {
    await this.getInputName.setValue(vasaFields.name);
    await this.getInputLastName.setValue(vasaFields.lastName);
    await this.getInputEmail.setValue(vasaFields.email);
    await this.getSubmitButton.click();
  }
}

module.exports = new VisaPage();