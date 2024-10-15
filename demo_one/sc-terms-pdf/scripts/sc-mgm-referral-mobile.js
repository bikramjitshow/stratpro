/* global Utils */
// import ScCommonMethods from '../../../assets/js/commons/sc-common-methods';

class ScMgmReferralMobile {
  constructor() {
    this.ScCommonMethods = new ScCommonMethods();
  }

  init() {
    console.log("MGM-Mobile JS: build-v7");
    const that = this;
    // that.termsState();
    that.mgmRefer = document.querySelector(".sc-mgm-refer");
    // Assume that window.object is already defined
    const queryParameter = window.mgmObject.queryParameter || "code";
    // Get the query parameter value from the URL
    that.codeValue = that.ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      queryParameter
    );

    const errorModal = document.querySelector(".sc-error-modal");
    if (!that.codeValue) {
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
    if (referralCodeDiv) referralCodeDiv.textContent = that.codeValue;

    // Get the anchor tag and add a click event listener
    const copyCodeButton = document.querySelector(".sc-mgm-refer__copy-code");
    if (copyCodeButton) {
      copyCodeButton.addEventListener("click", function () {
        that.copyReferralCode(that.codeValue);
      });
    }
    //Handle popup open
    let modalOpen = false;
    let mainModalId = "";
    that.isTermModalRequire = false;
    that.isTermModalActive = false;
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
            } else {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              if (e.target.classList.contains("sc-mgm-refer-pdt-btn")) {
                that.pdtBtnShare(e.target, that.codeValue);
              }
            }
          });
        });
      }
    }, 100);

    //Handle modal close event
    document.body.addEventListener("click", function (event) {
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
        if (
          event.target.classList.contains("sc-mgm-refer-tc") &&
          window.tcmObject.termsAccepted &&
          !window.tcmObject.termsUpdated
        ) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          setTimeout(() => {
            that.checkAndUpdateDate();
            that.pdtBtnShare(event.target, that.codeValue);
          }, 1000);
        } else if (
          event.target.classList.contains("sc-mgm-refer-tc") &&
          that.isTermModalRequire &&
          !window.tcmObject.termsAccepted
        ) {
          console.log("term modal active !!");
          console.log("terms updted--", window.tcmObject.termsUpdated);
          that.isTermModalActive = true;
          that.termsModalActive(event);
        } else if (
          event.target.classList.contains("sc-mgm-refer-tc") &&
          that.isTermModalRequire &&
          window.tcmObject.termsAccepted &&
          window.tcmObject.termsUpdated
        ) {
          console.log("term modal active !!");
          console.log("terms updted--", window.tcmObject.termsUpdated);
          that.isTermModalActive = true;
          that.termsModalActive(event);
        }
      }
    });

    // Get the anchor tag and add a click event listener
    // const pdtButton = document.querySelectorAll(".sc-mgm-refer-pdt-btn");
    // if (pdtButton.length) {
    //   pdtButton.forEach(function (el) {
    //     el.addEventListener("mousedown", function (event) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //       if (that.isTermModalRequire && window.tcmObject.termsAccepted) {
    //         that.pdtBtnShare(event.target, that.codeValue);
    //       }
    //     });
    //   });
    // }

    that.checkAndUpdateDate();
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
  // pdtBtnShare(ev, codeValue) {
  //   console.log("!!!!!!pdtBtnShare Called !!!!!!");
  //   let shareTitle = ev.getAttribute("data-shareTitle"),
  //     shareText = ev.getAttribute("data-shareText"),
  //     shareURL = ev.getAttribute("data-shareURL");
  //   console.log({ ev: ev, codeValue: codeValue });
  //   console.log({
  //     shareTitle: shareTitle,
  //     shareText: shareText,
  //     shareURL: shareURL,
  //   });
  //   if (!shareURL) return;

  //   shareURL = shareURL.split("data-share-code").join(codeValue);
  //   shareText = shareText.split("data-share-code").join(codeValue);

  //   const deviceOs = Utils.getDeviceDetails().os;
  //   if (deviceOs === "Android") {
  //     //Share code for Android
  //     window.Android.shareAction(
  //       JSON.stringify({
  //         shareTitle: shareTitle,
  //         shareURL: shareURL,
  //         shareText: shareText,
  //       })
  //     );
  //   } else if (deviceOs === "iOS") {
  //     //Share code for iOS
  //     window.webkit.messageHandlers.shareAction.postMessage({
  //       shareTitle: shareTitle,
  //       shareURL: shareURL,
  //       shareText: shareText,
  //     });
  //   }
  // }

  pdtBtnShare(ev, codeValue) {
    const that = this;
    let shareTitle = ev.getAttribute("data-shareTitle"),
      shareText = ev.getAttribute("data-shareText"),
      shareURL = ev.getAttribute("data-shareURL");

    console.log({ ev: ev, codeValue: codeValue });
    console.log({
      shareTitle: shareTitle,
      shareText: shareText,
      shareURL: shareURL,
    });
    if (!shareURL) return;

    shareURL = shareURL.split("data-share-code").join(codeValue);
    shareText = shareText.split("data-share-code").join(codeValue);
    const isFromUniversalDeeplink = that.ScCommonMethods.getQueryParam(
      that.queryString,
      "isFromUniversalDeeplink"
    );
    console.log({ isFromUniversalDeeplink });
    if (isFromUniversalDeeplink === "true") {
      cordova.exec(
        () => console.log("success callback"),
        (error) => console.error(error),
        "SocialSharing",
        "shareWithOptions",
        [
          {
            title: shareTitle,
            message: shareText,
            type: "url",
            url: shareURL,
          },
        ]
      );
    } else {
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
   * Represent a function
   * @function termsState
   * @returns {object} window.tcmObject
   */
  termsState() {
    const that = this;
    // termsUpdated
    let isTermsUpdated = false;
    let storedtermsUpdated = localStorage.getItem("termUpdatedDate");
    let cookietermsUpdated = that.getCookie("termUpdatedDate");
    let oldstoredtermsUpdated = localStorage.getItem("oldtermUpdatedDate");
    let oldcookietermsUpdated = that.getCookie("oldtermUpdatedDate");

    // termsAccepted
    let storedtermsAccepted = localStorage.getItem("termsAccepted") === "true";
    let cookietermsAccepted = that.getCookie("termsAccepted") === "true";

    // Compare termsUpdated values to check if they have changed
    if (oldstoredtermsUpdated || oldcookietermsUpdated) {
      if (
        oldstoredtermsUpdated !== storedtermsUpdated ||
        oldcookietermsUpdated !== cookietermsUpdated
      ) {
        isTermsUpdated = true;
      } else {
        isTermsUpdated = false;
      }
    }
    console.log({
      oldstoredtermsUpdated,
      storedtermsUpdated,
      cookietermsUpdated,
      isTermsUpdated,
    });

    window.tcmObject = {
      termsUpdated: isTermsUpdated,
      termsAccepted: storedtermsAccepted || cookietermsAccepted,
    };
    console.log(window.tcmObject);
    return window.tcmObject;
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
          let activeModal = document.querySelector(".m-text-content");
          let activeModalId = activeModal.getAttribute("data-modal-id");
          if (modalAttr === activeModalId) {
            let tcUpdateInfo = document.querySelector(".sc-info-tile");
            console.log("termsUpdated--", window.tcmObject.termsUpdated);
            if (window.tcmObject.termsUpdated) {
              tcUpdateInfo.classList.remove("hide");
            } else {
              tcUpdateInfo.classList.add("hide");
            }
            that.activeScrollToBottom(event, mtextcontentId);
            // that.activeDownloadButton();
          } else {
            console.log("activeModalId Not matched");
          }
        }, 200);
      }
    }
  }

  /**
   * Terms Modal Close
   * @example
   * termsModalClosed("modal-1")
   */
  termsModalClosed(modalid) {
    const that = this;
    console.log("termsModalClosed Called!", modalid);
    that.isTermModalActive = false;
  }

  /**
   * activeScrollToBottom on modal active
   * @param {event} event event target
   * @param {String} mtextcontentId active modal ID
   * @example
   * activeScrollToBottom(e,id)
   */
  activeScrollToBottom(event, mtextcontentId) {
    console.log("activeScrollToBottom !!", mtextcontentId);
    const that = this;
    let referEvent = event;
    var scrollbtn = document.querySelector(".sc-products-tile__scroll-step");
    var scrollbtnlastTitle = scrollbtn.getAttribute("data-last-title");
    var downloadButton = document.querySelector(
      ".sc-products-tile__download-button"
    );
    var scrollableDiv = document.querySelector(".m-text-content");
    let clickCount = 0;
    const stepsPerClick = 1; // Number of scroll steps per click
    const totalSteps = 4; // Total number of steps to scroll
    let manualScrollDetected = false;
    const closeButton = document.querySelector(".wrapper");

    // Check if the user has been redirected before
    console.log(window.tcmObject);
    if (window.tcmObject.termsAccepted) {
      closeButton.click();
      setTimeout(() => {
        that.checkAndUpdateDate();
        that.pdtBtnShare(referEvent.target, that.codeValue);
      }, 1000);
    }

    let scrollToBottom = (element, steps) => {
      const totalHeight = element.scrollHeight - element.clientHeight;
      const stepHeight = totalHeight / totalSteps;

      element.scrollBy({ top: stepHeight * steps, behavior: "smooth" });

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
        localStorage.setItem("termsAccepted", true);
        that.setCookie("termsAccepted", true, 365);
        localStorage.setItem(
          "oldtermUpdatedDate",
          localStorage.getItem("termUpdatedDate")
        );
        that.setCookie(
          "oldtermUpdatedDate",
          that.getCookie("termUpdatedDate"),
          365
        );
        that.termsState();
        closeButton.click();
        setTimeout(() => {
          that.checkAndUpdateDate();
          that.pdtBtnShare(referEvent.target, that.codeValue);
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
  // activeDownloadButton() {
  //   console.log("activeDownloadButton !!");
  //   // Download function
  //   let downloadPdf = (pdfurl, filename) => {
  //     // Fetch the PDF file and force download
  //     if (pdfurl) {
  //       let pdfUrl = decodeURI(pdfurl).toString();
  //       fetch(pdfUrl)
  //         .then((response) => response.blob())
  //         .then((blob) => {
  //           var url = window.URL.createObjectURL(blob);
  //           var a = document.createElement("a");
  //           a.style.display = "none";
  //           a.href = url;
  //           a.download = filename || "file.pdf"; // The filename to save as
  //           document.body.appendChild(a);
  //           a.click();
  //           document.body.removeChild(a);
  //           window.URL.revokeObjectURL(url);
  //         })
  //         .catch(() => alert("An error occurred while downloading the PDF."));
  //     }
  //   };

  //   // Click event
  //   var downloadButton = document.querySelector(
  //     ".sc-products-tile__download-button"
  //   );
  //   console.log(downloadButton);
  //   downloadButton.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     // event.stopPropagation();
  //     // event.stopImmediatePropagation();
  //     let closestAnchor = event.target.closest("a");
  //     let datapdfurl = closestAnchor.getAttribute("data-pdf-url");
  //     // URL of the PDF
  //     var pdfUrl = datapdfurl.toString();

  //     const encodedURL = encodeURI(pdfUrl);
  //     var url = new URL(pdfUrl);
  //     var pathname = url.pathname;
  //     var segments = pathname.split("/");
  //     var filename = segments[segments.length - 1];

  //     // Fetch the PDF file and force download
  //     downloadPdf(encodedURL, filename);
  //   });
  // }

  // activeDownloadButton() {
  //   console.log("activeDownloadButton !!");

  //   // Download function
  //   let downloadPdf = (pdfurl, filename) => {
  //     // Fetch the PDF file and force download
  //     if (pdfurl) {
  //       let pdfUrl = decodeURI(pdfurl).toString(); // Ensure the URL is properly decoded
  //       fetch(pdfUrl)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok.");
  //           }
  //           return response.blob(); // Get the blob from response
  //         })
  //         .then((blob) => {
  //           // Create a temporary link element
  //           const link = document.createElement("a");
  //           const url = window.URL.createObjectURL(blob); // Create object URL for the blob
  //           link.href = url;
  //           link.setAttribute("target", "_blank");
  //           link.download = filename || "file.pdf"; // Set the filename for the download
  //           document.body.appendChild(link);
  //           console.log(link);
  //           link.click(); // Trigger download
  //           document.body.removeChild(link); // Clean up
  //           window.URL.revokeObjectURL(url); // Free memory
  //         })
  //         .catch((error) => {
  //           console.error("Download error:", error);
  //           alert("An error occurred while downloading the PDF.");
  //         });
  //     }
  //   };

  //   // Select all download buttons
  //   var downloadButtons = document.querySelectorAll(
  //     ".sc-products-tile__download-button"
  //   );

  //   downloadButtons.forEach((downloadButton) => {
  //     downloadButton.addEventListener("click", function (event) {
  //       event.preventDefault(); // Prevent default anchor click
  //       event.stopPropagation(); // Stop event bubbling

  //       // Get the closest anchor element
  //       let closestAnchor = event.target.closest("a");
  //       if (closestAnchor) {
  //         let datapdfurl = closestAnchor.getAttribute("data-pdf-url");

  //         // URL of the PDF
  //         var pdfUrl = datapdfurl.toString();
  //         const encodedURL = encodeURI(pdfUrl);
  //         var url = new URL(pdfUrl);
  //         var pathname = url.pathname;
  //         var segments = pathname.split("/");
  //         var filename = segments[segments.length - 1];

  //         // Fetch the PDF file and trigger the download
  //         downloadPdf(encodedURL, filename);
  //       } else {
  //         console.error("Anchor element not found.");
  //       }
  //     });
  //   });
  // }

  /**
   * Function to set a cookie
   * @function setCookie
   * @param {string} name
   * @param {string} value
   * @param {string} days
   */
  setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // days to milliseconds
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  /**
   * Function to get a cookie value by name
   * @function getCookie
   * @param {string} name
   * @returns {string} Key
   */
  getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /**
   * Function to validate if a string is a valid UTC timestamp
   * @function isValidUTCTimestamp
   * @param {string} timestamp
   * @returns {boolean}
   */
  isValidUTCTimestamp(timestamp) {
    const parsed = parseInt(timestamp, 10);
    const date = new Date(parsed);
    return !isNaN(parsed) && date.getTime() > 0;
  }

  /**
   * Function to convert a date string (e.g., '24/09/2024') to a UTC timestamp
   * @function convertToUTCTimestamp
   * @param {string} dateStr
   * @returns {string} date string
   */
  convertToUTCTimestamp(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day)); // month is 0-indexed
    return date.getTime();
  }

  /** Function to check if the date value has changed and update storage
   * @function checkAndUpdateDate
   */
  checkAndUpdateDate() {
    const that = this;
    const element = document.querySelector(".m-text-content");
    const newDateStr = element.getAttribute("data-term-updated-date");

    // Convert the new date string to a UTC timestamp
    const newDateTimestamp = that.convertToUTCTimestamp(newDateStr);

    // Get stored date from localStorage and cookies
    let storedDateTimestamp = localStorage.getItem("termUpdatedDate");
    let cookieDateTimestamp = that.getCookie("termUpdatedDate");

    // Validate stored timestamps (fallback if tampered or invalid)
    if (!that.isValidUTCTimestamp(storedDateTimestamp)) {
      console.warn(
        "Invalid timestamp in localStorage, resetting to the new value."
      );
      storedDateTimestamp = null;
    }

    if (!that.isValidUTCTimestamp(cookieDateTimestamp)) {
      console.warn("Invalid timestamp in cookies, resetting to the new value.");
      cookieDateTimestamp = null;
    }

    // If it's the first time or both storage are invalid, store the new date
    if (storedDateTimestamp === null || cookieDateTimestamp === null) {
      console.log("Storing date for the first time.");
      localStorage.setItem("termUpdatedDate", newDateTimestamp);
      that.setCookie("termUpdatedDate", newDateTimestamp, 365);
      that.termsState();
    } else {
      // Convert stored values to numbers for comparison
      storedDateTimestamp = Number(storedDateTimestamp);
      cookieDateTimestamp = Number(cookieDateTimestamp);

      // Compare the new date timestamp with the stored one
      if (newDateTimestamp > storedDateTimestamp) {
        console.log("Date updated:", newDateTimestamp);
        // Update localStorage and cookies with the new and old date
        localStorage.setItem("oldtermUpdatedDate", storedDateTimestamp);
        that.setCookie("oldtermUpdatedDate", cookieDateTimestamp, 365);

        localStorage.setItem("termUpdatedDate", newDateTimestamp);
        that.setCookie("termUpdatedDate", newDateTimestamp, 365);
        // Update localStorage and cookies with the new Terms
        localStorage.setItem("termsAccepted", false);
        that.setCookie("termsAccepted", false, 365);
        that.termsState();
      } else {
        that.termsState();
        console.log("It's a match, no update needed.");
      }
    }
  }

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
