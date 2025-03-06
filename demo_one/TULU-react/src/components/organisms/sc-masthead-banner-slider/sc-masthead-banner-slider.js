/* global Splide */
import { handleAnalyticsCTA } from '../../../js/sc-common-methods';

class ScBanner {
  init() {
    const that = this;
    const paginationEnabled = window.innerWidth <= 1024;

    // Select all main slider containers
    const mainSliders = document.querySelectorAll('.sc-banner-slider__container');

    mainSliders.forEach(mainSliderElement => {
      const closest = mainSliderElement.closest('.sc-banner-slider__wrapper');
      const mainSlider = new Splide(mainSliderElement, {
        cover: true,
        arrows: false, // Hide arrows
        pagination: paginationEnabled, // Enable pagination based on screen width
        autoplay: true, // Enable autoplay initially
        interval: 7000 // Set autoplay interval (e.g., 7 seconds)
      }).mount();

      // Find the corresponding thumbnail slider (if it exists)
      const thumbnailSliderElement = closest?.querySelector('.sc-banner-slider__thumbnail');
      let thumbnailSlider;

      if (thumbnailSliderElement && window.innerWidth > 1024) {
        thumbnailSlider = new Splide(thumbnailSliderElement, {
          fixedWidth: 165,
          fixedHeight: 68,
          cover: true,
          isNavigation: true,
          arrows: false // Hide arrows
        }).mount();

        mainSlider.sync(thumbnailSlider);
      }

      // Listen for the slide change event
      mainSlider.on('moved', newIndex => {
        const currentSlide = mainSlider.Components.Slides.getAt(newIndex);
        const tabId = currentSlide.slide.getAttribute('data-banner-thumb');
        that.updateContentSections(mainSliderElement, tabId);
      });

      // Initial content update
      const initialSlide = mainSlider.Components.Slides.getAt(mainSlider.index);
      if (initialSlide) {
        const initialTabId = initialSlide.slide.getAttribute('data-banner-thumb');
        that.updateContentSections(mainSliderElement, initialTabId);
      }

      // Tab-based content display setup
      const bannerPrlz = closest.querySelectorAll('[data-banner-thumb]');
      bannerPrlz.forEach(bnrItems => {
        bnrItems.addEventListener('click', event => {
          event.preventDefault();
          const tabId = bnrItems.getAttribute('data-banner-thumb');
          that.updateContentSections(mainSliderElement, tabId);
        });
      });

      // Handle analytics
      const benefitsTab = closest.querySelectorAll('.sc-banner-slider__thumbnail a');
      benefitsTab.forEach(el => {
        el.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          handleAnalyticsCTA(event); // Handle analytics for the tab click
        });
      });

      // Disable autoplay on certain interactions
      const bannerPrznBlock = mainSliderElement
        .closest('.sc-banner-slider')
        .querySelector('.sc-banner-przn-block');
      if (bannerPrznBlock) {
        bannerPrznBlock.addEventListener('click', () => {
          if (mainSlider) {
            mainSlider.options.autoplay = false; // Disable autoplay
            mainSlider.Components.Autoplay.pause(); // Pause autoplay immediately
          }
        });
      }

      //Remove normal slider class
      if (bannerPrznBlock) {
        const scBannerSlider = mainSliderElement.closest('.sc-banner-slider');
        if (scBannerSlider) {
          scBannerSlider.classList.remove('sc-banner-slider--normal');
        }
      }

      const thumbnailSlides = closest.querySelectorAll(
        '.sc-banner-slider__thumbnail .splide__slide'
      );
      thumbnailSlides.forEach(slide => {
        slide.addEventListener('click', () => {
          if (mainSlider) {
            mainSlider.options.autoplay = false; // Disable autoplay
            mainSlider.Components.Autoplay.pause(); // Pause autoplay immediately
          }
        });
      });
    });
  }

  /**
   * Function to update content sections based on the current slide or tab
   */
  updateContentSections(container, tabId) {
    if (!tabId) return; // Guard clause
    const contentSections = container
      .closest('.sc-banner-slider')
      .querySelectorAll('[data-banner-change-content]');
    contentSections.forEach(content => {
      content.getAttribute('data-banner-change-content') === tabId
        ? content.classList.add('sc-banner-przn-block__col--show')
        : content.classList.remove('sc-banner-przn-block__col--show');
    });
  }
}

const instance = new ScBanner();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});

export default instance;
