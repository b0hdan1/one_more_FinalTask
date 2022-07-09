const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    loginPage: LoginPage,
    homePage: HomePage,
}

Given("I open the home page of the website", async () => {
    await pages.loginPage.open();
});

When("I click to currency button", async () => {
    await pages.homePage.clickOnCurrencyButton();
});

When("I select ${}", async (currency) => {
    await pages.homePage.selectCurrency(currency);
})

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

