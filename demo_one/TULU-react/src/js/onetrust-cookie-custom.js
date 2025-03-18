import { getPageContext, getOuterHeight, handlePersistentBarScroll } from './sc-common-methods';
class OneTrustCookieCustom {
  init() {
    const that = this;
    this.contentAdded = false;
    if (!window.onetrustlabel && !window.implicitContent) return;
    if (window.implicitContent) that.implicitContentCheck();
    let bodyNotClicked = true;

    window.addEventListener('load', () => {
      setTimeout(() => {
        //PersistentBar class list
        that.persistentBar = document.querySelector('.sc-persistent-bar');
        that.chatBot = document.querySelector('.c2c_box_wrapper');

        let noteElement = document.querySelector('.onetrust-pc-dark-filter');
        let country = getPageContext().country;
        if (country === 'ae') {
          noteElement.classList.add('onetrust-overlay');
        }
        that.bannerSdk = document.querySelector('#onetrust-banner-sdk');

        window.addEventListener('scroll', function() {
          setTimeout(function() {
            if (that.bannerSdk && that.bannerSdk.style.display === 'none') {
              handlePersistentBarScroll();
              that.adjustPosition();
            }
          }, 500);
        });
        that.adjustPosition();

        document.body.addEventListener('click', () => {
          if (bodyNotClicked) {
            bodyNotClicked = false;
            setTimeout(function() {
              handlePersistentBarScroll();
              that.adjustPosition();
            }, 500);
          }
        });

        const closeBtn = document.querySelector('.onetrust-close-btn-handler');
        if (closeBtn) {
          setTimeout(function() {
            handlePersistentBarScroll();
            that.adjustPosition();
          }, 500);
        }
      }, 1500);
    });
  }

  adjustPosition() {
    const that = this;
    let persistentBarHeight = 0;
    let backToTopHeight = 0;
    let onetrustHeight = 0;
    if (that.bannerSdk && that.bannerSdk.style && that.bannerSdk.style.display !== 'none') {
      onetrustHeight = getOuterHeight(that.bannerSdk);
    } else if (
      that.persistentBar &&
      that.persistentBar.classList.contains('sc-persistent-bar--show')
    ) {
      persistentBarHeight = getOuterHeight(that.persistentBar);
    }

    const backToTop = document.querySelector('.sc-footer__back-to-top--show');
    if (backToTop) {
      backToTopHeight = getOuterHeight(backToTop) + 30;
    }

    if (that.chatBot) {
      that.chatBot.style.bottom = onetrustHeight + persistentBarHeight + backToTopHeight + 'px';
    }
  }

  /**
   * based of referrer domain, decide need to delete onetrust cookie or not
   **/
  implicitContentCheck() {
    const that = this;
    let referrer = document.referrer;
    if (!referrer || that.getDomain(window.location.href) != that.getDomain(referrer)) {
      //true if your open it as a new session
      let allCookie = document.cookie.split(';');
      allCookie.forEach(function(c) {
        let name = c.split('=')[0];
        if (name) {
          name = name.trim().toLowerCase();
        }
        if (name == 'optanonconsent' || name == 'optanonalertboxclosed') {
          //Delete only specific cookie
          document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
        }
      });
    }
  }

  /**
   * get a full URL and return the domain name
   * @param {String} url - full url of the page
   **/
  getDomain(url) {
    url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    url = url.split('.');
    url = url.slice(url.length - 2).join('.');
    if (url.indexOf('/') !== -1) return url.split('/')[0];
    return url;
  }
}
const instance = new OneTrustCookieCustom();
instance.init();

export default instance;
