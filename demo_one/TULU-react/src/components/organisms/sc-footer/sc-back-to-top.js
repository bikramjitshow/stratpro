import { handleAnalyticsCTA, getOuterHeight } from '../../../js/sc-common-methods';

class backToTop {
  init() {
    const that = this;
    that.backToTopButton = document.querySelector('.sc-footer__back-to-top');
    if (!that.backToTopButton) return;
    document.addEventListener('scroll', () => {
      setTimeout(() => {
        that.handleScroll();
      }, 20);
    });

    that.backToTopButton.addEventListener('click', function(event) {
      //Handle analytics for the tab click
      handleAnalyticsCTA(event, document.querySelector('.sc-footer__back-to-top'));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  handleScroll() {
    const that = this;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const chatBot = document.querySelector('.chat-text-box');
    const chatIcon = document.querySelector('.c2c_box_wrapper.c2c_right_position');
    let persistentBarHeight = 0;
    const persistentBar = document.querySelector('.sc-persistent-bar--show');
    if (persistentBar) {
      persistentBarHeight = getOuterHeight(persistentBar);
    }

    if (scrollPosition >= 1000) {
      that.backToTopButton.classList.add('sc-footer__back-to-top--show');
      if (chatBot)
        that.backToTopButton.style.bottom =
          (windowWidth >= 768 ? 120 : 110) + persistentBarHeight + 'px';
      else if (chatIcon)
        that.backToTopButton.style.bottom =
          (windowWidth >= 768 ? 110 : 100) + persistentBarHeight + 'px';

      that.backToTopButton.style.bottom =
        (windowWidth >= 768 ? 20 : 30) + persistentBarHeight + 'px';
    } else {
      that.backToTopButton.classList.remove('sc-footer__back-to-top--show');
      that.backToTopButton.style.bottom = '-100px';
    }
  }
}

const instance = new backToTop();
window.addEventListener('load', function() {
  instance.init();
});

export default instance;
