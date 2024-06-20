// Define the Atcasebanner class
class Atcasebanner {
  // init
  init() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    // let deviceWidth = this.numberOfCards(width); //Detect which types of device is using

    // DOMContentLoaded
    document.addEventListener("DOMContentLoaded", () => {
      // SLider Mounted
      this.sliderMount(width);

      // Pagination translatex effect
      const pages = document.querySelectorAll(
        ".sc-at-case-bnr__slider-pagination-btn"
      );
      if (pages.length) {
        console.log(pages);
        pages.forEach((page, i) => {
          page.addEventListener("click", () => {
            this.activeState(i);
          });
        });
      }
    });
  }

  // Get device Width
  // numberOfCards(deviceWidth) {
  //   if (deviceWidth < 681) {
  //     return 1; //Mobile support 1 cards
  //   } else if (deviceWidth < 1024) {
  //     return 2; //Mobile support 2 cards
  //   }
  //   return 3; //desktop, tabs, etc support 3 cards
  // }

  //SLider Mount
  sliderMount(devicewidth) {
    console.log(devicewidth);
    const splide = new Splide(".splide");
    const slides = document.querySelectorAll(
      ".sc-at-case-bnr__slide:not(.splide__slide--clone)"
    );
    if (slides.length) {
      slides.forEach((slide, index) => {
        splide.on("pagination:mounted", function (data) {
          console.log(data);
          // You can add your class to the UL element
          data.list.classList.add("sc-at-case-bnr__slider-pagination");

          // `items` contains all dot items
          data.items.forEach(function (item, i) {
            if (index == i) {
              console.log(item);
              console.log(slide.dataset);
              item.li.classList.add(
                "sc-at-case-bnr__slider-pagination-btn-wrap"
              );
              item.button.classList.add(
                "sc-at-case-bnr__slider-pagination-btn"
              );
              if (devicewidth > 767) {
                item.button.textContent = String(
                  slide.dataset.paginateTextWebsite
                );
              } else {
                item.button.textContent = String(
                  slide.dataset.paginateTextMobile
                );
              }
            }
          });
        });
      });
    }
    splide.mount();
  }

  // Pagination Active State
  activeState(id) {
    console.log(id);
    const paginationElement = document.querySelector(
      ".sc-at-case-bnr__slider-pagination"
    );
    const computedStyles = window.getComputedStyle(
      paginationElement,
      "::before"
    );
    const translateXValue = 100 * id + "%";
    console.log("translateX--", translateXValue);
    console.log("computedStyles--", computedStyles.transform);
    paginationElement.style.setProperty(
      "--transform-value",
      "translatex(" + translateXValue + ")"
    );
  }
}

// Export an instance of Atcasebanner class
const Instance = new Atcasebanner();
Instance.init();

// export default Instance;
