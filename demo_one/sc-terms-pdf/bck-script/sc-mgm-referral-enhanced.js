/* global Utils, digitalData, scAnalyticsDataArray */
import ScCommonMethods from './../../../../../src/assets/js/commons/sc-common-methods';

class ScMgmReferralEnhanced {
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
    that.queryParams = ScCommonMethods.getQueryParam(
      that.queryString,
      that.productTile.getAttribute('data-query-param-code')
    );
    const recommendedLit = that.productTile.getAttribute('data-recommended-lite');

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
      that.viewAll.addEventListener('click', function() {
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
      that.backBtn.addEventListener('click', function() {
        //Display all products
        that.toggleProducts(true);
        that.referHeader.classList.add('hide');
        if (that.termsConditions) that.termsConditions.classList.add('hide');
      });
    }

    //Update product URL
    const pdtUrls = that.productTile.querySelectorAll('a');
    pdtUrls.forEach(function(pdtUrl) {
      const currentURL = pdtUrl.getAttribute('href');
      if (currentURL !== '#null') {
        pdtUrl.setAttribute('href', that.updateQueryString(currentURL));
      }
    });

    //Handle popup open
    let modalOpen = false;
    setTimeout(() => {
      const openModals = that.productTile.querySelectorAll("a[href='#null']");
      if (openModals.length) {
        openModals.forEach(function(el) {
          el.addEventListener('click', () => {
            modalOpen = true;
          });
        });
      }
    }, 100);

    //Handle modal close event
    document.body.addEventListener('click', function(event) {
      if (modalOpen) {
        let anchor = event.target.closest('a');
        if (
          event.target.className.indexOf('closebutton') !== -1 ||
          event.target.className.indexOf('wrapper') !== -1
        ) {
          modalOpen = false;
          that.triggerCtaClickTagging(event);
        } else if (
          anchor &&
          anchor.getAttribute('href') === '#null' &&
          event.target.closest('.m-text-content')
        ) {
          let ctaTitle = anchor.getAttribute('title')
            ? anchor.getAttribute('title')
            : anchor.innerText ||
              anchor.textContent ||
              anchor.getAttribute('data-context') ||
              anchor.getAttribute('aria-label');

          if (ctaTitle) {
            that.triggerPopupViewedTagging(ctaTitle.trim());
          }
        }
      }
    });

    that.handleSticky();
    that.handleReferId();
    that.updateLinkHref();
  }

  handleSticky() {
    const that = this;
    const headingWrapper = that.productTile.querySelector('.sc-filter');
    const headingPosition = ScCommonMethods.getPosition(headingWrapper);
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
    const pdtId = ScCommonMethods.getQueryParam(
      that.queryString,
      that.productTile.getAttribute('data-query-param-product')
    );

    if (pdtId) {
      // Display products in recommended tiles
      that.backBtn.classList.add('hide');
      const recommendedTiles = that.productTile.querySelector('.sc-product-tiles-recommended');
      recommendedTiles.classList.remove('hide');

      const selectedPdt = that.productTile.querySelector(`[data-product-name='${pdtId}']`);

      if (selectedPdt) {
        // Clone the selectedPdt element for the recommended wrapper
        const clonedPdtForRecommended = selectedPdt.cloneNode(true);
        const recommendedWrapper = that.productTile.querySelector(
          '.sc-product-tiles-recommended__wrapper'
        );
        if (recommendedWrapper) {
          recommendedWrapper.appendChild(clonedPdtForRecommended);
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
      appliedCodes.forEach(function(appliedCode) {
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
    const pdtId = ScCommonMethods.getQueryParam(
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
      appliedCodes.forEach(function(appliedCode) {
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
      allPdtNames.forEach(function(allPdtName) {
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
      categoryBtn.forEach(function(el) {
        el.addEventListener('click', function(event) {
          const activeBtn = that.productTile.querySelector('.sc-filter__btn--active');
          if (activeBtn) {
            activeBtn.classList.remove('sc-filter__btn--active');
          }
          event.target.classList.add('sc-filter__btn--active');

          const catName = event.target.getAttribute('data-categories');
          const allCards = that.productTile.querySelectorAll(
            '.sc-product-tiles__wrapper [data-cards]'
          );

          allCards.forEach(function(allCard) {
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
    let searchParams = `${that.productTile.getAttribute('data-query-param-code')}=${
      that.queryParams
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
   * trigger adobe popupViewed event when showing popups
   */
  triggerPopupViewedTagging(popupName) {
    setTimeout(() => {
      let dataObject = {
        ...digitalData,
        form: {
          formName: '',
          formStepName: '',
          formType: '',
          formPlatform: ''
        }
      };
      dataObject.form.popupName = popupName;
      dataObject.event = 'popupViewed';
      scAnalyticsDataArray.push(dataObject);
    }, 500);
  }

  /**
   * trigger adobe ctaClick event during click action
   */
  triggerCtaClickTagging(event) {
    const that = this;
    if (that.eventFired) {
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
      let dataObject = {
        ...digitalData,
        customLinkClick: {
          customLinkText: customLinkText,
          customLinkRegion:
            that.getHorizontalPosition(event.clientX) +
            ' ' +
            Utils.calcElementLocation(event.target),
          customLinkType: ctaType
        },
        event: 'ctaClick',
        context: customLinkText
      };
      scAnalyticsDataArray.push(dataObject);
    }
  }

  /**
   * capture horizontal click position and return it's left or right
   * @param {Number} xClick horizontal click position
   * @return {String} return it's left or right
   * @example
   * getHorizontalPosition(1000)
   */
  getHorizontalPosition(xClick) {
    let width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
    let median = width / 2;
    return xClick < median ? 'left' : 'right';
  }

  /**
   * fixed case sensitive issue of the referId
   */
  handleReferId() {
    const that = this;
    const anchorList = document.querySelectorAll(
      '.sc-product-tile-is-recommended a, .sc-products-tile-modal a'
    );
    anchorList.forEach(function(el) {
      el.addEventListener('click', function(event) {
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

    document.body.addEventListener('click', function(event) {
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
          .catch(err => {});
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
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
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
      .addEventListener('click', function() {
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
    const applyNowLinks = document.querySelectorAll('.sc-products-tile__is-pdt-selection');
    const checkedRadio = document.querySelector('.sc-products-tile-pdt-selection input:checked');
    const newHref = checkedRadio?.closest('label').getAttribute('data-card-link');
    applyNowLinks.forEach(function(link) {
      link.setAttribute('href', newHref);
    });
  }
}

const instance = new ScMgmReferralEnhanced();
instance.init();

export default instance;




