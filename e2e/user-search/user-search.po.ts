import { browser, element, by } from 'protractor';

export class UserSearchPO {
    navigateTo() {
        return browser.get('/');
    }

    setUsername(username: string) {
        element(by.css('#username')).sendKeys(username);
    }

    getButton() {
        return element(by.css('#search'));
    }

    getLogin() {
        return element(by.css('#login')).getText();
    }
}