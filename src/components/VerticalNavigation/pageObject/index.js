/**
 * VerticalNavigation page object class.
 * @class
 */
class PageVerticalNavigation {
    /**
     * Create a new VerticalNavigation page object.
     * @constructor
     * @param {string} rootElement - The selector of the VerticalNavigation root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the vertical item with item position.
     * @method
     *  @param {number} itemPosition - The base 0 index of the vertical item.
     */
    clickItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-vertical-item_action');
        if (items[itemPosition]) {
            items[itemPosition].click();
        }
    }

    /**
     * Clicks the vertical section overflow item with item position.
     * @method
     *  @param {number} itemPosition - The base 0 index of the vertical item.
     */
    clickSectionOverflow(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-vertical-section-overflow_button');
        if (items[itemPosition]) {
            items[itemPosition].click();
        }
    }

    /**
     * Returns true when the overflow section with item position is visible, false otherwise.
     * @method
     * @returns {bool}
     */
    isSectionOverflowVisible(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="vertical-overflow"]');
        if (items[itemPosition]) {
            return items[itemPosition].isVisible();
        }
        return false;
    }

    /**
     * Returns true when the vertical section overflow button with item position has focus.
     * @method
     * @returns {bool}
     */
    hasFocusSectionOVerflowButton(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-vertical-section-overflow_button');
        if (items[itemPosition]) {
            return items[itemPosition].hasFocus();
        }
        return false;
    }

    /**
     * Returns true when the vertical item element with item position has focus.
     * @method
     * @returns {bool}
     */
    hasFocusItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-vertical-item_action');
        if (items[itemPosition]) {
            return items[itemPosition].hasFocus();
        }
        return false;
    }

    /**
     * Returns true when the vertical item element with item position is selected.
     * @method
     * @returns {bool}
     */
    isItemSelected(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-vertical-item');
        if (items[itemPosition]) {
            return items[itemPosition].getAttribute('class') === 'rainbow-vertical-item rainbow-vertical-item--active';
        }
        return false;
    }
}

module.exports = PageVerticalNavigation;