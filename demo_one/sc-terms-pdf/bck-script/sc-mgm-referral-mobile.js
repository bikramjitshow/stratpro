/* global Utils */
import ScCommonMethods from '../../../assets/js/commons/sc-common-methods';

class ScMgmReferralMobile {
  init() {
    const that = this;
    that.mgmRefer = document.querySelector('.sc-mgm-refer');
    // Assume that window.object is already defined
    const queryParameter = window.mgmObject.queryParameter || 'code';
    // Get the query parameter value from the URL
    const codeValue = ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      queryParameter
    );

    const errorModal = document.querySelector('.sc-error-modal');
    if (!codeValue) {
      //If referral code is empty or invalid
      errorModal.classList.add('sc-error-modal--show');
      return;
    }

    const pdtQueryParameter = ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      window.mgmObject.pdtQueryParameter
    );
    const segmentQueryParameter = ScCommonMethods.getQueryParam(
      Utils.getPageContext().queryString,
      window.mgmObject.segmentQueryParameter
    );
    if (pdtQueryParameter) {
      that.handlePdtParameter(pdtQueryParameter);
    } else if (segmentQueryParameter) {
      that.handleSegmentParameter(segmentQueryParameter);
    }

    // Update the content of the div with the extracted code
    const referralCodeDiv = document.querySelector('.sc-mgm-refer__code-text');
    if (referralCodeDiv) referralCodeDiv.textContent = codeValue;

    // Get the anchor tag and add a click event listener
    const copyCodeButton = document.querySelector('.sc-mgm-refer__copy-code');
    if (copyCodeButton) {
      copyCodeButton.addEventListener('click', function() {
        that.copyReferralCode(codeValue);
      });
    }

    // Get the anchor tag and add a click event listener
    const pdtButton = document.querySelectorAll('.sc-mgm-refer-pdt-btn');
    if (pdtButton.length) {
      pdtButton.forEach(function(el) {
        el.addEventListener('click', function(event) {
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
    const viewAll = that.mgmRefer.querySelector('.sc-mgm-refer__view-all');
    if (!viewAll) return;
    const personalizedBox = that.mgmRefer.querySelectorAll('.sc-mgm-personalised-box');
    const productSlider = that.mgmRefer.querySelector('.sc-mgm-product-slider');
    const cardWrapper = that.mgmRefer.querySelector('.sc-mgm-card__wrapper');
    const filterBtn = that.mgmRefer.querySelector('.sc-mgm-refer-personalised .sc-filter');
    const rewarded = that.mgmRefer.querySelector(
      '.sc-mgm-refer-personalised .sc-mgm-refer__rewarded'
    );
    const bottomBtn = that.mgmRefer.querySelector('.sc-mgm-refer-personalised .sc-bottom-btn');

    viewAll.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      event.target.classList.add('hide');
      if (personalizedBox.length) {
        personalizedBox.forEach(personalize => personalize.classList.add('hide'));
      }
      productSlider?.classList.add('hide');
      cardWrapper?.classList.remove('hide');
      if (filterBtn) filterBtn.style.display = 'block';
      if (rewarded) rewarded.style.display = 'block';
      if (bottomBtn) bottomBtn.style.display = 'block';
    });
  }

  /**
   * Copy the code to the clipboard
   */
  copyReferralCode(codeValue) {
    let inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('value', codeValue);
    inputField.style.height = 0;
    document.body.appendChild(inputField);
    inputField.select();
    document.execCommand('copy');
    document.body.removeChild(inputField);

    const codeBox = document.querySelector('.sc-mgm-refer__code-box');
    const successMessage = document.createElement('div');
    successMessage.className = 'sc-mgm-refer__copy-msg';
    successMessage.textContent = 'Copied successfully';
    codeBox.parentNode.insertBefore(successMessage, codeBox.nextSibling);

    // Remove success message after a delay (e.g., 2 seconds)
    setTimeout(function() {
      codeBox.parentNode.removeChild(successMessage);
    }, 5000);
  }

  /**
   * collect the share info from clicked share button
   */
  pdtBtnShare(ev, codeValue) {
    let shareTitle = ev.getAttribute('data-shareTitle'),
      shareText = ev.getAttribute('data-shareText'),
      shareURL = ev.getAttribute('data-shareURL');
    if (!shareURL) return;

    shareURL = shareURL.split('data-share-code').join(codeValue);
    shareText = shareText.split('data-share-code').join(codeValue);

    const deviceOs = Utils.getDeviceDetails().os;
    if (deviceOs === 'Android') {
      //Share code for Android
      window.Android.shareAction(
        JSON.stringify({
          shareTitle: shareTitle,
          shareURL: shareURL,
          shareText: shareText
        })
      );
    } else if (deviceOs === 'iOS') {
      //Share code for iOS
      window.webkit.messageHandlers.shareAction.postMessage({
        shareTitle: shareTitle,
        shareURL: shareURL,
        shareText: shareText
      });
    }
  }

  /**
   * Toggle how to refer section and handle close button
   */
  handleReferInfo() {
    const that = this;
    const scMgmReferral = Utils.getLocalStorageWithExpiry('scMgmReferral'),
      howReferBtn = that.mgmRefer.querySelector('.sc-mgm-refer__how-to'),
      howRefer = that.mgmRefer.querySelector('.sc-mgm-refer__how-refer');

    if (scMgmReferral) {
      howRefer.classList.add('hide');
      howReferBtn.classList.remove('hide');
    } else {
      howRefer.classList.remove('hide');
      howReferBtn.classList.add('hide');
    }

    //Handle close button
    const referClose = that.mgmRefer.querySelector('.sc-mgm-refer__how-refer-close');
    if (referClose) {
      referClose.addEventListener('click', function() {
        howRefer.classList.add('hide');
        howReferBtn.classList.remove('hide');
      });
    }

    //Display how to refer section
    howReferBtn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      howRefer.classList.remove('hide');
      howReferBtn.classList.add('hide');
    });

    Utils.setLocalStorageWithExpiry('scMgmReferral', true, 86400 * 1000 * 10); // Expiry for 10 days.
  }

  /**
   * based on the selected cards, display the cards
   */
  handleCardsFilter() {
    const that = this;
    const categoryList = that.mgmRefer.querySelectorAll('.sc-filter__btn');
    if (categoryList.length) {
      categoryList.forEach(function(el) {
        el.addEventListener('click', function(event) {
          const active = that.mgmRefer.querySelector('.sc-filter__btn--active');
          if (active) {
            active.classList.remove('sc-filter__btn--active');
          }
          event.target.classList.add('sc-filter__btn--active');
          const selectedCat = event.target.getAttribute('data-categories');

          const allCards = that.mgmRefer.querySelectorAll('[data-cards]');
          if (allCards.length) {
            for (let i = 0; i < allCards.length; i++) {
              if (selectedCat === 'all') {
                allCards[i].classList.remove('hide');
              } else if (selectedCat === allCards[i].getAttribute('data-cards')) {
                allCards[i].classList.remove('hide');
              } else {
                allCards[i].classList.add('hide');
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
    that.mgmRefer.classList.add('sc-mgm-refer-personalised');
    const personalizedBox = that.mgmRefer.querySelector('.sc-mgm-personalised-box');
    const productSlider = that.mgmRefer.querySelector('.sc-mgm-product-slider');
    const cardWrapper = that.mgmRefer.querySelector('.sc-mgm-card__wrapper');
    if (personalizedBox) {
      personalizedBox.classList.remove('hide');
      const selectedCard = that.mgmRefer.querySelector([`div[data-product-name='${param}']`]);
      if (selectedCard) {
        const clonedDiv = selectedCard.cloneNode(true);
        clonedDiv.removeAttribute('data-product-name');
        personalizedBox.innerHTML = '';
        personalizedBox.appendChild(clonedDiv);
      }
    }
    productSlider?.classList.remove('hide');
    cardWrapper?.classList.add('hide');
  }

  /**
   * based on the segment queryString, placed the selected cards at the top of the filter section
   */
  handleSegmentParameter(param) {
    const that = this;
    param = param.toLowerCase();
    const segmentList = that.mgmRefer.querySelectorAll('[data-segment-cards]');
    const cardWrapper = that.mgmRefer.querySelector('.sc-mgm-card__wrapper');
    if (segmentList.length) {
      const cloneList = Array.from(segmentList).filter(segment => {
        const attrList = segment
          .getAttribute('data-segment-cards')
          .toLowerCase()
          .split(',');
        if (attrList.includes(param)) {
          const clonedDiv = segment.cloneNode(true);
          segment.remove();
          return clonedDiv;
        }
      });
      if (cloneList.length) {
        // Make reverse so that card will maintain the same order
        cloneList.reverse();
        cloneList.forEach(index => {
          cardWrapper.insertBefore(index, cardWrapper.firstChild);
        });
      }
    }
  }
}

const instance = new ScMgmReferralMobile();
instance.init();

export default instance;
