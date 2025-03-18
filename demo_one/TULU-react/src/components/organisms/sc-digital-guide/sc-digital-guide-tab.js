import { handleAnalyticsCTA } from '../../../js/sc-common-methods';

class ScDigitalGuide {
  init() {
    // Get all tab items
    const tabItems = document.querySelectorAll('[data-tab]');
    if (!tabItems.length) return;

    // Get all content sections
    const contentSections = document.querySelectorAll('[data-content]');

    // Add click event listener to each tab item
    tabItems.forEach(function(item) {
      item.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();
        event.stopPropagation();

        const closest = event.target.closest('a');

        // Get the data-tab value of the clicked tab
        const tabId = closest?.getAttribute('data-tab');

        // Remove 'content--show' class from all content sections
        contentSections.forEach(content => {
          content.classList.remove('sc-digital-guide__content-box--show');
        });

        // Hide all content sections
        contentSections.forEach(content => {
          if (content.getAttribute('data-content') === tabId) {
            // Show the content section corresponding to the clicked tab
            content.classList.add('sc-digital-guide__content-box--show');
          }
        });

        // Remove 'item--active' class from all tab items
        tabItems.forEach(tab => {
          tab.classList.remove('sc-digital-guide__tab-item--active');
        });

        // Add 'item--active' class to the clicked tab item
        closest?.classList.add('sc-digital-guide__tab-item--active');

        //Handle analytics for the tab click
        handleAnalyticsCTA(event);
      });
    });
  }
}

const instance = new ScDigitalGuide();
window.addEventListener('load', function() {
  instance.init();
});

export default instance;
