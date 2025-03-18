import { smoothScroll, handleAnalyticsCTA } from '../../../js/sc-common-methods';
class ScProductTileTab {
  init() {
    const boxes = document.querySelectorAll('.sc-product-boxes-tile__box[data-tab-target]');
    boxes.forEach(box => {
      box.addEventListener('click', () => {
        // Remove the 'sc-product-boxes-tile__inner--active' class from all boxes
        boxes.forEach(otherBox => {
          const inner = otherBox.querySelector('.sc-product-boxes-tile__inner');
          if (inner) {
            inner.classList.remove('sc-product-boxes-tile__inner--active');
          }
        });

        // Add the 'sc-product-boxes-tile__inner--active' class to the clicked box
        const inner = box.querySelector('.sc-product-boxes-tile__inner');
        if (inner) {
          inner.classList.add('sc-product-boxes-tile__inner--active');
        }
      });
    });
    // Hide all corresponding divs except the first
    boxes.forEach((box, index) => {
      const targetId = box.getAttribute('data-tab-target');
      if (targetId) {
        const targetDiv = document.querySelector(targetId);
        if (targetDiv) {
          if (index !== 0) {
            targetDiv.classList.add('sc-hide');
          }
        }
      }
    });

    // Add click event listener to show corresponding div and sc-hide others
    boxes.forEach(box => {
      box.addEventListener('click', function(event) {
        const targetId = box.getAttribute('data-tab-target');
        if (targetId) {
          const targetDiv = document.querySelector(targetId);
          if (targetDiv) {
            // Hide all corresponding divs
            boxes.forEach(innerBox => {
              const innerTargetId = innerBox.getAttribute('data-tab-target');
              if (innerTargetId) {
                const innerTargetDiv = document.querySelector(innerTargetId);
                if (innerTargetDiv) {
                  innerTargetDiv.classList.add('sc-hide');
                }
              }
            });

            // Show the clicked tab's corresponding div
            targetDiv.classList.remove('sc-hide');
            const pagination = targetDiv.querySelectorAll('.splide__pagination li');
            if (pagination.length > 1) {
              targetDiv.querySelector('.splide__pagination').style.display = 'flex';
            }
          }
        }
        const selectedElement = document.querySelector(targetId);
        if (selectedElement) {
          smoothScroll(selectedElement, 500, 60);
        }

        const closest = event.target.closest('.sc-product-boxes-tile__box[data-tab-target]');
        const textElement =
          closest.querySelector('.sc-product-boxes-tile__box-title') ||
          closest.querySelector('.sc-product-boxes-tile__box-desc');
        handleAnalyticsCTA(event, textElement, { ctaPosition: 'tab' });
      });
    });
  }
}

const instance = new ScProductTileTab();
window.addEventListener('load', () => instance.init());
export default instance;
