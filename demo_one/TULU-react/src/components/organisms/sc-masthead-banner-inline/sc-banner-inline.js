import { matchHeight } from '../../../js/sc-common-methods';

class ScBannerInline {
  init() {
    let inlineBanners = document.getElementsByClassName('sc-banner--inline');
    if (!inlineBanners.length) {
      return;
    }

    for (let i = 0; i < inlineBanners.length; i++) {
      if (i % 2 === 0) {
        inlineBanners[i].classList.add('sc-banner--inline-left');
      }
    }

    // Remove height set to make the divs to have same height in mobile.
    const removeMatchHeight = () => {
      let inlineBannersContent = document.getElementsByClassName('sc-content-wrapper');
      for (let i = 0; i < inlineBannersContent.length; i++) {
        inlineBannersContent[i].style.height = 'auto';
      }
    };

    if (window.matchMedia('screen and (min-width:1024px)').matches) {
      matchHeight('.sc-banner--inline .sc-content-wrapper');
    }

    if (window.matchMedia('screen and (max-width:1023px)').matches) {
      removeMatchHeight();
    }

    // Apply height when switching from mobile to desktop.
    try {
      window.matchMedia('screen and (min-width:1024px)').addEventListener('change', mql => {
        if (mql.matches) {
          matchHeight('.sc-banner--inline .sc-content-wrapper');
        }
      });
      window.matchMedia('screen and (max-width:1023px)').addEventListener('change', mql => {
        if (mql.matches) {
          removeMatchHeight();
        }
      });
    } catch (e) {
      window.matchMedia('screen and (min-width:1024px)').addListener('change', mql => {
        // For older and IE browsers
        if (mql.matches) {
          matchHeight('.sc-banner--inline .sc-content-wrapper');
        }
      });
      window.matchMedia('screen and (max-width:1023px)').addListener('change', mql => {
        // For older and IE browsers
        if (mql.matches) {
          removeMatchHeight();
        }
      });
    }
  }
}

const instance = new ScBannerInline();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});

export default instance;
