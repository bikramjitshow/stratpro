/* global Utils */
// import ScCommonMethods from './sc-common-methods-2.js';
// import { handleAnalyticsCTA } from './sc-common-methods.js';

class ScMgmReferralEnhanced {
  constructor() {
    this.ScCommonMethods = new ScCommonMethods();
  }
  init() {
    const that = this;
    that.productTile = document.querySelector('.sc-product-tiles');
    if (!that.productTile) return;

    that.errorModal = document.querySelector('.sc-error-modal');
    that.referHeader = that.productTile.querySelector('.sc-product-tiles__head-wrapper');
    that.allPdt = that.productTile.querySelector('.sc-product-tile-is-recommended');
    that.singlePdt = that.productTile.querySelector('.sc-product-tile-recommended');
    that.backBtn = that.productTile.querySelector('.sc-product-tile-is-recommended-back-btn');
    that.viewAll = that.productTile.querySelector('.sc-product-tile-recommended__view-all-btn');
    that.termsConditions = document.querySelector('.sc-terms-links');

    that.queryString = Utils.getPageContext().queryString;
    that.queryParams = that.ScCommonMethods.getQueryParam(
      that.queryString,
      that.productTile.getAttribute('data-query-param-code')
    );
    const recommendedLit = that.productTile.getAttribute('data-recommended-lite');
    that.isTermModalRequire = false;
    that.isTermModalActive = false;
    that.skipTermsModalClosed = false;

    // Append the referid
    const urlParams = new URLSearchParams(window.location.search);
    const referid = urlParams.get('referid');

    if (referid) {
      const allUrl = document.querySelectorAll('.sc-product-tiles a');
      allUrl.forEach(function (el) {
        el.addEventListener('mousedown', event => {
          const href = event.target.closest('a').getAttribute('href');
          // Only modify the href if it contains "retail.sc.com" and doesn't already have the referid
          if (href.includes('retail.sc.com') && !href.includes(`referid=${referid}`)) {
            // Append the referid without duplicating
            const newHref = href.includes('?')
              ? href + `&referid=${referid}`
              : href + `?referid=${referid}`;
            event.target.closest('a').setAttribute('href', newHref);
          }
        });
      });
    }

    //Invalid referId in the URL show error popup
    if (
      !that.queryParams ||
      that.queryParams.replace(/[^0-9a-zA-Z]/gi, '').length !==
      Number(that.productTile.getAttribute('data-query-param-code-length'))
    ) {
      //Invalid referId in the URL
      that.errorModal.classList.add('sc-error-modal--show');
      document.body.classList.add('modal-open');
      return;
    } else if (recommendedLit) {
      that.singlePdt.classList.add('hide');
      that.handleRecommendedLite();
    } else {
      that.handleModalProduct();
    }

    that.handleFilter();

    //Handle display all product
    if (that.viewAll) {
      that.viewAll.addEventListener('click', function () {
        //Display all products
        that.toggleProducts(false);
        if (that.termsConditions) that.termsConditions.classList.remove('hide');
        const width =
          window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        ScCommonMethods.smoothScroll(that.backBtn, 500, width > 767 ? 100 : 30);
      });
    }

    //Handle back button
    if (that.backBtn) {
      that.backBtn.addEventListener('click', function () {
        //Display all products
        that.toggleProducts(true);
        that.referHeader.classList.add('hide');
        if (that.termsConditions) that.termsConditions.classList.add('hide');
      });
    }

    //Update product URL
    setTimeout(() => {
      //Added some delay so that the data-mobile-href update the href first
      const pdtUrls = that.productTile.querySelectorAll('a');
      pdtUrls.forEach(function (pdtUrl) {
        const currentURL = pdtUrl.getAttribute('href');
        if (currentURL !== '#null') {
          pdtUrl.setAttribute('href', that.updateQueryString(currentURL));
        }
      });
    }, 300);

    //Handle popup open
    let modalOpen = false;
    let mainModalId = '';
    const openModals = that.productTile.querySelectorAll("a[href='#null']");
    if (openModals.length) {
      openModals.forEach(function (el) {
        el.addEventListener('click', () => {
          modalOpen = true;
          mainModalId = el.getAttribute('data-modal-source');
          if (el.getAttribute('data-terms-enable') === 'true') {
            that.isTermModalRequire = true;
          }
        });
      });
    }

    //Handle modal close event
    document.body.addEventListener('click', function (event) {
      if (modalOpen) {
        let anchor = event.target.closest('a');
        let tm = document.querySelector('.m-text-content').getAttribute('data-term-modal');

        if (
          event.target.className.indexOf('closebutton') !== -1 ||
          event.target.className.indexOf('wrapper') !== -1
        ) {
          modalOpen = false;
          if (tm) {
            that.termsModalClosed(mainModalId);
          }

          let ctaType = event.target.type == 'button' ? event.target.type : 'link';
          let customLinkText = event.target.getAttribute('title')
            ? event.target.getAttribute('title')
            : event.target instanceof SVGElement ||
              event.target.getElementsByTagName('svg').length ||
              event.target.classList.contains('closebutton')
              ? 'Close'
              : event.target.innerText
                ? event.target.innerText.trim().toLowerCase()
                : event.target.textContent.trim().toLowerCase();
          // handleAnalyticsCTA(event, anchor, {
          //   ctaType: ctaType,
          //   customLinkText: customLinkText
          // });
        }

        //identify the term modal
        if (event.target.classList.contains('sc-mgm-refer-tc')) {
          that.isTermModalActive = true;
          that.termsModalActive(event);
        }
      }
    });

    that.handleSticky();
    that.handleReferId();
    // that.updateLinkHref(0);
  }

  handleSticky() {
    const that = this;
    const headingWrapper = that.productTile.querySelector('.sc-filter');
    const headingPosition = that.ScCommonMethods.getPosition(headingWrapper);
    if (headingWrapper) {
      window.addEventListener('scroll', () => {
        const width =
          window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (window.scrollY > headingPosition - (width > 768 ? 100 : 10)) {
          headingWrapper.classList.add('sc-filter--sticky');
        } else {
          headingWrapper.classList.remove('sc-filter--sticky');
        }
      });
    }
  }

  /**
   * Handles the display of recommended products by cloning the selected product
   * and placing it in specific tiles, then removing the original product element.
   */
  handleRecommendedLite() {
    const that = this;
    const pdtId = that.ScCommonMethods.getQueryParam(
      that.queryString,
      that.productTile.getAttribute('data-query-param-product')
    );

    if (pdtId) {
      // Display products in recommended tiles
      that.backBtn.classList.add('hide');
      const recommendedTiles = that.productTile.querySelector('.sc-product-tiles-recommended');
      const singleViewTile = that.productTile.querySelector('.sc-product-tile-singleview');
      recommendedTiles.classList.remove('hide');

      const selectedPdt = that.productTile.querySelector(`[data-product-name='${pdtId}']`);

      const singleViewPdt = selectedPdt.getAttribute("data-single-view") === "true";

      console.log("selectedPdt", selectedPdt)
      console.log("singleViewPdt", singleViewPdt)

      if (selectedPdt) {
        // Clone the selectedPdt element for the recommended wrapper
        const clonedPdtForRecommended = selectedPdt.cloneNode(true);
        const recommendedWrapper = that.productTile.querySelector(
          '.sc-product-tiles-recommended__wrapper'
        );
        if (recommendedWrapper) {
          recommendedWrapper.appendChild(clonedPdtForRecommended);
        }

        // singleViewPdt
        if (singleViewPdt) {
          recommendedTiles.classList.add('hide');
          singleViewTile.classList.remove('hide');
          // Clone the selectedPdt element for the recommended wrapper
          const clonedPdtForRecommended = selectedPdt.cloneNode(true);
          const recommendedWrapper = that.productTile.querySelector(
            '.sc-product-tile-recommended__view-all'
          );
          if (recommendedWrapper) {
            recommendedWrapper.appendChild(clonedPdtForRecommended);
          }
        }

        // Clone the selectedPdt element for the tiles wrapper
        const clonedPdtForTiles = selectedPdt.cloneNode(true);
        const tilesWrapper = that.productTile.querySelector('.sc-product-tiles__wrapper');
        if (tilesWrapper) {
          tilesWrapper.appendChild(clonedPdtForTiles);
        }

        // Now remove the original selectedPdt
        selectedPdt.remove();

        const badge = that.productTile.querySelector(
          `.sc-product-tiles__wrapper [data-product-name='${pdtId}'] .sc-badge`
        );
        badge?.classList.remove('hide');

        let counter = 1;
        const allIds = recommendedWrapper.querySelectorAll(
          '.sc-products-tile-modal__accordion .sc-accordion__input'
        );
        if (allIds.length) {
          //Generate dynamic Id if accordion is exist in the recommended section
          allIds.forEach(el => {
            let id = el.getAttribute('id');
            if (id) {
              id = `${id}_dynamic_${counter}`;
              const label = el.closest('.sc-products-tile-modal__accordion').querySelector('label');
              el.setAttribute('id', id);
              label.setAttribute('for', id);
              counter++;
            }
          });
        }
      }
    } else {
      that.backBtn.classList.add('hide');
    }

    const appliedCodes = that.productTile.querySelectorAll('.sc-products-tile__applied-code');
    if (appliedCodes.length) {
      appliedCodes.forEach(function (appliedCode) {
        appliedCode.classList.remove('hide');
        appliedCode.querySelector('span').innerHTML = that.queryParams;
      });
    }
  }

  /**
   * Handles the display of a single product in a modal or displays all products.
   */
  handleModalProduct() {
    const that = this;
    const pdtId = that.ScCommonMethods.getQueryParam(
      that.queryString,
      that.productTile.getAttribute('data-query-param-product')
    );
    if (pdtId) {
      //Display single product
      const selectedPdt = that.productTile.querySelector(`[data-product-name='${pdtId}']`);
      if (selectedPdt) {
        //Product found
        const modalSource = selectedPdt
          .querySelector('a[href="#null"]')
          .getAttribute('data-modal-source');

        if (modalSource) {
          //Modal source found
          const modalContent = document.querySelector(`[data-modal-id='${modalSource}']`);
          if (modalContent) {
            //Popup modal content found
            that.singlePdt.querySelector('.sc-products-tile-modal').remove();
            that.viewAll.parentNode.insertBefore(
              modalContent.querySelector('.sc-products-tile-modal').cloneNode(true),
              that.viewAll
            );
            that.handleRecommendedProduct(pdtId);
            that.toggleProducts(true);
            that.referHeader.classList.add('hide');
            if (that.termsConditions) that.termsConditions.classList.add('hide');
          } else {
            //No product found
            that.backBtn.classList.add('hide');
            that.toggleProducts(false);
          }
        } else {
          //No product found
          that.backBtn.classList.add('hide');
          that.toggleProducts(false);
        }
      } else {
        //No product found
        that.backBtn.classList.add('hide');
        that.toggleProducts(false);
      }
    } else {
      //Display all products
      that.backBtn.classList.add('hide');
      that.toggleProducts(false);
    }

    const appliedCodes = that.productTile.querySelectorAll('.sc-products-tile__applied-code');
    if (appliedCodes.length) {
      appliedCodes.forEach(function (appliedCode) {
        appliedCode.classList.remove('hide');
        appliedCode.querySelector('span').innerHTML = that.queryParams;
      });
    }
  }

  /**
   * clone recommended product and display it in the top position
   */
  handleRecommendedProduct(pdtName) {
    const that = this;
    const tileWrapper = that.productTile.querySelector('.sc-product-tiles__wrapper');
    const allPdtNames = that.productTile.querySelectorAll('[data-product-name]');
    if (allPdtNames.length) {
      allPdtNames.forEach(function (allPdtName) {
        if (allPdtName.getAttribute('data-product-name') === pdtName) {
          const badge = allPdtName.querySelector('.sc-badge');
          if (badge) {
            badge.classList.remove('hide');
          }
          const clonedDiv = allPdtName.cloneNode(true);
          allPdtName.remove();
          tileWrapper.insertBefore(clonedDiv, tileWrapper.firstChild);
        }
      });
    }
  }

  /**
   * show or hide products
   */
  toggleProducts(isSingle) {
    const that = this;
    if (isSingle) {
      //Display single product
      that.allPdt.classList.add('hide');
      that.singlePdt.classList.remove('hide');
    } else {
      //Display all products
      that.allPdt.classList.remove('hide');
      that.singlePdt.classList.add('hide');
    }
  }

  /**
   * once clicked on categories, display related products
   */
  handleFilter() {
    const that = this;
    const categoryBtn = that.productTile.querySelectorAll('[data-categories]');
    if (categoryBtn.length) {
      categoryBtn.forEach(function (el) {
        el.addEventListener('click', function (event) {
          const activeBtn = that.productTile.querySelector('.sc-filter__btn--active');
          if (activeBtn) {
            activeBtn.classList.remove('sc-filter__btn--active');
          }
          event.target.classList.add('sc-filter__btn--active');

          const catName = event.target.getAttribute('data-categories');
          const allCards = that.productTile.querySelectorAll(
            '.sc-product-tiles__wrapper [data-cards]'
          );

          allCards.forEach(function (allCard) {
            if (catName === 'all') {
              //True if clicked on all category
              allCard.classList.remove('hide');
            } else {
              const cardsName = allCard.getAttribute('data-cards');
              catName === cardsName
                ? allCard.classList.remove('hide')
                : allCard.classList.add('hide');
            }
          });

          const width =
            window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          ScCommonMethods.smoothScroll(
            document.querySelector('.sc-product-tiles__wrapper'),
            300,
            width > 767 ? 150 : 70
          );
        });
      });
    }
  }

  /**
   * if referId exist inside query string, then update referId value or add referId as new query string
   */
  updateQueryString(url) {
    const that = this;
    const urlObj = url.split('?'); // Split the URL by '?', take the second part
    let searchParams = `${that.productTile.getAttribute('data-query-param-code')}=${that.queryParams
      }`;
    if (urlObj[1]) {
      searchParams = new URLSearchParams(urlObj[1]);
      // Check if the URL already contains a referId parameter
      if (searchParams.has(that.productTile.getAttribute('data-query-param-code'))) {
        // If it does, update the value
        searchParams.set(
          `${that.productTile.getAttribute('data-query-param-code')}`,
          that.queryParams
        );
      } else {
        // If not, add a new referId parameter
        searchParams.append(
          `${that.productTile.getAttribute('data-query-param-code')}`,
          that.queryParams
        );
      }
    }
    // Reconstruct the URL with the updated or added referId parameter
    return (urlObj[0] + '?' + searchParams.toString()).toString();
  }

  /**
   * fixed case sensitive issue of the referId
   */
  handleReferId() {
    const that = this;
    const anchorList = document.querySelectorAll(
      '.sc-product-tile-is-recommended a, .sc-products-tile-modal a'
    );
    anchorList.forEach(function (el) {
      el.addEventListener('click', function (event) {
        const closest = event.target.closest('a');
        let href = closest.getAttribute('href');
        if (!href.includes('#')) {
          event.preventDefault();
          event.stopPropagation();
          setTimeout(() => {
            href = closest.getAttribute('href');
            if (href) {
              href = href.split('referId').join('referid');
              closest.setAttribute('href', href);
              window.open(closest.getAttribute('href'), '_blank');
            }
          }, 50);
        }
      });
    });

    document.body.addEventListener('click', function (event) {
      const closestModal = event.target.closest('.c-modal');
      const closest = event.target.closest('a');
      if (closestModal && closest) {
        let href = closest.getAttribute('href');
        if (!href.includes('#')) {
          event.preventDefault();
          event.stopPropagation();
          setTimeout(() => {
            href = closest.getAttribute('href');
            if (href) {
              href = href.split('referId').join('referid');
              closest.setAttribute('href', href);
              window.open(closest.getAttribute('href'), '_blank');
            }
          }, 50);
        }
      }

      if (event.target.closest('.sc-products-tile__copy-code')) {
        const codeSpan = event.target
          .closest('.sc-products-tile-modal')
          .querySelector('.sc-products-tile__applied-code span');
        const messageDiv = document.querySelector('.sc-product-tiles__copy-message');
        // Copying content to clipboard
        const codeToCopy = codeSpan.innerText;
        navigator.clipboard
          .writeText(codeToCopy)
          .then(() => {
            // Adding class to show message
            messageDiv.classList.add('sc-product-tiles__copy-message--show');
            // Removing message-show class after 3 seconds
            setTimeout(() => {
              messageDiv.classList.remove('sc-product-tiles__copy-message--show');
            }, 3000);
          })
          .catch(err => { });
      } else if (event.target.closest('a[data-modal-source]')) {
        setTimeout(() => {
          const radioBtn = document.querySelector('.modal-content input[name="checkbox-radio"]');
          if (radioBtn) {
            radioBtn.checked = true;
          }
        }, 1000);
      }

      if (event.target.closest('.sc-products-tile-pdt-selection')) {
        that.updateLinkHref();
      }
    });

    // Get all elements with the class '.sc-products-tile__mobile-link'
    const mobileLinks = document.querySelectorAll('.sc-products-tile__mobile-link');
    // Loop through each mobile link and attach event listeners
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (window.innerWidth > 1024) {
          event.preventDefault();
          event.stopPropagation();
          document.querySelector('.sc-error-modal--apply').classList.add('sc-error-modal--show');
        }
      });
    });

    // Adding event listener for closing the modal
    document
      .querySelector('.sc-error-modal--apply .sc-error-modal__alert-close')
      .addEventListener('click', function () {
        document.querySelector('.sc-error-modal--apply').classList.remove('sc-error-modal--show');
      });

    if (window.location.href.indexOf('p=') > -1) {
      // Scroll down to the section with the class 'sc-product-tiles'
      const productTilesSection = document.querySelector('.sc-product-tiles');
      if (productTilesSection) {
        let offset = 0;
        if (window.innerWidth > 1024) {
          offset = 100; // Offset of 100 pixels for screens wider than 1024px
        }
        // Scroll to the top position of the section with the applied offset
        window.scrollTo({
          top: productTilesSection.offsetTop - offset,
          behavior: 'smooth' // Optional: for smooth scrolling
        });
      }
    }
  }

  updateLinkHref() {
    const that = this;
    const applyNowLinks = document.querySelectorAll('.sc-products-tile__is-pdt-selection');
    const checkedRadio = document.querySelector('.sc-products-tile-pdt-selection input:checked');
    // const isTermsModal = that.isTermModalActive | applyNowLinks.getAttribute("data-terms-enable");
    if (!that.isTermModalRequire) {
      const newHref = checkedRadio?.closest('label').getAttribute('data-card-link');
      applyNowLinks.forEach(function (link) {
        link.setAttribute('href', newHref);
      });
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
    // document.body.addEventListener("click", function (event) {
    let closestAnchor = event.target.closest('a');
    const checkedRadio = document.querySelector(
      '.c-modal .sc-products-tile-pdt-selection input:checked'
    );
    const newHref = checkedRadio?.closest('label').getAttribute('data-card-link');
    if (that.isTermModalRequire) {
      that.isTermModalActive = true;
      if (
        closestAnchor &&
        closestAnchor.getAttribute('href') === '#null' &&
        event.target.classList.contains('sc-mgm-refer-tc')
      ) {
        setTimeout(() => {
          let modalAttr = closestAnchor.getAttribute('data-modal-source');
          let modalredirecturl = closestAnchor.getAttribute('data-redirect-url');
          let activeModal = document.querySelector('.m-text-content');
          let activeModalId = activeModal.getAttribute('data-modal-id');
          if (modalAttr === activeModalId) {
            if (newHref) {
              that.activeScrollToBottom(newHref);
            } else {
              that.activeScrollToBottom(modalredirecturl);
            }
          }
        }, 150);
      }
    } else {
      let modalAttr = closestAnchor.getAttribute('data-modal-source');
      that.activeModalDataId = modalAttr;
    }
    // });
  }

  termsModalClosed(modalid) {
    const that = this;
    if (that.skipTermsModalClosed) {
      return;
    }
    that.isTermModalActive = false;
    setTimeout(function () {
      const modalId = document.querySelectorAll(`[data-modal-source='${modalid}']`);
      modalId.forEach(item => {
        if (modalId && item.classList.contains('sc-btn')) {
          item.click();
          that.isTermModalRequire = true;
        }
      });
    }, 700);
  }

  /**
   * activeScrollToBottom on modal active
   * @param {String} toredirect redirect URL
   * @example
   * activeScrollToBottom(url,id)
   */
  activeScrollToBottom(toredirect) {
    const that = this;
    var scrollbtns = document.querySelectorAll('.c-modal .sc-products-tile__scroll-step');
    if (scrollbtns.length) {
      scrollbtns.forEach(scrollbtn => {
        var scrollbtnlastTitle = scrollbtn.getAttribute('data-last-title');
        var downloadButton = document.querySelector('.sc-products-tile__download-button');
        var scrollableDiv = document.querySelector('.m-text-content');
        var redirectUrl = toredirect;

        let clickCount = 0;
        const stepHeightThreshold = 200; // Define a threshold for step size
        const totalHeight = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
        let totalSteps = Math.ceil(totalHeight / stepHeightThreshold); // Calculate total steps dynamically
        totalSteps = Math.min(totalSteps, 4); // Ensure the maximum value is 4
        let manualScrollDetected = false;

        let scrollToBottom = (element, steps) => {
          const totalHeight = element.scrollHeight - element.clientHeight;
          const stepHeight = totalHeight / totalSteps;

          element.scrollBy({ top: stepHeight * steps, behavior: 'smooth' });

          if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
            // Scrolled to the bottom
            manualScrollDetected = true;
          }
        };
        const closeButton = document.querySelector('.wrapper');
        scrollableDiv.addEventListener('scroll', function () {
          const scrollPos = scrollableDiv.scrollTop + scrollableDiv.clientHeight;
          const maxScroll = scrollableDiv.scrollHeight - 1; // Subtract a small margin for precision

          if (scrollPos >= maxScroll) {
            // Scrolled to the bottom
            manualScrollDetected = true;
            downloadButton.closest('li').style.display = 'none';
            scrollbtn.setAttribute('title', scrollbtnlastTitle);
            scrollbtn.innerText = scrollbtnlastTitle;
          }
        });

        scrollbtn.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();

          if (manualScrollDetected || clickCount >= totalSteps) {
            that.skipTermsModalClosed = true;
            closeButton.click();
            setTimeout(() => {
              document.body.classList.remove('modal-open');
              that.skipTermsModalClosed = false;
            }, 400);
            redirectUrl = that.updateQueryString(redirectUrl);
            window.open(redirectUrl, '_blank');
          } else {
            clickCount++;
            scrollToBottom(scrollableDiv, 1);

            if (clickCount >= totalSteps) {
              // If it was the last step, set manualScrollDetected to true to handle the next click as redirect
              downloadButton.closest('li').style.display = 'none';
              scrollbtn.setAttribute('title', scrollbtnlastTitle);
              scrollbtn.innerText = scrollbtnlastTitle;
              manualScrollDetected = true;
            }
          }
        });
      });
    }
  }
}

const instance = new ScMgmReferralEnhanced();
instance.init();

// export default instance;
