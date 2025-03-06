import { isMobile } from './sc-common-methods';
class CTAMobile {
  init() {
    const selectors = [
      '[data-mobile-href]',
      '[data-mobile-target]',
      '[data-mobile-data-modal-source]'
    ];

    if (isMobile()) {
      selectors.forEach(selector => this.convert(selector));
    }
  }

  /**
   * Converts data attributes on elements selected by the given selector.
   *
   * @param {string} selector - The CSS selector used to find elements.
   */
  convert(selector) {
    const elements = document.querySelectorAll(selector);
    // Removing square brackets from the selector to get the attribute name
    // eslint-disable-next-line no-useless-escape
    const dataAttr = selector.replace(/[\[\]]/g, '');
    const oDataAttr = dataAttr.replace('data-mobile-', '');

    if (elements.length === 0) return;

    elements.forEach(element => {
      const dataAttrValue = element.getAttribute(dataAttr);
      const oDataAttrValue = element.getAttribute(oDataAttr);

      if (dataAttrValue === '' || dataAttrValue === oDataAttrValue) {
        return;
      } else {
        element.setAttribute(oDataAttr, dataAttrValue);
        if (dataAttr === 'data-mobile-href') {
          element.removeAttribute('data-modal-source');
          element.removeAttribute('data-send');
        }
      }
    });
  }
}

const instance = new CTAMobile();
instance.init();
export default instance;
