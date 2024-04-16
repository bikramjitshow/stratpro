// Define the ProductListManager class
class AccountSelector {
  // init
  init() {
    var currentFilter; // selected filter item
    var limit; // onload card limit to show
    // Get the button
    this.myButton = document.querySelector(".sc-casa-product-list__scroll");
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let deviceWidth = this.numberOfCards(width); //Detect which types of device is using

    // Set initial style to "none"
    this.myButton.style.display = "none";

    this.myButton.addEventListener("click", () => {
      this.topFunction();
    });

    // When the user scrolls down 250px from the top of the document, show the button
    window.onscroll = () => this.scrollFunction();

    // Add an event listener for the window resize event
    window.onresize = () => {
      this.numberOfCards(width);
    };

    // DOMContentLoaded
    document.addEventListener("DOMContentLoaded", () => {
      limit = document
        .querySelector(".sc-casa-product-list")
        .getAttribute("data-limit");

      // Event listener for category clicks
      const categories = document.querySelectorAll(
        ".sc-casa-product-list__category"
      );
      if (categories.length) {
        categories.forEach((category) => {
          // Initialize by showing the first tab and first 6 offers
          this.showTab("all-accounts", limit, deviceWidth);
          currentFilter = "all-accounts";

          //each category clicks
          category.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = category.getAttribute("data-filter");
            currentFilter = filter;
            // this.setHeightSameTag(deviceWidth, currentFilter);
            this.topFunction();
            this.showTab(filter, limit, deviceWidth);
          });
        });
      }

      // Event listener for Load More click
      document
        .querySelector(".sc-casa-product-list__load-more")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.loadMore(currentFilter, deviceWidth);
          let loadMoreBtn = document.querySelector(
            ".sc-casa-product-list__load-more"
          );
          loadMoreBtn.style.display = "none";
        });
    });
  }

  // Get device Width
  numberOfCards(deviceWidth) {
    if (deviceWidth < 681) {
      return 1; //Mobile support 1 cards
    } else if (deviceWidth < 1024) {
      return 2; //Mobile support 2 cards
    }
    return 3; //desktop, tabs, etc support 3 cards
  }

  // Implementation for same height for row base cards
  setHeightSameTag(cardCount, filterCards) {
    // Get all the rows of card columns
    const rows = document.querySelectorAll(".sc-casa-product-list__row");
    if (rows.length) {
      rows.forEach((row) => {
        // Get all the card columns in the current row
        const cards = Array.from(filterCards);

        // Loop through the cards in groups of three
        for (let i = 0; i < cards.length; i += cardCount) {
          const group = cards.slice(i, i + cardCount); // Get a group of three cards
          // Calculate the maximum title height for the current group
          let maxGreenWrapperHeight = 0;
          let maxTitleHeight = 0;
          let maxDescriptionHeight = 0;

          group.forEach((card) => {
            if (card.style.display !== "none") {
              const greenWrapper = card.querySelector(
                ".sc-casa-product-list__green-wrapper"
              );
              const title = card.querySelector(".sc-casa-product-list__title");
              const description = card.querySelector(
                ".sc-casa-product-list__description"
              );

              if (greenWrapper) {
                maxGreenWrapperHeight = Math.max(
                  maxGreenWrapperHeight,
                  greenWrapper.offsetHeight
                );
              }
              if (title) {
                maxTitleHeight = Math.max(maxTitleHeight, title.offsetHeight);
              }
              if (description) {
                maxDescriptionHeight = Math.max(
                  maxDescriptionHeight,
                  description.offsetHeight
                );
              }
            }
          });

          // Apply the maximum title height to all cards in the current group
          group.forEach((card) => {
            if (card.style.display !== "none") {
              const greenWrapper = card.querySelector(
                ".sc-casa-product-list__green-wrapper"
              );
              const title = card.querySelector(".sc-casa-product-list__title");
              const description = card.querySelector(
                ".sc-casa-product-list__description"
              );
              if (greenWrapper) {
                greenWrapper.style.height = `${maxGreenWrapperHeight}px`;
              }
              if (title) {
                title.style.height = `${maxTitleHeight}px`;
              }
              if (description) {
                description.style.height = `${maxDescriptionHeight}px`;
              }
            }
          });
        }
      });
    }
  }

  // Implementation for show/filter account card-box method
  showTab(filter, limit, deviceWidth) {
    let loadMoreBtn = document.querySelector(
      ".sc-casa-product-list__load-more"
    );
    // Hide all product boxes
    const cols = document.querySelectorAll(".sc-casa-product-list__col");
    if (cols.length) {
      cols.forEach(function (box) {
        box.style.display = "none";
      });
    }

    // Show the selected category
    let allFilter = [];
    if (filter === "all-accounts") {
      const categories = document.querySelectorAll(
        ".sc-casa-product-list__category"
      );
      if (categories.length) {
        categories.forEach((category) => {
          const filter = category.getAttribute("data-filter");
          let allFilter2 = document.querySelectorAll(
            ".sc-casa-product-list__col[data-tags*='" + filter + "']"
          );
          allFilter.push(...allFilter2);
          let uniqData = new Set(allFilter);
          let filteredData = [...uniqData];
          setTimeout(() => {
            this.setHeightSameTag(deviceWidth, filteredData);
          }, 500);
        });
      }
    } else {
      allFilter = document.querySelectorAll(
        ".sc-casa-product-list__col[data-tags*='" + filter + "']"
      );
      let uniqData = new Set(allFilter);
      let filteredData = [...uniqData];
      setTimeout(() => {
        this.setHeightSameTag(deviceWidth, filteredData);
      }, 500);
    }

    let uniqData = new Set(allFilter);
    let filteredData = [...uniqData];
    filteredData.forEach(function (box, index) {
      box.style.display = index < limit ? "flex" : "none";
    });
    loadMoreBtn.style.display = filteredData.length > limit ? "flex" : "none";

    // Update active tag
    document
      .querySelectorAll(".sc-casa-product-list__category")
      .forEach(function (tag) {
        tag.classList.remove(
          "sc-casa-product-list__category--tag-color--active"
        );
      });

    document
      .querySelector(
        ".sc-casa-product-list__category[data-filter='" + filter + "']"
      )
      .classList.add("sc-casa-product-list__category--tag-color--active");
  }

  // Implementation for loadMore method
  loadMore(currentFilter, deviceWidth) {
    let that = this;
    let allFilter = document.querySelectorAll(".sc-casa-product-list__col");
    let uniqData = new Set(allFilter);
    let filteredData = [...uniqData];
    setTimeout(() => {
      that.setHeightSameTag(deviceWidth, filteredData);
    }, 500);
    // Show the next 10 offers
    const cols = document.querySelectorAll(".sc-casa-product-list__col");
    if (cols.length) {
      cols.forEach(function (box, index) {
        if (
          currentFilter === "all-accounts" ||
          box.getAttribute("data-tags").includes(currentFilter)
        ) {
          box.style.display = "flex";
          if (
            currentFilter !== "other-products" &&
            box.getAttribute("data-tags") === "other-products"
          ) {
            box.style.display = "none";
          }
        } else if (currentFilter === box.getAttribute("data-tags")) {
          console.log("box==", box);
          box.style.display = "flex";
        }
      });
    }
  }

  // Implementation for scroll Function method
  scrollFunction() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      this.myButton.style.display = "block";
    } else {
      this.myButton.style.display = "none";
    }
  }

  // Implementation for top Function method
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

// Export an instance of AccountSelector class
const AccountSelectorInstance = new AccountSelector();
AccountSelectorInstance.init();

// export default AccountSelectorInstance;
