// Define the AccountCompare class
class AccountCompare {
  static width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  static allowedcompare = 3;
  // init
  init() {
    const that = this;
    let device = that.numberOfCards(AccountCompare.width); //Detect which types of device is using

    document.addEventListener("DOMContentLoaded", function () {
      // Initialize variables for labels
      let cardComparator = document.querySelector(".sc-add-to-compare");
      let cardComparatorselbox = document.querySelector(
        ".sc-casa-product-card-compare"
      );
      let compareCardsLabel = JSON.parse(
        cardComparator.getAttribute("data-compare-cards-label")
      );
      let showLabel =
        cardComparatorselbox.getAttribute("data-show-label") || "Show";
      let hideLabel =
        cardComparatorselbox.getAttribute("data-hide-label") || "Hide";

      // Hide default sticky bar
      // let persistentbars = document.querySelectorAll(".m-persistent-bar");
      // persistentbars.forEach((element) => {
      //   element.classList.add("sticky-hidden");
      // });

      // Add/Remove cards for compare
      const comparebtns = document.querySelectorAll(".sc-add-to-compare-btn");
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
            ".sc-casa-product-compare-result-box__single-box .sc-add-to-compare-box"
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
          let totalCard = document.querySelectorAll(".sc-add-to-compare-btn--compare-main").length;
          if (totalCard == 0) {
            return;
          } else if (totalCard == 1) {
            document.querySelector(
              ".sc-casa-product-card-compare__card-selection-error"
            ).textContent = compareCardsLabel?.minrequireCompare;
            return;
          }
          document
            .querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box .sc-add-to-compare-box__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box"
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
              `.sc-casa-product-compare-result-box__single-box-blank-${totalCard}`
            ).style.display = "block";
          }
          document.body.style.overflow = "hidden";
        });

      // Remove Cards
      document.body.addEventListener("click", function (event) {
        if (
          event.target.classList.contains(
            "sc-add-to-compare-box__compare-box-close"
          )
        ) {
          let popup_ids =
            event.target.parentNode.getAttribute("data-remove-for");
          event.target.parentNode.remove();
          that.removeBlankCard(popup_ids);
          let total = document.querySelectorAll(".sc-casa-product-card-compare__single-compare-card").length;
          if (total == 0) {
            let singleCompareResultBox = document.querySelector(
              ".sc-casa-product-compare-result-box__single-box"
            );
            let childElements = singleCompareResultBox.querySelectorAll(
              ".sc-casa-product-compare-result-box__single-box .sc-add-to-compare-box__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box"
            );
            childElements.forEach(function (element) {
              element.classList.toggle("show-card-info");
              element.classList.toggle("hide-card-info");
            });
          }
        }
      });

      // Minimize/Open compare card sticky
      document
        .querySelector(".sc-casa-product-card-compare__sh-toggle-btn-wrap")
        .addEventListener("click", function (event) {
          document
            .querySelector(".sc-casa-product-card-compare__compare-section")
            .classList.toggle(
              "sc-casa-product-card-compare__compare-section--hide-card"
            );
          document
            .querySelector(".sc-casa-product-card-compare__sh-toggle-btn")
            .classList.toggle(
              "sc-casa-product-card-compare__sh-toggle-btn--show-icon"
            );
          document.querySelector(
            ".sc-casa-product-card-compare__sh-toggle-btn"
          ).textContent =
            document.querySelector(
              ".sc-casa-product-card-compare__sh-toggle-btn"
            ).textContent == showLabel
              ? hideLabel
              : showLabel;
        });

      // Method for remove cards sticky section card
      document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("sc-casa-product-card-compare__remove-card")) {
          let ids = event.target.dataset.identity.substr(11);
          document.querySelector(`.clone-cards-${ids}`).remove();
          that.removeBlankCard(ids);
          let total = document.querySelectorAll(".sc-casa-product-card-compare__single-compare-card").length;
          if (total == 0) {
            document
              .querySelectorAll(
                ".sc-casa-product-compare-result-box__single-box .sc-add-to-compare-box__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box"
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
          event.target.classList.contains("sc-casa-product-compare-result-box__select-card-btn") ||
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
              ".sc-casa-product-compare-result-box__single-box .sc-add-to-compare-box__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box"
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
              ".sc-casa-product-compare-result-box__single-box .sc-add-to-compare-box__compare-box-close, .sc-casa-product-compare-result-box__single-box .compare-result-grid, .sc-casa-product-compare-result-box__single-box"
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
   *sc-add-to-compare-btn
   *   removeBlankCard(2)
   */
  removeBlankCard(cardIds) {
    // let blankCard = document.querySelector(".add-blank-card");
    // if (blankCard) {
    //   blankCard.remove();
    // }
    let status = document
      .querySelector(`[data-for="${cardIds}"]`)
      .classList.contains("sc-add-to-compare-btn--compare-main");
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
    let cardComparator = document.querySelector(".sc-add-to-compare");
    let maxCardsLabel = JSON.parse(
      cardComparator.getAttribute("data-compare-cards-label")
    );
    let cardsLabel = cardComparator.dataset.cardslabel
      ? cardComparator.dataset.cardslabel
      : "cards";
    let hideLabel = cardComparator.dataset.hideLabel
      ? cardComparator.dataset.hideLabel
      : "Hide";
    let total = document.querySelectorAll(".sc-casa-product-card-compare__single-compare-card").length;

    //Checking cards are selected or not
    if (status) {
      //Card is already selected
      //Remove Card
      document
        .querySelectorAll(
          ".sc-casa-product-compare-result-box__single-box-blank"
        )
        .forEach((element) => {
          element.style.display = "none";
        }); //Hide popup blank
      const datafor = document.querySelector(`[data-for="${cardIds}"]`);
      datafor.classList.remove("sc-add-to-compare-btn--compare-main");
      const removeBtn = datafor.querySelector(".sc-add-to-compare-btn__remove");
      removeBtn.classList.add("hide");

      const addBtn = datafor.querySelector(".sc-add-to-compare-btn__add");
      addBtn.classList.remove("hide"); //Remove from compare cards sticky
      document
        .querySelectorAll(".sc-casa-product-compare-result-box__single-box")
        .forEach((parentElement) => {
          let childElements = parentElement.querySelectorAll(
            `.card-compare-${cardIds}`
          );
          childElements.forEach((child) => {
            parentElement.removeChild(child);
          });
        });
      document
        .querySelectorAll(`.clone-cards-${cardIds}`)
        .forEach((element) => {
          element.remove();
        }); //Remove card divs from modal

      document
        .querySelectorAll(".sc-casa-product-card-compare__card-selection-error")
        .forEach((element) => {
          element.textContent = "";
        });

      //Get total selected cards
      let total = document.querySelectorAll(".sc-casa-product-card-compare__single-compare-card").length;
      document
        .querySelector(`.card-compare-${cardIds}`)
        .classList.toggle("sc-add-to-compare-box__active");

      if (total == 0) {
        //No card available
        document
          .querySelectorAll(".sc-casa-product-card-compare")
          .forEach((element) => {
            element.style.display = "none";
          });
        document.querySelector(
          ".sc-casa-product-compare-result-box"
        ).style.display = "none";
        setTimeout(function () {
          document.body.style.overflow = "auto";
        }, 500);
      } else {
        let temp = "";
        //hide all add more card box
        document
          .querySelectorAll(".sc-casa-product-card-compare__compare-section")
          .forEach((element) => {
            element.classList.remove(
              "sc-casa-product-card-compare__compare-section--hide-card"
            );
          });

        document
          .querySelectorAll(".sc-casa-product-card-compare__sh-toggle-btn")
          .forEach((link) => {
            link.textContent = hideLabel;
          });

        document
          .querySelectorAll(".sc-casa-product-card-compare__single-blank-card")
          .forEach((element) => {
            element.classList.remove("show");
          });
        //Add blank cards div in temp variables
        while (total < maxCards) {
          let addBlankCard = document.querySelector(
            `.sc-casa-product-card-compare__add-blank-card-${total}`
          );
          if (addBlankCard) {
            addBlankCard.classList.add("show");
          }
          total++;
          let applyNowBack = document.querySelector(`.sc-casa-product-compare-result-box__single-box-blank-${total}`);
          if (applyNowBack) {
            applyNowBack.style.display = "block";
          }
        }

        let tempElement = document.createElement("div");
        tempElement.innerHTML = temp;

        let compareSelectedCards = document.querySelector(
          ".sc-casa-product-card-compare__selected-cards"
        );
        if (compareSelectedCards) {
          compareSelectedCards.appendChild(tempElement);
        }

        document
          .querySelectorAll(
            ".sc-casa-product-card-compare__card-selection-error"
          )
          .forEach((element) => {
            element.textContent = "";
          });

        document
          .querySelectorAll(".sc-casa-product-card-compare")
          .forEach((element) => {
            element.style.display = "block";
          });
      }
    } else {
      //You have reached cards limit in compare cards Sticky
      document
        .querySelectorAll(".sc-casa-product-card-compare__compare-section")
        .forEach((element) => {
          element.classList.remove(
            "sc-casa-product-card-compare__compare-section--hide-card"
          );
        });

      document
        .querySelectorAll(".sc-casa-product-card-compare__sh-toggle-btn")
        .forEach((link) => {
          link.textContent = hideLabel;
        });

      if (total >= maxCards) {
        document
          .querySelectorAll(
            ".sc-casa-product-card-compare__card-selection-error"
          )
          .forEach((element) => {
            element.classList.add("cannot-add-2-cards");
            element.textContent = `${maxCardsLabel?.maxrequireCompare} ${maxCards} ${cardsLabel}`;
          });
        //Add error text message
      } else {
        //You have slots for add cards in compare cards Sticky
        document
          .querySelectorAll(".sc-casa-product-card-compare")
          .forEach((element) => {
            element.style.display = "block";
          });

        //Clone selected card divs for Compare Cards Sticky
        let cardClone;
        let cardElement = document.querySelector(`.card-compare-${cardIds}`);
        if (cardElement) {
          cardElement.setAttribute("data-remove-for", cardIds);
          cardClone = cardElement.cloneNode(true);
        }
        //Active/deactivate selected cards
        document
          .querySelector(`.card-compare-${cardIds}`)
          .classList.toggle("sc-add-to-compare-box__active");
        const datafor = document.querySelector(`[data-for="${cardIds}"]`);
        datafor.classList.add("sc-add-to-compare-btn--compare-main");
        const removeBtn = datafor.querySelector(
          ".sc-add-to-compare-btn__remove"
        );
        removeBtn.classList.remove("hide");

        const addBtn = datafor.querySelector(".sc-add-to-compare-btn__add");
        addBtn.classList.add("hide");

        let titleText = document.querySelector(
          `.card-compare-${cardIds} .sc-add-to-compare-box__title`
        ).textContent;
        let imgSrc = document
          .querySelector(`.card-compare-${cardIds} img`)
          .getAttribute("src");

        let html = `<div class="sc-casa-product-card-compare__single-compare-card sc-casa-product-card-compare__single-compare-card--activated-card clone-cards-${cardIds}">
                      <p class="sc-casa-product-card-compare__add-title">${titleText}</p>
                      <div class="sc-casa-product-card-compare__single-compare-card-image">
                        <span class="sc-casa-product-card-compare__remove-card" data-identity="card-close-${cardIds}">-</span>
                        <img class="sc-casa-product-card-compare__place-image" src="${imgSrc}" alt="">
                      </div>
                    </div>`;

        //Add selected card divs in temp variables
        let addBlankCardElement = document.querySelector(
          ".sc-casa-product-card-compare__add-blank-card-0"
        );
        if (addBlankCardElement) {
          addBlankCardElement.insertAdjacentHTML("beforebegin", html);
        }

        //Hide all add more card box
        document
          .querySelectorAll(".sc-casa-product-card-compare__single-blank-card")
          .forEach((element) => {
            element.classList.remove("show");
          });
        while (total < maxCards - 1) {
          document
            .querySelectorAll(`.sc-casa-product-card-compare__add-blank-card-${total}`)
            .forEach((element) => {
              element.classList.add("show");
            }); //Show add more card box
          total++;
        }
        //Remove error message
        document
          .querySelectorAll(
            ".sc-casa-product-card-compare__card-selection-error"
          )
          .forEach((element) => {
            element.textContent = "";
          });
        let applyNowBack2Element = document.querySelector(".sc-casa-product-compare-result-box__select-card-btn");
        cardClone.cloneNode(true);
        if (applyNowBack2Element && cardClone) {
          applyNowBack2Element.parentNode.insertBefore(
            cardClone,
            applyNowBack2Element
          );
        }
        //Clone cards in Compare Cards Modal
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
    // if (deviceWidth < 1024) {
    //   return 2; //Mobile support 2 cards
    // }
    // return 3; //desktop, tabs, etc support 3 cards

    let cardComparator = document.querySelector(".sc-add-to-compare");
    AccountCompare.allowedcompare = cardComparator.getAttribute("data-allowed-compare") || 3;
    console.log(AccountCompare.allowedcompare)
    return AccountCompare.allowedcompare;
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
