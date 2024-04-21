// document.addEventListener('DOMContentLoaded', function() {
//   var main = new Splide('.sc-cc-products-info__slider-0', {
//     pagination: false,
//     arrows: false,
//     slideFocus: false
//   });

//   console.log(main)
//   var thumbnails = new Splide('.sc-cc-products-info__slider-content-0', {
//     autoWidth: true,
//     arrows: false,
//     rewind: false,
//     pagination: false,
//     isNavigation: true,
//     slideFocus: false
//   });

//   main.sync(thumbnails);
//   main.mount();
//   thumbnails.mount();
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const cardTiles = document.querySelectorAll('.sc-cc-card-tile');

//   cardTiles.forEach(cardTile => {
//     cardTile.addEventListener('mouseover', function() {
//       // Remove the class from all card tiles
//       cardTiles.forEach(tile => {
//         tile.classList.remove('sc-cc-products-info__hovered');
//       });
//       // Add the class to the hovered card tile
//       this.classList.add('sc-cc-products-info__hovered');
//     });
//   });
// });




class CCProducts {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeSlider();
      this.initializeHoverEffect();
    });
  }

  initializeSlider() {
    const main = new Splide('.sc-cc-products-info__slider-0', {
      pagination: false,
      arrows: false,
      slideFocus: false
    });

    const thumbnails = new Splide('.sc-cc-products-info__slider-content-0', {
      autoWidth: true,
      arrows: false,
      rewind: false,
      pagination: false,
      isNavigation: true,
      slideFocus: false
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    console.log(main);
  }

  initializeHoverEffect() {
    const cardTiles = document.querySelectorAll('.sc-cc-card-tile');

    cardTiles.forEach(cardTile => {
      cardTile.addEventListener('mouseover', () => {
        // Remove the class from all card tiles
        cardTiles.forEach(tile => {
          tile.classList.remove('sc-cc-products-info__hovered');
        });
        // Add the class to the hovered card tile
        cardTile.classList.add('sc-cc-products-info__hovered');
      });
    });
  }
}

// Create an instance of CCProducts
const ccProductsInstance = new CCProducts();
ccProductsInstance.init();
