/* global Splide */
class ScMembership {
  init() {
    const splideElement = document.querySelector('.sc-membership-tier__slider');
    const splide = new Splide(splideElement);
    const buttons = document.querySelectorAll('.sc-membership-tier__slide-btns li');

    // Update header based on the selected card class
    function updateButtonAndHeader(card, newIndex) {
      var cardHead = card.getAttribute('data-card-head');
      var cardName = card.getAttribute('data-card');
      const cardHeadDiv = document.querySelector('.sc-membership-tier__header');
      cardHeadDiv.innerHTML = cardHead;
      cardHeadDiv.setAttribute('class', 'sc-membership-tier__header');
      var cardheadClass = 'sc-membership-tier__header--' + cardName;
      cardHeadDiv.classList.add(cardheadClass);

      // Update the active button
      buttons.forEach((button, index) => {
        if (index === newIndex) {
          button.classList.add('sc-membership-tier__slide-btn--active');
        } else {
          button.classList.remove('sc-membership-tier__slide-btn--active');
        }
      });

      // Update the active slide
      splideElement.querySelectorAll('.splide__slide').forEach((slide, index) => {
        if (index === newIndex) {
          slide.classList.add('sc-membership-tier__card--active');
        } else {
          slide.classList.remove('sc-membership-tier__card--active');
        }
      });
    }
    splide.on('move', function(newIndex) {
      const activeSlide = splide.Components.Elements.slides[newIndex]; // Get the active slide element
      if (activeSlide) {
        updateButtonAndHeader(activeSlide, newIndex);
      }
    });

    // Add click event for buttons
    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        splide.go(index); // Move to the corresponding slide
      });
    });

    splide.mount();

    // Add click event for desktop interaction
    splideElement.querySelectorAll('.splide__slide').forEach((card, index) => {
      card.addEventListener('click', function() {
        updateButtonAndHeader(card, index);
        splide.go(index);
      });
    });
  }
}

const instance = new ScMembership();
window.addEventListener('load', () => instance.init());
export default instance;
