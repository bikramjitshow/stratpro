import {
  getCurrentCountry,
  handleAnalyticsCTA,
  getOuterHeight
} from '../../../js/sc-common-methods';

class ScColumnWithTabs {
  init() {
    const that = this;
    that.columnTab = document.querySelector('.sc-column-with-tabs');
    if (!that.columnTab) return;
    that.previousMaxHeight = 0;
    window.addEventListener('resize', () => {
      that.updateMaxHeight();
      that.updateMaxWidth();
    });
    that.setupTileHover();
    that.handleMainTabs();
    that.handleChildTabs();
    this.updateMaxHeight();
    that.updateMaxWidth();
    const mktCountryCode = getCurrentCountry();
    that.ctaType = mktCountryCode === 'sg' || mktCountryCode === 'hk' ? 'tab' : 'tabs';
  }

  handleMainTabs() {
    const that = this;
    const mainTabs = that.columnTab.querySelectorAll(
      '.sc-column-with-tabs__content-wrapper .sc-column-with-tabs__tab'
    );
    if (!mainTabs.length) return;

    mainTabs.forEach(mainTab => {
      mainTab.addEventListener('click', event => {
        const parentClosest = event.target.closest('.sc-column-with-tabs__content-wrapper');
        const closest = event.target.closest('.sc-column-with-tabs__tab');
        that.removeActiveClasses(parentClosest, 'sc-column-with-tabs__tab--active');

        event.target.classList.add('sc-column-with-tabs__tab--active');

        //Display tab content
        const contentId = closest.getAttribute('data-column-tab-id');
        const content = parentClosest.querySelector(`[data-column-tab-content='${contentId}']`);
        if (content) {
          that.removeActiveClasses(parentClosest, 'sc-column-with-tabs__tab-content--show');
          content.classList.add('sc-column-with-tabs__tab-content--show');
        }

        //Remove all active class from child tab
        const childParentList = content.querySelectorAll('.sc-column-with-tabs__tab-inner-list');
        console.log('childParentList', childParentList.length);
        if (childParentList.length) {
          childParentList.forEach(childParent => {
            that.removeActiveClasses(childParent, 'sc-column-with-tabs__tab-inner--active');
            that.removeActiveClasses(childParent, 'sc-column-with-tabs__tab-content--inner-show');

            childParent
              .querySelector('.sc-column-with-tabs__tab-inner')
              .classList.add('sc-column-with-tabs__tab-inner--active');
            childParent
              .querySelector('.sc-column-with-tabs__tab-inner-content')
              .classList.add('sc-column-with-tabs__tab-content--inner-show');
          });
        }

        handleAnalyticsCTA(event, closest, { ctaType: that.ctaType });
      });
    });
  }

  handleChildTabs() {
    const that = this;
    const childTabs = that.columnTab.querySelectorAll('.sc-column-with-tabs__tab-inner');
    if (!childTabs.length) return;
    childTabs.forEach(childTab => {
      childTab.addEventListener('click', event => {
        const parentClosest = event.target.closest('.sc-column-with-tabs__tab-inner-list');
        const closest = event.target.closest('.sc-column-with-tabs__tab-inner');
        that.removeActiveClasses(parentClosest, 'sc-column-with-tabs__tab-inner--active');
        that.removeActiveClasses(parentClosest, 'sc-column-with-tabs__tab-content--inner-show');

        closest.classList.add('sc-column-with-tabs__tab-inner--active');
        const contentId = closest.getAttribute('data-column-tab-id-inner');
        const content = parentClosest.querySelector(
          `[data-column-tab-content-inner='${contentId}']`
        );
        content.classList.add('sc-column-with-tabs__tab-content--inner-show');

        handleAnalyticsCTA(event, closest, { ctaType: that.ctaType });
      });
    });
  }

  removeActiveClasses(closest, className) {
    const activeClass = closest.querySelector(`.${className}`);
    if (activeClass) {
      activeClass.classList.remove(className);
    }
  }

  setupTileHover() {
    const that = this;
    const tiles = that.columnTab.querySelectorAll('.sc-column-with-tabs__tile');
    if (!tiles.length) return;

    tiles.forEach(tile => {
      tile.addEventListener('mouseenter', () => {
        tiles.forEach(t => t.classList.remove('sc-column-with-tabs__tile--active'));
        tile.classList.add('sc-column-with-tabs__tile--active');
        setTimeout(() => {
          this.updateMaxHeight();
        }, 300);
      });
    });
  }

  updateMaxHeight() {
    const that = this;
    const tiles = that.columnTab.querySelectorAll('.sc-column-with-tabs__tile');
    const investCards = that.columnTab.querySelectorAll(
      '.sc-column-with-tabs .sc-column-with-tabs__head'
    );

    if (window.matchMedia('(min-width: 1247px)').matches) {
      // Get all elements with the class '.sc-column-with-tabs__tile'

      // Find the maximum height
      let maxHeight = 0;
      investCards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });

      // Set the maxHeight as min-height for all cards
      investCards.forEach(card => {
        card.style.minHeight = `${maxHeight}px`;
      });

      // Check if any elements were found
      if (tiles.length > 0) {
        // Find the maximum height
        let maxHeight = 0;
        tiles.forEach(tile => {
          tile.removeAttribute('style');
        });

        tiles.forEach(tile => {
          maxHeight = Math.max(maxHeight, getOuterHeight(tile));
        });

        // Set the maximum height for all the tiles
        // Add transition to tiles
        tiles.forEach(tile => {
          tile.style.transition = 'height 0.3s ease-in-out, width 0.3s ease-in-out'; // Adjust timing and easing as desired
          tile.style.height = `${that.previousMaxHeight}px`; // Start from 0px
        });

        that.previousMaxHeight = maxHeight;
        // Trigger the animation
        setTimeout(() => {
          tiles.forEach(tile => {
            tile.style.height = `${maxHeight}px`; // Set height to maxHeight
          });
        }, 50);
      }
    } else {
      tiles.forEach(tile => {
        tile.removeAttribute('style');
      });
      investCards.forEach(investCard => {
        investCard.removeAttribute('style');
      });
    }
  }

  updateMaxWidth() {
    const that = this;
    // Get all the sc-column-with-tabs__content-wrapper div elements
    const contentWrappers = that.columnTab.querySelectorAll(
      '.sc-column-with-tabs__content-wrapper'
    );

    // Initialize variable to track the largest width
    let maxWidth = 0;

    contentWrappers.forEach(wrapper => {
      wrapper.removeAttribute('style'); // Apply the max width
    });

    // Loop through each element and find the largest width
    contentWrappers.forEach(wrapper => {
      const computedWidth = wrapper.offsetWidth; // Get the element's width
      if (computedWidth > maxWidth) {
        maxWidth = computedWidth; // Update maxWidth if a larger width is found
      }
    });

    // Set the largest width as the style for all elements
    contentWrappers.forEach(wrapper => {
      wrapper.style.width = `${maxWidth}px`; // Apply the max width
    });
  }
}

const instance = new ScColumnWithTabs();
instance.init();

export default instance;
