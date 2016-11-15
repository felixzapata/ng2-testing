import { browser, element, by, ElementFinder } from 'protractor';

export class UserSearchPO {

    navigateTo() {
        return browser.get('/');
    }

    setUsername(username: string) {
        element(by.css('#username')).sendKeys(username);
    }

    getButton(): ElementFinder {
        return element(by.css('#search'));
    }

    getLogin() {
        return element(by.css('#login')).getText();
    }

    getError() {
        return element(by.css('#error')).isElementPresent;
    }
}
