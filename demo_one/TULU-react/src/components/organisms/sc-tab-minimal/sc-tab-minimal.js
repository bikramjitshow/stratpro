import {
  handleAnalyticsCTA,
  getPageContext,
  getQueryParam,
  getOuterHeight,
  smoothScroll,
  getPosition
} from '../../../js/sc-common-methods';
window.parameterTabExist = false;
window.scNeedModuleClassAdded = false;
class ScTabMinimal {
  init() {
    const that = this;
    const tabContainers = document.querySelectorAll('.sc-tab-minimal');
    that.contentLoaded = false;
    if (!tabContainers.length) return;
    tabContainers.forEach(container => {
      const tabButtons = container.querySelectorAll('.sc-tab-minimal__head-button');
      const tabContents = container.querySelectorAll('.sc-tab-minimal__content-item');
      const tabText = container.querySelector('.sc-tab-minimal__head-text');
      const tabSplide = container.querySelector('.sc-tab-minimal__head .splide');
      const tabSplideButtons = tabSplide.querySelectorAll('.sc-tab-minimal__head-button');
      if (container.classList.contains('sc-tab-minimal--drop-down') && tabText) {
        tabText.addEventListener('click', () => {
          tabSplide.style.display = 'block';
        });

        tabSplideButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            tabText.innerText = btn.innerText;
            tabSplide.style.display = 'none';
          });
        });
      }

      tabButtons.forEach(button => {
        button.addEventListener('click', event => {
          const tabId = button.getAttribute('data-tab-btn-id');

          // Remove 'active' class from all tab buttons and contents
          tabButtons.forEach(btn => btn.classList.remove('sc-tab-minimal__head-button--active'));
          tabContents.forEach(content =>
            content.classList.remove('sc-tab-minimal__content-item--active')
          );

          // Add 'active' class to the clicked button and its corresponding content
          button.classList.add('sc-tab-minimal__head-button--active');
          container
            .querySelector(`.sc-tab-minimal__content-item[data-tab-content='${tabId}']`)
            .classList.add('sc-tab-minimal__content-item--active');

          if (that.contentLoaded) {
            handleAnalyticsCTA(event, event.target.closest('.sc-tab-minimal__head-button'), {
              ctaType: 'tab'
            });
          }
        });
      });
    });

    // method is used to hide '.sc-tab-minimal__head .splide' when we click outside container anywhere
    document.addEventListener('click', event => {
      // Loop through all tab containers to ensure each `tabSplide` is checked
      tabContainers.forEach(container => {
        const tabSplide = container.querySelector('.sc-tab-minimal__head .splide');
        const tabText = container.querySelector('.sc-tab-minimal__head-text');
        if (
          tabText &&
          tabSplide &&
          !tabSplide.contains(event.target) &&
          !tabText.contains(event.target)
        ) {
          tabSplide.style.display = 'none'; // Hide the Splide dropdown when clicking outside
        }
      });
    });
    document.querySelectorAll('.sc-tab-minimal--underline').forEach(container => {
      let currentTab = 0;
      const tabContent = container.querySelectorAll('.sc-tab-minimal__content-item');
      const tabButtons = container.querySelectorAll('.sc-tab-minimal__head-button');
      const prevBtn = container.querySelector('.splide__arrow--prev');
      const nextBtn = container.querySelector('.splide__arrow--next');

      const showTab = n => {
        tabContent.forEach(tab => tab.classList.remove('sc-tab-minimal__content-item--active'));
        tabButtons.forEach(button =>
          button.classList.remove('sc-tab-minimal__head-button--active')
        );
        tabContent[n].classList.add('sc-tab-minimal__content-item--active');
        tabButtons[n].classList.add('sc-tab-minimal__head-button--active');
        currentTab = n;
        updateButtons();
      };

      const prevTab = () => {
        if (currentTab > 0) {
          showTab(currentTab - 1);
        }
      };

      const nextTab = () => {
        if (currentTab < tabContent.length - 1) {
          showTab(currentTab + 1);
        }
      };

      const updateButtons = () => {
        if (prevBtn) {
          prevBtn.disabled = currentTab === 0;
          setTimeout(function() {
            prevBtn.disabled = currentTab === 0;
          }, 600);
        }
        if (nextBtn) {
          nextBtn.disabled = currentTab === tabContent.length - 1;
          setTimeout(function() {
            nextBtn.disabled = currentTab === tabContent.length - 1;
          }, 600);
        }
      };

      // Show the initial tab
      showTab(0);

      // Attach event listeners to prev and next buttons if they exist
      if (prevBtn) {
        prevBtn.addEventListener('click', prevTab);
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', nextTab);
      }

      // Attach event listeners to tab buttons
      tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => showTab(index));
      });
    });

    this.handleTabActivation();
    this.handleScrollTabs();
  }

  /**
   * Handles the activation of tabs based on query parameters in the URL.
   * This function iterates over elements with the `data-query-parameter-tab` attribute,
   * checks for matching query parameter values, and activates the corresponding tab.
   */
  handleTabActivation() {
    const that = this;
    const queryString = getPageContext().queryString;
    const paramTabs = document.querySelectorAll('[data-query-parameter-tab]');
    paramTabs.forEach(paramTab => {
      const value = getQueryParam(queryString, paramTab.getAttribute('data-query-parameter-tab'));
      if (value) {
        const targetTab = document.querySelector(`[data-query-parameter-value='${value}']`);
        if (targetTab) {
          targetTab.querySelector('.sc-tab-minimal__head-button').click();
          const megaNav = document.querySelector('.sc-meganav');
          smoothScroll(targetTab, 500, getOuterHeight(megaNav));
          window.parameterTabExist = true;
        }
      }
    });
    that.contentLoaded = true;
  }
  handleScrollTabs() {
    const tabSticky = document.querySelector('.sc-tab-minimal--sticky');
    const tabButtons = document.querySelectorAll('.sc-tab-minimal__head-button');
    const contentWrapper = document.querySelector('.sc-tab-minimal__content');
    const splideCls = document.querySelector('.sc-tab-minimal__head .splide');
    const device = document.documentElement.clientWidth || document.body.clientWidth;
    const topPosition = contentWrapper ? getPosition(contentWrapper) : 0;
    const deviceHeight = 0;

    if (!tabSticky || !tabButtons.length || !contentWrapper || !splideCls) return;

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        splideCls.classList.remove('sc-tab-minimal__fixed');
        window.scrollTo({
          top: topPosition - 200
        });
      });
    });
    window.addEventListener('scroll', function() {
      let divHeight = contentWrapper ? contentWrapper.clientHeight : 0;
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      scrollTop += device < 768 ? 10 : 120;
      if (
        scrollTop > topPosition &&
        scrollTop < topPosition + divHeight - 150 &&
        !window.scNeedModuleClassAdded
      ) {
        //true if inside the content
        window.scNeedModuleClassAdded = true;
        if (tabSticky) {
          splideCls.classList.add('sc-tab-minimal__fixed');
        }
      } else if (scrollTop > topPosition + divHeight - 100 && window.scNeedModuleClassAdded) {
        //true if scroll and pass the content
        window.scNeedModuleClassAdded = false;
        splideCls.classList.remove('sc-tab-minimal__fixed');
      } else if (scrollTop <= topPosition - deviceHeight && window.scNeedModuleClassAdded) {
        //outside of the content
        window.scNeedModuleClassAdded = false;
        splideCls.classList.remove('sc-tab-minimal__fixed');
      } else if (scrollTop <= 10 && window.scNeedModuleClassAdded) {
        window.scNeedModuleClassAdded = false;
        splideCls.classList.remove('sc-tab-minimal__fixed');
      }
    });
  }
}

const instance = new ScTabMinimal();
instance.init();
export default instance;
