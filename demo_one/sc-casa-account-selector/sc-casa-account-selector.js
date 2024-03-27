// Define the ProductListManager class
class AccountSelector {
  // init
  init() {
    var currentFilter; // selected filter item
    var limit; // onload card limit to show
    // Get the button
    this.myButton = document.querySelector(".sc-casa-product-list__scroll");
    let deviceWidth = this.numberOfCards($(window).width()); //Detect which types of device is using

    // Set initial style to "none"
    this.myButton.style.display = "none";

    this.myButton.addEventListener("click", () => {
      console.log("Scrool to top");
      this.topFunction();
    });

    // When the user scrolls down 250px from the top of the document, show the button
    window.onscroll = () => this.scrollFunction();

    // Add an event listener for the window resize event
    window.onresize = () => {
      this.numberOfCards($(window).width());
      // this.setHeight(deviceWidth);
    };

    // Iterate over each card
    // for (var i = 0; i < cardBoxes.length; i++) {
    //   // console.log('cardBoxes', cardBoxes[i].getAttribute("data-tags"))
    //   var cardTags = cardBoxes[i].getAttribute("data-tags").split(" ");

    //   // Iterate over each tag in the current card
    //   cardTags.forEach(function (tag) {
    //     if (!maxHeights.has(tag)) {
    //       maxHeights.set(tag, {
    //         greenWrapper: 0,
    //         title: 0,
    //         description: 0,
    //       });
    //     }

    //     var greenWrappers = cardBoxes[i].querySelectorAll(
    //       ".sc-casa-product-list__green-wrapper"
    //     );
    //     var titles = cardBoxes[i].querySelectorAll(
    //       ".sc-casa-product-list__title"
    //     );
    //     var descriptions = cardBoxes[i].querySelectorAll(
    //       ".sc-casa-product-list__description"
    //     );

    //     // Calculate maximum heights for each tag independently
    //     greenWrappers.forEach(function (greenWrapper) {
    //       maxHeights.get(tag).greenWrapper = Math.max(
    //         maxHeights.get(tag).greenWrapper,
    //         greenWrapper.clientHeight
    //       );
    //     });

    //     titles.forEach(function (title) {
    //       maxHeights.get(tag).title = Math.max(
    //         maxHeights.get(tag).title,
    //         title.clientHeight
    //       );
    //     });

    //     descriptions.forEach(function (description) {
    //       maxHeights.get(tag).description = Math.max(
    //         maxHeights.get(tag).description,
    //         description.clientHeight
    //       );
    //     });
    //   });
    // }

    // Apply the maximum heights to all cards with the same tag
    // cardBoxes.forEach(function (cardBox) {
    //   var cardTags = cardBox.getAttribute("data-tags").split(" ");

    //   cardTags.forEach(function (tag) {
    //     var greenWrappers = cardBox.querySelectorAll(
    //       ".sc-casa-product-list__green-wrapper"
    //     );
    //     var titles = cardBox.querySelectorAll(".sc-casa-product-list__title");
    //     var descriptions = cardBox.querySelectorAll(
    //       ".sc-casa-product-list__description"
    //     );

    //     // Apply the maximum heights to all cards with the same tag
    //     greenWrappers.forEach(function (greenWrapper) {
    //       greenWrapper.style.height = maxHeights.get(tag).greenWrapper + "px";
    //     });

    //     titles.forEach(function (title) {
    //       title.style.height = maxHeights.get(tag).title + "px";
    //     });

    //     descriptions.forEach(function (description) {
    //       description.style.height = maxHeights.get(tag).description + "px";
    //     });
    //   });
    // });

    // this.setHeight(deviceWidth);
    // this.setHeightSameTag(deviceWidth);
    // DOMContentLoaded
    document.addEventListener("DOMContentLoaded", () => {
      limit = document
        .querySelector(".sc-casa-product-list")
        .getAttribute("data-limit");

      // Event listener for category clicks
      document
        .querySelectorAll(".sc-casa-product-list__category")
        .forEach((category) => {
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
  setHeightSameTag(w, f) {
    // console.log("filter data--->>>>:", f);
    // console.log("card view:", w);

    // Get all the rows of card columns
    const rows = document.querySelectorAll(".sc-casa-product-list__row");
    rows.forEach((row) => {
      // Get all the card columns in the current row
      // const cards = Array.from(
      //   row.querySelectorAll(".sc-casa-product-list__col")
      // );
      const cards = Array.from(f);

      // console.log("filter data:", cards);

      // Loop through the cards in groups of three
      for (let i = 0; i < cards.length; i += w) {
        const group = cards.slice(i, i + w); // Get a group of three cards
        // console.log("filter group->", group);

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
            // console.log("filter data title:", card.style.display);
            // console.log("filter data clientheight:", title.offsetHeight);
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

  // Implementation for show/filter account card-box method
  showTab(filter, limit, deviceWidth) {
    let loadMoreBtn = document.querySelector(
      ".sc-casa-product-list__load-more"
    );
    // Hide all product boxes
    document
      .querySelectorAll(".sc-casa-product-list__col")
      .forEach(function (box) {
        box.style.display = "none";
        // box.parentNode.style.display = "none";
      });

    // Show the selected category
    let allFilter = [];
    if (filter === "all-accounts") {
      const categories = document.querySelectorAll(
        ".sc-casa-product-list__category"
      );
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
      // console.log("showtab Filter", filter);
      // console.log("showtab allFilter", allFilter);
    } else {
      allFilter = document.querySelectorAll(
        ".sc-casa-product-list__col[data-tags*='" + filter + "']"
      );
      let uniqData = new Set(allFilter);
      let filteredData = [...uniqData];
      setTimeout(() => {
        this.setHeightSameTag(deviceWidth, filteredData);
      }, 500);
      // console.log("showtab Filter", filter);
      // console.log("showtab allFilter", allFilter);
    }

    // console.log("limit-->", limit);
    let uniqData = new Set(allFilter);
    let filteredData = [...uniqData];
    // console.log("showtab Filter", filteredData);
    filteredData.forEach(function (box, index) {
      box.style.display = index < limit ? "flex" : "none";
      // box.parentNode.style.display = index < limit ? "flex" : "none";
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
    var visibleCount = document.querySelectorAll(
      ".sc-casa-product-list__col:not([style*='none'])"
    ).length;

    console.log("currentFilter -->", currentFilter);
    let allFilter = document.querySelectorAll(
      ".sc-casa-product-list__col"
    );
    let uniqData = new Set(allFilter);
    let filteredData = [...uniqData];
    setTimeout(() => {
      that.setHeightSameTag(deviceWidth, filteredData);
    }, 500);
    // Show the next 10 offers
    document
      .querySelectorAll(".sc-casa-product-list__col")
      .forEach(function (box, index) {
        // console.log("currentFilter--", currentFilter);
        // console.log(
        //   "box tags--",
        //   box.getAttribute("data-tags").includes(currentFilter)
        // );
        if (
          currentFilter === "all-accounts" ||
          box.getAttribute("data-tags").includes(currentFilter)
        ) {
          box.style.display = "flex";
          // box.parentNode.style.display = "flex";
          if (
            currentFilter !== "other-products" &&
            box.getAttribute("data-tags") === "other-products"
          ) {
            box.style.display = "none";
            // box.parentNode.style.display = "none";
          }
        } else if (currentFilter === box.getAttribute("data-tags")) {
          console.log("box==", box);
          box.style.display = "flex";
          // box.parentNode.style.display = "flex";
        }
      });
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
const instance = new AccountSelector();
instance.init();

export default instance;
