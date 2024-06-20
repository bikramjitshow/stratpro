// Define the ProductListManager class
class AccountCompare {
  static width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  // init
  init() {
    const that = this;
    let device = that.numberOfCards(AccountCompare.width); //Detect which types of device is using
    /* eslint-disable no-unused-vars */
    let newurl;

    document.addEventListener("DOMContentLoaded", function () {
      // Initialize variables for labels
      let cardComparator = document.querySelector(".sc-casa-product-list");
      let compareCardsLabel =
        cardComparator.getAttribute("data-compare-cards-label") ||
        "Please select minimum 2 cards to compare";
      let selectCardLabel =
        cardComparator.getAttribute("data-select-card-label") || "Select Card";
      let showLabel = cardComparator.getAttribute("data-show-label") || "Show";
      let hideLabel = cardComparator.getAttribute("data-hide-label") || "Hide";

      // Hide default sticky bar
      let persistentbars = document.querySelectorAll(".m-persistent-bar");
      persistentbars.forEach((element) => {
        element.classList.add("sticky-hidden");
      });

      // Add/Remove cards for compare
      const comparebtns = document.querySelectorAll(
        ".sc-casa-product-compare-btn"
      );
      comparebtns.forEach((comparebtn) => {
        comparebtn.addEventListener("click", (event) => {
          event.preventDefault();
          const dataFor = comparebtn.getAttribute("data-for");
          that.removeBlankCard(dataFor);
        });
      });

      // Show Compare Data popup
      document
        .querySelector(".sc-casa-product-card-compare__compare-action-btn")
        .addEventListener("click", function (event) {
          let allFilter = document.querySelectorAll(
            ".sc-casa-product-compare-result-box__single-box .sc-casa-product-list__card-box"
          );
          let uniqData = new Set(allFilter);
          let filteredData = [...uniqData];
          setTimeout(() => {
            that.setHeightSameTag(device, filteredData);
          }, 300);
          document
            .querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box-blank"
            )
            .forEach(function (elem) {
              elem.style.display = "none";
            });
          let totalCard = document.querySelectorAll(".compare-main").length;
          if (totalCard == 0) {
            return;
          } else if (totalCard == 1) {
            document.querySelector(
              ".sc-casa-product-card-compare__card-selection-error"
            ).textContent = compareCardsLabel;
            return;
          }
          // document
          //   .querySelector(
          //     ".sc-casa-product-list__compare-result-box .benefits"
          //   )
          //   .classList.remove("hide");
          document
            .querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box .sc-casa-product-list__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box .show-promotioin"
            )
            .forEach(function (elem) {
              elem.classList.toggle("show-card-info");
              elem.classList.toggle("hide-card-info");
            });
          document.querySelector(
            ".sc-casa-product-compare-result-box"
          ).style.display = "block";
          while (totalCard < device) {
            totalCard++;
            document.querySelector(
              `.apply-now-back-${totalCard}`
            ).style.display = "block";
          }
          document.body.style.overflow = "hidden";
          // event.preventDefault();
        });

      // Remove Cards
      document.body.addEventListener("click", function (event) {
        if (
          event.target.classList.contains(
            "sc-casa-product-list__compare-box-close"
          )
        ) {
          let popup_ids =
            event.target.parentNode.getAttribute("data-remove-for");
          event.target.parentNode.remove();
          that.removeBlankCard(popup_ids); // Assuming that removeBlankCard is a globally accessible function
          let total = document.querySelectorAll(".single-compare-card").length;
          if (total == 0) {
            // Close the modal if no card selected
            let singleCompareResultBox = document.querySelector(
              ".sc-casa-product-compare-result-box__single-box"
            );
            // Find child elements with classes .compare-box-close, .compare-result-grid, and .show-promotioin
            let childElements = singleCompareResultBox.querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box .sc-casa-product-list__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box .show-promotioin"
            );
            // Loop through each child element and toggle the classes
            childElements.forEach(function (element) {
              element.classList.toggle("show-card-info");
              element.classList.toggle("hide-card-info");
            });
          }
        }
      });

      // Minimize/Open compare card sticky
      document
        .querySelector(".show-and-hide")
        .addEventListener("click", function (event) {
          document
            .querySelector(".sc-casa-product-card-compare__compare-section")
            .classList.toggle("hide-card-sticky");
          document
            .querySelector(".show-and-hide")
            .classList.toggle("show-icon");
          document.querySelector(".show-and-hide a").textContent =
            document.querySelector(".show-and-hide a").textContent == showLabel
              ? hideLabel
              : showLabel;
        });

      // Method for remove cards sticky section card
      document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-card")) {
          let ids = event.target.dataset.identity.substr(11);
          document.querySelector(`.clone-cards-${ids}`).remove();
          that.removeBlankCard(ids);
          let total = document.querySelectorAll(".single-compare-card").length;
          if (total == 0) {
            document
              .querySelectorAll(
                ".sc-casa-product-compare-result-box__single-box .sc-casa-product-list__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box .show-promotioin"
              )
              .forEach(function (elem) {
                elem.classList.toggle("show-card-info");
                elem.classList.toggle("hide-card-info");
              });
          }
        }
      });

      // If Click Outside close the cards modal
      window.addEventListener("click", function (event) {
        if (
          event.target.classList.contains("apply-now-back-btn-2") ||
          event.target.classList.contains(
            "sc-casa-product-compare-result-box__inner-relative"
          )
        ) {
          event.preventDefault();
          document.querySelector(
            ".sc-casa-product-compare-result-box"
          ).style.display = "none";
          setTimeout(function () {
            document.body.style.overflow = "auto";
          }, 500);
          document
            .querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box .sc-casa-product-list__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box .show-promotioin"
            )
            .forEach(function (elem) {
              elem.classList.toggle("show-card-info");
              elem.classList.toggle("hide-card-info");
            });
        }
      });

      // Close the cards modal if clicked close button
      document
        .querySelector(".sc-casa-product-compare-result-box__close-btn")
        .addEventListener("click", function (event) {
          event.preventDefault();
          document.querySelector(
            ".sc-casa-product-compare-result-box"
          ).style.display = "none";
          setTimeout(function () {
            document.body.style.overflow = "auto";
          }, 500);
          document
            .querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box .sc-casa-product-list__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box .show-promotioin"
            )
            .forEach(function (elem) {
              elem.classList.toggle("show-card-info");
              elem.classList.toggle("hide-card-info");
            });
        });
    });
  }

  /**
   *  Method for add/remove cards for compare
   * @param {number} cardIds //get the selected card unique number
   * @example
   *
   *   removeBlankCard(2)
   */
  removeBlankCard(cardIds) {
    let blankCard = document.querySelector(".add-blank-card");
    if (blankCard) {
      blankCard.remove();
    }
    let status = document
      .querySelector(`[data-for="${cardIds}"]`)
      .classList.contains("compare-main");
    let device = this.numberOfCards(AccountCompare.width); //Detect which types of device is using
    this.addRemoveCard(device, cardIds, status);
  }

  /**
   * Remove cards if already selected else add cards if not already added
   * @param {number} maxCards //get number of cards support by device
   * @param {number} cardIds //get clicked card number
   * @param {boolean} status //card already selected or not, true if selected else false
   * @example
   *
   * addRemoveCard(2, 4, true)
   * return 2 if browse from mobile, else return 3
   */
  addRemoveCard(maxCards, cardIds, status) {
    let cardComparator = $(".sc-casa-product-list");
    let maxCardsLabel = cardComparator.attr("data-max-cards-label")
      ? cardComparator.attr("data-max-cards-label")
      : "You cannot select more than";
    let cardsLabel = cardComparator.attr("data-cards-label")
      ? cardComparator.attr("data-cards-label")
      : "cards";
    let hideLabel = cardComparator.attr("data-hide-label")
      ? cardComparator.attr("data-hide-label")
      : "Hide";
    let total = $(".single-compare-card").length;

    //Checking cards are selected or not
    if (status) {
      //Card is already selected
      //Remove Card
      $(".sc-casa-product-compare-result-box__single-box-blank").hide(); //Hide popup blank
      const datafor = document.querySelector(`[data-for="${cardIds}"]`);
      datafor.classList.remove("compare-main");
      const removeBtn = datafor.querySelector(
        ".sc-casa-product-compare-btn__remove"
      );
      removeBtn.classList.add("hide");

      const addBtn = datafor.querySelector(".sc-casa-product-compare-btn__add");
      addBtn.classList.remove("hide"); //Remove from compare cards sticky
      $(".sc-casa-product-compare-result-box__single-box")
        .children(`.card-compare-${cardIds}`)
        .remove();
      $(`.clone-cards-${cardIds}`).remove(); //Remove card divs from modal

      $(".sc-casa-product-card-compare__card-selection-error").text("");
      total = $(".single-compare-card").length; //Get total selected cards
      $(`.card-compare-${cardIds}`).toggleClass("active");

      if (total == 0) {
        //No card available
        $(".card-compare-sticky").css({
          display: "none",
        });
        $(".sc-casa-product-compare-result-box").fadeOut(200);
        setTimeout(() => {
          $("body").css({
            overflow: "auto",
          }); //activate page scroll
        }, 500);
      } else {
        let temp = "";
        $(".sc-casa-product-card-compare__compare-section").removeClass(
          "hide-card-sticky"
        );
        $(".show-and-hide a").text(hideLabel);

        $(".sc-casa-product-card-compare__single-blank-card").removeClass(
          "show"
        ); //hide all add more card box
        //Add blank cards div in temp variables
        while (total < maxCards) {
          $(`.add-blank-card-sm-${total}`).addClass("show"); //Show add more card box
          total++;
          debugger;
          $(`.apply-now-back-${total}`).show();
        }
        $(".sc-casa-product-card-compare__selected-cards").append(temp); //Added blank cards div in Compare Cards Sticky
        $(".sc-casa-product-card-compare__card-selection-error").text(""); //Remove error texts
        $(".card-compare-sticky").css({
          display: "block",
        });
      }
    } else {
      //You have reached cards limit in compare cards Sticky
      $(".sc-casa-product-card-compare__compare-section").removeClass(
        "hide-card-sticky"
      );
      $(".show-and-hide a").text(hideLabel);
      if (total >= maxCards) {
        $(".sc-casa-product-card-compare__card-selection-error")
          .addClass("cannot-add-2-cards")
          .text(`${maxCardsLabel} ${maxCards} ${cardsLabel}`); //Add error text message
      } else {
        //You have slots for add cards in compare cards Sticky
        $(".card-compare-sticky").css({
          display: "block",
        });
        document
          .querySelector(`.card-compare-${cardIds}`)
          .setAttribute("data-remove-for", cardIds);
        let cardClone = $(`.card-compare-${cardIds}`).clone(); //Clone selected card divs for Compare Cards Sticky
        $(`.card-compare-${cardIds}`).toggleClass("active"); //Active/deactivate selected cards
        const datafor = document.querySelector(`[data-for="${cardIds}"]`);
        datafor.classList.add("compare-main");
        const removeBtn = datafor.querySelector(
          ".sc-casa-product-compare-btn__remove"
        );
        removeBtn.classList.remove("hide");

        const addBtn = datafor.querySelector(
          ".sc-casa-product-compare-btn__add"
        );
        addBtn.classList.add("hide");

        let html =
          `<div class="single-compare-card compare-activated-card clone-cards-${cardIds}">
      <p>` +
          $(`.card-compare-${cardIds} .sc-casa-product-list__title`).text() +
          `</p><div class="single-compare-card-image">
      <span class="remove-card" data-identity="card-close-${cardIds}">-</span>
      <img src="` +
          $(`.card-compare-${cardIds}`).find("img").attr("src") +
          '" alt=""></div></div>';
        //Add selected card divs in temp variables
        $(".add-blank-card-sm-0").before(html); //Added selected and blank cards div in Compare Cards Sticky

        //Add blank cards div in temp variables
        $(".sc-casa-product-card-compare__single-blank-card").removeClass(
          "show"
        ); //Hide all add more card box
        while (total < maxCards - 1) {
          $(`.add-blank-card-sm-${total}`).addClass("show"); //Show add more card box
          total++;
        }
        $(".sc-casa-product-card-compare__card-selection-error").text(""); //Remove error message
        $(".apply-now-back-2").before(cardClone); //Clone cards in Compare Cards Modal
      }
    }
  }

  /**
   *  Return Number of cards supported by device
   * @param {number} deviceWidth //get browse device width in pixel
   * @example
   *
   * numberOfCards(1024)
   * return 2 if browse from mobile, else return 3
   */
  numberOfCards(deviceWidth) {
    if (deviceWidth < 1024) {
      return 2; //Mobile support 2 cards
    }
    return 3; //desktop, tabs, etc support 3 cards
  }

  /**
   *  Set Height for title, description and greenwrapper
   * @param {number} cardCount //get number of cards support by device
   * @param {Array} filterCards //Selected cards to compare
   * @example
   *
   * setHeightSameTag(3, [filterCards])
   */
  setHeightSameTag(cardCount, filterCards) {
    // Get all the rows of card columns
    const rows = document.querySelectorAll(
      ".sc-casa-product-compare-result-box__single-box"
    );
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
                greenWrapper.removeAttribute("style");
                maxGreenWrapperHeight = Math.max(
                  maxGreenWrapperHeight,
                  greenWrapper.offsetHeight
                );
              }
              if (title) {
                title.removeAttribute("style");
                maxTitleHeight = Math.max(maxTitleHeight, title.offsetHeight);
              }
              if (description) {
                description.removeAttribute("style");
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
}

// Export an instance of AccountSelector class
const instance = new AccountCompare();
instance.init();

export default instance;
