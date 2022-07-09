import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage, { login as _login } from '../pageobjects/login.page';
import { flashAlert } from '../pageobjects/secure.page';

let login = 

const pages = {
    login: LoginPage
}

Given("I open the home page of the website", async () => {
    await pages.login.open();
});

When("I click to currency button", async (currency) => {
    await _login(currency)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(flashAlert).toBeExisting();
    await expect(flashAlert).toHaveTextContaining(message);
});

