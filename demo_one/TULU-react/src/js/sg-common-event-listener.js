/* global adobeDataLayer, digitalData */

import {
  getCurrentCountry,
  getCurrentEnvironment,
  getLocalStorageWithExpiry,
  getCookie,
  getCampaignInfoV2
} from './sc-common-methods';
if (typeof window.adobeDataLayer === 'undefined') {
  window.adobeDataLayer = new Array();
}
class SgCommonEventListener {
  init() {
    if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
      //Adobe Analytics not enable for this market
      return;
    }
    const mktCountryCode = getCurrentCountry();
    if (mktCountryCode === 'sg') {
      // Load AA for SG nitro theme, in the non-nitro theme it's loading from head.min.js file
      const that = this;
      let pageSlug = document.querySelector('meta[name="sc:page-slug"]')
        ? document.querySelector('meta[name="sc:page-slug"]').getAttribute('content')
        : null;
      window.digitalData = window.digitalData || {};
      that.productId = digitalData?.page?.productInfo?.productId || '';
      that.pfmId = 'na';
      that.getProductIdPfm();

      if (window.digitalData) {
        window.digitalData.page = window.digitalData.page || {};
        window.digitalData.page.attributes = window.digitalData.page.attributes || {};
        window.digitalData.page.attributes.platform = 'desktop website';
        window.digitalData.page.attributes.pfm = that.pfmId;
      }

      //Push form name and page name in digitalData
      let pageNameList = [];
      if (window.digitalData.page.pageInfo && window.digitalData.page.pageInfo.pageName) {
        //Set na if pageName are empty
        let pageName = window.digitalData.page.pageInfo.pageName;
        pageName = pageName.split(':');
        if (pageName.length > 1) {
          for (let i = 0; i < pageName.length; i++) {
            if (i == 7) {
              pageNameList.push('na');
            } else {
              pageNameList.push(pageName[i] ? pageName[i] : 'na');
            }
          }
        }

        if (pageName.length <= 8) {
          pageNameList.push(pageSlug);
        }

        //Set na if category objects are empty
        if (window.digitalData.page.category) {
          let catName = window.digitalData.page.category;
          // eslint-disable-next-line no-unused-vars
          for (let index in catName) {
            window.digitalData.page.category[index] = catName[index] ? catName[index] : 'na';
          }
        }
        const environment = getCurrentEnvironment();

        window.digitalData.page.pageInfo.pageName = pageNameList.join(':');
        window.digitalData.page.pageInfo.buildDetails = 'web3.0';
        window.digitalData.page.pageInfo.libDetails =
          environment === 'staging' ? 'stage' : environment;
      }

      window.digitalData.campaign = window.digitalData.campaign || {};
      window.digitalData.user = window.digitalData.user || {};
      window.digitalData.user.userInfo = {
        segment: pageNameList[2] ?? 'na',
        userID: '',
        userStatus: 'guest',
        userType: 'ntb',
        pagetype: pageNameList[3] ?? 'na'
      };

      if (window.digitalData.page.pageInfo) {
        let pageName = window.digitalData.page.pageInfo.pageName.split(':');
        if (pageName[4] != 'na' || pageName[5] != 'na' || pageName[6] != 'na') {
          window.digitalData.product = window.digitalData.product || {};
          window.digitalData.product = {
            productInfo: {
              productCategory: pageName[4],
              productSubcategory: pageName[5],
              productName: pageName[6],
              productID: that.productId
            }
          };
        }
      }

      if (digitalData.page.productInfo) {
        delete digitalData.page.productInfo;
      }

      let dataObject = {
        ...digitalData,
        event: 'pageView',
        title: document.title,
        href: window.location.href,
        context: 'page view'
      };
      window.digitalData.page = window.digitalData.page || {};

      //For SG adobe data layer Nitro
      window.digitalData.page.category.subCategory2 = '';

      //Set campaign information
      const paramsApiUrl = `https://av.sc.com/${pageNameList[0]}/data/campaign-parameter/allowable/all.json`;
      let campaignObj = {};
      window.getAdobeParams = new XMLHttpRequest();
      window.getAdobeParams.open('GET', paramsApiUrl, true);
      window.getAdobeParams.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          let data = window.getAdobeParams.responseText;
          try {
            campaignObj = JSON.parse(data);
          } catch (e) {
            alert(e.message);
            return;
          }
        } else {
          // We reached our target server, but it returned an error
        }
      };
      window.getAdobeParams.onerror = function() {
        // There was a connection error of some sort
      };
      window.getAdobeParams.send();

      window.getAdobeParams.addEventListener('load', function() {
        getCampaignInfoV2(campaignObj);
        adobeDataLayer.push(dataObject);
        delete digitalData.campaign;
      });
    }
  }

  /**
   * get internal and external campaign info
   * @example
   * getIntExtCampaignInfo()
   */
  getIntExtCampaignInfo() {
    let allowableQueryString = [
      'aggregator_code',
      'aggregator_type',
      'aggregator_instance',
      'intcid',
      'subChanCode',
      'referId',
      'instance',
      'camp_id',
      'pid',
      'promoCode',
      'promo',
      'state'
    ]; //internal campaign parameters
    let externalCampaignParams = ['cid']; //external campaign parameters
    let total = allowableQueryString.length;
    let intCampaignName = '';
    let intCampaignValue = '';
    let queryStringList = [];
    let queryString = window.location.search;
    let extCampaignName = '';
    let extCampaignValue = '';

    if (queryString) {
      queryString = queryString.substring(1);
      if (queryString) {
        queryStringList = queryString.split('&');
      }
    }

    let foundParam = false;
    for (let i = 0; i < total; i++) {
      if (intCampaignName) {
        intCampaignName += ':';
        intCampaignValue += ':';
      }
      intCampaignName += allowableQueryString[i];
      let found = false;
      if (queryStringList.length) {
        let result;
        for (let j = 0; j < queryStringList.length; j++) {
          result = queryStringList[j].split('=');
          if (result[0].toLowerCase() == allowableQueryString[i].toLowerCase()) {
            found = true;
            foundParam = true;
            intCampaignValue += result[1];
            break;
          }
        }
      }
      if (!found) {
        let localStorageValue = getLocalStorageWithExpiry(allowableQueryString[i]);
        let cookieValue = getCookie(allowableQueryString[i]);
        if (localStorageValue || cookieValue) {
          found = true;
          foundParam = true;
          intCampaignValue += localStorageValue || cookieValue;
        }
      }
      if (!found) {
        intCampaignValue += 'na';
      }
    }

    //External campaign
    if (queryStringList.length) {
      for (let i = 0; i < queryStringList.length; i++) {
        let result = queryStringList[i].split('=');
        if (externalCampaignParams.indexOf(result[0].toLowerCase()) != -1) {
          if (extCampaignValue != '') {
            extCampaignName += ':';
            extCampaignValue += ':';
          }
          extCampaignName += result[0];
          extCampaignValue += result[1];
        }
      }
    }

    if (!foundParam) {
      intCampaignName = '';
      intCampaignValue = '';
    } else {
      intCampaignName = intCampaignName.toLowerCase();
      intCampaignValue = intCampaignValue.toLowerCase();
    }
    if (extCampaignName) {
      extCampaignName = extCampaignName.toLowerCase();
      extCampaignValue = extCampaignValue.toLowerCase();
    }
    return {
      intName: intCampaignName,
      intVal: intCampaignValue,
      extName: extCampaignName,
      extVal: extCampaignValue
    };
  }

  /**
   * get productId from URL
   * @example
   * getProductId()
   */
  getProductIdPfm() {
    const that = this;
    let queryStringList = [];
    let queryString = window.location.search;
    if (queryString) {
      queryString = queryString.substring(1);
      if (queryString) {
        queryStringList = queryString.split('&');
        if (queryStringList.length) {
          for (let i = 0; i < queryStringList.length; i++) {
            let result = queryStringList[i].split('=');
            if (result[0].toLowerCase() == 'productid') {
              that.productId = result[1].toLowerCase();
            } else if (result[0].toLowerCase() == 'pfm') {
              that.pfmId = result[1].toLowerCase();
            }
          }
        }
      }
    }
  }
}

const instance = new SgCommonEventListener();

document.addEventListener('DOMContentLoaded', () => {
  if (typeof scAnalyticsDataArray !== 'undefined') {
    instance.init();
  }
});
export default instance;
