import { UserSearchPO } from './user-search.po';

describe('User search page test', () => {

    let page: UserSearchPO;

    const USERNAME: string = 'raguilera82';

    beforeEach(() => {
        page = new UserSearchPO();
        console.log(page);
    })

    it ('should resolve login', () => {
        page.setUsername(USERNAME);
        page.getButton().click();
        let login = page.getLogin();
        expect(login).toEqual(USERNAME);
    })

})