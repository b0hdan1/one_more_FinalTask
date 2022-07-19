const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const VisaPage = require('../pageobjects/visa.page');

const pages = {
    loginPage: LoginPage,
    homePage: HomePage,
    visaPage: VisaPage,
}

const visaFields = {
    name : 'FirstName',
    lastName: 'LastName',
    email: 'FirstLast@email.com',
}

const successUrl = 'https://www.phptravels.net/success/visa';

Given("I open the home page as a registered user", async () => {
    await pages.loginPage.login();
    await pages.homePage.open();
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

When("I correctly fill all require field on visa page", async () => {
    await pages.visaPage.fillVisaFields(visaFields);
});

Then("I check current URL", async () => {
    await pages.visaPage.checkCurrentUrl(successUrl);
});
