/* global Splide */
import {
  handleAnalyticsCTA,
  getPageContext,
  getQueryParam,
  smoothScroll,
  getOuterHeight
} from '../../../js/sc-common-methods';

class ScRightTab {
  init() {
    const that = this;
    // Select all main slider containers and their corresponding thumbnail containers
    that.contentLoaded = false;
    document.querySelectorAll('.sc-right-tab__contents-0').forEach((mainSlider, index) => {
      const thumbnailSlider = document.querySelectorAll('.sc-right-tab__tabs-0')[index];

      if (thumbnailSlider) {
        // Initialize the main slider
        const mainSliderTab = new Splide(mainSlider, {
          cover: true,
          drag: false
        }).mount();

        // Initialize the thumbnail slider
        const thumbnailSliderInstance = new Splide(thumbnailSlider, {
          gap: '8px',
          fixedWidth: '165px',
          isNavigation: true,
          dragMinThreshold: {
            mouse: 4,
            touch: 10
          },
          breakpoints: {
            1024: {
              fixedWidth: '125px'
            }
          }
        }).mount();

        // Sync the main slider with the thumbnail slider
        mainSliderTab.sync(thumbnailSliderInstance);
      }
    });

    //Handle analytics
    const benefitsRighTab = document.querySelectorAll('.sc-right-tab__tab a');
    benefitsRighTab.forEach(el => {
      el.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        //Handle analytics for the tab click
        if (that.contentLoaded) {
          handleAnalyticsCTA(event, '', { ctaType: 'tab' });
        }
      });
    });

    that.handleRightTabActivation();
  }

  /**
   * Handles the activation of right-aligned tabs based on query parameters in the URL.
   * This function identifies elements with the `data-query-parameter-right-tab` attribute,
   * checks for corresponding query parameter values, and activates the appropriate tab.
   *
   * If no prior tab scroll action is detected, it scrolls smoothly to the activated tab.
   */
  handleRightTabActivation() {
    const that = this;
    const queryString = getPageContext().queryString;
    const paramTabs = document.querySelectorAll('[data-query-parameter-right-tab]');
    paramTabs.forEach(paramTab => {
      const value = getQueryParam(
        queryString,
        paramTab.getAttribute('data-query-parameter-right-tab')
      );
      if (value) {
        const targetTab = document.querySelector(`[data-query-parameter-right-value='${value}']`);
        if (targetTab) {
          targetTab.click();
          if (!window.parameterTabExist) {
            //True if tab scroll not exist
            const megaNav = document.querySelector('.sc-meganav');
            smoothScroll(targetTab.closest('.sc-right-tab__tab'), 500, getOuterHeight(megaNav));
          }
          window.parameterTabExist = true;
        }
      }
    });
    that.contentLoaded = true;
  }
}

const instance = new ScRightTab();
window.addEventListener('load', function() {
  instance.init();
});

export default instance;
