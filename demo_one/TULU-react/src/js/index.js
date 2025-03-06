import Splide from '../../node_modules/@splidejs/splide/dist/js/splide';
import './smart-app-banner';
import './sg-common-event-listener';
import { detectOS } from './sc-common-methods';
import './form-url';
import './cta-mobile';
import '../components/organisms/sc-footer/sc-back-to-top';
import '../components/organisms/sc-modal/sc-modal';
import '../components/organisms/sc-meganav/sc-meganav';
import './sc-smooth-scroll';

// Make Splide globally accessible
window.Splide = Splide;

class Index {
  init() {
    this.handlePlayAppStore();
    this.handleTooltip();

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Tab') {
        // Add the .sc-tab-focus class to the body tag
        document.body.classList.add('sc-tab-focus');
      }
    });

    //Splide slider added
    const elms = document.getElementsByClassName('splide');
    setTimeout(() => {
      Array.from(elms).forEach(elm => {
        const tabsClosest = elm.closest('.sc-tab__tab-wrapper');
        if (
          !elm.classList.contains('sc-banner-slider__container') &&
          !elm.classList.contains('sc-step-by-step__slider') &&
          !elm.querySelector('.sc-step-by-step__slider-content') &&
          !tabsClosest
        ) {
          const splideInst = new Splide(elm).mount();
          splideInst.on('click', function(slide) {
            // apply "go" method: slide to the index of the clicked slide (component)
            splideInst.go(slide.index);
          });
        }
      });
    }, 500);

    document.querySelectorAll('a[target="_blank"]').forEach(function(anchor) {
      anchor.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /**
   * based on devices, toggle app store or play store
   */
  handlePlayAppStore() {
    const os = detectOS();
    const appStoreLinks = document.querySelectorAll('.icon-app-store');
    const playStoreLinks = document.querySelectorAll('.icon-google-play');

    if (os === 'iOS') {
      // Show iOS app store links and hide Android app store links
      Array.from(appStoreLinks).forEach(link => {
        link.style.display = 'inline-flex';
      });
      Array.from(playStoreLinks).forEach(link => {
        link.style.display = 'none';
      });
    } else if (os === 'Android') {
      // Show Android app store links and hide iOS app store links
      Array.from(appStoreLinks).forEach(link => {
        link.style.display = 'none';
      });
      Array.from(playStoreLinks).forEach(link => {
        link.style.display = 'inline-flex';
      });
    }
  }

  /**
   * Initializes tooltips for elements with the 'sc-tooltip' class.
   * This function enables showing tooltip text on focus and hiding it on blur,
   * enhancing accessibility for keyboard navigation.
   */
  handleTooltip() {
    const tooltips = document.querySelectorAll('.sc-tooltip');
    if (tooltips.length) {
      tooltips.forEach(tooltip => {
        // When focused, display the tooltip text
        tooltip.addEventListener('focus', () => {
          const tooltipText = tooltip.querySelector('.sc-tooltip__text');
          tooltipText?.classList.add('sc-tooltip__text--active');
        });

        // When focus is removed, hide the tooltip text
        tooltip.addEventListener('blur', () => {
          const tooltipText = tooltip.querySelector('.sc-tooltip__text');
          tooltipText?.classList.remove('sc-tooltip__text--active');
        });
      });
    }
  }
}

const instance = new Index();
instance.init();

export default instance;
