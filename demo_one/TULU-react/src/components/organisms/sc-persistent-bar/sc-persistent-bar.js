import { handlePersistentBarScroll } from '../../../../../nitro/src/js/sc-common-methods';

class ScPersistentBar {
  init() {
    const that = this;
    // Initial checks
    handlePersistentBarScroll();
    that.handleResize();

    window.addEventListener('scroll', () => {
      handlePersistentBarScroll();
    });
    window.addEventListener('resize', () => {
      that.handleResize();
    });
  }

  /**
   * Handles the resize event and adjusts button size based on the screen width.
   */
  handleResize() {
    const button = document.querySelector('button');
    const screenWidth = window.innerWidth;

    if (screenWidth < 680) {
      button.classList.remove('sc-btn--medium');
      button.classList.add('sc-btn--small');
    } else {
      button.classList.remove('sc-btn--small');
      button.classList.add('sc-btn--medium');
    }
  }
}

const instance = new ScPersistentBar();
instance.init();

export default instance;
