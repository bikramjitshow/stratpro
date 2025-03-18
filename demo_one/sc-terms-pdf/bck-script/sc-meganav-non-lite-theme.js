// This JS is created for use the old Meganav in Nitro theme
import {
  urlBreakdown,
  getPageContext,
  getCurrentCountry,
  trim,
  handleAnalyticsCTA
} from '../../../js/sc-common-methods';

class ScMeganav {
  init() {
    let that = this;
    let countryLanguages = {
      sg: {
        available: ['en', 'zh', 'bh'],
        default: 'en'
      },
      vn: {
        available: ['en', 'vn'],
        default: 'vn'
      },
      hk: {
        available: ['en', 'zh', 'tzh'],
        default: 'en'
      },
      cn: {
        available: ['en', 'zh'],
        default: 'zh'
      },
      tw: {
        available: ['en', 'zh'],
        default: 'zh'
      },
      id: {
        available: ['en', 'id'],
        default: 'id'
      },
      ci: {
        available: ['en', 'fr'],
        default: 'en'
      },
      ib: {
        available: ['en', 'zh', 'zh-cn'],
        default: 'en'
      },
      pk: {
        available: ['en', 'ur'],
        default: 'en'
      },
      np: {
        available: ['en', 'ne'],
        default: 'en'
      }
    };

    that.languageSelector(urlBreakdown(window.location), countryLanguages);
    window.addEventListener('scroll', function() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      that.stickyNavbar(scrollTop);
    });

    //Tab Code
    document.body.addEventListener('keydown', function(event) {
      if (event.key && event.key.toLowerCase() === 'tab') {
        document.body.classList.add('sc-tab-focus');
      }
    });
    // Remove focus styling when mouse is clicked
    document.body.addEventListener('mousedown', function() {
      if (document.querySelector('.sc-tab-focus')) {
        document.body.classList.remove('sc-tab-focus');
      }
    });

    if (!document.querySelector('[data-personal-business]')) {
      that.menuSlug();
    }
    that.prioritySaadiqIslamic(getPageContext());
    that.accessibility();

    //Country clicked
    let country = document.querySelectorAll('.sc-nav__country-btn');
    if (country.length) {
      country.forEach(function(el) {
        el.addEventListener('click', function(event) {
          event.preventDefault();
          that.showModal();
        });
      });
    }

    document.addEventListener('click', function(event) {
      //click close button
      let closeBtn = document.querySelector('.sc-modal__close-button');
      if (closeBtn) {
        if (event.target.closest('.sc-nav .sc-modal .sc-modal__close-button')) {
          if (document.querySelector('.sc-nav .sc-modal--show')) {
            document.querySelector('.sc-nav .sc-modal').classList.remove('sc-modal--show');
            let countryBtn = document.querySelector('.sc-nav .sc-nav__country-btn');
            countryBtn.setAttribute('tabindex', '0');
            countryBtn.focus();
            countryBtn.blur();
          }
        }
      }

      //Click outside of the modal or click close button
      let clickModal = document.querySelector('.sc-nav .sc-modal');
      let clickContent = document.querySelector('.sc-nav .sc-modal .sc-modal__content');
      let clickClose = document.querySelector('.sc-nav .sc-modal .sc-modal__close');
      if (clickModal && clickContent && clickClose) {
        let isClickInside1 = clickModal.contains(event.target);
        let isClickInside2 = event.target.closest('.sc-nav .sc-modal .sc-modal__content');
        let isClickInside3 = event.target.closest('.sc-nav .sc-modal .sc-modal__close');
        that.clickedOutsideModal(isClickInside1, isClickInside2, isClickInside3);
      }
    });

    //Country Search
    let cntSearch = document.querySelector('.sc-nav .sc-country__input');
    if (cntSearch) {
      let countryList = [];
      let allCntList = '';
      //Create country list
      cntSearch.addEventListener('focus', function() {
        if (!countryList.length) {
          allCntList = document.querySelector('.sc-nav .sc-country__list ul.sc-country__list-items')
            .innerHTML;
          let allCountry = document.querySelectorAll(
            '.sc-nav .sc-country__list .sc-country__list-items .sc-country__list-item'
          );
          if (allCountry.length) {
            for (let i = 0; i < allCountry.length; i++) {
              let code = allCountry[i].getAttribute('data-value');
              let href = allCountry[i].querySelector('a').getAttribute('href');
              let cntName = allCountry[i].querySelector('a').getAttribute('title');

              countryList.push({
                code: code.trim(),
                href: href.trim(),
                name: cntName.trim()
              });
            }
          }
        }
      });

      //Search country
      cntSearch.addEventListener('input', function(event) {
        event.preventDefault();
        let allCountry = document.querySelector(
          '.sc-nav .sc-country__list ul.sc-country__list-items'
        );
        let input = event.target.value;
        allCountry.innerHTML = '';
        if (input && input.trim()) {
          input = input.trim().toLowerCase();
          if (countryList.length) {
            for (let i = 0; i < countryList.length; i++) {
              if (countryList[i].name.toLowerCase().indexOf(input) != -1) {
                allCountry.innerHTML += `
                <li class="sc-country__list-item" data-value="${countryList[i].code}">
                <a href="${countryList[i].href}" class="sc-country__country-link" title="${countryList[i].name}">
                ${countryList[i].name}
                </a>
              </li>
                `;
              }
            }
          }
        } else {
          allCountry.innerHTML = allCntList;
        }
      });
    }

    //Switched from mobile to desktop view
    let initialWidth = document.documentElement.clientWidth || document.body.clientWidth;
    window.addEventListener('resize', function() {
      let updatedWidth = document.documentElement.clientWidth || document.body.clientWidth;
      that.resizeWindow(initialWidth, updatedWidth);
    });

    //Mobile Browser or Desktop
    if (initialWidth >= 1246) {
      that.browserDesktop();
    } else {
      that.browserMobile();
    }

    window.addEventListener('load', function() {
      that.priorityFixes();
      that.legacyImageFixes();
      that.footerLanguageSelector(urlBreakdown(window.location), countryLanguages);
      that.navFontWeightFixes(urlBreakdown(window.location));
    });
    that.activateDropDown();
    that.updateOpenAccountNavigation();
  }

  /**
   * Activates the dropdown functionality for the account dropdown buttons.
   * Adds event listeners to each button to toggle the active class and visibility of corresponding containers.
   */
  activateDropDown() {
    const btn = document.querySelectorAll('.sc-nav-account-dropdown__btn');
    const containers = document.querySelectorAll('.sc-nav-account-dropdown__container');
    btn.forEach((item, index) => {
      item.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        // Remove the active class from all buttons and containers
        btn.forEach(btnItems => {
          btnItems.classList.remove('sc-nav-account-dropdown__btn--active');
        });
        containers.forEach(container => {
          container.classList.add('hide');
        });
        // Add the active class to the clicked button
        item.classList.add('sc-nav-account-dropdown__btn--active');
        containers[index].classList.remove('hide');
        handleAnalyticsCTA(event, item);
      });
    });
  }

  /**
   * adding fontWeight 600 if the page URL  contain /cn/en/
   * Example:
   * navFontWeightFixes()
   **/
  navFontWeightFixes(urlList) {
    if (!urlList) return;
    let url = urlList.domain + urlList.pathname;
    if (url.includes('/cn/en/')) {
      let navBtn = document.querySelectorAll('.sc-mgdrop__btn,.sc-mgdrop__promo-title');
      if (navBtn.length) {
        navBtn.forEach(e => {
          e.classList.add('sc-mgdrop__font-weight');
        });
      }
    }
  }

  /**
   * adding maximum width 90px if it's coming from navbar
   * Example:
   * legacyImageFixes()
   **/
  legacyImageFixes() {
    let elem = document.querySelectorAll('.sc-mgdrop__img');
    if (elem.length) {
      elem.forEach(e => {
        e.style.maxWidth = '90px';
      });
    }
  }

  /**
   * if it's a product feature and href attribute contain some id inside that page, then after clicking the anchor tag, it will smooth scroll to the desire id
   * Example:
   * priorityFixes()
   **/
  priorityFixes() {
    let that = this;
    let anchorList = document.querySelectorAll(
      '#sc-lb-module-product-features a[data-context="Product Features title"]'
    );
    if (anchorList.length) {
      anchorList.forEach(function(evt) {
        evt.addEventListener('click', function(event) {
          let anchorId = event.target.closest('a').getAttribute('href');
          anchorId = anchorId.split('?')[0];
          if (anchorId && (anchorId.substr(0, 1) == '.' || anchorId.substr(0, 1) == '#')) {
            let selDiv = document.querySelector(`${anchorId}`);
            if (selDiv) {
              event.preventDefault();
              event.stopPropagation();
              that.smoothScroll(selDiv, 500);
            }
          }
        });
      });
    }
  }

  /**
   * scroll target position with animation
   * @param {String} target scroll class
   * @param {Number} duration scroll time in ms
   * @param {Number} width margin of the current div
   * @example
   * scroll('body', 500, 0)
   */
  smoothScroll(target, duration, width = 0) {
    let that = this;
    let targetPosition = target.getBoundingClientRect().top - width;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = that.ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  }
  ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  /* based on keyboard event, select desire element
   * Example:
   * accessibility()
   **/
  accessibility() {
    document.body.addEventListener('keyup', function(event) {
      //Press ENTER key
      if (event.key && event.key.toLowerCase() === 'enter') {
        //Left topNav start
        let topNav = event.target.closest('.sc-nav__top-btn');
        if (topNav) {
          let siblingClass = event.target
            .closest('.sc-nav__top-in')
            .querySelector('.sc-nav__personal-list').className;

          if (
            typeof siblingClass === 'string' &&
            typeof siblingClass !== 'undefined' &&
            siblingClass.indexOf('sc-nav__personal-list--show') !== -1
          ) {
            event.target
              .closest('.sc-nav__top-btn')
              .nextSibling.nextSibling.classList.remove('sc-nav__personal-list--show');
          } else {
            event.target
              .closest('.sc-nav__top-btn')
              .nextSibling.nextSibling.classList.add('sc-nav__personal-list--show');
          }
        }

        //MegaNav start
        let megaNav = event.target.closest('.sc-nav__menu');
        if (megaNav) {
          let siblingClass = event.target.closest('.sc-nav__item--has-meganav').className;

          if (
            typeof siblingClass === 'string' &&
            typeof siblingClass.includes !== 'undefined' &&
            siblingClass.indexOf('sc-nav__item--show') !== -1
          ) {
            event.target
              .closest('.sc-nav__menu')
              .nextSibling.nextSibling.classList.remove('sc-nav__item--show');
          } else {
            event.target.closest('.sc-nav__item--has-meganav').classList.add('sc-nav__item--show');
          }
        }

        //Login start
        let loginBtn = event.target.closest('.sc-nav__login-btn');
        if (loginBtn) {
          let loginDrop = document.querySelector('.sc-login-drop');
          let siblingClass = loginDrop.className;
          if (
            typeof siblingClass === 'string' &&
            typeof siblingClass.includes !== 'undefined' &&
            siblingClass.indexOf('sc-login-drop--show') !== -1
          ) {
            loginDrop.classList.remove('sc-login-drop--show');
          } else {
            loginDrop.classList.add('sc-login-drop--show');
          }
        }

        //Link Hover start
        let linkHover = event.target.closest('.sc-mgdrop__list-item-link--hover');
        if (linkHover) {
          let siblingClass = event.target.closest('.sc-mgdrop__list-item-link--hover').nextSibling
            .nextSibling.className;

          if (
            typeof siblingClass === 'string' &&
            typeof siblingClass.includes !== 'undefined' &&
            siblingClass.indexOf('sc-mgdrop__item-wrapper--show') !== -1
          ) {
            event.target
              .closest('.sc-mgdrop__list-item-link--hover')
              .nextSibling.nextSibling.classList.remove('sc-mgdrop__item-wrapper--show');
          } else {
            event.target
              .closest('.sc-mgdrop__list-item-link--hover')
              .nextSibling.nextSibling.classList.add('sc-mgdrop__item-wrapper--show');
          }
        }
      }

      //Press TAB key
      if (event.key && event.key.toLowerCase() === 'tab') {
        //Left topNav start
        let topNav = event.target.closest('.sc-nav__top-btn');
        let personalList = event.target.closest('.sc-nav__personal-list');
        if (!topNav && !personalList) {
          //when outside of personal list
          let personalListShow = document.querySelectorAll('.sc-nav__personal-list');
          if (personalListShow.length) {
            for (let i = 0; i < personalListShow.length; i++) {
              personalListShow[i].classList.remove('sc-nav__personal-list--show');
            }
          }
        } else if (topNav) {
          //Remove if selected next top nav button
          let siblingClass = event.target.closest('.sc-nav__top-btn').nextSibling.nextSibling
            .className;
          if (siblingClass.indexOf('sc-nav__personal-list--show') == -1) {
            let personalListShow = document.querySelectorAll('.sc-nav__personal-list');
            if (personalListShow.length) {
              for (let i = 0; i < personalListShow.length; i++) {
                personalListShow[i].classList.remove('sc-nav__personal-list--show');
              }
            }
          }
        }

        //MegaNav start
        let megaNav = event.target.closest('.sc-nav__menu');
        let wrapperList = event.target.closest('.sc-nav__item--has-meganav');
        if (!megaNav && !wrapperList) {
          //when outside of personal list
          let wrapperListShow = document.querySelectorAll('.sc-nav__item--has-meganav');
          if (wrapperListShow.length) {
            for (let i = 0; i < wrapperListShow.length; i++) {
              wrapperListShow[i].classList.remove('sc-nav__item--show');
            }
          }
        } else if (megaNav) {
          //Remove if selected next top nav button
          if (wrapperList.className.indexOf('sc-nav__item--show') == -1) {
            let wrapperListShow = document.querySelectorAll('.sc-nav__item--has-meganav');
            if (wrapperListShow.length) {
              for (let i = 0; i < wrapperListShow.length; i++) {
                wrapperListShow[i].classList.remove('sc-nav__item--show');
              }
            }
          }
        }

        //Login Start
        let loginBtn = event.target.closest('.sc-nav__login-btn');
        let loginList = event.target.closest('.sc-login-drop');
        if (!topNav && !loginList) {
          //when outside of personal list
          let loginListShow = document.querySelectorAll('.sc-login-drop');
          if (loginListShow.length) {
            for (let i = 0; i < loginListShow.length; i++) {
              loginListShow[i].classList.remove('sc-login-drop--show');
            }
          }
        } else if (loginBtn) {
          //Remove if selected next top nav button
          let siblingClass = document.querySelector('.sc-login-drop').className;
          if (siblingClass.indexOf('sc-login-drop--show') == -1) {
            let loginListShow = document.querySelectorAll('.sc-login-drop');
            if (loginListShow.length) {
              for (let i = 0; i < loginListShow.length; i++) {
                loginListShow[i].classList.remove('sc-login-drop--show');
              }
            }
          }
        }

        //Link Hover start
        let linkHover = event.target.closest('.sc-mgdrop__list-item-link--hover');
        let hoverlList = event.target.closest('.sc-mgdrop__item-wrapper');
        if (!linkHover && !hoverlList) {
          //when outside of personal list
          let hoverlListShow = document.querySelectorAll('.sc-mgdrop__item-wrapper');
          if (hoverlListShow.length) {
            for (let i = 0; i < hoverlListShow.length; i++) {
              hoverlListShow[i].classList.remove('sc-mgdrop__item-wrapper--show');
            }
          }
        } else if (linkHover) {
          //Remove if selected next top nav button
          let siblingClass = event.target.closest('.sc-mgdrop__list-item-link--hover').nextSibling
            .nextSibling.className;
          if (siblingClass.indexOf('sc-mgdrop__item-wrapper--show') == -1) {
            let hoverlListShow = document.querySelectorAll('.sc-mgdrop__item-wrapper');
            if (hoverlListShow.length) {
              for (let i = 0; i < hoverlListShow.length; i++) {
                hoverlListShow[i].classList.remove('sc-mgdrop__item-wrapper--show');
              }
            }
          }
        }
      }

      //Press Escape key
      if (event.key && event.key.toLowerCase() === 'escape') {
        if (document.querySelector('.sc-nav .sc-modal--show')) {
          event.preventDefault();
          document.querySelector('.sc-nav .sc-modal').classList.remove('sc-modal--show');
          if (document.querySelector('.sc-nav__country-btn')) {
            let countryBtn = document.querySelector('.sc-nav .sc-nav__country-btn');
            countryBtn.setAttribute('tabindex', '0');
            countryBtn.focus();
            countryBtn.blur();
          }
        }
      }
    });

    document.querySelector('body').addEventListener('mouseover', function(event) {
      //remove personal List
      let personalList = event.target.closest('.sc-nav__personal-list--show');
      if (!personalList) {
        let personalShow = document.querySelectorAll('.sc-nav__personal-list--show');
        if (personalShow.length) {
          for (let i = 0; i < personalShow.length; i++) {
            personalShow[i].classList.remove('sc-nav__personal-list--show');
          }
        }
      }

      //Remove megaNav class
      let scNav = event.target.closest('.sc-nav');
      if (!scNav) {
        let wrapperShow = document.querySelectorAll('.sc-nav__mgnv-wrapper--show');
        if (wrapperShow.length) {
          for (let i = 0; i < wrapperShow.length; i++) {
            wrapperShow[i].classList.remove('sc-nav__mgnv-wrapper--show');
          }
        }
      }
    });
  }

  /**
   * user browser from desktop
   * Example:
   * browserDesktop()
   **/
  browserDesktop() {
    let that = this;
    //Fixed Meganav height
    let linkHover = document.querySelectorAll('.sc-mgdrop__list-item-link--hover');
    if (linkHover.length) {
      linkHover.forEach(function(evt) {
        evt.addEventListener('click', function(event) {
          let dropdownItems = event.target.nextSibling.nextSibling.querySelectorAll(
            '.sc-mgdrop__item'
          );
          that.calculateHeight(dropdownItems);
        });
      });

      linkHover.forEach(function(evt) {
        evt.addEventListener('mouseenter', function(event) {
          let dropdownItems = event.target.nextSibling.nextSibling.querySelectorAll(
            '.sc-mgdrop__item'
          );
          that.calculateHeight(dropdownItems);
        });
      });
    }

    //Remove height and added classes
    let itemLink = document.querySelectorAll('.sc-mgdrop__list-item-link');
    let mgDropRight = document.querySelector('.sc-mgdrop__right');
    if (itemLink.length) {
      itemLink.forEach(function(evt) {
        evt.addEventListener('mouseenter', function(event) {
          if (
            event.target.className.indexOf('sc-mgdrop__list-item-link--hover') == -1 &&
            mgDropRight
          ) {
            mgDropRight.style.minHeight = '0px';
          }
        });
      });
    }
    let navItems = document.querySelectorAll('.sc-nav__item');
    if (navItems.length) {
      navItems.forEach(function(evt) {
        evt.addEventListener('mouseenter', function(event) {
          if (
            event.target.className.indexOf('sc-mgdrop__list-item-link--hover') == -1 &&
            mgDropRight
          ) {
            mgDropRight.style.minHeight = '0px';
          }
        });
      });
    }
  }

  /**
   * calculate children height and set it as minimum height
   * @param {node} dropdownItems - number of items as a node
   * Example:
   * calculateHeight(dropdownItems)
   **/
  calculateHeight(dropdownItems) {
    const shortFallHeight = 40; // (padding 40px + view all link height (fixed position) )
    let dropdownHeight = 0;
    if (dropdownItems.length) {
      for (let i = 0; i < dropdownItems.length; i++) {
        dropdownHeight = Math.max(dropdownHeight, dropdownItems[i].offsetHeight);
      }
    }

    dropdownHeight = dropdownHeight * Math.ceil(dropdownItems.length / 3) + shortFallHeight;
    let mgDropRight = document.querySelector('.sc-mgdrop__right');
    if (mgDropRight) {
      mgDropRight.style.minHeight = dropdownHeight + 'px';
    }
  }

  /**
   * call browserDesktop or browserMobile based on browser width
   * @param {number} initialWidth - initial browser width
   * @param {number} updatedWidth - updated resize browser width
   * Example:
   * resizeWindow(1000, 1200)
   **/
  resizeWindow(initialWidth, updatedWidth) {
    let that = this;
    if (initialWidth != updatedWidth) {
      initialWidth = updatedWidth;
      if (updatedWidth >= 1246) {
        that.browserDesktop();
        that.removeMobileClasses();
      } else {
        that.browserMobile();
        that.removeDesktopClasses();
      }
    }
  }

  /**
   * remove desktop browser class when browse from mobile
   * Example:
   * removeDesktopClasses()
   **/
  removeDesktopClasses() {
    //remove fixed height classes
    let mgDropRight = document.querySelector('.sc-mgdrop__right');
    if (mgDropRight) {
      mgDropRight.style.minHeight = '0px';
    }

    //Remove mobile classes
    let menuVisible = document.querySelectorAll('.sc-menu-visible');
    if (menuVisible.length > 0) {
      for (let i = 0; i < menuVisible.length; i++) {
        menuVisible[i].classList.remove('sc-menu-visible');
      }
    }

    let scNav = document.querySelector('.sc-nav');
    if (scNav) {
      scNav.classList.remove('sc-nav--fixed');
    }
  }

  /**
   * remove mobile browser class when browse from desktop
   * Example:
   * removeMobileClasses()
   **/
  removeMobileClasses() {
    //Remove mobile classes
    let menuVisible = document.querySelectorAll('.sc-menu-visible');
    if (menuVisible.length > 0) {
      for (let i = 0; i < menuVisible.length; i++) {
        menuVisible[i].classList.remove('sc-menu-visible');
      }
    }
    let scNav = document.querySelector('.sc-nav');
    if (scNav) {
      scNav.classList.remove('sc-nav--fixed');
    }

    let loginDrop = document.querySelector('.sc-login-drop');
    if (loginDrop) {
      loginDrop.classList.remove('sc-menu-visible');
    }
    if (document.querySelector('.sc-nav__close-button')) {
      document.querySelector('.sc-nav__close-button').classList.remove('sc-menu-visible');
    }
    let navPersonal = document.querySelector('.sc-nav__personal-list');
    if (navPersonal) {
      navPersonal.classList.remove('sc-menu-visible');
    }
    let mgnvWrapperList = document.querySelectorAll('.sc-nav__mgnv-wrapper');
    if (mgnvWrapperList.length > 0) {
      for (let i = 0; i < mgnvWrapperList.length; i++) {
        mgnvWrapperList[i].classList.remove('sc-menu-visible');
      }
    }
    let itemWrapper = document.querySelectorAll('.sc-mgdrop__item-wrapper');
    if (itemWrapper.length) {
      for (let i = 0; i < itemWrapper.length; i++) {
        itemWrapper[i].classList.remove('sc-menu-visible');
      }
    }
  }

  /**
   * user browse from mobile
   * Example:
   * browserMobile()
   **/
  browserMobile() {
    //Click on hamburger
    let scNav = document.querySelector('.sc-nav');
    let hamburger = document.querySelector('.sc-nav__hamburger');
    const loginDrop = document.querySelector('.sc-login-drop');
    const loginClose = document.querySelector('.sc-nav__login-close');
    const megaNavClose = document.querySelector('.sc-nav__close-button');
    const megaNavTop = document.querySelector('.sc-nav__top');
    const megaNavList = document.querySelector('.sc-nav__list');

    if (hamburger) {
      hamburger.addEventListener('click', function(event) {
        //Hide login close and modal
        loginDrop?.classList.remove('sc-menu-visible');
        loginClose?.classList.remove('sc-menu-visible');

        megaNavClose?.classList.add('sc-menu-visible');
        megaNavTop?.classList.add('sc-menu-visible');
        megaNavList?.classList.add('sc-menu-visible');
        scNav?.classList.add('sc-nav--fixed');
        document.querySelector('body').classList.add('no-scroll');
        //Handle analytics for the tab click
        handleAnalyticsCTA(event, hamburger);
      });
    }

    if (loginClose) {
      loginClose.addEventListener('click', function(event) {
        loginDrop?.classList.remove('sc-menu-visible');
        loginClose.classList.remove('sc-menu-visible');
        document.querySelector('body').classList.remove('no-scroll');
        //Handle analytics for the tab click
        handleAnalyticsCTA(event, loginClose);
      });
    }

    //Click hamburger close button
    if (megaNavClose) {
      megaNavClose.addEventListener('click', function() {
        let menuVisible = document.querySelectorAll('.sc-menu-visible');
        if (menuVisible.length > 0) {
          for (let i = 0; i < menuVisible.length; i++) {
            menuVisible[i].classList.remove('sc-menu-visible');
          }
        }
        scNav?.classList.remove('sc-nav--fixed');

        loginDrop?.classList.remove('sc-menu-visible');
        megaNavClose.classList.remove('sc-menu-visible');
        document.querySelector('body').classList.remove('no-scroll');
      });
    }

    //toggle nav top button
    let topBtn = document.querySelectorAll('.sc-nav__top-btn');
    if (topBtn.length) {
      topBtn.forEach(function(el) {
        el.addEventListener('click', function(event) {
          let siblingClass = event.target
            .closest('.sc-nav__top-in')
            .querySelector('.sc-nav__personal-list').className;
          let personalList = document.querySelectorAll('.sc-nav__personal-list');
          if (
            typeof siblingClass === 'string' &&
            typeof siblingClass !== 'undefined' &&
            siblingClass.indexOf('sc-menu-visible') !== -1
          ) {
            if (personalList.length) {
              for (let i = 0; i < personalList.length; i++) {
                personalList[i].classList.remove('sc-menu-visible');
              }
            }
          } else {
            if (personalList.length) {
              for (let i = 0; i < personalList.length; i++) {
                personalList[i].classList.add('sc-menu-visible');
              }
            }
          }
        });
      });
    }

    //Click sc nav menu button
    let navMenu = document.querySelectorAll('.sc-nav__menu');
    if (navMenu.length > 0) {
      navMenu.forEach(function(el) {
        el.addEventListener('click', function(event) {
          const closest = event.target.closest('.sc-nav__item');
          if (closest) {
            const siblingClass = closest.querySelector('.sc-nav__mgnv-wrapper');
            if (siblingClass) {
              siblingClass.classList.add('sc-menu-visible');
            }
          }
        });
      });
    }

    //close dropdown back
    let dropDownList = document.querySelectorAll('.sc-nav-drop__back');
    if (dropDownList.length > 0) {
      dropDownList.forEach(function(el) {
        el.addEventListener('click', function() {
          let mgnvWrapperList = document.querySelectorAll('.sc-nav__mgnv-wrapper');
          let itemWrapper = document.querySelectorAll('.sc-mgdrop__item-wrapper');
          let oneBack = true;
          if (itemWrapper) {
            for (let i = 0; i < itemWrapper.length; i++) {
              if (
                typeof itemWrapper[i].className === 'string' &&
                typeof itemWrapper[i].className.includes !== 'undefined' &&
                itemWrapper[i].className.indexOf('sc-menu-visible') !== -1
              ) {
                itemWrapper[i].classList.remove('sc-menu-visible');
                oneBack = false;
              }
            }
          }

          if (mgnvWrapperList.length > 0 && oneBack) {
            for (let i = 0; i < mgnvWrapperList.length; i++) {
              mgnvWrapperList[i].classList.remove('sc-menu-visible');
            }
          }
        });
      });
    }

    //click login button
    let loginBtn = document.querySelector('.sc-nav__login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', function(event) {
        //Hide meganav close and modal
        megaNavClose?.classList.add('sc-menu-visible');
        megaNavTop?.classList.remove('sc-menu-visible');
        megaNavList?.classList.remove('sc-menu-visible');

        loginDrop?.classList.add('sc-menu-visible');
        loginClose?.classList.add('sc-menu-visible');
        document.querySelector('body').classList.add('no-scroll');
        //Handle analytics for the tab click
        handleAnalyticsCTA(event, loginBtn);
      });
    }

    //Fixed height
    let itemHover = document.querySelectorAll('.sc-mgdrop__list-item-link--hover');
    if (itemHover.length) {
      itemHover.forEach(function(el) {
        el.addEventListener('click', function(event) {
          event.target.nextSibling.nextSibling.classList.add('sc-menu-visible');
        });
      });
    }
  }

  /**
   * close modal when click outside of the modal box
   * Example:
   * clickedOutsideModal()
   **/
  clickedOutsideModal(isClickInside1, isClickInside2, isClickInside3) {
    if (
      document.querySelector('.sc-nav .sc-modal--show') &&
      isClickInside1 &&
      !isClickInside2 &&
      !isClickInside3
    ) {
      document.querySelector('.sc-nav .sc-modal').classList.remove('sc-modal--show');
    }
  }

  /**
   * sticky navbar when scroll down
   * Example:
   * stickyNavbar()
   **/
  stickyNavbar(scrollTop) {
    let navContainer = document.querySelector('.sc-nav');
    if (navContainer) {
      scrollTop >= 30
        ? navContainer.classList.add('sc-nav--sticky')
        : navContainer.classList.remove('sc-nav--sticky');
    }
  }

  /**
   * open modal when click on country selector
   * Example:
   * showModal()
   **/
  showModal() {
    if (document.querySelector('.sc-nav .sc-modal')) {
      document.querySelector('.sc-nav .sc-modal').classList.add('sc-modal--show');
      let modalContent = document.querySelector('.sc-nav .sc-modal .sc-modal__content');
      modalContent.setAttribute('tabindex', '0');
      modalContent.focus();
      modalContent.blur();
    }
  }

  /**
   * activate multiple language select options
   * Example:
   * languageSelector()
   **/
  languageSelector(urlList, countryLanguages) {
    if (!urlList) return;
    let URL = urlList.domain + urlList.pathname;

    //Header language selector
    let languageList = document.querySelectorAll('.c-language-selector .sc-nav__lang-link');
    if (languageList.length) {
      languageList.forEach(function(el) {
        el.addEventListener('click', function(event) {
          event.preventDefault();
          let country = document.querySelector('meta[name="sc:country"]').getAttribute('content');
          let selectedLanguage = document
            .querySelector('.c-language-selector')
            .getAttribute('data-language-sel')
            .toLowerCase();
          let clickedLanguage = event.target.getAttribute('data-language').toLowerCase();

          //true if current language and clicked language are not equal
          let newURL = '';
          if (country == 'hk') {
            if (URL.slice(-1) == `/`) {
              URL = URL.slice(0, -1);
            }

            if (clickedLanguage == 'tzh') {
              newURL = URL.replace(`/${country}`, `/${country}/zh`);
              let pageSegment = getPageContext().segment;
              if (newURL.slice(-1) != `-sc` && pageSegment == 'international-banking') {
                newURL += '-sc';
              }
            } else if (clickedLanguage == countryLanguages[getCurrentCountry()].default) {
              //no need to add language in URL if it's a default language
              newURL = URL.replace(`/${country}/zh`, `/${country}`);
              if (newURL.slice(-3) == `-sc`) {
                newURL = newURL.slice(0, -3);
              }
            } else {
              newURL = URL.replace(`/${country}`, `/${country}/${clickedLanguage}`);
              if (newURL.slice(-3) == `-sc`) {
                newURL = newURL.slice(0, -3);
              }
            }
            newURL = newURL.replace(`/hk/zh/zh`, `/hk/zh`);
            window.location = `https://${newURL}`;
          } else if (country == 'pk') {
            if (clickedLanguage == countryLanguages[getCurrentCountry()].default) {
              //no need to add language in URL if it's a default language
              newURL = `${urlList.domain}/${country}`;
            } else {
              newURL = `${urlList.domain}/${country}/${clickedLanguage}`;
            }
            window.location = `https://${newURL}`;
          } else if (selectedLanguage != clickedLanguage) {
            if (clickedLanguage == countryLanguages[getCurrentCountry()].default) {
              //no need to add language in URL if it's a default language
              newURL = URL.replace(`/${country}/${selectedLanguage}`, `/${country}`);
            } else {
              newURL = URL.replace(`/${country}`, `/${country}/${clickedLanguage}`);
            }
            window.location = `https://${newURL}`;
          }
        });
      });
    }
  }

  /**
   * activate multiple language select options in footer
   * Example:
   * footerLanguageSelector()
   **/
  footerLanguageSelector(urlList, countryLanguages) {
    if (!urlList) return;
    let URL = urlList.domain + urlList.pathname;
    let languageListFooter = document.querySelectorAll(
      '.sc-footer .sc-footer__lang-selector .sc-footer__lang-btn'
    );
    if (languageListFooter.length) {
      languageListFooter.forEach(function(el) {
        el.addEventListener('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          let country = document.querySelector('meta[name="sc:country"]').getAttribute('content');
          let selectedLanguage = document
            .querySelector('.sc-footer .sc-footer__lang-selector')
            .getAttribute('data-language-sel')
            .toLowerCase();
          let clickedLanguage = event.target.getAttribute('data-language').toLowerCase();

          let newURL = '';
          if (country == 'hk') {
            if (
              typeof event.target.className === 'string' &&
              typeof event.target.className.includes !== 'undefined' &&
              event.target.className.indexOf('active') !== -1
            ) {
              return;
            }
            if (URL.slice(-1) == `/`) {
              URL = URL.slice(0, -1);
            }

            if (clickedLanguage == 'tzh') {
              newURL = URL.replace(`/${country}`, `/${country}/zh`);
              let pageSegment = getPageContext().segment;
              if (newURL.slice(-1) != `-sc` && pageSegment == 'international-banking') {
                newURL = newURL.replace(`/hk/zh/zh`, `/hk/zh`);
                let urlList = newURL.split('/hk/zh/');
                let urlSegment = urlList[1] ? urlList[1].split('/') : [];
                let tempUrl = '';
                if (urlSegment.length) {
                  for (let i = 0; i < urlSegment.length; i++) {
                    if (urlSegment[i]) {
                      tempUrl += `${urlSegment[i]}-sc/`;
                    }
                  }
                }
                newURL = `${urlList[0]}/hk/zh/${tempUrl}`;
              }
            } else if (clickedLanguage == countryLanguages[getCurrentCountry()].default) {
              //no need to add language in URL if it's a default language
              newURL = URL.replace(`/${country}/zh`, `/${country}`);
              if (newURL.slice(-3) == `-sc`) {
                newURL = newURL.replace(/-sc/gi, '');
              }
            } else {
              newURL = URL.replace(`/${country}`, `/${country}/${clickedLanguage}`);
              if (newURL.slice(-3) == `-sc`) {
                newURL = newURL.replace(/-sc/gi, '');
              }
            }
            newURL = newURL.replace(`/hk/zh/zh`, `/hk/zh`);
            window.location = `https://${newURL}`;
          } else if (country == 'pk') {
            if (clickedLanguage == countryLanguages[getCurrentCountry()].default) {
              //no need to add language in URL if it's a default language
              newURL = `${urlList.domain}/${country}`;
            } else {
              newURL = `${urlList.domain}/${country}/${clickedLanguage}`;
            }
            window.location = `https://${newURL}`;
          } else if (selectedLanguage != clickedLanguage) {
            //true if current language and clicked language are not equal
            if (clickedLanguage == countryLanguages[getCurrentCountry()].default) {
              //no need to add language in URL if it's a default language
              newURL = URL.replace(`/${country}/${selectedLanguage}`, `/${country}`);
            } else {
              newURL = URL.replace(`/${country}`, `/${country}/${clickedLanguage}`);
            }
            window.location = `https://${newURL}`;
          }
        });
      });
    }
  }

  /**
   * change top-nav text based on menu-slug
   * Example:
   * menuSlug()
   **/
  menuSlug() {
    const pageContext = getPageContext();
    const pathName = pageContext.pathname;
    const cntName = '/' + pageContext.country + '/';
    if (pathName === cntName) return;

    let pageSegment = pageContext.segment;
    pageSegment = pageSegment ? pageSegment.toLocaleLowerCase() : '';

    const personalList = document.querySelectorAll(
      '.sc-nav__top .sc-nav__personal-lists a.sc-nav__personal-box-link'
    );
    if (personalList.length) {
      for (let i = 0; i < personalList.length; i++) {
        let title = personalList[i].getAttribute('title');
        if (title) {
          const selectedTitle = personalList[i].getAttribute('data-selected-title');
          const href = personalList[i].getAttribute('href');

          title =
            selectedTitle === undefined || selectedTitle === '' || selectedTitle === null
              ? trim(title.toLocaleLowerCase()).split(' ')[0]
              : selectedTitle.toLocaleLowerCase();

          if (pageSegment === title && href) {
            const titleText = personalList[i].innerText || personalList[i].textContent;

            const topBtn = document.querySelector('.sc-nav__top-in .sc-nav__top-btn');
            if (topBtn) {
              topBtn.innerHTML = trim(titleText);
            }
            const activeCls = document.querySelector('.sc-nav__personal-box-link--active');
            if (activeCls) {
              activeCls.classList.remove('sc-nav__personal-box-link--active');
            }
            personalList[i].classList.add('sc-nav__personal-box-link--active');
          }
        }
      }
    }

    const personalListDropDown = document.querySelectorAll(
      '.sc-nav__personal-list .sc-nav__personal-lists a.sc-nav__personal-box-link'
    );
    if (personalListDropDown.length) {
      for (let i = 0; i < personalListDropDown.length; i++) {
        let title = personalListDropDown[i].getAttribute('title');
        if (title) {
          const selectedTitle = personalListDropDown[i].getAttribute('data-selected-title');
          const href = personalListDropDown[i].getAttribute('href');

          title =
            selectedTitle === undefined || selectedTitle === '' || selectedTitle === null
              ? trim(title.toLocaleLowerCase()).split(' ')[0]
              : selectedTitle.toLocaleLowerCase();
          if (pageSegment === title && href) {
            const titleText =
              personalListDropDown[i].innerText || personalListDropDown[i].textContent;

            const topBtn = document.querySelector('.sc-nav__priority-drop-btn');
            if (topBtn) {
              topBtn.innerHTML = trim(titleText);
            }
          }
        }
      }
    }
  }
  /**
   * Updates the navigation elements based on the current URL.
   */
  updateOpenAccountNavigation() {
    const navigationTarget = document.querySelector('[data-navigation-targets]');
    if (!navigationTarget) return;

    let navigationObj;
    try {
      navigationObj = JSON.parse(navigationTarget.getAttribute('data-navigation-targets'));
    } catch (e) {
      return;
    }

    const url = window.location.pathname;
    const accountBtn = document.querySelector('.sc-nav__account-btn');
    const openAccount = document.querySelector('.sc-nav__open-account');

    if (!accountBtn || !openAccount) return;

    navigationObj.some(element => {
      const {
        'page-name': pageName,
        'item-type': itemType,
        'item-target': itemTarget,
        'item-name': itemName
      } = element;

      if (url.includes(pageName) || pageName === 'default') {
        if (itemType === 'popin') {
          openAccount.classList.add(itemTarget);
        } else {
          accountBtn.setAttribute('href', itemTarget);
        }
        accountBtn.innerHTML = itemName;
        accountBtn.setAttribute('title', itemName);
        return true; // Stop iterating
      }

      return false;
    });
  }

  /**
   * changes logo and add class based on meta attribute like saadiq, islamic
   * @param {Object} pageContext - page information in objects
   * Example:
   * prioritySaadiqIslamic(pageContext)
   **/
  prioritySaadiqIslamic(pageContext) {
    // Add priority class to logo to show different logo for priority
    let logo = document.querySelector('.sc-nav .sc-nav__logo');
    if (pageContext.segment === 'priority' && logo) {
      logo.classList.add('sc-nav__logo-priority');
    }
    // Add sc-nav__logo-saadiq class to logo to show different logo for Saadiq
    if (
      pageContext.segment === 'saadiq' ||
      pageContext.segment === 'islamic' ||
      pageContext.slug === 'saadiq' ||
      pageContext.slug === 'islamic'
    ) {
      if (logo) {
        logo.classList.add('sc-nav__logo-saadiq');
      }

      let logoLink = document.querySelector('.sc-nav__logo-link');
      if (logoLink) {
        logoLink.innerHTML = `
         <div class="sc-nav__saadiq-logo-text"></div>
         <div class="sc-nav__saadiq-logo"></div>
         <span class="visuallyhidden sc-hidden">Standard Chartered</span>
      `;
      }

      let linkNew = document.querySelector('.sc-nav__logo-link-new');
      if (linkNew) {
        linkNew.innerHTML = `
         <div class="sc-nav__saadiq-logo-text"></div>
         <div class="sc-nav__saadiq-logo"></div>
         <span class="visuallyhidden sc-hidden">Standard Chartered</span>
      `;
      }
    }

    // Changing the logo for Priority Page via js.
    let isPriorityPage = '';
    let segment = document.querySelector('meta[name="sc:segment"]');
    if (segment) {
      isPriorityPage = segment.getAttribute('content');
    }

    /* eslint-disable no-undef */
    let priorityLogoStyles = `.sc-nav__logo .sc-nav__logo-link{background-image:url(https://av.sc.com/assets/global/icons/svg/standard-chartered-logo-priority-white.svg) !important}`;

    /* eslint-disable no-undef */
    let priorityPrivateLogoStyle = `.sc-nav__logo .sc-nav__logo-link{background-image:url(https://av.sc.com/assets/global/icons/svg/standard-chartered-logo-priority-private-white.svg) !important}`;

    /* eslint-disable no-undef */
    let privateBankingLogoStyle = `.sc-nav__logo .sc-nav__logo-link{background-image:url(https://av.sc.com/assets/global/icons/svg/standard-chartered-logo-private-bank-white.svg) !important}`;

    if (
      document.querySelector('.sc-nav') &&
      !document.querySelector('.sc-nav').classList.contains('sc-nav--dark')
    ) {
      /* eslint-disable no-undef */
      priorityLogoStyles = `.sc-nav__log .sc-nav__logo-link{background-image:url(https://av.sc.com/assets/global/images/components/header/standard-chartered-logo-priority.svg) !important}`;

      /* eslint-disable no-undef */
      priorityPrivateLogoStyle = `.sc-nav__logo .sc-nav__logo-link{background-image:url(https://av.sc.com/assets/global/images/components/header/standard-chartered-logo-priority-private.svg) !important}`;

      /* eslint-disable no-undef */
      privateBankingLogoStyle = `.sc-nav__logo .sc-nav__logo-link{background-image:url(https://av.sc.com/assets/global/images/components/header/standard-chartered-logo-private-bank.svg) !important}`;
    }

    if (isPriorityPage === 'priority') {
      // Include the logo css only if the page segment is priority.
      let styleSheet = document.createElement('style');
      styleSheet.innerText = priorityLogoStyles;
      document.head.appendChild(styleSheet);
    }

    if (isPriorityPage === 'priority-private') {
      let styleSheet = document.createElement('style');
      styleSheet.innerText = priorityPrivateLogoStyle;
      document.head.appendChild(styleSheet);
    }

    if (isPriorityPage === 'private-banking') {
      let styleSheet = document.createElement('style');
      styleSheet.innerText = privateBankingLogoStyle;
      document.head.appendChild(styleSheet);
    }
  }
}

let instance = new ScMeganav();
instance.init();

export default instance;
