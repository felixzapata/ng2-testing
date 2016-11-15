import { browser } from 'protractor';
import { UserSearchPO } from './user-search.po';

describe('User search page test', () => {

    let page: UserSearchPO;

    const USERNAME = 'raguilera82';

    beforeEach(() => {
        page = new UserSearchPO();
        page.navigateTo();
    });

    it ('should resolve login', () => {
        page.setUsername(USERNAME);
        page.getButton().click();
        browser.driver.sleep(5000);
        expect(page.getLogin()).toContain(USERNAME);
    });

    it ('should show error', () => {
        page.setUsername('noexisteespero');
        page.getButton().click();
        browser.driver.sleep(5000);
        expect(page.getError()).toBeTruthy();
    });

});
