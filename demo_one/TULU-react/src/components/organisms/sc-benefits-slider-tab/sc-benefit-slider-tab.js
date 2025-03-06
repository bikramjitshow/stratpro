/* global Splide */
import { handleAnalyticsCTA } from '../../../js/sc-common-methods';

class ScBenefitsSliderTab {
  init() {
    if (window.innerWidth > 1024) {
      var mainSlider = new Splide('.sc-benefits-slider-tab__contents-0', {
        cover: true
      }).mount();

      var thumbnailSlider = new Splide('.sc-benefits-slider-tab__tabs-0', {
        gap: '8px',
        fixedWidth: '165px',
        isNavigation: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10
        }
      }).mount();

      mainSlider.sync(thumbnailSlider);
    }

    //Handle analytics
    const benefitsTab = document.querySelectorAll('.sc-benefits-slider-tab__tab a');
    benefitsTab.forEach(el => {
      el.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        //Handle analytics for the tab click
        handleAnalyticsCTA(event);
      });
    });
  }
}

const instance = new ScBenefitsSliderTab();
window.addEventListener('load', function() {
  instance.init();
});

export default instance;
