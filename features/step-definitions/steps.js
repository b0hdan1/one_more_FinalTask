const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const VisaPage = require('../pageobjects/visa.page');

const pages = {
    loginPage: LoginPage,
    homePage: HomePage,
    visaPage: VisaPage,
}

Given("I open the home page of the website", async () => {
    await pages.loginPage.open();
});

When("I click to currency button", async () => {
    await pages.homePage.clickOnCurrencyButton();
});

When(`I select 'EUR'`, async () => {                // чи можна ставити ЕНД?
    await pages.homePage.selectCurrency('EUR');     // як передати EUR в параметр функції?
})

Then("I check correct 'EUR' on site", async () => {
    await pages.homePage.checkCorrectCurencyOnPage('EUR');
});

Given("I open home page", async () => {
    await pages.homePage.open();
});

When("I click to 'visa' button", async () => {
    await pages.homePage.clickOnVisaButton();
});

When("I fill 'from country' field", async () => {
    await pages.visaPage.clickFromCountryOptions('Ireland');
});

When("I fill 'to country' field", async () => {
    await pages.visaPage.clickToCountryOptions('Ukraine');
});

When("I fill 'date' field", async () => {
    await pages.visaPage.selectDayFromNextMonth('12');
});

When("I click 'submit' button", async () => {
    await pages.visaPage.clickOnSubmitButton();
});




