const PageVerticalNavigation = require('./../../src/components/VerticalNavigation/pageObject');

const VERTICAL_NAV = '#vertical-navigation-3';

describe('VerticalNavigation with href example', () => {
    beforeEach(() => {
        browser.url('/#!/VerticalNavigation/3');
        browser.refresh();
    });

    it('should go to "avatar page" when click on the "Avatar" item', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickItem(0);
        expect(browser.getUrl()).toContain('Components/Avatar');
    });
});
