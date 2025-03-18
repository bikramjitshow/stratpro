import { handleAnalyticsCTA, smoothScroll } from '../../../js/sc-common-methods';
class ScFAQHorizontal {
  /**
   * Init function to be called on page load
   */
  init() {
    const parentThis = this;
    const labels = document.querySelectorAll('.sc-faq-horizontal__step-item');
    if (labels.length) {
      labels.forEach(elem => {
        elem.addEventListener('click', e => {
          parentThis.labelEvtCallback(e);
        });

        elem.addEventListener('keyup', function(e) {
          if (e.keyCode == 13 || e.keyCode == 32) {
            e.target
              .closest('.sc-faq-horizontal__content-wrapper')
              .querySelector('.sc-faq-horizontal__right-input').checked = true;
            parentThis.labelEvtCallback(e);
            handleAnalyticsCTA(e, e.target.closest('.sc-faq-horizontal__content-wrapper'));
          }
        });
      });
    }
  }
  /**
   * On click event callback function
   * @param {object} e
   * @example
   *
   * this.labelEvtCallback(e);
   *
   */
  labelEvtCallback(e) {
    const closest = e.target.closest('.sc-faq-horizontal__wrapper');
    const labels = closest.querySelectorAll('.sc-faq-horizontal__step-item');
    labels.forEach(el => {
      el.classList.remove('sc-faq-horizontal__step-item--active');
    });
    let labelFor = e.target.getAttribute('for');
    let selectedLabels = closest.querySelectorAll(`label[for=${labelFor}]`);
    selectedLabels.forEach(el => {
      el.classList.add('sc-faq-horizontal__step-item--active');
    });

    const windowWidth =
      window.innerWidth ?? document.documentElement.clientWidth ?? document.body.clientWidth;
    if (windowWidth <= 767) {
      setTimeout(() => {
        smoothScroll(e.target, 400, 80);
      }, 50);
    }
  }
}

const instance = new ScFAQHorizontal();
window.addEventListener('load', function() {
  instance.init();
});
export default instance;
