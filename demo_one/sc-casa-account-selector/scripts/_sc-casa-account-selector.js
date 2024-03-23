// Define the ProductListManager class
class AccountSelector {
  // init
  init() {
    console.log("AccountSelector init");
    // Get the button
    this.myButton = document.querySelector(".sc-casa-product-list__scroll");

    // Set initial style to "none"
    this.myButton.style.display = "none";

    // When the user scrolls down 250px from the top of the document, show the button
    window.onscroll = () => this.scrollFunction();

    var cardBoxes = document.querySelectorAll(
      ".sc-casa-product-list__card-box"
    );
    // Create a map to store max heights for each tag
    var maxHeights = new Map();
    var currentFilter;

    // Iterate over each card
    for (var i = 0; i < cardBoxes.length; i++) {
      // console.log('cardBoxes', cardBoxes[i].getAttribute("data-tags"))
      var cardTags = cardBoxes[i].getAttribute("data-tags").split(" ");

      // Iterate over each tag in the current card
      cardTags.forEach(function (tag) {
        if (!maxHeights.has(tag)) {
          maxHeights.set(tag, {
            greenWrapper: 0,
            title: 0,
            description: 0,
          });
        }

        var greenWrappers = cardBoxes[i].querySelectorAll(
          ".sc-casa-product-list__green-wrapper"
        );
        var titles = cardBoxes[i].querySelectorAll(
          ".sc-casa-product-list__title"
        );
        var descriptions = cardBoxes[i].querySelectorAll(
          ".sc-casa-product-list__description"
        );

        // Calculate maximum heights for each tag independently
        greenWrappers.forEach(function (greenWrapper) {
          maxHeights.get(tag).greenWrapper = Math.max(
            maxHeights.get(tag).greenWrapper,
            greenWrapper.clientHeight
          );
        });

        titles.forEach(function (title) {
          maxHeights.get(tag).title = Math.max(
            maxHeights.get(tag).title,
            title.clientHeight
          );
        });

        descriptions.forEach(function (description) {
          maxHeights.get(tag).description = Math.max(
            maxHeights.get(tag).description,
            description.clientHeight
          );
        });
      });
    }

    // Apply the maximum heights to all cards with the same tag
    cardBoxes.forEach(function (cardBox) {
      var cardTags = cardBox.getAttribute("data-tags").split(" ");

      cardTags.forEach(function (tag) {
        var greenWrappers = cardBox.querySelectorAll(
          ".sc-casa-product-list__green-wrapper"
        );
        var titles = cardBox.querySelectorAll(".sc-casa-product-list__title");
        var descriptions = cardBox.querySelectorAll(
          ".sc-casa-product-list__description"
        );

        // Apply the maximum heights to all cards with the same tag
        greenWrappers.forEach(function (greenWrapper) {
          greenWrapper.style.height = maxHeights.get(tag).greenWrapper + "px";
        });

        titles.forEach(function (title) {
          title.style.height = maxHeights.get(tag).title + "px";
        });

        descriptions.forEach(function (description) {
          description.style.height = maxHeights.get(tag).description + "px";
        });
      });
    });

    // DOMContentLoaded
    document.addEventListener("DOMContentLoaded", () => {
      // Event listener for category clicks
      document
        .querySelectorAll(".sc-casa-product-list__category")
        .forEach((category) => {
          var limit = category.getAttribute("data-limit");
          console.log("DOMContentLoaded LOAD CALLED !!", limit);
          // Initialize by showing the first tab and first 6 offers
          this.showTab("all-accounts", limit);
          currentFilter = "all-accounts";

          category.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = category.getAttribute("data-filter");
            currentFilter = filter;
            this.showTab(filter, limit);
          });
        });

      // Event listener for Load More click
      document
        .querySelector(".sc-casa-product-list__load-more")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.loadMore(currentFilter);
          let loadMoreBtn = document.querySelector(
            ".sc-casa-product-list__load-more"
          );
          loadMoreBtn.style.display = "none";
        });
    });
  }

  // Implementation for show/filter account card-box method
  showTab(filter, limit) {
    let loadMoreBtn = document.querySelector(
      ".sc-casa-product-list__load-more"
    );
    // Hide all product boxes
    document
      .querySelectorAll(".sc-casa-product-list__card-box")
      .forEach(function (box) {
        box.style.display = "none";
        box.parentNode.style.display = "none";
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
          ".sc-casa-product-list__card-box[data-tags*='" + filter + "']"
        );
        allFilter.push(...allFilter2);
      });
      console.log("showtab Filter", filter);
      console.log("showtab allFilter", allFilter);
    } else {
      allFilter = document.querySelectorAll(
        ".sc-casa-product-list__card-box[data-tags*='" + filter + "']"
      );
      console.log("showtab Filter", filter);
      console.log("showtab allFilter", allFilter);
    }

    console.log("limit-->", limit);
    allFilter.forEach(function (box, index) {
      box.style.display = index < limit ? "flex" : "none";
      box.parentNode.style.display = index < limit ? "flex" : "none";
    });
    loadMoreBtn.style.display = allFilter.length > limit ? "flex" : "none";

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
  loadMore(currentFilter) {
    var visibleCount = document.querySelectorAll(
      ".sc-casa-product-list__card-box:not([style*='none'])"
    ).length;

    console.log("currentFilter -->", currentFilter);
    // Show the next 10 offers
    document
      .querySelectorAll(".sc-casa-product-list__card-box")
      .forEach(function (box, index) {
        // box.style.display = "flex";
        // box.parentNode.style.display = "flex";
        if (currentFilter === "all-accounts") {
          box.style.display = "flex";
          box.parentNode.style.display = "flex";
          if (box.getAttribute("data-tags") === "other-products") {
            box.style.display = "none";
            box.parentNode.style.display = "none";
          }
        } else if (currentFilter === box.getAttribute("data-tags")) {
          console.log(box);
          box.style.display = "flex";
          box.parentNode.style.display = "flex";
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
