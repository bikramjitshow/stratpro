/* global Utils */
// import ScCommonMethods from '../../../assets/js/commons/sc-common-methods';

class ScMgmReferralMobile {
  constructor() {
    this.ScCommonMethods = new ScCommonMethods();
    window.tcmObject = {
      termsAccepted: false,
    };
  }

  init() {
    const that = this;
    that.mgmRefer = document.querySelector(".sc-mgm-refer");
    // Assume that window.object is already defined
    const queryParameter = window.mgmObject.queryParameter || "code";
    // Get the query parameter value from the URL
    const codeValue = that.ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      queryParameter
    );

    const errorModal = document.querySelector(".sc-error-modal");
    if (!codeValue) {
      //If referral code is empty or invalid
      errorModal.classList.add("sc-error-modal--show");
      return;
    }

    const pdtQueryParameter = that.ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      window.mgmObject.pdtQueryParameter
    );
    const segmentQueryParameter = that.ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      window.mgmObject.segmentQueryParameter
    );
    if (pdtQueryParameter) {
      that.handlePdtParameter(pdtQueryParameter);
    } else if (segmentQueryParameter) {
      that.handleSegmentParameter(segmentQueryParameter);
    }

    // Update the content of the div with the extracted code
    const referralCodeDiv = document.querySelector(".sc-mgm-refer__code-text");
    if (referralCodeDiv) referralCodeDiv.textContent = codeValue;

    // Get the anchor tag and add a click event listener
    const copyCodeButton = document.querySelector(".sc-mgm-refer__copy-code");
    if (copyCodeButton) {
      copyCodeButton.addEventListener("click", function () {
        that.copyReferralCode(codeValue);
      });
    }
    console.log(window.tcmObject);
    //Handle popup open
    let modalOpen = false;
    let mainModalId = "";
    that.isTermModalRequire = false;
    that.isTermModalActive = false;
    let modalredirecturl = null;
    setTimeout(() => {
      const openModals = that.mgmRefer.querySelectorAll("a[href='#null']");
      if (openModals.length) {
        openModals.forEach(function (el) {
          el.addEventListener("click", (e) => {
            modalOpen = true;
            mainModalId = el.getAttribute("data-modal-source");
            console.log(el.getAttribute("data-terms-enable"));
            if (el.getAttribute("data-terms-enable") === "true") {
              that.isTermModalRequire = true;
            }
          });
        });
      }
    }, 100);

    //Handle modal close event
    document.body.addEventListener("click", function (event) {
      console.log(window.tcmObject);
      if (modalOpen) {
        let anchor = event.target.closest("a");
        let tcModal = document
          .querySelector(".m-text-content")
          .getAttribute("data-term-modal");
        if (
          event.target.className.indexOf("closebutton") !== -1 ||
          event.target.className.indexOf("wrapper") !== -1
        ) {
          modalOpen = false;
          that.triggerCtaClickTagging(event);
          if (tcModal) {
            console.log("term modal closed !!");
            that.termsModalClosed(mainModalId);
          }
        } else if (
          anchor &&
          anchor.getAttribute("href") === "#null" &&
          event.target.closest(".m-text-content")
        ) {
          let ctaTitle = anchor.getAttribute("title")
            ? anchor.getAttribute("title")
            : anchor.innerText ||
              anchor.textContent ||
              anchor.getAttribute("data-context") ||
              anchor.getAttribute("aria-label");

          if (ctaTitle) {
            that.triggerPopupViewedTagging(ctaTitle.trim());
          }
        }

        //identify the term modal
        console.log("that.isTermModalRequire--", that.isTermModalRequire);

        if (
          window.tcmObject.termsAccepted &&
          event.target.classList.contains("sc-mgm-refer-tc")
        ) {
          let redirectUrl = event.target.getAttribute("data-redirect-url");
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          setTimeout(() => {
            window.open(redirectUrl, "_blank");
          }, 1000);
        } else if (
          event.target.classList.contains("sc-mgm-refer-tc") &&
          that.isTermModalRequire &&
          !window.tcmObject.termsAccepted
        ) {
          console.log("term modal active !!");
          that.isTermModalActive = true;
          that.termsModalActive(event);
        }
      }
    });

    // Get the anchor tag and add a click event listener
    const pdtButton = document.querySelectorAll(".sc-mgm-refer-pdt-btn");
    if (pdtButton.length) {
      pdtButton.forEach(function (el) {
        el.addEventListener("mousedown", function (event) {
          event.preventDefault();
          event.stopPropagation();
          that.pdtBtnShare(event.target, codeValue);
        });
      });
    }

    that.handleReferInfo();
    that.handleCardsFilter();
    that.handleViewAll();
  }

  /**
   * reset specific product and display all of the products once click view all button
   */
  handleViewAll() {
    const that = this;
    const viewAll = that.mgmRefer.querySelector(".sc-mgm-refer__view-all");
    if (!viewAll) return;
    const personalizedBox = that.mgmRefer.querySelectorAll(
      ".sc-mgm-personalised-box"
    );
    const productSlider = that.mgmRefer.querySelector(".sc-mgm-product-slider");
    const cardWrapper = that.mgmRefer.querySelector(".sc-mgm-card__wrapper");
    const filterBtn = that.mgmRefer.querySelector(
      ".sc-mgm-refer-personalised .sc-filter"
    );
    const rewarded = that.mgmRefer.querySelector(
      ".sc-mgm-refer-personalised .sc-mgm-refer__rewarded"
    );
    const bottomBtn = that.mgmRefer.querySelector(
      ".sc-mgm-refer-personalised .sc-bottom-btn"
    );

    viewAll.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.target.classList.add("hide");
      if (personalizedBox.length) {
        personalizedBox.forEach((personalize) =>
          personalize.classList.add("hide")
        );
      }
      productSlider?.classList.add("hide");
      cardWrapper?.classList.remove("hide");
      if (filterBtn) filterBtn.style.display = "block";
      if (rewarded) rewarded.style.display = "block";
      if (bottomBtn) bottomBtn.style.display = "block";
    });
  }

  /**
   * Copy the code to the clipboard
   */
  copyReferralCode(codeValue) {
    let inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("value", codeValue);
    inputField.style.height = 0;
    document.body.appendChild(inputField);
    inputField.select();
    document.execCommand("copy");
    document.body.removeChild(inputField);

    const codeBox = document.querySelector(".sc-mgm-refer__code-box");
    const successMessage = document.createElement("div");
    successMessage.className = "sc-mgm-refer__copy-msg";
    successMessage.textContent = "Copied successfully";
    codeBox.parentNode.insertBefore(successMessage, codeBox.nextSibling);

    // Remove success message after a delay (e.g., 2 seconds)
    setTimeout(function () {
      codeBox.parentNode.removeChild(successMessage);
    }, 5000);
  }

  /**
   * collect the share info from clicked share button
   */
  pdtBtnShare(ev, codeValue) {
    let shareTitle = ev.getAttribute("data-shareTitle"),
      shareText = ev.getAttribute("data-shareText"),
      shareURL = ev.getAttribute("data-shareURL");
    if (!shareURL) return;

    shareURL = shareURL.split("data-share-code").join(codeValue);
    shareText = shareText.split("data-share-code").join(codeValue);

    const deviceOs = Utils.getDeviceDetails().os;
    if (deviceOs === "Android") {
      //Share code for Android
      window.Android.shareAction(
        JSON.stringify({
          shareTitle: shareTitle,
          shareURL: shareURL,
          shareText: shareText,
        })
      );
    } else if (deviceOs === "iOS") {
      //Share code for iOS
      window.webkit.messageHandlers.shareAction.postMessage({
        shareTitle: shareTitle,
        shareURL: shareURL,
        shareText: shareText,
      });
    }
  }

  /**
   * Toggle how to refer section and handle close button
   */
  handleReferInfo() {
    const that = this;
    const scMgmReferral = Utils.getLocalStorageWithExpiry("scMgmReferral"),
      howReferBtn = that.mgmRefer.querySelector(".sc-mgm-refer__how-to"),
      howRefer = that.mgmRefer.querySelector(".sc-mgm-refer__how-refer");

    if (scMgmReferral) {
      howRefer.classList.add("hide");
      howReferBtn.classList.remove("hide");
    } else {
      howRefer.classList.remove("hide");
      howReferBtn.classList.add("hide");
    }

    //Handle close button
    const referClose = that.mgmRefer.querySelector(
      ".sc-mgm-refer__how-refer-close"
    );
    if (referClose) {
      referClose.addEventListener("click", function () {
        howRefer.classList.add("hide");
        howReferBtn.classList.remove("hide");
      });
    }

    //Display how to refer section
    howReferBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      howRefer.classList.remove("hide");
      howReferBtn.classList.add("hide");
    });

    Utils.setLocalStorageWithExpiry("scMgmReferral", true, 86400 * 1000 * 10); // Expiry for 10 days.
  }

  /**
   * based on the selected cards, display the cards
   */
  handleCardsFilter() {
    const that = this;
    const categoryList = that.mgmRefer.querySelectorAll(".sc-filter__btn");
    if (categoryList.length) {
      categoryList.forEach(function (el) {
        el.addEventListener("click", function (event) {
          const active = that.mgmRefer.querySelector(".sc-filter__btn--active");
          if (active) {
            active.classList.remove("sc-filter__btn--active");
          }
          event.target.classList.add("sc-filter__btn--active");
          const selectedCat = event.target.getAttribute("data-categories");

          const allCards = that.mgmRefer.querySelectorAll("[data-cards]");
          if (allCards.length) {
            for (let i = 0; i < allCards.length; i++) {
              if (selectedCat === "all") {
                allCards[i].classList.remove("hide");
              } else if (
                selectedCat === allCards[i].getAttribute("data-cards")
              ) {
                allCards[i].classList.remove("hide");
              } else {
                allCards[i].classList.add("hide");
              }
            }
          }
        });
      });
    }
  }

  /**
   * based on the product queryString, placed the selected cards at the top
   */
  handlePdtParameter(param) {
    const that = this;
    that.mgmRefer.classList.add("sc-mgm-refer-personalised");
    const personalizedBox = that.mgmRefer.querySelector(
      ".sc-mgm-personalised-box"
    );
    const productSlider = that.mgmRefer.querySelector(".sc-mgm-product-slider");
    const cardWrapper = that.mgmRefer.querySelector(".sc-mgm-card__wrapper");
    if (personalizedBox) {
      personalizedBox.classList.remove("hide");
      const selectedCard = that.mgmRefer.querySelector([
        `div[data-product-name='${param}']`,
      ]);
      if (selectedCard) {
        const clonedDiv = selectedCard.cloneNode(true);
        clonedDiv.removeAttribute("data-product-name");
        personalizedBox.innerHTML = "";
        personalizedBox.appendChild(clonedDiv);
      }
    }
    productSlider?.classList.remove("hide");
    cardWrapper?.classList.add("hide");
  }

  /**
   * based on the segment queryString, placed the selected cards at the top of the filter section
   */
  handleSegmentParameter(param) {
    const that = this;
    param = param.toLowerCase();
    const segmentList = that.mgmRefer.querySelectorAll("[data-segment-cards]");
    const cardWrapper = that.mgmRefer.querySelector(".sc-mgm-card__wrapper");
    if (segmentList.length) {
      const cloneList = Array.from(segmentList).filter((segment) => {
        const attrList = segment
          .getAttribute("data-segment-cards")
          .toLowerCase()
          .split(",");
        if (attrList.includes(param)) {
          const clonedDiv = segment.cloneNode(true);
          segment.remove();
          return clonedDiv;
        }
      });
      if (cloneList.length) {
        // Make reverse so that card will maintain the same order
        cloneList.reverse();
        cloneList.forEach((index) => {
          cardWrapper.insertBefore(index, cardWrapper.firstChild);
        });
      }
    }
  }

  /**
   * Terms Modal Active on init
   * @example
   * termsModalActive()
   */
  termsModalActive(event) {
    const that = this;
    that.isTermModalActive = false;
    console.log("event2---", event.target);
    let closestAnchor = event.target.closest("a");
    if (that.isTermModalRequire) {
      that.isTermModalActive = true;
      if (
        closestAnchor &&
        closestAnchor.getAttribute("href") === "#null" &&
        event.target.classList.contains("sc-mgm-refer-tc")
      ) {
        setTimeout(() => {
          let mtextcontentId = document
            .querySelector(".m-text-content")
            .getAttribute("data-modal-id");
          let modalAttr = closestAnchor.getAttribute("data-modal-source");
          let modalredirecturl =
            closestAnchor.getAttribute("data-redirect-url");
          let activeModal = document.querySelector(".m-text-content");
          let activeModalId = activeModal.getAttribute("data-modal-id");
          if (modalAttr === activeModalId) {
            that.activeScrollToBottom(modalredirecturl, mtextcontentId);
            that.activeDownloadButton();
          } else {
            console.log("activeModalId Not matched");
          }
        }, 200);
      }
    }
  }

  termsModalClosed(modalid) {
    const that = this;
    console.log("termsModalClosed Called!", modalid);
    that.isTermModalActive = false;
    setTimeout(function () {
      const modalId = document.querySelector(
        `[data-modal-source='${modalid}']`
      );
      console.log("modalId--", modalId);
      if (modalId) {
        // modalId.click();
        // that.isTermModalRequire = true;
      }
    }, 300);
  }

  /**
   * activeScrollToBottom on modal active
   * @param {String} toredirect redirect URL
   * @param {String} mtextcontentId active modal ID
   * @example
   * activeScrollToBottom(url,id)
   */
  activeScrollToBottom(toredirect, mtextcontentId) {
    console.log("activeScrollToBottom !!", toredirect, mtextcontentId);
    var scrollbtn = document.querySelector(".sc-products-tile__scroll-step");
    var scrollbtnlastTitle = scrollbtn.getAttribute("data-last-title");
    var downloadButton = document.querySelector(
      ".sc-products-tile__download-button"
    );
    var scrollableDiv = document.querySelector(".m-text-content");
    var redirectUrl = toredirect;

    let clickCount = 0;
    const stepsPerClick = 1; // Number of scroll steps per click
    const totalSteps = 4; // Total number of steps to scroll
    let manualScrollDetected = false;
    const closeButton = document.querySelector(".wrapper");
    console.log("closeButton-", closeButton);

    // Check if the user has been redirected before
    console.log(window.tcmObject);
    if (window.tcmObject.termsAccepted) {
      closeButton.click();
      setTimeout(() => {
        window.open(redirectUrl, "_blank");
      }, 1000);
    }

    let scrollToBottom = (element, steps) => {
      const totalHeight = element.scrollHeight - element.clientHeight;
      const stepHeight = totalHeight / totalSteps;

      element.scrollBy(0, stepHeight * steps);

      if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        // Scrolled to the bottom
        manualScrollDetected = true;
      }
    };

    scrollableDiv.addEventListener("scroll", function () {
      const scrollPos = scrollableDiv.scrollTop + scrollableDiv.clientHeight;
      const maxScroll = scrollableDiv.scrollHeight - 1; // Subtract a small margin for precision

      if (scrollPos >= maxScroll) {
        // Scrolled to the bottom
        manualScrollDetected = true;
        console.log("Scroll reached the last end");
        downloadButton.closest("li").style.display = "none";
        scrollbtn.setAttribute("title", scrollbtnlastTitle);
        scrollbtn.children[0].innerText = scrollbtnlastTitle;
        scrollbtn.children[1].innerText = scrollbtnlastTitle;
      }
    });

    scrollbtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (manualScrollDetected || clickCount >= totalSteps) {
        window.tcmObject.termsAccepted = true;
        closeButton.click();
        setTimeout(() => {
          window.open(redirectUrl, "_blank");
        }, 1000);
      } else {
        clickCount++;
        scrollToBottom(scrollableDiv, stepsPerClick);

        if (clickCount >= totalSteps) {
          // If it was the last step, set manualScrollDetected to true to handle the next click as redirect
          downloadButton.closest("li").style.display = "none";
          scrollbtn.setAttribute("title", scrollbtnlastTitle);
          scrollbtn.children[0].innerText = scrollbtnlastTitle;
          scrollbtn.children[1].innerText = scrollbtnlastTitle;
          manualScrollDetected = true;
        }
      }
    });
  }

  /**
   * activeDownloadButton on modal active
   * @example
   * activeDownloadButton()
   */
  activeDownloadButton() {
    console.log("activeDownloadButton !!");
    // Download function
    let downloadPdf = (pdfurl, filename) => {
      // Fetch the PDF file and force download
      if (pdfurl) {
        let pdfUrl = decodeURI(pdfurl).toString();
        fetch(pdfUrl)
          .then((response) => response.blob())
          .then((blob) => {
            var url = window.URL.createObjectURL(blob);
            // setTimeout(() => {

            // }, 2000);
            var a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = filename || "file.pdf"; // The filename to save as
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          })
          .catch(() => alert("An error occurred while downloading the PDF."));
      }
    };

    // Click event
    var downloadButton = document.querySelector(
      ".sc-products-tile__download-button"
    );
    console.log(downloadButton);
    downloadButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      let closestAnchor = event.target.closest("a");
      let datapdfurl = closestAnchor.getAttribute("data-pdf-url");
      // URL of the PDF
      var pdfUrl = datapdfurl.toString();

      const encodedURL = encodeURI(pdfUrl);
      var url = new URL(pdfUrl);
      var pathname = url.pathname;
      var segments = pathname.split("/");
      var filename = segments[segments.length - 1];

      // Fetch the PDF file and force download
      downloadPdf(encodedURL, filename);
    });
  }

  isTermAccepted() {}
  /**
   * trigger adobe popupViewed event when showing popups
   */
  triggerPopupViewedTagging(popupName) {
    setTimeout(() => {
      let dataObject = {
        ...digitalData,
        form: {
          formName: "",
          formStepName: "",
          formType: "",
          formPlatform: "",
        },
      };
      dataObject.form.popupName = popupName;
      dataObject.event = "popupViewed";
      scAnalyticsDataArray.push(dataObject);
    }, 500);
  }

  /**
   * trigger adobe ctaClick event during click action
   */
  triggerCtaClickTagging(event) {
    const that = this;
    if (that.eventFired) {
      let ctaType = event.target.type == "button" ? event.target.type : "link";
      let customLinkText = event.target.getAttribute("title")
        ? event.target.getAttribute("title")
        : event.target instanceof SVGElement ||
          event.target.getElementsByTagName("svg").length ||
          event.target.classList.contains("closebutton")
        ? "Close"
        : event.target.innerText
        ? event.target.innerText.trim().toLowerCase()
        : event.target.textContent.trim().toLowerCase();
      let dataObject = {
        ...digitalData,
        customLinkClick: {
          customLinkText: customLinkText,
          customLinkRegion:
            that.getHorizontalPosition(event.clientX) +
            " " +
            Utils.calcElementLocation(event.target),
          customLinkType: ctaType,
        },
        event: "ctaClick",
        context: customLinkText,
      };
      scAnalyticsDataArray.push(dataObject);
    }
  }
}

const instance = new ScMgmReferralMobile();
instance.init();

// export default instance;
