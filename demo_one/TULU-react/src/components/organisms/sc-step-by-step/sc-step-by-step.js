/* global Splide */
class StepByStep {
  init() {
    const sliderList = document.querySelectorAll('.sc-step-by-step');
    if (sliderList.length) {
      sliderList.forEach(element => {
        // Check if the slider was already loaded from tabs-need.js file
        if (!element.getAttribute('data-splide-slider-added')) {
          const mainSlider = element.querySelector('.sc-step-by-step__slider');
          const thumbnailSlider = element.querySelector('.sc-step-by-step__slider-content');

          if (mainSlider && thumbnailSlider) {
            const arrows = element.classList.contains('sc-step-by-step--with-arrow') ?? false;
            this.setupSplide(mainSlider, thumbnailSlider, arrows);
            const wrapper = element.closest('.sc-tab__tab-wrapper');

            if (wrapper) wrapper.setAttribute('data-splide-slider-added', 'true');
          }
        }
      });
    }
  }

  setupSplide(mainSlider, thumbnailSlider, arrows) {
    const deviceWidth = 1024;
    const main = new Splide(mainSlider, {
      pagination: window.innerWidth <= deviceWidth, // Enable pagination if on mobile
      arrows: arrows,
      breakpoints: {
        [deviceWidth]: {
          focus: 'center',
          gap: 16
        }
      }
    });

    const thumbnails = new Splide(thumbnailSlider, {
      rewind: true,
      isNavigation: true,
      arrows: false,
      autoplay: true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10
      },
      breakpoints: {
        [deviceWidth]: {
          pagination: true
        }
      }
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  }
}

const instance = new StepByStep();
window.addEventListener('load', () => instance.init());

export default instance;
