const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import homePage from '../pageobjects/home.page';
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage,
    homePage: HomePage,
}

Given("I open the home page of the website", async () => {
    await pages.login.open();
});

When("I click to currency button", async () => {
    await homePage.checkVisibleCurrency();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

