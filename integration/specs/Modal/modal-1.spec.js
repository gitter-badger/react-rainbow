const PageModal = require('../../../src/components/Modal/pageObject');
const { ESCAPE_KEY, TAB_KEY } = require('../../constants');

const BUTTON = '#button-1';
const MODAL = '#modal-1';

describe('Modal base example', () => {
    beforeAll(() => {
        browser.url('/#!/Modal/1');
    });
    beforeEach(() => {
        browser.refresh();
        browser.waitForExist(BUTTON);
    });
    it('should open the modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        expect(modal.isOpen()).toBe(true);
    });
    it('should close the modal when is opened and press ESC', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        modal.waitUntilClose();
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when is opened and click outside of the modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        modal.clickOutside();
        modal.waitUntilClose();
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when is opened and click the closeButton', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        modal.clickCloseButton();
        modal.waitUntilClose();
        expect(modal.isOpen()).toBe(false);
    });
    it('should return focus to trigger element when close modal with ESC key', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(browser.hasFocus(BUTTON)).toBe(true);
    });
    it('should return focus to trigger element when close modal by clicking outside of the modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        modal.clickOutside();
        expect(browser.hasFocus(BUTTON)).toBe(true);
    });
    it('should return focus to trigger element when close modal with close button', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        modal.clickCloseButton();
        expect(browser.hasFocus(BUTTON)).toBe(true);
    });
    it('should focus the close button when the modal is opened and press TAB', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.keys(TAB_KEY);
        expect(modal.hasFocusCloseButton()).toBe(true);
    });
});
