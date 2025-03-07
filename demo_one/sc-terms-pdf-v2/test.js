/* global Utils */
// import ScCommonMethods from './sc-common-methods-2.js';
// import { handleAnalyticsCTA } from './sc-common-methods.js';

class ScMgmReferralEnhanced {
  constructor() {
    this.ScCommonMethods = new ScCommonMethods();
  }
  init() {
    const that = this;
    that.productTile = document.querySelector(".sc-product-tiles");
    if (!that.productTile) return;

    that.errorModal = document.querySelector(".sc-error-modal");
    that.referHeader = that.productTile.querySelector(
      ".sc-product-tiles__head-wrapper"
    );
    that.allPdt = that.productTile.querySelector(
      ".sc-product-tile-is-recommended"
    );
    that.singlePdt = that.productTile.querySelector(
      ".sc-product-tile-recommended"
    );

    // that.backBtn = that.productTile.querySelector(
    //   ".sc-product-tile-is-recommended-back-btn"
    // );
    // that.viewAll = that.productTile.querySelector(
    //   ".sc-product-tile-recommended__view-all-btn"
    // );
    that.termsConditions = document.querySelector(".sc-terms-links");

    that.queryString = Utils.getPageContext().queryString;
    that.queryParams = that.ScCommonMethods.getQueryParam(
      that.queryString,
      that.productTile.getAttribute("data-query-param-code")
    );
    const recommendedLit = that.productTile.getAttribute(
      "data-recommended-lite"
    );
    that.isTermModalRequire = false;
    that.isTermModalActive = false;
    that.skipTermsModalClosed = false;
    that.isSingleViewPdt = false;

    // Append the referid
    const urlParams = new URLSearchParams(window.location.search);
    const referid = urlParams.get("referid");

    if (referid) {
      const allUrl = document.querySelectorAll(".sc-product-tiles a");
      allUrl.forEach(function (el) {
        el.addEventListener("mousedown", (event) => {
          const href = event.target.closest("a").getAttribute("href");
          // Only modify the href if it contains "retail.sc.com" and doesn't already have the referid
          if (
            href.includes("retail.sc.com") &&
            !href.includes(`referid=${referid}`)
          ) {
            // Append the referid without duplicating
            const newHref = href.includes("?")
              ? href + `&referid=${referid}`
              : href + `?referid=${referid}`;
            event.target.closest("a").setAttribute("href", newHref);
          }
        });
      });
    }

    //Invalid referId in the URL show error popup
    if (
      !that.queryParams ||
      that.queryParams.replace(/[^0-9a-zA-Z]/gi, "").length !==
        Number(that.productTile.getAttribute("data-query-param-code-length"))
    ) {
      //Invalid referId in the URL
      that.errorModal.classList.add("sc-error-modal--show");
      document.body.classList.add("modal-open");
      return;
    } else if (recommendedLit) {
      that.singlePdt.classList.add("hide");
      that.handleRecommendedLite();
    } else {
      that.handleModalProduct();
    }

    that.handleFilter();

    //Handle display all product
    // if (that.viewAll) {
    //   that.viewAll.addEventListener("click", function () {
    //     //Display all products
    //     that.toggleProducts(false);
    //     if (that.termsConditions) that.termsConditions.classList.remove("hide");
    //     const width =
    //       window.innerWidth ||
    //       document.documentElement.clientWidth ||
    //       document.body.clientWidth;
    //     ScCommonMethods.smoothScroll(that.backBtn, 500, width > 767 ? 100 : 30);
    //   });
    // }

    //Handle back button
    // if (that.backBtn) {
    //   that.backBtn.addEventListener("click", function () {
    //     //Display all products
    //     that.toggleProducts(true);
    //     that.referHeader.classList.add("hide");
    //     if (that.termsConditions) that.termsConditions.classList.add("hide");
    //   });
    // }

    //Update product URL
    setTimeout(() => {
      //Added some delay so that the data-mobile-href update the href first
      const pdtUrls = that.productTile.querySelectorAll("a");
      pdtUrls.forEach(function (pdtUrl) {
        const currentURL = pdtUrl.getAttribute("href");
        if (currentURL !== "#null") {
          pdtUrl.setAttribute("href", that.updateQueryString(currentURL));
        }
      });
    }, 300);

    //Handle popup open
    let modalOpen = false;
    that.mainModalId = "";
    const openModals = that.productTile.querySelectorAll("a[href='#null']");
    if (openModals.length) {
      openModals.forEach(function (el) {
        el.addEventListener("click", () => {
          modalOpen = true;
          that.mainModalId = el.getAttribute("data-modal-source");
          console.log(el);
          if (el.getAttribute("data-terms-enable") === "true") {
            that.isTermModalRequire = true;
          }
        });
      });
    }

    //Handle modal close event
    document.body.addEventListener("click", function (event) {
      if (modalOpen) {
        let anchor = event.target.closest("a");
        let tm = document
          .querySelector(".m-text-content")
          .getAttribute("data-term-modal");

        if (
          event.target.className.indexOf("closebutton") !== -1 ||
          event.target.className.indexOf("wrapper") !== -1
        ) {
          modalOpen = false;
          if (tm) {
            that.termsModalClosed(that.mainModalId);
          }

          let ctaType =
            event.target.type == "button" ? event.target.type : "link";
          let customLinkText = event.target.getAttribute("title")
            ? event.target.getAttribute("title")
            : event.target instanceof SVGElement ||
              event.target.getElementsByTagName("svg").length ||
              event.target.classList.contains("closebutton")
            ? "Close"
            : event.target.innerText
            ? event.target.innerText.trim().toLowerCase()
            : event.target.textContent.trim().toLowerCase();
          // handleAnalyticsCTA(event, anchor, {
          //   ctaType: ctaType,
          //   customLinkText: customLinkText
          // });
        }

        //identify the term modal
        if (event.target.classList.contains("sc-mgm-refer-tc")) {
          that.isTermModalActive = true;
          that.termsModalActive(event);
        }
      }
    });

    that.handleSticky();
    that.handleReferId();
    // that.updateLinkHref(0);
  }

  

  /**
   * Terms Modal Active on init
   * @example
   * termsModalActive()
   */
  termsModalActive(event) {
    const that = this;
    that.isTermModalActive = false;
    // document.body.addEventListener("click", function (event) {
    let closestAnchor = event.target.closest("a");
    const checkedRadio = document.querySelector(
      ".c-modal .sc-products-tile-pdt-selection input:checked"
    );
    console.log("checkedRadio--", checkedRadio);
    const newHref = checkedRadio
      ?.closest("label")
      .getAttribute("data-card-link");
    if (that.isTermModalRequire) {
      that.isTermModalActive = true;
      if (
        closestAnchor &&
        closestAnchor.getAttribute("href") === "#null" &&
        event.target.classList.contains("sc-mgm-refer-tc")
      ) {
        // event.preventDefault();
        // event.stopPropagation();
        setTimeout(() => {
          let modalAttr = closestAnchor.getAttribute("data-modal-source");
          let modalredirecturl =
            closestAnchor.getAttribute("data-redirect-url");
          let activeModal = document.querySelector(".m-text-content");
          let activeModalId = activeModal.getAttribute("data-modal-id");
          if (modalAttr === activeModalId) {
            console.log({ newHref, modalredirecturl });
            if (newHref) {
              that.activeScrollToBottom(newHref);
            } else {
              that.activeScrollToBottom(modalredirecturl);
            }
          }
        }, 150);
      }
    } else {
      let modalAttr = closestAnchor.getAttribute("data-modal-source");
      that.activeModalDataId = modalAttr;
    }
    // });
  }
  }

const instance = new ScMgmReferralEnhanced();
instance.init();

// export default instance;
