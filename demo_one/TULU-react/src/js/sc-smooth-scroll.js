import { smoothScroll, handleAnalyticsCTA, getOuterHeight } from './sc-common-methods';

class ScSmoothScroll {
  init() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length) {
      anchors.forEach(el => {
        el.addEventListener('click', event => {
          const closest = event.target.closest('a');
          const href = closest.getAttribute('href');
          if (href && href !== '#' && href !== '#null') {
            event.preventDefault();
            event.stopPropagation();
            //Handle analytics for the tab click
            handleAnalyticsCTA(event);
            let adjust = 0;
            const meganav = document.querySelector('.sc-meganav__nav');
            if (meganav) {
              adjust += getOuterHeight(meganav);
            }

            const scSelection = event.target.closest('.sc-selection');
            if (scSelection) {
              adjust += getOuterHeight(scSelection.querySelector('.sc-selection__selected'));
            }

            const selectedId = document.querySelector(href);
            if (selectedId) {
              smoothScroll(selectedId, 500, adjust);
            }
          }
        });
      });
    }
  }
}

const instance = new ScSmoothScroll();
instance.init();

export default instance;
