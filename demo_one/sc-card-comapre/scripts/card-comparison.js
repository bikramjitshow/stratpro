/* global jQuery, $, Utils*/

/**
 * CardSelect used for compare cards
 * Add cards for compare
 * Remove cards if already exist in compare section
 */
class CardSelect {
  init() {
    const that = this;
    let device = that.numberOfCards($(window).width()); //Detect which types of device is using
    /* eslint-disable no-unused-vars */
    let newurl;

    ($ => {
      let cardComparator = $('.card-compare-tab');
      let compareCardsLabel = cardComparator.attr('data-compare-cards-label')
        ? cardComparator.attr('data-compare-cards-label')
        : 'Please select minimum 2 cards to compare';
      let selectCardLabel = cardComparator.attr('data-select-card-label')
        ? cardComparator.attr('data-select-card-label')
        : 'Select Card';
      let showLabel = cardComparator.attr('data-show-label')
        ? cardComparator.attr('data-show-label')
        : 'Show';
      let hideLabel = cardComparator.attr('data-hide-label')
        ? cardComparator.attr('data-hide-label')
        : 'Hide';

      $('.m-persistent-bar').addClass('sticky-hidden'); //Hide default sticky bar

      //Check queryString first time loading
      let url_string = Utils.getPageUrl().queryString; //Get queryString from url
      that.updateQueryString(url_string);
      /* eslint-enable no-unused-vars */

      //Add/Remove cards for compare
      $('body').on('click', '.compare-btn', event => {
        that.removeBlankCard($(event.currentTarget).attr('data-for')); //Method of Add/Remove cards for compare
      });

      //Selected categories and show correspondent cards
      $('body').on('click', '.card-compare-tab-buttons button', event => {
        let dataFilter = $(event.currentTarget)
          .attr('data-filter')
          .trim()
          .toLowerCase(); //Get label name
        let attr = $(event.currentTarget).attr('data-filter'); //Getting attributes value
        let href = $(event.currentTarget).attr('data-updated-href'); //Getting attributes value
        that.changeUrl(href, dataFilter);
        $('button').removeClass('button-active'); //Deactivate previously/default selected categories
        $(event.currentTarget).addClass('button-active'); //Activate clicked category
        this.showRelatedCards(attr);
      });

      //Show Compare Data popup
      $('body').on('click', '.compare-action-btn', () => {
        $('.popup-single-loan-box, .single-loan-box-blank').hide();
        let totalCard = $('.compare-main').length; //Check how many cards are selected
        if (totalCard == 0) {
          //No card selected for compare
          return;
        } else if (totalCard == 1) {
          //One card selected for compare
          $('.card-selection-error').text(compareCardsLabel);
          return;
        }
        $('.compare-result-box .benefits').removeClass('hide');
        //Selected multiple cards
        $('.single-compare-result-box')
          .find('.compare-box-close, .compare-result-grid, .show-promotioin')
          .toggleClass('show-card-info hide-card-info');
        $('.compare-result-box').fadeIn(200);

        //total cards selected based on device and
        while (totalCard < device) {
          totalCard++;
          $(`.apply-now-back-${totalCard}`).show(); //Show add more card box
        }
        $('body').css({
          overflow: 'hidden'
        }); //Hidden page scroll
        return false;
      });

      //Remove Cards
      $('body').on('click', '.compare-box-close', event => {
        let popup_ids = $(event.currentTarget)
          .siblings('.compare-btn')
          .attr('data-for');
        $(event.currentTarget)
          .parent()
          .remove();

          console.log('popup_ids--', $(event.currentTarget).parent());

        that.removeBlankCard(popup_ids); //Method for add/remove cards for compare
        let total = $('.single-compare-card').length;
        if (total == 0) {
          //Close the modal if no card selected
          $('.single-compare-result-box')
            .find('.compare-box-close, .compare-result-grid, .show-promotioin')
            .toggleClass('show-card-info hide-card-info');
        }
      });

      //minimize/open compare card sticky
      $('body').on('click', '.show-and-hide', event => {
        event.preventDefault();
        $('.compare-section').toggleClass('hide-card-sticky');
        $('.show-and-hide').toggleClass('show-icon');
        $('.show-and-hide a').text(
          $('.show-and-hide a').text() == showLabel ? hideLabel : showLabel
        );
      });

      //Method for remove cards
      $('body').on('click', '.remove-card', event => {
        let ids = $(event.currentTarget).attr('data-identity'); //Getting remove btn number
        ids = ids.substr(11);
        $(`.clone-cards-${ids}`).remove(); //Remove selected cards
        that.removeBlankCard(ids); //Method for add/remove cards for compare
        let total = $('.single-compare-card').length; //Checking total selected cards
        if (total == 0) {
          //Close the modal if no card selected
          $('.single-compare-result-box')
            .find('.compare-box-close, .compare-result-grid, .show-promotioin')
            .toggleClass('show-card-info hide-card-info');
        }
      });

      //If Click Outside close the cards modal
      $(window).click(event => {
        if (
          $(event.target).hasClass('apply-now-back-btn-2') ||
          $(event.target).hasClass('compare-result-box-inner-relative')
        ) {
          event.preventDefault();
          $('.compare-result-box').fadeOut(200);
          setTimeout(() => {
            $('body').css({
              overflow: 'auto'
            }); //activate page scroll
          }, 500);
          $('.single-compare-result-box')
            .find('.compare-box-close, .compare-result-grid, .show-promotioin')
            .toggleClass('show-card-info hide-card-info');
        }
      });

      //Close the cards modal if clicked close button
      $('body').on('click', '.close-btn', e => {
        e.preventDefault();
        $('.compare-result-box').fadeOut(200);
        setTimeout(() => {
          $('body').css({
            overflow: 'auto'
          }); //activate page scroll
        }, 500);
        $('.single-compare-result-box')
          .find('.compare-box-close, .compare-result-grid, .show-promotioin')
          .toggleClass('show-card-info hide-card-info');
      });
    })(jQuery);
  }

  /**
   * show tab content cards based on selected tabs
   * @param {string} attr //get tab attribute ex: all, cashback, rewards etc.
   * @example
   *
   *  showRelatedCards('cashback')
   *
   */
  showRelatedCards(attr) {
    attr = attr.split('&')[0];
    if (attr != 'all') {
      $('.card-compare-tab-content')
        .find('.card-box')
        .hide();
      $(`.${attr}`).show();
    } else {
      $('.card-compare-tab-content')
        .find('.card-box')
        .show();
    }
  }

  /**
   * Get URL query string, filter it and if valid passed then for select related cards
   * @param {string} url_string //get query string from url
   * @example
   *
   *   updateQueryString('https://www.sc.com/sg/card-comparison?filter=cashback')
   * return valid url
   */
  updateQueryString(url_string) {
    if (url_string) {
      const queryStringJson = Utils.convertQueryStringToJsonObject(url_string.toLowerCase());
      let filter = queryStringJson['filter'];
      delete queryStringJson['filter'];
      if (!Object.keys(queryStringJson).length) {
        return;
      }

      let updated_url_string = '';
      // eslint-disable-next-line no-unused-vars
      for (let index in queryStringJson) {
        updated_url_string = `&${index}=${queryStringJson[index]}`;
      }

      let cardMenu = document.querySelectorAll(
        '.card-compare-tab .card-compare-tab-buttons button'
      );
      let total = cardMenu.length;
      if (total) {
        for (let i = 0; i < total; i++) {
          let dataFilter = cardMenu[i].getAttribute('data-filter').toLowerCase();
          cardMenu[i].setAttribute('data-updated-href', `${dataFilter}${updated_url_string}`);
          if (filter) {
            cardMenu[i].classList.remove('button-active');
            if (dataFilter == filter) {
              cardMenu[i].classList.add('button-active');
            }
          }
        }
      }
    }
  }

  /**
   * Get tab attribute and change url using pushState method
   * @param {string} labelName //get seected tab attribute ex: all, cashback, rewards etc.
   * @example
   *
   *  changeUrl('labelName')
   *
   */
  changeUrl(labelName, dataFilter) {
    //Checking which tab clicked
    let newUrl = '';
    if (dataFilter == 'all') {
      let searchStr = new RegExp(`${dataFilter}&`, 'gi');
      if (labelName) {
        newUrl = labelName.replace(searchStr, '');
      }
      if (newUrl) {
        newUrl = `?${newUrl}`;
      }
    } else {
      newUrl = '?filter=' + dataFilter;
    }
    newUrl =
      window.location.protocol + '//' + window.location.host + window.location.pathname + newUrl;

    window.history.pushState(
      {
        path: newUrl
      },
      '',
      newUrl
    ); //Change URL based on clicked tab
  }

  /**
   * Get tab attribute and url status, if valid url then show related cards, else redirect to default url
   * @param {boolean} urlStatus //check url is valid or not
   * @param {string} url //get seected tab attribute ex: all, cashback, rewards etc.
   * @example
   *
   *  selectCards(true, cashback)
   *
   */
  selectCards(urlStatus, url) {
    let newurl;
    if (urlStatus) {
      $('button').removeClass('button-active'); //Deactivate previously/default selected categories
      $("button[data-filter='" + url + "']").addClass('button-active');
      $('.card-compare-tab-content')
        .find('.card-box')
        .hide();
      $(`.${url}`).show(); //Show cards based on url queryString
    } else {
      newurl = window.location.protocol + '//' + window.location.host + window.location.pathname; //Remove invalid queryString from URL
      window.history.pushState(
        {
          path: newurl
        },
        '',
        newurl
      ); //Change URL based on clicked tab
    }
  }

  /**
   *  Method for add/remove cards for compare
   * @param {number} cardIds //get the selected card unique number
   * @example
   *
   *   removeBlankCard(2)
   */
  removeBlankCard(cardIds) {
    ($ => {
      $('.add-blank-card').remove();
      let status = $(`[data-for= ${cardIds}]`).hasClass('compare-main');
      let device = this.numberOfCards($(window).width()); //Detect which types of device is using
      this.addRemoveCard(device, cardIds, status);
    })(jQuery);
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
    let cardComparator = $('.card-compare-tab');
    let maxCardsLabel = cardComparator.attr('data-max-cards-label')
      ? cardComparator.attr('data-max-cards-label')
      : 'You cannot select more than';
    let cardsLabel = cardComparator.attr('data-cards-label')
      ? cardComparator.attr('data-cards-label')
      : 'cards';
    let hideLabel = cardComparator.attr('data-hide-label')
      ? cardComparator.attr('data-hide-label')
      : 'Hide';
    let total = $('.single-compare-card').length;
    //Checking cards are selected or not
    if (status) {
      //Card is already selected
      //Remove Card
      $('.single-loan-box-blank').hide(); //Hide popup blank
      $(`[data-for= ${cardIds}]`).removeClass('compare-main'); //Remove from compare cards sticky
      $('.single-compare-result-box')
        .children(`.card-compare-${cardIds}`)
        .remove();
      $(`.clone-cards-${cardIds}`).remove(); //Remove card divs from modal

      $('.card-selection-error').text('');
      total = $('.single-compare-card').length; //Get total selected cards
      $(`.card-compare-${cardIds}`).toggleClass('active');

      if (total == 0) {
        //No card available
        $('.card-compare-sticky').css({
          display: 'none'
        });
        $('.compare-result-box').fadeOut(200);
        setTimeout(() => {
          $('body').css({
            overflow: 'auto'
          }); //activate page scroll
        }, 500);
      } else {
        let temp = '';
        $('.compare-section').removeClass('hide-card-sticky');
        $('.show-and-hide a').text(hideLabel);

        $('.single-blank-card').removeClass('show'); //hide all add more card box
        //Add blank cards div in temp variables
        while (total < maxCards) {
          $(`.add-blank-card-sm-${total}`).addClass('show'); //Show add more card box
          total++;
          $(`.apply-now-back-${total}`).show();
        }
        $('.compare-selected-cards').append(temp); //Added blank cards div in Compare Cards Sticky
        $('.card-selection-error').text(''); //Remove error texts
        $('.card-compare-sticky').css({
          display: 'block'
        });
      }
    } else {
      //You have reached cards limit in compare cards Sticky
      $('.compare-section').removeClass('hide-card-sticky');
      $('.show-and-hide a').text(hideLabel);
      if (total >= maxCards) {
        $('.card-selection-error')
          .addClass('cannot-add-2-cards')
          .text(`${maxCardsLabel} ${maxCards} ${cardsLabel}`); //Add error text message
      } else {
        //You have slots for add cards in compare cards Sticky
        $('.card-compare-sticky').css({
          display: 'block'
        });
        let cardClone = $(`.card-compare-${cardIds}`).clone(); //Clone selected card divs for Compare Cards Sticky
        $(`.card-compare-${cardIds}`).toggleClass('active'); //Active/deactivate selected cards
        $(`[data-for= ${cardIds}]`).addClass('compare-main');
        let html =
          `<div class="single-compare-card compare-activated-card clone-cards-${cardIds}">
          <p>` +
          $(`.card-compare-${cardIds} .sc-casa-product-list__title`).text() +
          `</p><div class="single-compare-card-image">
          <span class="remove-card" data-identity="card-close-${cardIds}">-</span>
          <img src="` +
          $(`.card-compare-${cardIds}`)
            .find('img')
            .attr('src') +
          '" alt=""></div></div>'; //Add selected card divs in temp variables
        $('.add-blank-card-sm-0').before(html); //Added selected and blank cards div in Compare Cards Sticky

        //Add blank cards div in temp variables
        $('.single-blank-card').removeClass('show'); //Hide all add more card box
        while (total < maxCards - 1) {
          $(`.add-blank-card-sm-${total}`).addClass('show'); //Show add more card box
          total++;
        }
        $('.card-selection-error').text(''); //Remove error message
        $('.apply-now-back-2').before(cardClone); //Clone cards in Compare Cards Modal
      }
    }
  }

  /**
   *  Return Number of cards supported by device
   * @param {number} deviceWidth //get browse device width in pixel
   * @example
   *
   *   numberOfCards(1024)
   * return 2 if browse from mobile, else return 3
   */

  numberOfCards(deviceWidth) {
    if (deviceWidth < 768) {
      return 2; //Mobile support 2 cards
    }
    return 3; //desktop, tabs, etc support 3 cards
  }
}
const instance = new CardSelect();
instance.init();

// export default CardSelect;
