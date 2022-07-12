const Page = require('./page');

class VisaPage extends Page {
  fromCountry = '//span[@id="select2-from_country-container"]';
  inputCountry = '//input[@class="select2-search__field"]';
  toCountry = '//span[@id="select2-to_country-container"]';
  calendar = '//input[@id="date"]';
  nextMonth = '//th[@class="next"]';
  submitButton = '//button[@id="submit"]'

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

  async clickFromCountryOptions(country) {
    await this.getFromCountryOptions.click();
    await this.getinputFromCountry.setValue(country);
  }

  async clickToCountryOptions(country) {
    await this.getToCountryOptions.click();
    await this.getinputFromCountry.setValue(country); 
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
}

module.exports = new VisaPage();