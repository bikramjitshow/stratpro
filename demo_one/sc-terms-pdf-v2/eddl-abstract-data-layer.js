(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInputNoSlider = exports.validateInput = exports.vLookup = exports.urlBreakdown = exports.trim = exports.triggerPopupViewedTagging = exports.stepFieldErrorStatus = exports.smoothScroll = exports.sliderFieldErrorStatus = exports.sliderErrorStatus = exports.shouldCarryTrackingParams = exports.setLocalStorageWithExpiry = exports.pmt = exports.parseUrl = exports.matchHeight = exports.isMobile = exports.isInternalDomain = exports.isForm = exports.isEmpty = exports.initializeSlider = exports.handleProductsObj = exports.handleProductCalculatorSubmit = exports.handlePersistentBarScroll = exports.handleCalculatorAnalytics = exports.handleAnalyticsCTA = exports.getUrlParamName = exports.getQueryParam = exports.getPosition = exports.getPageUrl = exports.getPageContext = exports.getOuterHeight = exports.getLocalStorageWithExpiry = exports.getIntExtCampaignInfo = exports.getHorizontalPosition = exports.getDeviceDetails = exports.getCurrentEnvironment = exports.getCurrentCountry = exports.getCtaType = exports.getCtaContext = exports.getCookie = exports.getCampaignInfoV2 = exports.getCampaignInfoV1 = exports.getCampaignInfo = exports.getAssetDomain = exports.getAccordionHeading = exports.formatNumbersWithTwoDecimalPlaces = exports.extractQueryParams = exports.extendedPMT = exports.extend = exports.detectOS = exports.debounceEvents = exports.daysInThisMonth = exports.convertQueryStringToJsonObject = exports.convertNumbers = exports.convertMonthsToYearsAndMonths = exports.calculateYearMonth = exports.calculateRanges = exports.calculatePresentValue = exports.calculatePMT = exports.calculateNPER = exports.calculateIRR = exports.calculateFutureValue = exports.calculateEIR = exports.calculateDerivative = exports.calcElementLocation = exports.bundleParam = exports.browserDetect = exports.applyCookieParams = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-useless-escape */
/* global digitalData, scAnalyticsDataArray, _satellite, noUiSlider */
if (!window.scCommonConstants) {
  window.scCommonConstants = {
    DEVELOPMENT: 'development',
    PREVIEW: 'preview',
    PRODUCTION: 'production',
    STAGING: 'staging',
    PERSONAL: 'personal',
    PRIORITY: 'priority',
    BUSINESS: 'business',
    CORPORATE: 'corporate',
    PRIVATE: 'private',
    COMMERCIAL: 'commercial',
    LANGUAGES: ['en', 'zh'],
    ALLOWABLE_QUERYSTRING: {
      scb: ['subChanCode', 'camp_id', 'pid', 'promoCode', 'promo', 'referId', 'instance', 'state', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'GiPrm', 'productName', 'truspleBuyerId', 'CTID'],
      others: ['gclid', 'gclsrc'],
      'partner-urls': ['https://www.royalsundaram.in/.*', 'https://www.maxbupa.com/.*', 'https://www.bharti-axagi.co.in/.*', 'https://www.iciciprulife.com/.*', 'https://www.einsure.allianz.com.sg/.*', 'https://www.allianz-travel-insure.com.sg/.*', 'https://www.lin.ee/.*', 'https://www.piapp.com/.*']
    },
    URL_OBJ: ['cmsdev', 'preview', 'standardchartered', 'sc', 'com', 'av', 'assets', 'global', 'development', 'staging', 'digital', 'https', 'cmsstage', 'cms', 'dev', 'zoo']
  };
}
/**
 * Breaks down a given URL into its components.
 * @param {string} currentURL - The URL to be broken down.
 * @returns {Object} An object representing the components of the URL.
 */
var urlBreakdown = function urlBreakdown(currentURL) {
  var parser = parseUrl(currentURL);
  var queryString = parser.search,
    parts = parser.pathname.split('/'),
    hash = parser.hash,
    countryMapping = {
      sgbeta: 'sg'
    };
  if (queryString && queryString.indexOf('?') === 0) {
    queryString = queryString.slice(1);
  }
  var pageURL = {
    domain: null,
    country: null,
    language: null,
    category: null,
    segment: 'personal',
    subcategory: null,
    slug: null,
    queryString: queryString,
    hash: null,
    pathname: document.location.pathname
  };
  pageURL.domain = parser.hostname;
  pageURL.country = parts[1];
  pageURL.language = 'en';
  if (pageURL.country === 'cn' || pageURL.country === 'tw') {
    pageURL.language = 'zh';
  }
  if (parts[2]) {
    pageURL.category = parts[2];
    if (parts[2].length === 2) {
      pageURL.language = parts[2];
      pageURL.category = parts[3];
    }
  }
  if (parts[parts.length - 1] !== '' && parts[parts.length - 1] !== 'index.html') {
    pageURL.slug = parts[parts.length - 1];
  } else {
    pageURL.slug = parts[parts.length - 2];
  }
  if (pageURL.slug) {
    if (pageURL.slug.indexOf('.') !== -1) {
      var slugger = pageURL.slug.split('.');
      pageURL.name = slugger[0];
      pageURL.extension = slugger[1];
    } else {
      pageURL.name = pageURL.slug;
      pageURL.extension = '';
    }
  } else {
    pageURL.slug = '';
    pageURL.name = '';
    pageURL.extension = '';
  }
  if (parts.length <= 4 && window.scCommonConstants.LANGUAGES.indexOf(pageURL.slug) !== -1) {
    pageURL.slug = pageURL.country;
  }
  if (hash) {
    pageURL.hash = hash;
  }
  if (parts.length >= 5) {
    pageURL.subcategory = parts[3];
  }
  if (pageURL.pathname && pageURL.pathname.indexOf('priority') !== -1) {
    pageURL.segment = 'priority';
  } else if (pageURL.pathname && pageURL.pathname.indexOf('business') !== -1) {
    pageURL.segment = 'business';
  }
  if (countryMapping[pageURL.country]) {
    pageURL.country = countryMapping[pageURL.country];
  }
  return pageURL;
};

/**
 * Parses a URL and returns its components.
 * @param {string} url - The URL to parse.
 * @returns {Object} An object representing the parsed URL components.
 */
exports.urlBreakdown = urlBreakdown;
var parseUrl = function parseUrl(url) {
  var parser = document.createElement('a');
  parser.href = url;
  if (parser.protocol != 'mailto:') {
    var link_path = '/' === parser.pathname.charAt(0) ? parser.pathname : '/' + parser.pathname;
  } else {
    link_path = parser.pathname;
  }
  return {
    href: parser.href,
    protocal: parser.protocol,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.hash.indexOf('?') !== -1 ? link_path + parser.hash : link_path,
    rawpath: link_path,
    query: parser.query || parser.search,
    search: parser.query || parser.search,
    hash: parser.hash,
    host: parser.host
  };
};

/**
 * Retrieves the page context from meta tags and URL breakdown.
 * @returns {Object} An object representing the page context.
 */
exports.parseUrl = parseUrl;
var getPageContext = function getPageContext() {
  var $title = document.title;
  var $country = document.querySelector('meta[name="sc:country"]');
  var $language = document.querySelector('meta[name="sc:language"]');
  var $segment = document.querySelector('meta[name="sc:segment"]');
  var $category = document.querySelector('meta[name="sc:categories"]');
  var $subcategory = document.querySelector('meta[name="sc:subcategories"]');
  var $slug = document.querySelector('meta[name="sc:page-slug"]');
  var pageContext = {
    title: null,
    country: null,
    language: null,
    segment: null,
    category: null,
    subcategory: null,
    slug: null
  };
  if ($title) {
    pageContext.title = $title;
  }
  if ($country) {
    pageContext.country = $country.getAttribute('content');
  }
  if ($language) {
    pageContext.language = $language.getAttribute('content');
  }
  if (!pageContext.language) {
    var docLang = document.documentElement.lang;
    if (docLang) {
      // Document language can be in languageCode-countryCode format, e.g en-US.
      // In front-end context, we don't need countryCode part
      pageContext.language = docLang.split('-')[0].toLowerCase();
    }
  }
  if ($segment) {
    pageContext.segment = $segment.getAttribute('content');
  }
  if ($category) {
    pageContext.category = $category.getAttribute('content');
  }
  if ($subcategory) {
    pageContext.subcategory = $subcategory.getAttribute('content');
  }
  if ($slug) {
    pageContext.slug = $slug.getAttribute('content');
  }
  return extend(urlBreakdown(window.location.href), pageContext);
};

/**
 * Extends an object with properties from another object.
 * @param {Object} obj - The object to extend.
 * @param {Object} src - The object providing the new properties.
 * @returns {Object} The extended object.
 */
exports.getPageContext = getPageContext;
var extend = function extend(obj, src) {
  Object.keys(src).forEach(function (key) {
    obj[key] = src[key];
  });
  return obj;
};

/**
 * Gets the current country from the page context or URL.
 * @returns {string} The current country.
 */
exports.extend = extend;
var getCurrentCountry = function getCurrentCountry() {
  var pageContext = getPageContext();
  if (pageContext.country) {
    return pageContext.country;
  }
  return urlBreakdown(window.location.href).country;
};

/**
 * Trims whitespace from a given text.
 * @param {string} text - The text to trim.
 * @returns {string} The trimmed text.
 */
exports.getCurrentCountry = getCurrentCountry;
var trim = function trim(text) {
  if (text) {
    return text.trim();
  }
  return text;
};

/**
 * will moved this function to ExternalLinksDisclaimer once migration complete
 *
 * @param {String} domain domain name
 * @example
 * isInternalDomain('www.sc.com')
 */
exports.trim = trim;
var isInternalDomain = function isInternalDomain(domain, ctaUrl) {
  if (isForm(ctaUrl)) {
    return true;
  }
  // List of all regular expression for internal domains
  var internal = [/^myinfosg.api.gov.sg$/, /^sc.com$/, /^.*\.sc\.com$/, /^standardchartered.com$/, /^.*\.standardchartered\.com/, /^.*\.standardchartered\.com\..*/, /^standardchartered\.co\..*$/, /^.*\.standardchartered\.co\..*$/, /www.wowmanhattan.com.sg/, /saml.singpass.gov.sg/, /scb-sg.onelink.me/, /#null/];
  for (var i = 0; i < internal.length; i++) {
    if (internal[i].test(domain)) {
      return true;
    }
  }
  var partnerUrls = window.scCommonConstants.ALLOWABLE_QUERYSTRING['partner-urls'];
  if (!Array.isArray(partnerUrls) || partnerUrls.length === 0) {
    return false; // No URLs to check
  }

  var partnerStatus = partnerUrls.some(function (url) {
    return new RegExp("^".concat(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), 'i').test(ctaUrl);
  });
  if (!partnerStatus && !document.querySelector('[data-modal-id="external-links-disclaimer"]')) {
    //No disclaimer code added, so directly go to the clicked URL
    return true;
  }
  return partnerStatus;
};

/**
 * capture horizontal click position and return it's left or right
 * @param {Number} xClick horizontal click position
 * @return {String} return it's left or right
 * @example
 * getHorizontalPosition(1000)
 */
exports.isInternalDomain = isInternalDomain;
var getHorizontalPosition = function getHorizontalPosition(xClick) {
  if (!xClick) return 'left';
  var maxWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
  var mktCountryCode = getCurrentCountry();
  if (mktCountryCode !== 'hk' && mktCountryCode !== 'sg') {
    var median = maxWidth / 2;
    return xClick < median ? 'left' : 'right';
  }

  //Sorted array of positions
  var positions = [{
    name: 'left',
    depth: 30
  }, {
    name: mktCountryCode === 'sg' ? 'center' : 'middle',
    depth: 70
  }, {
    name: 'right',
    depth: 100
  }];
  var scrollDepth = xClick * 100 / maxWidth;
  for (var i = 0; i < positions.length; i++) {
    if (scrollDepth < positions[i].depth) {
      return positions[i].name;
    }
  }
};

/**
 * return cookie value
 * @param {String} key is the name of the cookie
 * @return {String} return selected cookie value
 * @example
 * getCookie('subChanCode')
 */
exports.getHorizontalPosition = getHorizontalPosition;
var getCookie = function getCookie(key) {
  var name = key + '=';
  var decodedCookie;
  try {
    //The decodeURIComponent function can throw an error if the cookie value contains invalid encoding, which might happen if special characters are improperly encoded. To fix this, you can add a try-catch block around decodeURIComponent to handle any decoding errors gracefully.
    decodedCookie = decodeURIComponent(document.cookie);
  } catch (e) {
    return null;
  }
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

/**
 * Method to get localstorage value.
 * @param {string} key
 */
exports.getCookie = getCookie;
var getLocalStorageWithExpiry = function getLocalStorageWithExpiry(key) {
  var itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  var item = JSON.parse(itemStr);
  var now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

/**
 * calculate vertical position
 * @param {Event} target event of the selector
 * @return {String} return top, middle, bottom, persistent-bar, lightbox etc.
 * @example
 * calcElementLocation(event)
 */

// CTA Postion
exports.getLocalStorageWithExpiry = getLocalStorageWithExpiry;
var calcElementLocation = function calcElementLocation(target) {
  var _ref, _target$closest, _ref2, _ref3, _ref4, _ref5, _ref6, _target$closest2;
  if (!target) return '';
  if (target.closest('.c-modal') || target.closest('.sc-modal')) {
    return 'middle';
  }
  if (typeof target.className === 'string' && typeof target.className.includes !== 'undefined' && (target.className.indexOf('sc-card-comparator__compare-btn') !== -1 || target.className.indexOf('sc-card-comparator__card-remove') !== -1)) {
    return 'bottom';
  }
  var closestTarget = (_ref = (_target$closest = target.closest('a')) !== null && _target$closest !== void 0 ? _target$closest : target.closest('label')) !== null && _ref !== void 0 ? _ref : target;
  var fromTop = parseInt(getPosition(closestTarget), 10) * 100;
  if ((_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_target$closest2 = target.closest('.sc-persistent-bar')) !== null && _target$closest2 !== void 0 ? _target$closest2 : target.closest('.m-persistent-bootom-bar')) !== null && _ref6 !== void 0 ? _ref6 : target.closest('.sc-wealthsaver-calc__sticky')) !== null && _ref5 !== void 0 ? _ref5 : target.closest('.sc-ft-calc__sticky')) !== null && _ref4 !== void 0 ? _ref4 : target.closest('.sc-miles-calc__total-result--sticky')) !== null && _ref3 !== void 0 ? _ref3 : target.closest('.sc-bundled-products__sticky-outer')) !== null && _ref2 !== void 0 ? _ref2 : target.closest('.sc-bundled-products-sticky__sticky')) {
    //Persistent bar in the bottom
    fromTop = parseInt(window.scrollY + window.innerHeight, 10) * 100;
  } else if (target.closest('.m-persistent-bar')) {
    //Persistent bar in the top
    fromTop = parseInt(window.scrollY + 70, 10) * 100;
  }

  //Sorted array of positions
  var positions = [{
    name: 'top',
    depth: 30
  }, {
    name: 'middle',
    depth: 70
  }, {
    name: 'bottom',
    depth: 100
  }];
  var maxHeight = Math.max(document.body.clientHeight, window.outerHeight);
  if (maxHeight <= 0) {
    return '';
  }
  var scrollDepth = fromTop / maxHeight;
  for (var i = 0; i < positions.length; i++) {
    if (scrollDepth < positions[i].depth) {
      return positions[i].name;
    }
  }
  if (typeof target.parentNode.parentNode.className === 'string' && typeof target.parentNode.parentNode.className.includes !== 'undefined' && target.parentNode.parentNode.className.indexOf('sc-hdr__search') !== -1) {
    return 'top';
  }
  return 'bottom';
};
exports.calcElementLocation = calcElementLocation;
var getCurrentEnvironment = function getCurrentEnvironment() {
  var urlObj = window.scCommonConstants.URL_OBJ;
  var domain = getPageUrl().domain;
  if (domain.indexOf(urlObj[3] + '.' + urlObj[4]) !== -1) {
    if (domain === urlObj[0] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return window.scCommonConstants.DEVELOPMENT;
    } else if (domain === urlObj[12] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return window.scCommonConstants.STAGING;
    } else if (domain === urlObj[13] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return window.scCommonConstants.PREVIEW;
    } else {
      return window.scCommonConstants.PRODUCTION;
    }
  } else if (domain === urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4]) {
    if (getPageUrl().pathname.match('^/staging')) {
      return window.scCommonConstants.STAGING;
    } else if (getPageUrl().pathname.match('^/development')) {
      return window.scCommonConstants.DEVELOPMENT;
    } else {
      return window.scCommonConstants.PREVIEW;
    }
  } else {
    return window.scCommonConstants.DEVELOPMENT;
  }
};
exports.getCurrentEnvironment = getCurrentEnvironment;
var getPageUrl = function getPageUrl() {
  return getPageContext();
};

/**
 * get internal and external campaign info
 * @example
 * getIntExtCampaignInfo('in')
 */
exports.getPageUrl = getPageUrl;
var getIntExtCampaignInfo = function getIntExtCampaignInfo(country) {
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  if (country == 'in' || country == 'pk' || country == 'hk') {
    //Special whitelisted parameters
    allowableQueryString = ['aggregator_code', 'aggregator_type', 'aggregator_instance', 'intcid', 'subChanCode', 'referId', 'instance', 'camp_id', 'pid', 'promoCode', 'promo', 'state'];
  }
  var externalCampaignParams = ['cid']; //external campaign parameter(s) for HK
  var total = allowableQueryString.length;
  var intCampaignName = '';
  var intCampaignValue = '';
  var queryStringList = [];
  var queryString = window.location.search;
  var extCampaignName = '';
  var extCampaignValue = '';
  if (queryString) {
    queryString = queryString.substring(1);
    if (queryString) {
      queryStringList = queryString.split('&');
    }
  }
  //Take it from local storage
  var foundParam = false;
  for (var i = 0; i < total; i++) {
    var cookieValue = getCookie(allowableQueryString[i]);
    var localStorageValue = getLocalStorageWithExpiry(allowableQueryString[i]);
    if (cookieValue || localStorageValue) {
      foundParam = true;
      if (intCampaignName && intCampaignValue) {
        intCampaignName += ':';
        intCampaignValue += ':';
      }
      intCampaignName += allowableQueryString[i];
      intCampaignValue += cookieValue || localStorageValue;
    } else {
      if (intCampaignName) {
        intCampaignName += ':';
        intCampaignValue += ':';
      }
      intCampaignName += allowableQueryString[i];
      if (queryStringList.length) {
        var found = false;
        var result = void 0;
        for (var j = 0; j < queryStringList.length; j++) {
          result = queryStringList[j].split('=');
          if (result[0].toLowerCase() == allowableQueryString[i]) {
            found = true;
            break;
          }
        }
        if (found) {
          foundParam = true;
          intCampaignValue += result[1];
        } else {
          intCampaignValue += 'na';
        }
      } else {
        intCampaignValue += 'na';
      }
    }
  }

  //External campaign
  if (queryStringList.length) {
    for (var _i = 0; _i < queryStringList.length; _i++) {
      var _result = queryStringList[_i].split('=');
      if (allowableQueryString.indexOf(_result[0]) === -1) {
        //exclude whitelisted parameters from external campaign
        if (country !== 'hk' || externalCampaignParams.indexOf(_result[0]) !== -1) {
          if (extCampaignValue != '') {
            extCampaignName += ':';
            extCampaignValue += ':';
          }
          extCampaignName += _result[0];
          extCampaignValue += _result[1];
        }
      }
    }
  }
  if (!foundParam && (country == 'in' || country == 'hk')) {
    intCampaignName = '';
    intCampaignValue = '';
  } else {
    intCampaignName = intCampaignName.toLowerCase();
    intCampaignValue = intCampaignValue.toLowerCase();
  }
  if (!extCampaignName) {
    extCampaignName = extCampaignName.toLowerCase();
    extCampaignValue = extCampaignValue.toLowerCase();
  }
  return {
    intName: intCampaignName,
    intVal: intCampaignValue,
    extName: extCampaignName,
    extVal: extCampaignValue
  };
};

/**
 * return absolute position of selected div in px
 * @param {String} element class elements name as an object
 * @return {Number} return horizontal position in px
 * @example
 * getPosition('.selector')
 */
exports.getIntExtCampaignInfo = getIntExtCampaignInfo;
var getPosition = function getPosition(element) {
  if (!element) return '';
  var yPosition = 0;
  while (element) {
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }
  return yPosition;
};

/**
 * Function to detect the user's operating system
 */
exports.getPosition = getPosition;
var detectOS = function detectOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  return 'Unknown';
};

/**
 * check class name and return link type
 * @param {String} className class name of the clicked element
 * @return {String} return link type like link, button, carousel etc
 * @example
 * getCtaType('sc-btn')
 */
// CTA Type
exports.detectOS = detectOS;
var getCtaType = function getCtaType(className, target) {
  var mktCountryCode = getCurrentCountry();
  if (mktCountryCode === 'hk' || mktCountryCode === 'sg') {
    if (target) {
      if (target.closest('.sc-meganav__hamburger, .sc-meganav__close-button, .sc-meganav__login-btn, .sc-meganav__login-close, .c-button, .sc-btn')) {
        return 'button';
      }
      if (target.closest('.sc-meganav__btn-search-mbl')) {
        return 'search';
      }
      if (target.closest('header')) {
        return 'nav-link';
      }
      if (target.closest('.sc-recommend .sc-filter__btn, .sc-digital-guide__tab-item, .sc-tab-minimal__head-button, .sc-right-tab .splide__slide, .sc-tab__item')) {
        return 'tab';
      }
      if (target.closest('.sc-accordion__label, .sc-faq-two-column__label, .sc-faq__accordion-label, .c-plus-minus-accordion___item') && !target.closest('a')) {
        return 'accordion';
      }
      if (target.closest('.sc-quick-tools, .m-quick-links')) {
        return 'quick-links';
      }
    }
    return 'link';
  } else {
    if (target && target.closest('header')) {
      return 'nav-link';
    } else if (target && target.closest('.sc-banner__content')) {
      return 'masthead-button';
    } else if (target && target.closest('.sc-banner-slider__thumbnail')) {
      return 'button';
    } else if (target && target.closest('.sc-benefits-slider-tab__tabs-0')) {
      return 'button';
    } else if (target && target.closest('.sc-banner-przn-block')) {
      return 'widget-button';
    } else if (target && target.closest('.sc-filter__btn')) {
      return 'button';
    } else if (target && target.closest('.sc-quick-tools__links')) {
      return 'quick-link';
    } else if (target && target.closest('.sc-filter')) {
      return 'button';
    } else if (target && target.closest('.sc-digital-guide .splide')) {
      return 'button';
    } else if (target && target.closest('.sc-benefits-slider-tab__tab')) {
      return 'button';
    } else if (target && target.closest('.sc-footer')) {
      return 'footer-link';
    } else if (target && target.closest('.sc-persistent-bar')) {
      return 'persistent-bar-link';
    } else {
      return 'link';
    }
  }
};

/**
 * Track customer interaction for CTA Click.
 */
exports.getCtaType = getCtaType;
var handleAnalyticsCTA = function handleAnalyticsCTA(ev) {
  var targetClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var ctaObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
    //Adobe Analytics not enable for this market
    return;
  }
  var closest = targetClass ? targetClass : ev.target.closest('a');
  var ctaType = ctaObj.ctaType,
    ctaPosition = ctaObj.ctaPosition,
    xLinkRegion = ctaObj.xLinkRegion,
    customLinkText = ctaObj.customLinkText,
    linkName = ctaObj.linkName,
    context = ctaObj.context;
  var mktCountryCode = getCurrentCountry();
  if (!ctaType) {
    ctaType = closest ? getCtaType(closest.className, ev.target) : 'link';
  }
  if (!ctaPosition) {
    ctaPosition = calcElementLocation(ev.target);
  }
  if (!xLinkRegion) {
    xLinkRegion = getHorizontalPosition(ev.clientX);
  }
  if (!customLinkText && closest) {
    var _ref7, _ref8, _closest$getAttribute;
    customLinkText = (_ref7 = (_ref8 = (_closest$getAttribute = closest.getAttribute('title')) !== null && _closest$getAttribute !== void 0 ? _closest$getAttribute : closest.innerText) !== null && _ref8 !== void 0 ? _ref8 : closest.textContent) === null || _ref7 === void 0 ? void 0 : _ref7.trim().toLowerCase();
  }
  if (!linkName) {
    linkName = document.querySelector('title') && document.querySelector('title').innerText ? document.querySelector('title').innerText.toLowerCase() : 'na';
  }
  if (!context) {
    context = getCtaContext(closest);
  }
  var customLinkRegion = xLinkRegion + ' ' + ctaPosition;
  var updatedCtaPosition = ctaPosition;
  if (mktCountryCode === 'sg') {
    updatedCtaPosition = customLinkRegion;
  }
  if (typeof eddlEnabled === 'undefined') {
    //This code is added for the HK market because full EDDL is not implemented in HK market
    digitalData.ctaName = customLinkText;
    digitalData.ctaPosition = ctaPosition;
    if (typeof _satellite !== 'undefined' && typeof _satellite.track === 'function') {
      _satellite.track('callToAction');
    }
    return;
  }
  var titleSelector = document.querySelector('title');
  var ctaName = titleSelector && titleSelector.innerText ? titleSelector.innerText.toLowerCase() : 'na';
  var dataObject;
  if (mktCountryCode === 'sg') {
    dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      customLinkClick: {
        customLinkText: typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName,
        customLinkPosition: customLinkRegion,
        customLinkType: ctaType
      },
      event: 'ctaClick',
      href: window.location.href,
      context: context
    });
  } else if (mktCountryCode === 'hk') {
    dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      event: 'ctaClick',
      title: customLinkText,
      href: window.location.href,
      context: context
    });
    dataObject.ctaName = typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName;
    dataObject.ctaPosition = customLinkRegion;
    dataObject.ctaType = ctaType;
  } else {
    dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      customLinkClick: {
        customLinkText: typeof nitroEnabled !== 'undefined' ? context : customLinkText,
        customLinkRegion: customLinkRegion,
        customLinkType: ctaType,
        customLinkName: linkName
      },
      event: 'ctaClick',
      title: customLinkText,
      href: window.location.href,
      context: context
    });
    dataObject.ctaName = typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName;
    dataObject.ctaPosition = updatedCtaPosition;
    dataObject.ctaType = ctaType;
  }
  scAnalyticsDataArray.push(dataObject);
};

/**
 * Calculate range values based on original PI value.
 */
exports.handleAnalyticsCTA = handleAnalyticsCTA;
var calculateRanges = function calculateRanges(fieldNameValue, currentValue) {
  var newRanges = {
    monthlyIncome: [{
      start: 0,
      end: 10000
    }, {
      start: 10000,
      end: 20000
    }, {
      start: 20000,
      end: 30000
    }, {
      start: 30000,
      end: 40000
    }, {
      start: 40000,
      end: 50000
    }, {
      start: 50000,
      end: 60000
    }, {
      start: 60000,
      end: 70000
    }, {
      start: 70000,
      end: 80000
    }, {
      start: 80000,
      end: 90000
    }, {
      start: 90000,
      end: 100000
    }, {
      start: 100000,
      end: 110000
    }, {
      start: 110000,
      end: 120000
    }, {
      start: 120000
    }],
    loanAmount: [{
      start: 0,
      end: 100000
    }, {
      start: 100000,
      end: 200000
    }, {
      start: 200000,
      end: 300000
    }, {
      start: 300000,
      end: 400000
    }, {
      start: 400000,
      end: 500000
    }, {
      start: 500000,
      end: 600000
    }, {
      start: 600000,
      end: 700000
    }, {
      start: 700000,
      end: 800000
    }, {
      start: 800000,
      end: 900000
    }, {
      start: 900000,
      end: 1000000
    }, {
      start: 1000000
    }],
    repaymentAmount: [{
      start: 0,
      end: 20000
    }, {
      start: 20000,
      end: 50000
    }, {
      start: 50000,
      end: 100000
    }, {
      start: 100000,
      end: 150000
    }, {
      start: 150000,
      end: 200000
    }, {
      start: 200000,
      end: 250000
    }, {
      start: 250000,
      end: 300000
    }, {
      start: 300000,
      end: 350000
    }, {
      start: 350000
    }],
    dailyBalance: [{
      start: 0,
      end: 2000
    }, {
      start: 2000,
      end: 5000
    }, {
      start: 5000,
      end: 10000
    }, {
      start: 10000,
      end: 15000
    }, {
      start: 15000,
      end: 20000
    }, {
      start: 20000,
      end: 25000
    }, {
      start: 25000,
      end: 30000
    }, {
      start: 30000,
      end: 35000
    }, {
      start: 35000,
      end: 50000
    }, {
      start: 50000,
      end: 100000
    }, {
      start: 100000,
      end: 200000
    }, {
      start: 200000,
      end: 300000
    }, {
      start: 3000000,
      end: 500000
    }, {
      start: 500000,
      end: 750000
    }, {
      start: 750000,
      end: 1000000
    }, {
      start: 1000000
    }],
    apr: [{
      start: 0,
      end: 2
    }, {
      start: 2,
      end: 5
    }, {
      start: 5,
      end: 7
    }, {
      start: 7,
      end: 10
    }, {
      start: 10,
      end: 15
    }, {
      start: 15,
      end: 20
    }, {
      start: 20,
      end: 25
    }, {
      start: 25
    }],
    annualIncome: [{
      start: 0,
      end: 120000
    }, {
      start: 120000,
      end: 240000
    }, {
      start: 240000,
      end: 360000
    }, {
      start: 360000,
      end: 480000
    }, {
      start: 480000,
      end: 600000
    }, {
      start: 600000,
      end: 720000
    }, {
      start: 720000,
      end: 840000
    }, {
      start: 840000,
      end: 960000
    }, {
      start: 960000,
      end: 1080000
    }, {
      start: 1080000,
      end: 1200000
    }, {
      start: 1200000,
      end: 1320000
    }, {
      start: 1320000,
      end: 1440000
    }, {
      start: 1440000
    }],
    age: [{
      start: 0,
      end: 18
    }, {
      start: 18,
      end: 25
    }, {
      start: 25,
      end: 35
    }, {
      start: 35,
      end: 45
    }, {
      start: 45,
      end: 55
    }, {
      start: 55,
      end: 65
    }, {
      start: 65,
      end: 75
    }, {
      start: 75
    }],
    transactionAmount: [{
      start: 0,
      end: 100000
    }, {
      start: 100000,
      end: 200000
    }, {
      start: 200000,
      end: 300000
    }, {
      start: 300000,
      end: 400000
    }, {
      start: 400000,
      end: 500000
    }, {
      start: 500000,
      end: 600000
    }, {
      start: 600000,
      end: 700000
    }, {
      start: 700000,
      end: 800000
    }, {
      start: 800000,
      end: 900000
    }, {
      start: 900000,
      end: 1000000
    }, {
      start: 1000000,
      end: 1500000
    }, {
      start: 1500000,
      end: 2000000
    }, {
      start: 2000000,
      end: 3000000
    }, {
      start: 3000000
    }],
    totalSpend: [{
      start: 0,
      end: 1000
    }, {
      start: 1000,
      end: 2000
    }, {
      start: 2000,
      end: 3000
    }, {
      start: 3000,
      end: 4000
    }, {
      start: 4000,
      end: 5000
    }, {
      start: 5000,
      end: 6000
    }, {
      start: 6000,
      end: 7000
    }, {
      start: 7000,
      end: 8000
    }, {
      start: 8000,
      end: 9000
    }, {
      start: 9000,
      end: 10000
    }, {
      start: 10000
    }]
  };
  var calculatedRange = currentValue;
  if (!calculatedRange) {
    calculatedRange = 'na';
  } else {
    var val = parseInt(calculatedRange.toString().replace(/,/g, ''), 10);
    for (var i = 0; i < newRanges[fieldNameValue].length; i++) {
      var startVal = newRanges[fieldNameValue][i].start;
      var endVal = newRanges[fieldNameValue][i].end;
      if (val >= startVal && (endVal ? val < endVal : true)) {
        if (fieldNameValue === 'monthlyIncome') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge120k';
          break;
        } else if (fieldNameValue === 'loanAmount') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (endVal == 1000000 ? '1m' : (Math.abs(endVal) / 1000).toFixed() + 'k') : 'ge1m';
          break;
        } else if (fieldNameValue === 'transactionAmount') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (startVal >= 1000000 ? Math.abs(startVal) / 1000000 + 'm-lt' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt') + (endVal >= 1000000 ? Math.abs(endVal) / 1000000 + 'm' : (Math.abs(endVal) / 1000).toFixed() + 'k') : 'ge3m';
          break;
        } else if (fieldNameValue === 'annualIncome') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (startVal >= 1000000 ? Math.abs(startVal) / 1000000 + 'm-lt' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt') + (endVal >= 1000000 ? Math.abs(endVal) / 1000000 + 'm' : (Math.abs(endVal) / 1000).toFixed() + 'k') : 'ge1.44m';
          break;
        } else if (fieldNameValue === 'repaymentAmount') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge350k';
          break;
        } else if (fieldNameValue === 'dailyBalance') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge1m';
          break;
        } else if (fieldNameValue === 'apr') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + endVal : startVal + '%-lt' + endVal + '%' : 'ge25%';
          break;
        } else if (fieldNameValue === 'age') {
          calculatedRange = endVal ? startVal + '-lt' + endVal : 'ge75';
          break;
        } else if (fieldNameValue === 'totalSpend') {
          calculatedRange = endVal ? startVal == 0 ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : (Math.abs(startVal) / 1000).toFixed() + 'k-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k' : 'ge10k';
          break;
        }
      }
    }
  }
  return calculatedRange;
};

/**
 * Track customer interaction with calculators.
 */
exports.calculateRanges = calculateRanges;
var handleCalculatorAnalytics = function handleCalculatorAnalytics(calculatorName, fields) {
  if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
    //Adobe Analytics not enable for this market
    return;
  }
  var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
    calculator: {
      name: calculatorName,
      fields: fields
    },
    user: {
      userInfo: {
        userStatus: 'guest',
        userType: 'NTB'
      }
    },
    event: 'calculatorSubmit',
    title: document.title,
    href: window.location.href
  });
  scAnalyticsDataArray.push(dataObject);
};

/**
 * delay 1 second when once moved the slider bar and trigger events
 * @example
 * debounceEvents()
 */
exports.handleCalculatorAnalytics = handleCalculatorAnalytics;
var debounceEvents = function debounceEvents(f, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = window.setTimeout(function () {
      f.apply(context, args);
    }, delay || 500);
  };
};

/**
 * Check if a given URL is a form URL.
 *
 * @param string url The URL.
 *
 * @return bool True if it's form URL, false otherwise.
 */
exports.debounceEvents = debounceEvents;
var isForm = function isForm(url) {
  if (window.scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'] != '' && window.scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'] != undefined) {
    var formRegex = new RegExp(window.scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'], 'gi');
    return formRegex.test(url);
  }
  return false;
};

/**
 * Check if tracking parameters should be carried forward to the given URL.
 *
 * @param string url The URL.
 *
 * @return bool True if parameters should be carried forward. False otherwise.
 */
exports.isForm = isForm;
var shouldCarryTrackingParams = function shouldCarryTrackingParams(url) {
  if (isForm(url)) {
    return true;
  }
  var paramList = ['https://www.royalsundaram.in', 'https://www.maxbupa.com', 'https://www.bharti-axagi.co.in', 'https://www.iciciprulife.com', 'https://www.einsure.allianz.com.sg', 'https://www.allianz-travel-insure.com.sg', 'https://www.lin.ee', 'https://www.piapp.com', 'https://go.fpg.sg', 'https://fairprice.com.sg', 'scmobile://communication-hub'];
  var partnerRegex = [];
  if (paramList && paramList.length > 0) {
    for (var j = 0; j < paramList.length; j++) {
      partnerRegex[j] = new RegExp(paramList[j], 'gi');
    }
  }
  for (var i = 0; i < partnerRegex.length; i++) {
    if (partnerRegex[i].test(url)) {
      return true;
    }
  }
  return false;
};

/**
 * Apply cookie param to given url
 * @param URL of the current page
 * @param target URL
 * @param targetUrlParamsToTakePrecedence Based on this value target url params will be updated.
 */
exports.shouldCarryTrackingParams = shouldCarryTrackingParams;
var applyCookieParams = function applyCookieParams($url) {
  var $swapping_attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var targetUrlParamsToTakePrecedence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var queryString = '';
  var queryParts = [];
  var pageQueryString = '';
  var urlQueryString = '';
  var pageUrl = getPageUrl();
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  var allowableQueryStringOthers = window.scCommonConstants.ALLOWABLE_QUERYSTRING.others;
  var swap_map = {};
  if ($swapping_attrs !== '') {
    var $swappingList = $swapping_attrs.split('|');
    $swappingList.forEach(function (attr) {
      attr = attr.split('=');
      swap_map[attr[0]] = attr[1];
    });
  }
  if (pageUrl.queryString) {
    pageQueryString = pageUrl.queryString;
    if (pageQueryString.indexOf('&') !== -1) {
      queryParts = pageQueryString.split('&');
    } else {
      queryParts.push(pageQueryString);
    }
  }

  // Get query parameters from target URL
  var urlParts = [];
  var urlBreakdownData = urlBreakdown($url);
  if (urlBreakdownData.queryString) {
    urlQueryString = urlBreakdownData.queryString;
    if (urlQueryString.indexOf('&') !== -1) {
      urlParts = urlQueryString.split('&');
    } else {
      urlParts.push(urlQueryString);
    }
  }

  // Get query parameters from Cookie
  var cookieParts = [];
  if (allowableQueryString.length > 0) {
    for (var i = 0; i < allowableQueryString.length; i++) {
      var query = getLocalStorageWithExpiry(allowableQueryString[i]);
      if (query !== null) {
        var allowableQueryStringKey = swap_map[allowableQueryString[i]] ? swap_map[allowableQueryString[i]] : allowableQueryString[i];
        cookieParts.push(allowableQueryStringKey + '=' + encodeURI(query));
      }
    }
  }
  var qsArr = [];
  // User parameter from Page URL
  for (var j = 0; j < queryParts.length; j++) {
    if (queryParts[j] !== '') {
      var ur = queryParts[j].split('=');

      // Allow only whitelisted params from pageUrl.
      if (!allowableQueryStringOthers.includes(ur[0])) {
        continue;
      }

      // If targetUrlParamsToTakePrecedence is true and urlQueryString has the same parameter, then skip from updating the value.
      if (targetUrlParamsToTakePrecedence && urlQueryString.indexOf(ur[0] + '=') !== -1) {
        continue;
      }
      if (qsArr.indexOf(ur[0].toLowerCase()) === -1) {
        if (queryString !== '') {
          queryString += '&';
        }
        var uu = getUrlParamName(ur[0]);
        queryString += uu + '=' + ur[1];
        qsArr.push(ur[0].toLowerCase());
      }
    }
  }

  // User parameter from Cookie only if that parameter does not exist in URL
  for (var l = 0; l < cookieParts.length; l++) {
    if (cookieParts[l] !== '') {
      var co = cookieParts[l].split('=');

      // If targetUrlParamsToTakePrecedence is true and urlQueryString has the same parameter, then skip from updating the value.
      if (targetUrlParamsToTakePrecedence && urlQueryString.indexOf(co[0] + '=') !== -1) {
        continue;
      }
      if (qsArr.indexOf(co[0].toLowerCase()) === -1) {
        if (queryString !== '') {
          queryString += '&';
        }
        var cc = getUrlParamName(co[0]);
        queryString += cc + '=' + co[1];
        qsArr.push(co[0].toLowerCase());
      }
    }
  }

  // Use parameter from target url only if it does not exist in page URL and cookie
  for (var k = 0; k < urlParts.length; k++) {
    if (urlParts[k] !== '') {
      var qs = urlParts[k].split('=');
      if (qsArr.indexOf(qs[0].toLowerCase()) === -1) {
        if (queryString !== '') {
          queryString += '&';
        }
        var qq = getUrlParamName(qs[0]);
        queryString += qq + '=' + qs[1];
      }
    }
  }
  var breakdown = parseUrl($url);
  var queryStringArray = queryString.split('&');
  if (queryString !== '' && queryStringArray.length > 0) {
    queryStringArray.forEach(function (value) {
      breakdown.rawpath = breakdown.rawpath.replace('&' + value, '');
    });
  }
  if (breakdown.protocal === 'mailto:') {
    return "".concat(breakdown.protocal).concat(breakdown.hostname).concat(breakdown.pathname, "?").concat(queryString).concat(breakdown.hash);
  } else {
    if ($swapping_attrs !== '' && $swapping_attrs.indexOf(',') !== -1) {
      queryString = bundleParam(queryString, $swapping_attrs);
    }
    if (breakdown.hash.indexOf('?') !== -1) {
      return "".concat(breakdown.protocal, "//").concat(breakdown.hostname).concat(breakdown.rawpath, "?").concat(queryString).concat(breakdown.hash);
    }
    return "".concat(breakdown.protocal, "//").concat(breakdown.hostname).concat(breakdown.pathname, "?").concat(queryString).concat(breakdown.hash);
  }
};
exports.applyCookieParams = applyCookieParams;
var getUrlParamName = function getUrlParamName(paramName) {
  var index = -1;
  for (var i = 0; i < window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb.length; i++) {
    if (paramName.toLowerCase() === window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb[i].toLowerCase()) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    return window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb[index];
  }
  return paramName;
};

/**
 * bundleParam method used for Params Bundling.
 * If bundle parameters are available then it's replaced by value which are present in the queryString and append it inside the current CTA
 * @param queryString generated new queryString based on data-pass-params & data-cta-url-params-precedence
 * @param $swapping_attrs attributes of swap-attrs
 * bundleParam('#/onboarding?country=SG&products=162,338&campaign=6203,CA001', 'subChanCode,referId=aggregator')
 */
exports.getUrlParamName = getUrlParamName;
var bundleParam = function bundleParam(queryString, $swapping_attrs) {
  var swap_map = {};
  var urlQueryString = window.location.search;
  if (!urlQueryString) return queryString;
  urlQueryString = urlQueryString.substr(1);
  if (!urlQueryString) return queryString;
  urlQueryString = urlQueryString.split('&');
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  $swapping_attrs = $swapping_attrs.split('=');
  swap_map = $swapping_attrs[0].split(',');
  var swap_str = '';
  for (var i = 0; i < swap_map.length; i++) {
    if (allowableQueryString.includes(swap_map[i])) {
      for (var j = 0; j < urlQueryString.length; j++) {
        var list = urlQueryString[j].split('=');
        if (list[0] === swap_map[i]) {
          swap_str += swap_str ? ',' : '';
          swap_str += list[1];
        }
      }
    }
  }
  if (!swap_str) return queryString;
  if (queryString.indexOf($swapping_attrs[1]) === -1) {
    queryString += '&' + $swapping_attrs[1] + "=".concat(swap_str);
  } else {
    var strList = queryString.split('&');
    queryString = '';
    for (var _i2 = 0; _i2 < strList.length; _i2++) {
      var _list = strList[_i2].split('=');
      queryString += queryString ? '&' : '';
      if (_list[0] === $swapping_attrs[1]) {
        queryString += $swapping_attrs[1] + "=".concat(swap_str);
      } else {
        queryString += _list[0] + '=' + _list[1];
      }
    }
  }
  return queryString;
};
exports.bundleParam = bundleParam;
var isEmpty = function isEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (_typeof(obj) !== 'object') return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
};
exports.isEmpty = isEmpty;
var convertQueryStringToJsonObject = function convertQueryStringToJsonObject(queryString) {
  var queries = queryString.split('&');
  var json = {};
  for (var i = 0; i < queries.length; i++) {
    var keyValue = queries[i].split('=');
    if (keyValue.length === 2) {
      json[keyValue[0].toLowerCase()] = keyValue[1];
    }
  }
  return json;
};

/**
 * Method to set localStorage with expiry date.
 * @param {string} key LocalStorage key
 * @param {string} value LocalStorage value
 * @param {number} ttl Expiry date
 */
exports.convertQueryStringToJsonObject = convertQueryStringToJsonObject;
var setLocalStorageWithExpiry = function setLocalStorageWithExpiry(key, value, ttl) {
  var now = new Date();

  // `item` is an object which contains the original value.
  // as well as the time when it's supposed to expire
  var item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * This clunky regex is taken directly from http://detectmobilebrowsers.com/
 */
exports.setLocalStorageWithExpiry = setLocalStorageWithExpiry;
var isMobile = function isMobile() {
  var stringCheck = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(stringCheck) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(stringCheck.substr(0, 4));
};

/**
 * added comma after each three digits like 1,000,000
 * @example
 * @param {numbers} 10000
 *convertNumbers(10000)
 */
exports.isMobile = isMobile;
var convertNumbers = function convertNumbers(selector, numbers) {
  if (numbers === '' || !numbers) return 0;
  var returnVal = numbers.toString();
  var tmp = [];
  var fraction = 0;
  if (Number(selector.getAttribute('data-comma-format')) === 2) {
    if (returnVal.indexOf('.') !== -1) {
      var splitValue = returnVal.split('.');
      tmp = splitValue[0].split('').reverse(); //4321
      fraction = parseInt(splitValue[1], 10);
    } else {
      tmp = returnVal.split('').reverse(); //4321
    }

    var strNew = '';
    if (tmp.length > 3) {
      //true
      var lastThree = tmp.splice(0, 3);
      for (var i = 0; i < tmp.length; i++) {
        if (i > 0 && i % 2 == 0) {
          strNew += ',';
        }
        strNew += tmp[i].toString();
      }
      strNew = lastThree.join('') + ',' + strNew;
      strNew = strNew.split('').reverse().join('');
    }
    if (strNew) {
      if (fraction) {
        strNew = '' + strNew + ".".concat(fraction);
      }
      if (strNew.slice(0, 2) == '-,') {
        strNew = strNew.replace(/-,/gi, '-');
      }
      return strNew;
    } else {
      return returnVal;
    }
  } else {
    if (returnVal.indexOf('.') !== -1) {
      var _splitValue = returnVal.split('.');
      tmp = _splitValue[0].split('').reverse(); //4321
      fraction = _splitValue[1];
    } else {
      tmp = returnVal.split('').reverse(); //4321
    }

    var _strNew = '';
    if (tmp.length > 3) {
      //true if it's more than or equal thousands
      for (var _i3 = 0; _i3 < tmp.length; _i3++) {
        if (_i3 > 0 && _i3 % 3 == 0) {
          _strNew += ',';
        }
        _strNew += tmp[_i3].toString();
      }
      _strNew = _strNew.split('').reverse().join('');
    }
    if (_strNew) {
      if (fraction) {
        _strNew = '' + _strNew + ".".concat(fraction);
      }
      return _strNew;
    } else {
      return returnVal;
    }
  }
};
exports.convertNumbers = convertNumbers;
var handleProductCalculatorSubmit = function handleProductCalculatorSubmit(calculatorName, fields) {
  if (typeof digitalData === 'undefined') {
    return; // Exit the function early if digitalData is not defined
  }

  digitalData.calculator = {
    name: calculatorName,
    fields: fields
  };
  if (typeof _satellite !== 'undefined' && typeof _satellite.track === 'function') {
    _satellite.track('calculatorSubmit');
  }

  //update adobeDataLayer with calculator submit event
  if (typeof window.adobeDataLayer !== 'undefined') {
    var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      event: 'calculatorSubmit'
    });

    //change calculator payload key names for adobeDataLayer object
    var newFields = [];
    var obj = {};
    fields.forEach(function (el) {
      obj = _objectSpread({}, el);
      obj.formFieldName = obj.fieldName;
      delete obj.fieldName;
      obj.formFieldValue = obj.fieldValue;
      delete obj.fieldValue;
      newFields.push(obj);
    });
    var calculator = {
      name: calculatorName,
      fields: newFields
    };
    delete dataObject.calculator;
    dataObject.calculator = calculator;
    window.adobeDataLayer.push(dataObject);
  }
};

/**
 * initialized or update slider based on the sliderInit value
 */
exports.handleProductCalculatorSubmit = handleProductCalculatorSubmit;
var initializeSlider = function initializeSlider(mainSelector, parentSelector) {
  var docElement = document.documentElement;
  var direction = docElement.getAttribute('dir') ? docElement.getAttribute('dir') : null;
  var allSlider = mainSelector.querySelectorAll('.sc-range-slider');
  if (allSlider.length) {
    //Initialize slider
    allSlider.forEach(function (slider) {
      noUiSlider.create(slider, {
        start: Number(slider.getAttribute('data-default')),
        step: Number(slider.getAttribute('data-step')),
        behaviour: 'snap',
        connect: 'lower',
        range: {
          min: Number(slider.getAttribute('data-min')),
          max: Number(slider.getAttribute('data-max')) > 0 ? Number(slider.getAttribute('data-max')) : 10000000
        },
        direction: direction
      });
      var inputField = slider.closest(parentSelector).querySelector('input[class$="-value"]');
      if (inputField) {
        //Slider related with text field
        inputField.value = convertNumbers(mainSelector, slider.getAttribute('data-default'));
      } else {
        var dropdownField = slider.closest(parentSelector).querySelector('select[class$="-value"]');
        if (dropdownField) {
          //Slider related with dropdown field
          dropdownField.value = slider.getAttribute('data-default');
        }
      }
    });
    allSlider.forEach(function (el) {
      el.setAttribute('aria-label', 'Drage here to move slider');
    });
  }
};

/**
 * this method will be call when any key pressed in estimate daily field, pass value to calculateInterest method and return start status
 *
 * @param {Number} start get estimate daily balance number of click      *
 * @example
 * activeInputVal(1, 1200)
 */
exports.initializeSlider = initializeSlider;
var validateInput = function validateInput(selector, sliderClass, errorSelector) {
  var selectedClass = selector.querySelector(".".concat(sliderClass)),
    inputField = selector.querySelector(".".concat(sliderClass, "-value")),
    sliderExist = true,
    minValue,
    maxValue;
  if (inputField) {
    //slider input fields
    minValue = Number(selectedClass.getAttribute('data-min'));
    maxValue = Number(selectedClass.getAttribute('data-max'));
  } else {
    //non slider input fields
    minValue = Number(selectedClass.getAttribute('data-min'));
    maxValue = Number(selectedClass.getAttribute('data-max'));
    inputField = selectedClass;
    sliderExist = false;
  }
  var initValue = inputField.value,
    value = 0;
  errorSelector.classList.add('hide');
  if (!selectedClass.getAttribute('data-decimal')) {
    value = initValue.replace(/[^0-9]+/gi, '').replace(/^0/, ''); //remove all string except 0-9
    if (value != initValue) {
      inputField.value = value;
    }
    if (value) {
      value = parseInt(value, 10);
    }
  } else {
    //if text field supports fraction value
    value = initValue.replace(/[^0-9.]/gi, '').replace(/^0/, '');
    if (value != initValue) {
      inputField.value = value;
    }
    if (!value) {
      value = '';
    } else {
      var raVal = value.split('.');
      if (value === '.') {
        errorSelector.classList.remove('hide');
        return;
      } else if (raVal.length > 2) {
        //more than two floating point
        value = "".concat(raVal[0], ".").concat(raVal[1]);
        inputField.value = value;
        return;
      } else if (raVal[1] && raVal[1].length > 2) {
        value = "".concat(raVal[0], ".") + raVal[1].substr(0, 2);
        inputField.value = value;
        return;
      }
      if (value.slice(-1) === '.') {
        return;
      } else if (raVal[1] && raVal[1].length === 1) {
        value = parseFloat(value).toFixed(1);
      } else {
        value = Number(value);
      }
    }
  }
  if (value > maxValue) {
    //checking text field maximum value
    value = maxValue;
    if (sliderExist) selectedClass.noUiSlider.set([value]); //Push value in NoUiSlider
  } else if (value === '' && minValue > 0) {
    //leave text field as blank and fill it with 0
    value = '';
    errorSelector.classList.remove('hide');
  } else if (value < minValue) {
    errorSelector.classList.remove('hide');
  }
  if (sliderExist) {
    if (value !== '' && value >= minValue) {
      selectedClass.noUiSlider.set([value]); //Push value in NoUiSlider
    } else {
      selectedClass.noUiSlider.set([0]);
    }
  }
  inputField.value = value;
};

/**
 * calculate monthly repayment amount
 * @param {Number} interestRate - interest rate in Int
 * @param {Number} tenor - tenor in number months Int
 * @param {Number} loanAmount - loan amount in Int
 * @param {Number} advancedPayments - advanced payment amount in Int
 * @return {Number} return calculated PMT value
 * Example:
 * calculatePMT(16, 12, 1500000, 0)
 **/
exports.validateInput = validateInput;
var calculatePMT = function calculatePMT(interestRate, tenor, loanAmount) {
  var advancedPayments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var monthlyRate = interestRate / 1200;
  var t1 = 1 + monthlyRate;
  var t3 = Math.pow(t1, tenor - advancedPayments);
  return loanAmount * monthlyRate / (1 - 1 / t3);
};

/**
 * check error status of the slider input fields
 */
exports.calculatePMT = calculatePMT;
var sliderErrorStatus = function sliderErrorStatus(selector, fieldName) {
  var errorStatus = false;
  var allFields = selector.querySelectorAll(fieldName);
  if (allFields.length) {
    for (var i = 0; i < allFields.length; i++) {
      var value = Number(allFields[i].value.replace(/[^0-9.]/gi, ''));
      var className = allFields[i].className.split(' ');
      className = className[className.length - 1].slice(0, -6);
      var slider = selector.querySelector(".".concat(className)),
        minValue = Number(slider.getAttribute('data-min'));
      if (isNaN(value) || value < minValue) {
        errorStatus = errorStatus || true;
      }
    }
  }
  return errorStatus;
};

/**
 * add to digit after floating point
 */
exports.sliderErrorStatus = sliderErrorStatus;
var formatNumbersWithTwoDecimalPlaces = function formatNumbersWithTwoDecimalPlaces(inputString) {
  // Use a regular expression to find numbers (both integer and decimal)
  var regex = /(\d+(\.\d*)?)/g;

  // Replace each matched number with the number formatted to two decimal places
  var filteredResult = inputString.replace(regex, function (match) {
    var number = parseFloat(match);
    if (!isNaN(number)) {
      return number.toFixed(2);
    }
    return match; // If not a valid number, return the original match
  });

  var parts = filteredResult.split('.');
  var result = parseFloat(parts[0] + '.' + parts.slice(1).join('')).toFixed(2);
  return isNaN(result) ? '0.00' : result;
};

/**
 * VLOOKUP is a function in Microsoft Excel (and similar spreadsheet software) that stands for "Vertical Lookup." It is commonly used to search for a value in the first column of a table and return a value in the same row from another column.
 * @param {Number} lookupValue - Replace M14 with the actual value you want to look up
 * @param {Object} tableArray - Add more rows as needed
 * @param {Number} colIndex - Assuming you want to retrieve the value from the second column
 * Example:
 * vLookup(16, [[0, 100], [50, 85], [75, 75]], 2)
 **/
exports.formatNumbersWithTwoDecimalPlaces = formatNumbersWithTwoDecimalPlaces;
var vLookup = function vLookup(lookupValue, tableArray, colIndex) {
  for (var i = 0; i < tableArray.length; i++) {
    var row = tableArray[i];
    var compareValue = row[0]; // Assuming the lookup column is the first column in the tableArray

    if (compareValue <= lookupValue && (i === tableArray.length - 1 || tableArray[i + 1][0] > lookupValue)) {
      return row[colIndex - 1]; // Adjusting for 1-based indexing in Excel
    }
  }

  return undefined; // Return undefined if no match is found
};

/**
 * validate all slider field input
 */
exports.vLookup = vLookup;
var sliderFieldErrorStatus = function sliderFieldErrorStatus(selector, parentClass, errorClass) {
  var closest = selector.closest(parentClass),
    minValue = Number(closest.querySelector('.sc-range-slider').getAttribute('data-min')),
    errorSelector = closest.querySelector(errorClass),
    value = Number(selector.value.replace(/[^0-9]+/gi, ''));
  if (value >= minValue) {
    errorSelector.classList.add('hide');
    return true;
  }
  errorSelector.classList.remove('hide');
  return false;
};

/**
 * check step field error status
 */
exports.sliderFieldErrorStatus = sliderFieldErrorStatus;
var stepFieldErrorStatus = function stepFieldErrorStatus(selector, parentClass, errorClass) {
  var minValue = Number(selector.getAttribute('data-min')),
    errorSelector = selector.closest(parentClass).querySelector(errorClass),
    value = Number(selector.value.replace(/[^0-9]+/gi, ''));
  if (value >= minValue) {
    errorSelector.classList.add('hide');
    return true;
  }
  errorSelector.classList.remove('hide');
  return false;
};

/**
 * The FV function is a financial function that returns the future value of an investment
 * @param {*} rate step up rate
 * @param {*} nper time period
 * @param {*} pmt Since Excel formula has an empty field, we assume it's 0
 * @param {*} pv initial investment amount
 * @param {*} type The Excel formula specifies type as 0
 * @returns
 */
exports.stepFieldErrorStatus = stepFieldErrorStatus;
var calculateFutureValue = function calculateFutureValue(rate, nper, pmt, pv, type) {
  // Calculate the future value
  var roundedNper = Math.round(nper);
  var factor = Math.pow(1 + rate, roundedNper);
  var futureValue = pv * factor + pmt * (1 - factor) / rate;
  if (type === 0) {
    return futureValue;
  } else {
    // If type is not 0, adjust the result
    return futureValue * (1 + rate);
  }
};

/**
 * based on the input month, it's calculate number of year and month
 */
exports.calculateFutureValue = calculateFutureValue;
var convertMonthsToYearsAndMonths = function convertMonthsToYearsAndMonths(months) {
  var years = Math.floor(months / 12);
  var remainingMonths = months % 12;
  return {
    years: years,
    months: remainingMonths
  };
};

/**
 * calculate monthly repayment amount and it's for =PMT(D4/12,D6,0,-D3,0) formula
 * @param {Number} rate: interest rate for each period
 * @param {Number} nper: number of periods
 * @param {Number} pv: present value or principal amount
 * @param {Number} fv: future value or a cash balance after the last payment
 * @return {Number} type: 0 for payments at the end of the period, 1 for payments at the beginning
 * Example:
 * calculatePMT(10/12/100, 10, 0, -1200000, 0)
 **/
exports.convertMonthsToYearsAndMonths = convertMonthsToYearsAndMonths;
var extendedPMT = function extendedPMT(rate, nper, pv, fv, type) {
  if (rate === 0) {
    return -(pv + fv) / nper;
  }
  var pvif = Math.pow(1 + rate, nper);
  var pmt = rate * (fv + pvif * pv) / (pvif - 1);
  if (type === 1) {
    pmt /= 1 + rate;
  }
  return -pmt;
};

/**
 * The calculateNPER function is a financial function that returns the number of periods for loan or investment
 * rate - The interest rate per period.
 * payment - The payment made each period.
 * present - The present value, or total value of all payments now.
 * future - [optional] The future value, or a cash balance you want after the last payment is made. Defaults to 0.
 * type - [optional] When payments are due. 0 = end of period. 1 = beginning of period. Default is 0.
 */
exports.extendedPMT = extendedPMT;
var calculateNPER = function calculateNPER(rate, payment, present, future, type) {
  // Initialize type
  type = typeof type === 'undefined' ? 0 : type;

  // Initialize future value
  future = typeof future === 'undefined' ? 0 : future;

  // Return number of periods
  var num = payment * (1 + rate * type) - future * rate;
  var den = present * rate + payment * (1 + rate * type);
  return Math.log(num / den) / Math.log(1 + rate);
};

/**
 * Calculates the number of years and months from a given number of months.
 *
 * @param {number} numberOfMonths - The total number of months.
 * @returns {String} String with the calculated number of years and months.
 */
exports.calculateNPER = calculateNPER;
var calculateYearMonth = function calculateYearMonth(numberOfMonths) {
  var months = numberOfMonths % 12;
  var years = Math.floor(numberOfMonths / 12);
  if (years > 1) {
    years = "".concat(years, " Year(s)");
  } else if (years === 1) {
    years = "".concat(years, " Year");
  } else {
    years = '';
  }
  if (months > 1) {
    months = " ".concat(months, " Month(s)");
  } else if (months === 1) {
    months = " ".concat(months, " Month");
  } else {
    months = '';
  }
  return "".concat(years).concat(months);
};

/**
 * Calculates the Effective Interest Rate (EIR) or Internal Rate of Return (IRR)
 * using Newton's method.
 *
 * @param {number} periods - Number of compounding periods.
 * @param {number} payment - Periodic payment.
 * @param {number} present - Present value or initial investment.
 * @param {number} future - Future value or final investment.
 * @param {number} type - 0 for ordinary annuity, 1 for annuity due.
 * @param {number} [guess=0.01] - Initial guess for the interest rate. Defaults to 0.01.
 * @returns {number} - Calculated Effective Interest Rate.
 */
exports.calculateYearMonth = calculateYearMonth;
var calculateEIR = function calculateEIR(periods, payment, present, future, type, guess) {
  guess = guess === undefined ? 0.01 : guess;
  future = future === undefined ? 0 : future;
  type = type === undefined ? 0 : type;

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;

  // Set maximum number of iterations
  var iterMax = 10;

  // Implement Newton's method
  var y,
    y0,
    y1,
    x0,
    x1 = 0,
    f = 0,
    i = 0;
  var rate = guess;
  if (Math.abs(rate) < epsMax) {
    y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
  } else {
    f = Math.exp(periods * Math.log(1 + rate));
    y = present * f + payment * (1 / rate + type) * (f - 1) + future;
  }
  y0 = present + payment * periods + future;
  y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
  i = x0 = 0;
  x1 = rate;
  while (Math.abs(y0 - y1) > epsMax && i < iterMax) {
    rate = (y1 * x0 - y0 * x1) / (y1 - y0);
    x0 = x1;
    x1 = rate;
    if (Math.abs(rate) < epsMax) {
      y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = y1;
    y1 = y;
    ++i;
  }
  return rate;
};

/**
 * Calculating the Internal Rate of Return (IRR)
 * * @param {*} cashFlows is an array like [-200000.00, 0, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67, 4666.67] where -200000.00 is the input load amount and 4666.67 is the Monthly Repayment Amount
 */
exports.calculateEIR = calculateEIR;
var calculateIRR = function calculateIRR(cashFlows) {
  var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.00001;
  var irr = 0.1; // Initial guess for IRR
  var cashflowValue = 0;
  for (var i = 0; i < iterations; i++) {
    cashflowValue = 0;
    for (var j = 0; j < cashFlows.length; j++) {
      cashflowValue += cashFlows[j] / Math.pow(1 + irr, j);
    }
    var derivative = calculateDerivative(cashFlows, irr);
    irr = irr - cashflowValue / derivative;
    if (Math.abs(cashflowValue) < tolerance) {
      return irr;
    }
  }

  // If the iteration does not converge, return null or handle accordingly
  return null;
};

/**
 * Calculates the derivative of the NPV with respect to the IRR. The iteration continues until the NPV is close enough to zero or the maximum number of iterations is reached.
 */
exports.calculateIRR = calculateIRR;
var calculateDerivative = function calculateDerivative(cashFlows, irr) {
  var derivative = 0;
  for (var i = 0; i < cashFlows.length; i++) {
    derivative -= i * cashFlows[i] / Math.pow(1 + irr, i + 1);
  }
  return derivative;
};

/**
 * Calculates the present value of an investment (PV Method).
 * @param {number} ratePerPeriod - The interest rate per period.
 * @param {number} numberOfPeriods - The total number of periods.
 * @param {number} payment - The payment amount per period.
 * @returns {number} The present value of the investment.
 */
exports.calculateDerivative = calculateDerivative;
var calculatePresentValue = function calculatePresentValue(rate, nper, pmt) {
  return pmt * ((1 - Math.pow(1 + rate, -nper)) / rate);
};

/**
 * Calculates the monthly payment on a loan.
 *
 * @param {number} rate - The monthly interest rate (annual rate divided by 12).
 * @param {number} nper - The total number of payments (years multiplied by 12).
 * @param {number} pv - The present value or loan amount (should be negative as it's an outflow).
 * @returns {number} The monthly payment.
 */
exports.calculatePresentValue = calculatePresentValue;
var pmt = function pmt(rate, nper, pv) {
  if (rate === 0) return -pv / nper;
  var pvif = Math.pow(1 + rate, nper);
  return rate * pv * pvif / (pvif - 1);
};

/**
 * get current elements height including margin top and bottom
 * @param {Object} el - The elements which height need to be calculated
 * getOuterHeight(document.querySelector('#onetrust-banner-sdk'))
 **/
exports.pmt = pmt;
var getOuterHeight = function getOuterHeight(el) {
  if (!el) return 0;
  var elHeight = el.offsetHeight;
  elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
  elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
  return elHeight;
};

/**
 * MatchHeight function to make divs the same height. Use this function only when CSS flexbox is not possible.
 * @param {String} selector - Container class, id, or element.
 */
exports.getOuterHeight = getOuterHeight;
var matchHeight = function matchHeight(selector) {
  var elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  // Get the tallest height by mapping all elements to their offsetHeight and finding the max value
  var tallest = Math.max.apply(Math, _toConsumableArray(_toConsumableArray(elements).map(function (el) {
    return el.offsetHeight;
  })));

  // Set each element's height to the tallest value
  elements.forEach(function (el) {
    el.style.height = "".concat(tallest, "px");
  });
};

/**
 * scroll target position with animation
 * @param {String} target scroll class
 * @param {Number} duration scroll time in ms
 * @param {Number} margin negative value form top
 * @example
 * scroll('body', 500, 90)
 */
exports.matchHeight = matchHeight;
var smoothScroll = function smoothScroll(target, duration) {
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target) return;
  var targetPosition = target.getBoundingClientRect().top - width;
  var startPosition = window.pageYOffset;
  var startTime = null;
  var animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
  var ease = function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
};

/**
 * this method will be call when any key pressed in estimate daily field, pass value to calculateInterest method and return start status
 *
 * @param {Number} start get estimate daily balance number of click      *
 * @example
 * activeInputVal(1, 1200)
 */
exports.smoothScroll = smoothScroll;
var validateInputNoSlider = function validateInputNoSlider(selector, errorSelector) {
  var hideClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var minValue = Number(selector.getAttribute('data-min'));
  var maxValue = Number(selector.getAttribute('data-max'));
  var decimalPlaces = Number(selector.getAttribute('data-decimal'));
  var initValue = selector.value,
    value = 0;
  hideClass ? errorSelector.classList.add('hide') : errorSelector.style.display = 'none';
  if (!decimalPlaces) {
    value = initValue.replace(/[^0-9]+/gi, '').replace(/^0/, ''); //remove all string except 0-9
    if (value != initValue) {
      selector.value = value;
    }
    if (value) {
      value = parseInt(value, 10);
    }
  } else {
    decimalPlaces = Number(decimalPlaces);
    //if text field supports fraction value
    value = initValue.replace(/[^0-9.]/gi, '').replace(/^0/, '');
    if (value != initValue) {
      selector.value = value;
    }
    if (!value) {
      value = '';
    } else {
      var raVal = value.split('.');
      if (value === '.') {
        hideClass ? errorSelector.classList.remove('hide') : errorSelector.style.display = 'block';
        return;
      } else if (raVal.length > decimalPlaces) {
        //more than two floating point
        value = "".concat(raVal[0], ".").concat(raVal[1]);
        selector.value = value;
        return;
      } else if (raVal[1] && raVal[1].length > decimalPlaces) {
        value = "".concat(raVal[0], ".") + raVal[1].substr(0, decimalPlaces);
        selector.value = value;
        return;
      }
      if (value.slice(-1) === '.') {
        return;
      } else if (raVal[1] && raVal[1].length === 1) {
        value = parseFloat(value).toFixed(1);
      } else {
        value = Number(value);
      }
    }
  }
  if (maxValue !== -1 && value > maxValue) {
    //checking text field maximum value
    value = maxValue;
  } else if (value === '' && minValue > 0) {
    //leave text field as blank and fill it with 0
    value = '';
    hideClass ? errorSelector.classList.remove('hide') : errorSelector.style.display = 'block';
  } else if (value < minValue) {
    hideClass ? errorSelector.classList.remove('hide') : errorSelector.style.display = 'block';
  }
  selector.value = value;
};
exports.validateInputNoSlider = validateInputNoSlider;
var getAssetDomain = function getAssetDomain() {
  /* eslint-disable no-undef*/
  if (typeof baseURL === 'undefined' || baseURL === '') {
    var env = getCurrentEnvironment();
    var domain = getPageUrl().domain;
    if (env === window.scCommonConstants.PRODUCTION) {
      return urlObj[11] + '://' + urlObj[5] + '.' + urlObj[3] + '.' + urlObj[4] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
    } else if (env === window.scCommonConstants.DEVELOPMENT) {
      if (domain === urlObj[3] + '.' + urlObj[14]) {
        return '/content/themes/scretail/assets/global/';
      } else if (domain === urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] || domain === urlObj[0] + '.' + urlObj[3] + '.' + urlObj[4]) {
        return urlObj[11] + '://' + urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] + '/' + urlObj[8] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
      } else {
        return '/assets/';
      }
    } else if (env === window.scCommonConstants.STAGING) {
      return urlObj[11] + '://' + urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] + '/' + urlObj[9] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
    } else {
      return urlObj[11] + '://' + urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] + '/' + urlObj[6] + '/' + urlObj[7] + '/';
    }
  } else if (baseURL === '/zoo') {
    return urlObj[11] + '://' + urlObj[10] + '.' + urlObj[3] + '.' + urlObj[4] + '/' + urlObj[15] + '/' + urlObj[6] + '/';
  } else {
    return baseURL;
  }
  /* eslint-enable no-undef*/
};

/**
 * trigger adobe popupViewed event when showing popups
 */
exports.getAssetDomain = getAssetDomain;
var triggerPopupViewedTagging = function triggerPopupViewedTagging(popupName) {
  if (typeof launchscript === 'undefined' && !document.querySelector('#adobelaunchscript')) {
    //Adobe Analytics not enable for this market
    return;
  }
  setTimeout(function () {
    var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
      form: {
        formName: '',
        formStepName: '',
        formType: '',
        formPlatform: ''
      }
    });
    dataObject.form.popupName = popupName;
    dataObject.event = 'popupViewed';
    scAnalyticsDataArray.push(dataObject);
  }, 500);
};
exports.triggerPopupViewedTagging = triggerPopupViewedTagging;
var getCampaignInfoV1 = function getCampaignInfoV1() {
  var pageName = window.digitalData.page.pageInfo.pageName.split(':');
  var allowableQueryString = window.scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  if (pageName[0] === 'pk' && pageName[3] === 'udp-form' || pageName[0] === 'in') {
    var campaignData = getIntExtCampaignInfo(pageName[0]);
    window.digitalData.campaign = {
      internal: {
        campaignName: campaignData['intName'],
        campaignValue: campaignData['intVal']
      },
      external: {
        campaignName: campaignData['extName'],
        campaignValue: campaignData['extVal']
      }
    };
  } else {
    var _campaignData = getCampaignInfo(allowableQueryString);
    window.digitalData.campaign = window.digitalData.campaign || {};
    window.digitalData.campaign = {
      internal: {
        campaignName: _campaignData[0],
        campaignValue: _campaignData[1]
      }
    };
  }
};

/**
 * Processes a campaign object and updates the `window.digitalData.campaign` object with the extracted query parameters and values.
 */
exports.getCampaignInfoV1 = getCampaignInfoV1;
var getCampaignInfoV2 = function getCampaignInfoV2(campaignObj) {
  Object.entries(campaignObj).forEach(function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
      key = _ref10[0],
      value = _ref10[1];
    if (key === 'internal' || key === 'external') {
      var paramValue = extractQueryParams(value);
      window.digitalData.campaign[key] = {
        campaignName: value[0],
        campaignValue: paramValue ? paramValue.split(':')[1] : 'na'
      };
    } else if (key === 'other') {
      var _paramValue = extractQueryParams(value, true);
      window.digitalData.campaign.otherParams = _paramValue ? _paramValue : '';
    } else if (value.length) {
      value.forEach(function (el) {
        var paramValue = extractQueryParams([el]);
        window.digitalData.campaign[el] = paramValue ? paramValue.split(':')[1] : '';
      });
    }
  });
};

/**
 * Extracts query parameters from the current URL based on inclusion or exclusion rules.
 */
exports.getCampaignInfoV2 = getCampaignInfoV2;
var extractQueryParams = function extractQueryParams() {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var excludeParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  var keyValuePairs = [];

  // eslint-disable-next-line no-unused-vars
  var _iterator = _createForOfIteratorHelper(params.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      var shouldInclude = excludeParams ? !queryParams.includes(key) // Exclude certain params
      : queryParams.length === 0 || queryParams.includes(key); // Include all or only specific params

      if (shouldInclude && value) {
        keyValuePairs.push("".concat(key, ":").concat(value));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return keyValuePairs.join('|');
};

/**
 * based on white list parameters return campaignName and campaignValue
 * @param {Object} allowableQueryString are whitelist parameters
 * @return {Object} return collections of campaignName and campaignValue
 * @example
 * getCampaignInfo(['subChanCode', 'camp_id', 'promoCode'])
 */
exports.extractQueryParams = extractQueryParams;
var getCampaignInfo = function getCampaignInfo(allowableQueryString) {
  if (!allowableQueryString.length) return '';
  var total = allowableQueryString.length;
  var campaignName = '';
  var campaignValue = '';
  for (var i = 0; i < total; i++) {
    var cookieValue = getCookie(allowableQueryString[i]);
    var localStorageValue = getLocalStorageWithExpiry(allowableQueryString[i]);
    if (cookieValue || localStorageValue) {
      if (campaignName) {
        campaignName += ':';
        campaignValue += ':';
      }
      campaignName += allowableQueryString[i];
      campaignValue += cookieValue || localStorageValue;
    }
  }
  if (!campaignName) campaignName = 'na';
  if (!campaignValue) campaignValue = 'na';
  return [campaignName, campaignValue];
};

/**
 * Extracts a context string from a DOM element by checking multiple attributes
 * and properties in a prioritized order: `data-context`, `title`, `innerText`,
 * `textContent`, and `aria-label`. Defaults to an empty string if no value is found.
 *
 * @param {Element} closest - The DOM element from which to extract the context.
 * @returns {string} The extracted context, trimmed of leading and trailing whitespace.
 */
exports.getCampaignInfo = getCampaignInfo;
var getCtaContext = function getCtaContext(closest) {
  var _ref11, _ref12, _ref13, _ref14, _closest$getAttribute2;
  var context = (_ref11 = (_ref12 = (_ref13 = (_ref14 = (_closest$getAttribute2 = closest.getAttribute('data-context')) !== null && _closest$getAttribute2 !== void 0 ? _closest$getAttribute2 : closest.getAttribute('title')) !== null && _ref14 !== void 0 ? _ref14 : closest.innerText) !== null && _ref13 !== void 0 ? _ref13 : closest.textContent) !== null && _ref12 !== void 0 ? _ref12 : closest.getAttribute('aria-label')) !== null && _ref11 !== void 0 ? _ref11 : '';
  return String(context).trim();
};

/**
 * getQueryParam method is created because "new URLSearchParams()"" not support in IOS
 * search specific param from the queryString, if found it return value, else return empty
 * @example
 * getQueryParam('subChanCode=2023&referId=xyz&pid=123', 'referId')
 */
exports.getCtaContext = getCtaContext;
var getQueryParam = function getQueryParam(queryString, paramName) {
  if (!queryString) return '';
  // Split the query string into an array of key-value pairs
  var queryParamsList = queryString.split('&');
  var paramValue = '';

  // eslint-disable-next-line no-unused-vars
  var _iterator2 = _createForOfIteratorHelper(queryParamsList),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var param = _step2.value;
      var _param$split = param.split('='),
        _param$split2 = _slicedToArray(_param$split, 2),
        key = _param$split2[0],
        value = _param$split2[1];
      if (key === paramName) {
        //it's case sensitive
        paramValue = value;
        break; // No need to continue once 'referId' is found
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return paramValue;
};

/**
 * Retrieves the heading text of the closest accordion element for a given element.
 *
 * @param {HTMLElement} element - The element for which to find the closest accordion heading.
 * @returns {string} The heading text of the closest accordion, followed by a colon if found; otherwise, an empty string.
 */
exports.getQueryParam = getQueryParam;
var getAccordionHeading = function getAccordionHeading(element) {
  var _accordionElement$que;
  if (!element) return '';
  var accordionElement = element.closest('.sc-accordion, .c-plus-minus-accordion___item');
  if (!accordionElement) return '';
  var headingElement = (_accordionElement$que = accordionElement.querySelector('.sc-heading')) !== null && _accordionElement$que !== void 0 ? _accordionElement$que : accordionElement.querySelector('.accordion-header label');
  if (!headingElement) return '';
  var headingText = trim(headingElement.innerText);
  return headingText ? "".concat(headingText, ":") : '';
};

/**
 * Handles the scroll event and shows or hides the persistent bar based on the scroll position.
 */
exports.getAccordionHeading = getAccordionHeading;
var handlePersistentBarScroll = function handlePersistentBarScroll() {
  var _ref15, _ref16, _window$scrollY, _ref17, _window$innerWidth;
  var persistentBar = document.querySelector('.sc-persistent-bar');
  if (!persistentBar) return;
  var bannerSdk = document.querySelector('#onetrust-banner-sdk');
  if (bannerSdk && bannerSdk.style && bannerSdk.style.display !== 'none') {
    //Don't show persistent bar if oneTrust cookie banner exist
    return;
  }
  var scrollPosition = (_ref15 = (_ref16 = (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : document.documentElement.scrollTop) !== null && _ref16 !== void 0 ? _ref16 : document.body.scrollTop) !== null && _ref15 !== void 0 ? _ref15 : 0;
  var windowWidth = (_ref17 = (_window$innerWidth = window.innerWidth) !== null && _window$innerWidth !== void 0 ? _window$innerWidth : document.documentElement.clientWidth) !== null && _ref17 !== void 0 ? _ref17 : document.body.clientWidth;
  var scrollLimit = 600;
  var pBarTarget = document.querySelector('[data-persistent-bar-target]');
  if (pBarTarget) {
    var selectedElement = document.querySelector('.' + pBarTarget.getAttribute('data-persistent-bar-target'));
    if (selectedElement) {
      scrollLimit = getOuterHeight(selectedElement) + getPosition(selectedElement);
      if (windowWidth >= 768) {
        //Ignore menu height
        scrollLimit -= 70;
      }
    }
  }
  var pBarSkip = document.querySelector('[data-persistent-bar-skip]');
  var skipFromTop = 0;
  var skipHeight = 0;
  if (pBarSkip) {
    var _selectedElement = document.querySelector('.' + pBarSkip.getAttribute('data-persistent-bar-skip'));
    if (_selectedElement) {
      skipFromTop = getPosition(_selectedElement);
      skipHeight = getOuterHeight(_selectedElement);
      if (windowWidth >= 768) {
        //Ignore menu height
        skipFromTop -= 70;
      }
    }
  }
  var skipDevice = document.querySelector('[data-persistent-bar-skip-device]');
  if (skipDevice) {
    var skipAttr = skipDevice.getAttribute('data-persistent-bar-skip-device');
    var _isMobile = windowWidth < 768;
    if (skipAttr === 'mobile' && _isMobile || skipAttr !== 'mobile' && !_isMobile) {
      skipFromTop = 0;
      skipHeight = 0;
    }
  }
  var screenHeight = window.screen.height;
  screenHeight -= windowWidth < 768 ? 20 : 250;
  if (pBarSkip && scrollPosition + screenHeight >= skipFromTop && scrollPosition <= skipFromTop + skipHeight) {
    //Skip persistent bar for a certain position
    persistentBar.classList.remove('sc-persistent-bar--show');
    document.body.style.marginBottom = 0;
  } else if (scrollPosition > scrollLimit) {
    persistentBar.classList.add('sc-persistent-bar--show');
    var persistentBarHight = getOuterHeight(persistentBar);
    document.body.style.marginBottom = "".concat(persistentBarHight, "px");
  } else {
    persistentBar.classList.remove('sc-persistent-bar--show');
    document.body.style.marginBottom = 0;
  }
};

/**
 * Get the user agent of the current browser
 * @returns {{browserCodename: string, browserName: string, browserVersion: string, cookiesEnabled: boolean, browserLanguage: string, browserOnline: boolean, platform: string, userAgentHeader: string}}
 */
exports.handlePersistentBarScroll = handlePersistentBarScroll;
var getDeviceDetails = function getDeviceDetails() {
  var os = '';
  // eslint-disable-next-line compat/compat
  var nAgt = navigator.userAgent;
  var clientStrings = [{
    s: 'W 10',
    r: /(Windows 10.0|Windows NT 10.0)/
  }, {
    s: 'W 8.1',
    r: /(Windows 8.1|Windows NT 6.3)/
  }, {
    s: 'W 8',
    r: /(Windows 8|Windows NT 6.2)/
  }, {
    s: 'W 7',
    r: /(Windows 7|Windows NT 6.1)/
  }, {
    s: 'W Vista',
    r: /Windows NT 6.0/
  }, {
    s: 'W Server 2003',
    r: /Windows NT 5.2/
  }, {
    s: 'W XP',
    r: /(Windows NT 5.1|Windows XP)/
  }, {
    s: 'W 2000',
    r: /(Windows NT 5.0|Windows 2000)/
  }, {
    s: 'W ME',
    r: /(Win 9x 4.90|Windows ME)/
  }, {
    s: 'W 98',
    r: /(Windows 98|Win98)/
  }, {
    s: 'W 95',
    r: /(Windows 95|Win95|Windows_95)/
  }, {
    s: 'W NT 4.0',
    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
  }, {
    s: 'W CE',
    r: /Windows CE/
  }, {
    s: 'W 3.11',
    r: /Win16/
  }, {
    s: 'Android',
    r: /Android/
  }, {
    s: 'Open BSD',
    r: /OpenBSD/
  }, {
    s: 'Sun OS',
    r: /SunOS/
  }, {
    s: 'L',
    r: /(Linux|X11)/
  }, {
    s: 'iOS',
    r: /(iPhone|iPad|iPod)/
  }, {
    s: 'Mac OS X',
    r: /Mac OS X/
  }, {
    s: 'Mac OS',
    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
  }, {
    s: 'QNX',
    r: /QNX/
  }, {
    s: 'U',
    r: /UNIX/
  }, {
    s: 'BeOS',
    r: /BeOS/
  }, {
    s: 'OS/2',
    r: /OS\/2/
  }, {
    s: 'Search Bot',
    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
  }];
  for (var id in clientStrings) {
    var cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }
  var osVersion = '';
  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }
  switch (os) {
    case 'Mac OS X':
      // eslint-disable-next-line no-case-declarations
      var macMatch = /Mac OS X (10|11[._\d]+)/.exec(nAgt);
      osVersion = macMatch ? macMatch[1] : 'Unknown';
      break;
    case 'Android':
      // eslint-disable-next-line no-case-declarations
      var androidMatch = /Android ([._\d]+)/.exec(nAgt);
      osVersion = androidMatch ? androidMatch[1] : 'Unknown';
      break;
    case 'iOS':
      // eslint-disable-next-line no-case-declarations
      var iOSMatch = /OS (\d+)_(\d+)_?(\d+)?/.exec(nAgt);
      osVersion = iOSMatch ? iOSMatch[1] + '.' + iOSMatch[2] + '.' + (iOSMatch[3] || 0) : 'Unknown';
      break;
  }
  var deviceInfo = 'd';
  if (/Mobi/.test(navigator.userAgent)) {
    deviceInfo = 'm';
  }
  var screenSize = '',
    width = 0,
    height = 0;
  if (screen.width) {
    width = screen.width ? screen.width : '';
    height = screen.height ? screen.height : '';
    screenSize += '' + width + ' x ' + height;
  }

  /* eslint-disable compat/compat */
  return {
    browserCodename: navigator.appCodeName,
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    cookiesEnabled: navigator.cookieEnabled,
    browserLanguage: navigator.language,
    browserOnline: navigator.onLine,
    platform: navigator.platform,
    userAgentHeader: navigator.userAgent,
    agentHeader: navigator.getAgent,
    deviceInfo: deviceInfo,
    screenSize: screenSize,
    os: os,
    osVersion: osVersion
  };
  /* eslint-enable compat/compat */
};
exports.getDeviceDetails = getDeviceDetails;
var browserDetect = function browserDetect() {
  var browser = {
    name: '',
    version: '',
    versionSearchString: '',
    dataBrowser: [{
      string: navigator.userAgent,
      subString: 'Edge',
      identity: 'MS Edge'
    }, {
      string: navigator.userAgent,
      subString: 'Edg',
      identity: 'Edge'
    }, {
      string: navigator.userAgent,
      subString: 'MSIE',
      identity: 'Explorer'
    }, {
      string: navigator.userAgent,
      subString: 'Trident',
      identity: 'Explorer'
    }, {
      string: navigator.userAgent,
      subString: 'Firefox',
      identity: 'Firefox'
    }, {
      string: navigator.userAgent,
      subString: 'Opera',
      identity: 'Opera'
    }, {
      string: navigator.userAgent,
      subString: 'OPR',
      identity: 'Opera'
    }, {
      string: navigator.userAgent,
      subString: 'Chrome',
      identity: 'Chrome'
    }, {
      string: navigator.userAgent,
      subString: 'Safari',
      identity: 'Safari'
    }],
    init: function init() {
      this.name = this.searchString(this.dataBrowser) || 'Other';
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Unknown';
    },
    searchString: function searchString(data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        var subString = data[i].subString;
        this.versionSearchString = subString;
        if (dataString.includes(subString)) {
          return data[i].identity;
        }
      }
      return null;
    },
    searchVersion: function searchVersion(dataString) {
      if (!this.versionSearchString) return null;
      var index = dataString.indexOf(this.versionSearchString);
      if (index === -1) {
        return null;
      }
      var rvIndex = dataString.indexOf('rv:');
      if (this.versionSearchString === 'Trident' && rvIndex !== -1) {
        return parseFloat(dataString.substring(rvIndex + 3));
      } else {
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
    }
  };
  browser.init();
  return browser;
};

/**
 * get total number of days in this month
 */
exports.browserDetect = browserDetect;
var daysInThisMonth = function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

/**
 * Handles the transformation and assignment of product-related data
 * into the `window.digitalData.products` array.
 */
exports.daysInThisMonth = daysInThisMonth;
var handleProductsObj = function handleProductsObj(countryCode) {
  var _window$digitalData$p;
  var pageName = window.digitalData.page.pageInfo.pageName.split(':');
  window.digitalData.products = window.digitalData.products || [];
  var subProduct1 = countryCode === 'hk' && window.digitalData.page.category.primaryCategory === 'na' ? '' : window.digitalData.page.category.primaryCategory;
  var subProduct2 = countryCode === 'hk' && window.digitalData.page.category.subCategory1 === 'na' ? '' : window.digitalData.page.category.subCategory1;
  window.digitalData.products = [{
    productID: (_window$digitalData$p = window.digitalData.page.productInfo) !== null && _window$digitalData$p !== void 0 && _window$digitalData$p.productId ? window.digitalData.page.productInfo.productId.toLowerCase().trim().replace(/\s+/g, '-') : '',
    productName: pageName[6].toLowerCase().trim().replace(/\s+/g, '-'),
    subProduct1: subProduct1.toLowerCase().trim().replace(/\s+/g, '-'),
    subProduct2: subProduct2.toLowerCase().trim().replace(/\s+/g, '-')
  }];
};
exports.handleProductsObj = handleProductsObj;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./common-event-listener");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * Main Entry for Abstract data layer
 */
var AbstractDataLayer = /*#__PURE__*/_createClass(function AbstractDataLayer() {
  _classCallCheck(this, AbstractDataLayer);
});
var instance = new AbstractDataLayer();
var _default = instance;
exports.default = _default;

},{"./common-event-listener":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Implement tracking using Adobe Analytics.
 */
var AdobeMain = /*#__PURE__*/function () {
  function AdobeMain() {
    _classCallCheck(this, AdobeMain);
  }
  _createClass(AdobeMain, [{
    key: "handleDigitalDataPush",
    value:
    /**
     * collect object from queue and push it in digitalData for Adobe Analytics
     * @param {Object} dataObj - collections of events objects
     * @example
     * handleDigitalDataPush({event: 'ctaClick', title: document.title}, callback)
     */
    function handleDigitalDataPush() {
      var dataObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (dataObj && window.digitalData) {
        window.adobeDataLayer.push(dataObj);
      }
    }
  }]);
  return AdobeMain;
}();
var instance = new AdobeMain();
var _default = instance;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _adobeMain = _interopRequireDefault(require("./adobe-main"));
var _googleMain = _interopRequireDefault(require("./google-main"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Event-Listener for Global Array scAnalyticsDataArray
 * Each events passed objects in AnalyticsEventHandler and call correspondent analytics
 */
var AnalyticsEventHandler = /*#__PURE__*/function () {
  function AnalyticsEventHandler() {
    _classCallCheck(this, AnalyticsEventHandler);
  }
  _createClass(AnalyticsEventHandler, [{
    key: "init",
    value: function init() {
      if (typeof scAnalyticsDataArray !== 'undefined') {
        var pushEvents = function pushEvents(arr, callback) {
          arr.push = function (e) {
            Array.prototype.push.call(arr, e);
            callback(arr);
          };
        };

        /**
         * queue of objects and pass it correspondent analytics
         * @param {Object} scAnalyticsDataArray - collections of events objects
         * @example
         * pushEvents({event: 'ctaClick', title: document.title}, callback)
         */

        /* eslint-disable no-undef*/
        //Disabled since scAnalyticsDataArray is Global Variable
        pushEvents(scAnalyticsDataArray, function (newScAnalyticsDataArray) {
          var cnt = document.querySelector('meta[name="sc:country"]') ? document.querySelector('meta[name="sc:country"]').getAttribute('content') : null;
          newScAnalyticsDataArray.filter(function (obj) {
            if (window.adobeDataLayer) {
              //ignore if digitalData is not present.
              _adobeMain.default.handleDigitalDataPush(obj);
            }
            if (window.dataLayer && (cnt == 'tw' || cnt == 'pk' || cnt == 'pk-u')) {
              //ignore if dataLayer is not present.
              _googleMain.default.handleDataLayerPush('', obj);
            }
            newScAnalyticsDataArray.shift();
          });
        });
        /* eslint-enable no-undef*/
      }
    }
  }]);
  return AnalyticsEventHandler;
}();
var instance = new AnalyticsEventHandler();
instance.init();
var _default = instance;
exports.default = _default;

},{"./adobe-main":3,"./google-main":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./analytics-event-handler");
var _scCommonMethods = require("../../../../../../nitro/src/js/sc-common-methods");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* global scAnalyticsDataArray, digitalData */ /*
                                                                                                                                                                                                                                                                                                                                                                                                                                             common event handlers for all markets
                                                                                                                                                                                                                                                                                                                                                                                                                                               1. Load AA from eddl-abstract-datalayer.min.js 
                                                                                                                                                                                                                                                                                                                                                                                                                                               2. If it's non-nitro SG page, then the "page view" event loading from head.min.js file
                                                                                                                                                                                                                                                                                                                                                                                                                                               3. If it's nitro SG page, then the "page view" event loading from sc-base.min.js file
                                                                                                                                                                                                                                                                                                                                                                                                                                             */
var searchEvent = true;
if (typeof window.adobeDataLayer === 'undefined') {
  window.adobeDataLayer = new Array();
}
var CommonEventListener = /*#__PURE__*/function () {
  function CommonEventListener() {
    _classCallCheck(this, CommonEventListener);
  }
  _createClass(CommonEventListener, [{
    key: "init",
    value: function init() {
      var _pageTitle$textConten, _pageMeta$getAttribut;
      var that = this;
      var pageTitle = document.querySelector('title');
      that.linkName = (pageTitle === null || pageTitle === void 0 ? void 0 : (_pageTitle$textConten = pageTitle.textContent) === null || _pageTitle$textConten === void 0 ? void 0 : _pageTitle$textConten.toLowerCase()) || 'na';
      var pageMeta = document.querySelector('meta[name="sc:page-slug"]');
      var pageSlug = (pageMeta === null || pageMeta === void 0 ? void 0 : (_pageMeta$getAttribut = pageMeta.getAttribute('content')) === null || _pageMeta$getAttribut === void 0 ? void 0 : _pageMeta$getAttribut.toLowerCase()) || null;
      that.mktCountryCode = (0, _scCommonMethods.getCurrentCountry)();
      that.productId = 'na';
      that.subProductId = '';
      this.pfmId = 'na';
      that.getProductIdPfm();
      window.digitalData = window.digitalData || {};
      if (window.digitalData) {
        window.digitalData.page = window.digitalData.page || {};
        window.digitalData.page.attributes = window.digitalData.page.attributes || {};
        if (that.mktCountryCode === 'hk') {
          window.digitalData.page.attributes.platform = 'web';
        } else if (that.mktCountryCode === 'sg') {
          window.digitalData.page.attributes.platform = 'desktop website';
        } else {
          window.digitalData.page.attributes.platform = 'website';
        }
        window.digitalData.page.attributes.pfm = this.pfmId;
      }

      //Push form name and page name in digitalData
      var pageNameList = [];
      if (window.digitalData.page.pageInfo && window.digitalData.page.pageInfo.pageName) {
        //Set na if pageName are empty
        var pageName = window.digitalData.page.pageInfo.pageName;
        pageName = pageName.split(':');
        if (pageName.length > 1) {
          for (var i = 0; i < pageName.length; i++) {
            if (i === 7) {
              pageNameList.push('na');
            } else if (that.mktCountryCode === 'hk') {
              if (i === 3) {
                //Removing page type for HK market only
                continue;
              } else if (i === 2) {
                //[market]:[language]:[platform]:[segment]:[product category]:[product sub-category]:[product name]:[form name]:[form step name/screen name] where platform and segment is hardcoded for HK market only
                pageNameList.push('web', 'personal');
              } else {
                pageNameList.push(pageName[i] ? pageName[i] : 'na');
              }
            } else {
              pageNameList.push(pageName[i] ? pageName[i] : 'na');
            }
          }
        }
        if (pageName.length <= 8) {
          if (that.mktCountryCode === 'hk') {
            //Screen Name field in CMS is used if filled, in HK.
            pageNameList.push(pageName[pageName.length - 1] ? pageName[pageName.length - 1] : 'na');
          } else {
            pageNameList.push(pageSlug);
          }
        }

        //Set na if category objects are empty
        if (window.digitalData.page.category) {
          var catName = window.digitalData.page.category;
          // eslint-disable-next-line no-unused-vars
          for (var index in catName) {
            if (that.mktCountryCode === 'hk') {
              window.digitalData.page.category[index] = catName[index] ? catName[index].toLowerCase().trim().replace(/\s+/g, '-') : 'na';
            } else {
              window.digitalData.page.category[index] = catName[index] ? catName[index] : 'na';
            }
          }
        }
        var environment = (0, _scCommonMethods.getCurrentEnvironment)();
        window.digitalData.page.pageInfo.pageName = pageNameList.join(':');
        window.digitalData.page.pageInfo.buildDetails = 'web3.0';
        if (that.mktCountryCode === 'hk' || that.mktCountryCode === 'sg') {
          window.digitalData.page.pageInfo.libDetails = environment === 'staging' ? 'stage' : environment;
        } else {
          window.digitalData.page.pageInfo.libDetails = environment === 'preview' ? 'staging' : environment;
        }
      }
      if (that.mktCountryCode === 'hk') {
        var _pageNameList$, _pageNameList$2;
        window.digitalData.user = window.digitalData.user || {};
        window.digitalData.user.userInfo = {
          userType: 'ntb',
          segment: (_pageNameList$ = pageNameList[3]) !== null && _pageNameList$ !== void 0 ? _pageNameList$ : 'na',
          userID: '',
          loginStatus: 'guest'
        };
        window.digitalData.page.category.subCategory2 = '';
        window.digitalData.page.pageInfo.pagetype = (_pageNameList$2 = pageNameList[3]) !== null && _pageNameList$2 !== void 0 ? _pageNameList$2 : 'na';
      } else if (that.mktCountryCode !== 'sg') {
        var _pageNameList$3;
        window.digitalData.user = window.digitalData.user || {};
        window.digitalData.user.userInfo = {
          userStatus: 'guest',
          userType: 'NTB',
          segment: (_pageNameList$3 = pageNameList[2]) !== null && _pageNameList$3 !== void 0 ? _pageNameList$3 : 'na',
          userID: 'na'
        };
      } else {
        //For SG market only
        window.digitalData.page.category.subCategory2 = '';
      }

      // 404 - Page not Found
      var metaTitle = document.querySelector("meta[name='title']");
      if (metaTitle && (metaTitle.getAttribute('content') == '404-error-page' || metaTitle.getAttribute('content') == '404 Error Page')) {
        var errorInfo = {
          errorCode: '404',
          errorDescription: 'page not found'
        };
        if (that.mktCountryCode === 'hk') {
          (0, _scCommonMethods.handleProductsObj)(that.mktCountryCode);
          errorInfo.errorType = 'server';
        }
        errorInfo = that.mktCountryCode === 'hk' ? [errorInfo] : errorInfo;
        if (digitalData.page.productInfo && (that.mktCountryCode === 'hk' || that.mktCountryCode === 'sg')) {
          delete digitalData.page.productInfo;
        }
        var _dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
          error: errorInfo,
          event: 'errorPage',
          title: document.title,
          href: window.location.href,
          context: 'page not found'
        });
        if (that.mktCountryCode !== 'hk') {
          var _pageName = window.digitalData.page.pageInfo.pageName.split(':');
          if (that.mktCountryCode !== 'sg') {
            //Not SG and HK
            if (that.subProductId) {
              _dataObject.product.productInfo.subProductId = that.subProductId;
            }
            if (_pageName[4] != 'na' || _pageName[5] != 'na' || _pageName[6] != 'na') {
              _dataObject.product = _dataObject.product || {};
              _dataObject.product = {
                productInfo: {
                  productCategory: _pageName[4],
                  productSubcategory: _pageName[5] == 'na' ? '' : _pageName[5],
                  productName: _pageName[6],
                  productID: that.productId
                }
              };
            }
          }
        } else {
          (0, _scCommonMethods.handleProductsObj)(that.mktCountryCode);
        }

        /* eslint-disable no-undef */
        scAnalyticsDataArray.push(_dataObject);
        /* eslint-disable no-undef */
      } else {
        if (that.mktCountryCode !== 'sg') {
          window.digitalData.campaign = window.digitalData.campaign || {};
        }
        var eventName = that.mktCountryCode === 'hk' ? 'page-view' : 'pageView';
        if (that.mktCountryCode === 'hk') {
          (0, _scCommonMethods.handleProductsObj)(that.mktCountryCode);
          if (digitalData.page.productInfo) {
            delete digitalData.page.productInfo;
          }
          //For HK market only, add entryPoint inside userInfo if exist in the URL
          var queryString = (0, _scCommonMethods.getPageContext)().queryString;
          var entryPoint = (0, _scCommonMethods.getQueryParam)(queryString, 'entryPoint');
          if (entryPoint) {
            window.digitalData.user.userInfo.entryPoint = entryPoint;
          }
        }
        var _dataObject2 = _objectSpread(_objectSpread({}, digitalData), {}, {
          event: eventName,
          title: document.title,
          href: window.location.href,
          context: 'page view'
        });
        if (that.mktCountryCode !== 'hk') {
          if (window.digitalData.page.pageInfo) {
            var _pageName2 = window.digitalData.page.pageInfo.pageName.split(':');
            if (_pageName2[4] != 'na' || _pageName2[5] != 'na' || _pageName2[6] != 'na') {
              _dataObject2.product = _dataObject2.product || {};
              _dataObject2.product = {
                productInfo: {
                  productCategory: _pageName2[4],
                  productSubcategory: _pageName2[5],
                  productName: _pageName2[6],
                  productID: that.productId
                }
              };
              if (that.subProductId) {
                _dataObject2.product.productInfo.subProductId = that.subProductId;
              }
            }
          }
        }
        if (that.mktCountryCode !== 'sg') {
          /* eslint-disable no-undef */
          //Capture campaign
          if (that.mktCountryCode === 'hk') {
            //Set campaign information
            var paramsApiUrl = "https://av.sc.com/".concat(pageNameList[0], "/data/campaign-parameter/allowable/all.json");
            var campaignObj = {};
            window.getAdobeParams = new XMLHttpRequest();
            window.getAdobeParams.open('GET', paramsApiUrl, true);
            window.getAdobeParams.onload = function () {
              if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = window.getAdobeParams.responseText;
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
            window.getAdobeParams.onerror = function () {
              // There was a connection error of some sort
            };
            window.getAdobeParams.send();
            window.getAdobeParams.addEventListener('load', function () {
              (0, _scCommonMethods.getCampaignInfoV2)(campaignObj);
              scAnalyticsDataArray.push(_dataObject2);
              delete window.digitalData.campaign;
            });
          } else {
            (0, _scCommonMethods.getCampaignInfoV1)();
            scAnalyticsDataArray.push(_dataObject2);
          }
        } else {
          // push GA Pageview data
          var title = _dataObject2.title,
            href = _dataObject2.href,
            context = _dataObject2.context;
          var dataSet = {
            event: 'trackElement',
            eventCategory: '~' + that.mktCountryCode + ' : ^' + title,
            eventAction: title.trim() + (context !== '' ? '-' + context.trim() : ''),
            eventLabel: href
          };
          window.dataLayer.push(dataSet);
        }
      }
      var ignorePixel = 10;
      var startX;
      var startY;
      var diffX;
      var diffY;
      document.body.addEventListener('mousedown', function (event) {
        startX = event.pageX;
        startY = event.pageY;
      });
      document.body.addEventListener('mouseup', function (event) {
        diffX = Math.abs(event.pageX - startX);
        diffY = Math.abs(event.pageY - startY);
      });
      document.body.addEventListener('click', function (event) {
        var campaign = event.target.closest('.sc-li-campaign, .sc-li-campaign-form__submit-btn');
        //true if it's a drag event
        if ((diffX > ignorePixel || diffY > ignorePixel) && pageSlug !== 'search') return;
        if (campaign) return;
        var origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        var closestAnchor = event.target.closest('a');
        var isCloseModalButton = event.target.dataset.send === 'close-modal' && (typeof nitroEnabled === 'undefined' && event.target.closest('.button-wrapper') || typeof nitroEnabled !== 'undefined');
        var tglClick = event.target.previousElementSibling;
        var tglId = false;
        if (tglClick && typeof tglClick.className === 'string' && typeof tglClick.className.includes !== 'undefined' && tglClick.className.indexOf('tgl-mod-pin') !== -1) {
          tglId = true;
          closestAnchor = tglClick.querySelector('a.tgl-mod-popup');
        }
        if (typeof event.target.className === 'string' && typeof event.target.className.includes !== 'undefined' && event.target.className.indexOf('c2c_text_content') !== -1 && !document.getElementsByClassName('sc-offers').length) {
          //set adobe analytics for Chat
          var ctaType = closestAnchor ? (0, _scCommonMethods.getCtaType)(closestAnchor.className, event.target) : 'link';
          var customLinkText = event.target.innerText ? event.target.innerText.trim().toLowerCase() : event.target.textContent.trim().toLowerCase();
          var ctaName = event.target.getAttribute('title');
          var ctaPosition = (0, _scCommonMethods.calcElementLocation)(event.target);
          var customLinkRegion = (0, _scCommonMethods.getHorizontalPosition)(event.clientX) + ' ' + ctaPosition;
          var _dataObject3;
          var _context = (0, _scCommonMethods.getCtaContext)(closestAnchor);

          //Track Accordion
          if (that.mktCountryCode === 'sg') {
            _dataObject3 = _objectSpread(_objectSpread({}, digitalData), {}, {
              customLinkClick: {
                customLinkText: typeof nitroEnabled !== 'undefined' ? _context : customLinkText || ctaName,
                customLinkPosition: customLinkRegion,
                customLinkType: ctaType
              },
              event: 'ctaClick',
              href: window.location.href,
              context: _context
            });
          } else if (that.mktCountryCode === 'hk') {
            _dataObject3 = _objectSpread(_objectSpread({}, digitalData), {}, {
              event: 'ctaClick',
              title: document.title,
              href: window.location.href,
              context: typeof nitroEnabled !== 'undefined' ? _context : customLinkText
            });
            _dataObject3.ctaName = typeof nitroEnabled !== 'undefined' ? _context : ctaName || customLinkText;
            _dataObject3.ctaPosition = customLinkRegion;
            _dataObject3.ctaType = ctaType;
          } else {
            _dataObject3 = _objectSpread(_objectSpread({}, digitalData), {}, {
              customLinkClick: {
                customLinkText: typeof nitroEnabled !== 'undefined' ? _context : customLinkText,
                customLinkRegion: customLinkRegion,
                customLinkType: ctaType,
                customLinkName: that.linkName
              },
              event: 'ctaClick',
              title: document.title,
              href: window.location.href,
              context: typeof nitroEnabled !== 'undefined' ? _context : customLinkText
            });
            _dataObject3.ctaName = typeof nitroEnabled !== 'undefined' ? _context : ctaName || customLinkText;
            _dataObject3.ctaPosition = ctaPosition;
            _dataObject3.ctaType = ctaType;
          }
          scAnalyticsDataArray.push(_dataObject3);
        } else if (closestAnchor) {
          //set adobe analytics for anchor tag
          var url = closestAnchor.getAttribute('href');
          if (!url || url.substring(0, 10).toLowerCase() !== 'javascript') {
            event.preventDefault(); //if href does not call js function, stop default action
          }

          if (url == 'javascript:void(0)' && !tglId) {
            return;
          } else if (url) {
            url = url.trim();
          }
          var _ctaType = (0, _scCommonMethods.getCtaType)(closestAnchor.className, event.target);
          var targetAttr = typeof closestAnchor.getAttribute('target') === 'undefined' || closestAnchor.getAttribute('target') === null ? '' : closestAnchor.getAttribute('target');
          var urlBreak = (0, _scCommonMethods.urlBreakdown)(url);
          var closeModal = typeof event.target.getAttribute('data-send') === 'undefined' || event.target.getAttribute('data-send') === null ? '' : event.target.getAttribute('data-send').toLowerCase();
          var modalContent = event.target.closest('.modal-content .m-text-content');
          if (event.target.closest('.m-search-result ul.list') && pageSlug == 'search' && !document.getElementsByClassName('sc-offers').length) {
            //true if clicked search results
            var $keyword = document.querySelector(".sc-searchpage__form-search input[name='global-search']").value.trim();
            var $clickedTitle = closestAnchor.getAttribute('title').trim();
            var $searchRank = event.target.closest('.result-item').getAttribute('id').trim();
            $searchRank = $searchRank.substr(12);
            var numOfResults = parseInt(document.querySelector('li:first-child span.counter').innerText);
            var searchDataObject = _objectSpread({}, digitalData);
            setTimeout(function () {
              searchDataObject.page.search = {
                keyword: $keyword,
                clickedTitle: $clickedTitle,
                numberOfResults: numOfResults,
                searchRank: Number($searchRank) + 1
              };
              var dataObject = _objectSpread(_objectSpread({}, searchDataObject), {}, {
                event: 'searchResultClickThrough',
                title: document.title,
                href: window.location.href,
                context: $keyword
              });
              scAnalyticsDataArray.push(dataObject);
            }, 500);
          } else if (event.isTrusted && (!event.target.closest('.is-external-link-button') && closeModal != 'close-modal' && !event.target.closest('.modal-content') || event.target.closest('.sc-external-link-button') || event.target.closest('.is-external-link-button') || modalContent) && !document.getElementsByClassName('sc-offers').length) {
            //if modal is already open, then don't trigger 'Analytics'
            var tglSelector = closestAnchor.querySelector('.tgl-mod-pin-mer-name');
            var linkTitle = closestAnchor.querySelector('.title');
            var ctaTitle;
            var _context2 = (0, _scCommonMethods.getCtaContext)(closestAnchor);
            if (closestAnchor.className.indexOf('sc-btn-tile') === -1) {
              ctaTitle = closestAnchor.getAttribute('title') ? closestAnchor.getAttribute('title') : event.target.innerText || event.target.textContent || closestAnchor.getAttribute('data-context') || closestAnchor.getAttribute('aria-label') || (tglSelector ? tglSelector.innerText || tglSelector.textContent : '') || (linkTitle ? linkTitle.innerText || linkTitle.textContent : '') || closestAnchor.getAttribute('href') || '';
            } else {
              ctaTitle = closestAnchor.getAttribute('data-context') || closestAnchor.getAttribute('title') || event.target.innerText || event.target.textContent || closestAnchor.getAttribute('aria-label') || (tglSelector ? tglSelector.innerText || tglSelector.textContent : '') || (linkTitle ? linkTitle.innerText || linkTitle.textContent : '') || closestAnchor.getAttribute('href') || '';
            }
            ctaTitle = ctaTitle ? ctaTitle.toLowerCase().trim() : ctaTitle;

            //For PDF title
            ctaTitle = that.extractDownloadTitle(pageSlug, event.target.closest('.sc-page-list__item'), ctaTitle);
            var _eventName = (0, _scCommonMethods.urlBreakdown)(url).extension == 'pdf' ? 'fileDownload' : 'ctaClick';
            if (that.mktCountryCode === 'hk') {
              _eventName = 'ctaClick'; //Track file download link clicks as CTA clicks, in HK
            }

            var _ctaPosition = (0, _scCommonMethods.calcElementLocation)(event.target);
            var _customLinkRegion = (0, _scCommonMethods.getHorizontalPosition)(event.clientX) + ' ' + _ctaPosition;
            var _dataObject4;
            var accordionHeadText = '';
            if (that.mktCountryCode === 'sg' || that.mktCountryCode === 'hk') {
              accordionHeadText = (0, _scCommonMethods.getAccordionHeading)(event.target);
            }
            if (that.mktCountryCode === 'sg') {
              _dataObject4 = _objectSpread(_objectSpread({}, digitalData), {}, {
                customLinkClick: {
                  customLinkText: accordionHeadText + (typeof nitroEnabled !== 'undefined' ? _context2 : ctaTitle),
                  customLinkPosition: _customLinkRegion,
                  customLinkType: _ctaType
                },
                event: _eventName,
                href: window.location.href,
                context: _context2
              });
            } else if (that.mktCountryCode === 'hk') {
              _dataObject4 = _objectSpread(_objectSpread({}, digitalData), {}, {
                event: _eventName,
                title: document.title,
                href: window.location.href,
                context: _context2
              });
              _dataObject4.ctaName = accordionHeadText + (typeof nitroEnabled !== 'undefined' ? _context2 : ctaTitle);
              _dataObject4.ctaPosition = _customLinkRegion;
              _dataObject4.ctaType = _ctaType;
            } else {
              _dataObject4 = _objectSpread(_objectSpread({}, digitalData), {}, {
                customLinkClick: {
                  customLinkText: typeof nitroEnabled !== 'undefined' ? _context2 : ctaTitle,
                  customLinkRegion: _customLinkRegion,
                  customLinkType: _ctaType,
                  customLinkName: that.linkName
                },
                event: _eventName,
                title: document.title,
                href: window.location.href,
                context: _context2
              });
              _dataObject4.ctaName = accordionHeadText + (typeof nitroEnabled !== 'undefined' ? _context2 : ctaTitle);
              _dataObject4.ctaPosition = _ctaPosition;
              _dataObject4.ctaType = _ctaType;
            }
            var product = window.digitalData.product;
            if (event.target.closest('.sc-products-tile-modal')) {
              if (that.mktCountryCode === 'hk' || that.mktCountryCode === 'sg') {
                _dataObject4.form = {
                  formName: product ? product.productName : '',
                  formStepName: '',
                  formType: window.digitalData.user.userInfo.pagetype || '',
                  formPlatform: window.digitalData.page.attributes.platform || '',
                  popupName: closestAnchor.getAttribute('title').split('-')[1]
                };
              } else {
                _dataObject4.form = {
                  formName: '',
                  formStepName: '',
                  formType: '',
                  formPlatform: '',
                  popupName: closestAnchor.getAttribute('title').split('-')[1]
                };
              }
            }
            if (_eventName == 'fileDownload') {
              var fileName = url.split('/');
              fileName = fileName.slice(-1).pop();
              _dataObject4.page.attributes.fileName = fileName;
            }
            scAnalyticsDataArray.push(_dataObject4);
          }
          var modalAttr = closestAnchor.getAttribute('data-modal-source');
          if (!url) {
            return;
          } else if (modalAttr) {
            //if 'data-modal-source' is present in clicked content then open modal and don't redirecting to a new page
            return;
          } else if (!(0, _scCommonMethods.isInternalDomain)(urlBreak.domain, url) && urlBreak.domain !== '' && urlBreak.domain !== document.location.hostname && closeModal != 'close-modal' && url.charAt(0) !== '/') {
            /**
             * 1. urlBreak don't contain internal domains
             * 2. urlBreak is not empty
             * 3. urlBreak is not equal to the web host
             * 4. currentTarget(a tag) not contain an attributes named data-send='close-modal'
             * if conditions are true, return (we don't need to change page or open new tab)
             */
            return;
          } else if (targetAttr && targetAttr.toLowerCase() === '_blank') {
            //true if currentTarget(a tag) contain an attributes named target='_blank' and then open new tab
            var modalTarget = event.target.closest('.m-text-content');
            if (!(0, _scCommonMethods.isInternalDomain)(urlBreak.domain, url) && modalTarget && modalTarget.getAttribute('data-modal-id') !== undefined && modalTarget.getAttribute('data-modal-id') != 'external-links-disclaimer') {
              return;
            }
            if (url.substring(0, 2) == '//') {
              /* //www.sc.com/ke/current-accounts/hifadhi/' */
              url = url.substr(2);
              url = origin + '/' + url;
            } else if (url.charAt(0) === '/') {
              // remove 1st char to avoid later issues for URL construction
              /* /ke/current-accounts/hifadhi/ */
              url = url.substr(1);
              url = origin + '/' + url;
            }
            window.open(url, '_blank');
          } else if (url && url.charAt(0) == '#') {
            //true if currentTarget(a tag) href attributes start with '#'
            /* #null */
            location.href = url;
          } else if (url && (url.substring(0, 3).toLowerCase() == 'tel' || url.substring(0, 6).toLowerCase() == 'mailto')) {
            /* tel:(852)2886-8888 or mailto:email@example.com */
            window.open(url, '_self');
          } else if (url && url.substring(0, 10).toLowerCase() == 'javascript') {
            /* JavaScript:void(0) */
            return;
          } else if (url && that.isValidURL(url) && url.charAt(0) !== '/') {
            //true if currentTarget(a tag) is a regular url
            /* https://www.sc.com/ke/current-accounts/hifadhi/ */
            setTimeout(function () {
              location.href = that.getValidUrl(url);
            }, 200);
          } else {
            // url = /some-url
            if (url.substring(0, 2) == '//') {
              /* //www.sc.com/ke/current-accounts/hifadhi/' */
              url = url.substr(2);
            } else if (url.charAt(0) === '/') {
              // remove 1st char to avoid later issues for URL construction
              /* /ke/current-accounts/hifadhi/ */
              url = url.substr(1);
            }
            url = origin + '/' + url;
            setTimeout(function () {
              location.href = url;
            }, 200);
          }
        } else if (isCloseModalButton && event.isTrusted && !document.getElementsByClassName('sc-offers').length) {
          var _closestAnchor;
          var _ctaPosition2 = (0, _scCommonMethods.calcElementLocation)(event.target);
          var _customLinkRegion2 = (0, _scCommonMethods.getHorizontalPosition)(event.clientX) + ' ' + _ctaPosition2;
          var _ctaType2 = closestAnchor ? (0, _scCommonMethods.getCtaType)(closestAnchor.className, event.target) : 'link';
          var _context3 = (0, _scCommonMethods.getCtaContext)((_closestAnchor = closestAnchor) !== null && _closestAnchor !== void 0 ? _closestAnchor : event.target.closest("[data-send='close-modal']")) || 'close';
          var _dataObject5;
          if (that.mktCountryCode === 'sg') {
            _dataObject5 = _objectSpread(_objectSpread({}, digitalData), {}, {
              customLinkClick: {
                customLinkText: typeof nitroEnabled !== 'undefined' ? _context3 : _context3,
                //Taken from context because it's a close button
                customLinkPosition: _customLinkRegion2,
                customLinkType: _ctaType2
              },
              event: 'ctaClick',
              href: window.location.href,
              context: _context3
            });
          } else if (that.mktCountryCode === 'hk') {
            _dataObject5 = _objectSpread(_objectSpread({}, digitalData), {}, {
              user: {
                userInfo: {
                  userStatus: 'guest',
                  userType: 'ntb'
                }
              },
              event: 'ctaClick',
              title: document.title,
              href: window.location.href,
              context: 'close'
            });
            _dataObject5.ctaName = 'close';
            _dataObject5.ctaPosition = _customLinkRegion2;
            _dataObject5.ctaType = _ctaType2;
          } else {
            _dataObject5 = _objectSpread(_objectSpread({}, digitalData), {}, {
              user: {
                userInfo: {
                  userStatus: 'guest',
                  userType: 'ntb'
                }
              },
              customLinkClick: {
                customLinkText: 'close',
                customLinkRegion: _customLinkRegion2,
                customLinkType: _ctaType2,
                customLinkName: that.linkName
              },
              event: 'ctaClick',
              title: document.title,
              href: window.location.href,
              context: 'close'
            });
            _dataObject5.ctaName = 'close';
            _dataObject5.ctaPosition = _ctaPosition2;
            _dataObject5.ctaType = _ctaType2;
          }
          scAnalyticsDataArray.push(_dataObject5);
        }
      });
      var search = document.querySelector(".sc-searchpage__form-search input[name='global-search']");
      if (search) {
        search.addEventListener('focus', function () {
          searchEvent = true;
        });
        search.addEventListener('keyup', that.delayFiveSeconds(function () {
          if (searchEvent) {
            var keyword = document.querySelector(".sc-searchpage__form-search input[name='global-search']").value.trim();
            if (!keyword) {
              searchEvent = false;
              return;
            }
            var numOfResults = parseInt(document.querySelector('li:first-child span.counter').innerText);
            var _dataObject6 = _objectSpread(_objectSpread({}, digitalData), {}, {
              event: 'siteSearch',
              title: document.title,
              href: window.location.href,
              context: keyword
            });
            _dataObject6.page.search = {
              keyword: keyword,
              numberOfResults: numOfResults
            };
            scAnalyticsDataArray.push(_dataObject6);
            searchEvent = false;
          }
        }));
        search.addEventListener('blur', function () {
          if (searchEvent) {
            //check is it delay or blur event trigger
            window.setTimeout(function () {
              var keyword = document.querySelector(".sc-searchpage__form-search input[name='global-search']").value.trim();
              if (!keyword) {
                searchEvent = false;
                return;
              }
              var numOfResults = parseInt(document.querySelector('li:first-child span.counter').innerText);
              var dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
                event: 'siteSearch',
                title: document.title,
                href: window.location.href,
                context: keyword
              });
              dataObject.page.search = {
                keyword: keyword,
                numberOfResults: numOfResults
              };
              scAnalyticsDataArray.push(dataObject);
            }, 300);
            //Adding .5S delay so that the defocus is always captured
          }

          searchEvent = false;
        });
      }

      //Needs module
      var itemInnerList = document.querySelectorAll('.sc-tab__item');
      if (itemInnerList.length) {
        itemInnerList.forEach(function (el) {
          el.addEventListener('keyup', function (event) {
            if (event.key == 'Enter' || event.key == 'Spacebar') {
              that.needsModuleTracking(event);
            }
          });
          el.addEventListener('click', function (event) {
            that.needsModuleTracking(event);
          });
        });
      }

      //Handle labels which contain checkbox
      that.handleLabelAnalytics();
    }

    /**
     * push data to adobe
     * @param event is passed as per eventlistener keyup
     * @example
     * needsModuleTracking(event)
     */
  }, {
    key: "needsModuleTracking",
    value: function needsModuleTracking(event) {
      var that = this;
      var ctaName = event.target.getAttribute('title');
      var ctaType = document.querySelector('.sc-tab--bonus-saver') ? event.currentTarget.classList.contains('splide__slide') ? 'persona' : 'tab' : 'tab';
      var closest = event.target.closest('.sc-tab__item');
      var selector = closest.querySelector('.sc-tab__item-title');
      var customLinkText = selector.innerText ? selector.innerText.trim().toLowerCase() : selector.textContent.trim().toLowerCase();
      var ctaPosition = (0, _scCommonMethods.calcElementLocation)(event.target);
      var customLinkRegion = (0, _scCommonMethods.getHorizontalPosition)(event.clientX) + ' ' + ctaPosition;
      var context = (0, _scCommonMethods.getCtaContext)(closestAnchor);
      if (that.mktCountryCode === 'sg') {
        dataObject = _objectSpread(_objectSpread({}, digitalData), {}, {
          customLinkClick: {
            customLinkText: typeof nitroEnabled !== 'undefined' ? context : customLinkText || ctaName,
            customLinkPosition: customLinkRegion,
            customLinkType: ctaType
          },
          event: 'ctaClick',
          href: window.location.href,
          context: context
        });
      } else if (that.mktCountryCode === 'hk') {
        var _dataObject7;
        _dataObject7 = _objectSpread(_objectSpread({}, digitalData), {}, {
          event: 'ctaClick',
          title: document.title,
          href: window.location.href,
          context: context
        });
        _dataObject7.ctaName = typeof nitroEnabled !== 'undefined' ? context : ctaName || customLinkText;
        _dataObject7.ctaPosition = customLinkRegion;
        _dataObject7.ctaType = ctaType;
      } else {
        var _dataObject8;
        _dataObject8 = _objectSpread(_objectSpread({}, digitalData), {}, {
          customLinkClick: {
            customLinkText: typeof nitroEnabled !== 'undefined' ? context : customLinkText,
            customLinkRegion: customLinkRegion,
            customLinkType: ctaType,
            customLinkName: that.linkName
          },
          event: 'ctaClick',
          title: document.title,
          href: window.location.href,
          context: context
        });
        _dataObject8.ctaName = typeof nitroEnabled !== 'undefined' ? context : ctaName || customLinkText;
        _dataObject8.ctaPosition = ctaPosition;
        _dataObject8.ctaType = ctaType;
      }
      scAnalyticsDataArray.push(dataObject);
    }

    /**
     * delay 5 seconds when stop typing on search field and trigger globalSearchAdobeAnalytics
     * @example
     * delayFiveSeconds()
     */
  }, {
    key: "delayFiveSeconds",
    value: function delayFiveSeconds(f, delay) {
      var timer = null;
      return function () {
        var context = this,
          args = arguments;
        clearTimeout(timer);
        timer = window.setTimeout(function () {
          f.apply(context, args);
        }, delay || 5000);
      };
    }

    /**
     * Returns Bool if Valid URL
     * @param {String} url pass cta url
     * @return {Boolean} return true if URL is valid
     * @example
     * isValidUrl('https://sc.com/ke')
     */
  }, {
    key: "isValidURL",
    value: function isValidURL(u) {
      if (!u) {
        return false;
      }
      var res = u.match(
      // eslint-disable-next-line no-useless-escape
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return res !== null;
    }

    /**
     * added https if there is no http protocol
     * @param {String} url pass cta url
     * @example
     * getValidUrl('sc.com/ke')
     */
  }, {
    key: "getValidUrl",
    value: function getValidUrl() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (!url) {
        return;
      }
      var newUrl = '';
      if (url.indexOf('adobe_mc=') === -1) {
        newUrl = window.decodeURIComponent(url);
      } else {
        var urlList = url.split('adobe_mc=');
        var paramList = urlList[1].split('&');
        if (paramList.length > 1) {
          //query string exist after adobe_mc
          var adobeStr = paramList.shift(); //Cut query string of adobe_mc param from the array
          newUrl = window.decodeURIComponent(urlList[0]) + "adobe_mc=".concat(adobeStr, "&") + window.decodeURIComponent(paramList.join('&'));
        } else {
          //query string not exist after adobe_mc
          newUrl = window.decodeURIComponent(urlList[0]) + "adobe_mc=".concat(urlList[1]);
        }
      }
      newUrl = newUrl.trim().replace(/\s/g, '');
      if (/^(:\/\/)/.test(newUrl)) {
        return "http".concat(newUrl);
      }
      if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
        return "https://".concat(newUrl);
      }
      return newUrl;
    }

    /**
     * based on page slug, return ctaTitle
     * @param {String} pageSlug pass page slug attribute
     * @param {Event} event clicked element
     * @param {String} ctaTitle previous CTA title
     * @return {String} return previous title or download text title
     * @example
     * getValidUrl('download-centre', event, 'apply now')
     */
  }, {
    key: "extractDownloadTitle",
    value: function extractDownloadTitle(pageSlug, event, ctaTitle) {
      if ((pageSlug == 'important-informations' || pageSlug == 'download-centre' || pageSlug == 'financials' || pageSlug == 'news-media') && event) {
        var downloadTitle = event.querySelector('.sc-page-list__title');
        if (downloadTitle) {
          ctaTitle = downloadTitle.innerText || downloadTitle.textContent;
        }
      }
      return ctaTitle;
    }

    /**
     * get productId from URL
     * @example
     * getProductId()
     */
  }, {
    key: "getProductIdPfm",
    value: function getProductIdPfm() {
      var that = this;
      var queryStringList = [];
      var queryString = window.location.search;
      if (queryString) {
        queryString = queryString.substring(1);
        if (queryString) {
          queryStringList = queryString.split('&');
          if (queryStringList.length) {
            for (var i = 0; i < queryStringList.length; i++) {
              var result = queryStringList[i].split('=');
              if (result[0].toLowerCase() == 'productid') {
                that.productId = result[1].toLowerCase();
              } else if (result[0].toLowerCase() == 'pfm') {
                that.pfmId = result[1].toLowerCase();
              }
            }
          }
        }
      }
      if (that.mktCountryCode === 'hk') {
        var _digitalData, _digitalData$page, _digitalData$page$pro;
        that.productId = ((_digitalData = digitalData) === null || _digitalData === void 0 ? void 0 : (_digitalData$page = _digitalData.page) === null || _digitalData$page === void 0 ? void 0 : (_digitalData$page$pro = _digitalData$page.productInfo) === null || _digitalData$page$pro === void 0 ? void 0 : _digitalData$page$pro.productId) || '';
      } else {
        if (that.productId === 'na' && digitalData.page.productInfo && digitalData.page.productInfo.productId) {
          that.productId = digitalData.page.productInfo.productId;
        }
        if (digitalData.page.productInfo && digitalData.page.productInfo.subProductId) {
          that.subProductId = digitalData.page.productInfo.subProductId;
        }
      }
    }

    /**
     * Attaches analytics handling to all labels with a `for` attribute.
     * Tracks label interactions for analytics purposes.
     *
     * Adds click and keyup event listeners to each label:
     * - Click events trigger analytics tracking when a label is clicked.
     * - Keyup events track "Enter" and "Space" keys for accessibility support.
     *
     * If the associated element is a checkbox or radio button, it is selected upon pressing "Enter" or "Space".
     */
  }, {
    key: "handleLabelAnalytics",
    value: function handleLabelAnalytics() {
      var labels = document.querySelectorAll('label[for]');
      if (labels.length) {
        labels.forEach(function (label) {
          var handleLabelEvent = function handleLabelEvent(event) {
            var _event$target$closest;
            var parentSelector = (_event$target$closest = event.target.closest('.sc-common-calculator-class, .sc-sip-calculator, .sc-bnr sc-interest-calculator, .sc-ft-calc, .sc-fxtd-calc, .sc-cc-fund-calculator, .sc-bonussaver-calc, .sc-amtd-calc, .m-banner-calculator, .msa-calculator, .sc-wealth-saver-calc, .sc-wealthsaver-calc, .sc-wealthsaver-calc, .sc-wsa-calculator, .sc-mortgage-calculator, .sc-bonussaver-calculator-compact, a, .sc-cashone-pl-calc-variant, .sc-form, .sc-membership-tier__slider, .sc-products-tile-pdt-selection')) !== null && _event$target$closest !== void 0 ? _event$target$closest : event.target.querySelector('a');
            if (!parentSelector && !event.target.closest('[data-comma-format]')) {
              // Skip if it's bonussaver label or child have anchor tag or parent have anchor tag
              var closestLabel = event.target.closest('label');
              var elementId = closestLabel === null || closestLabel === void 0 ? void 0 : closestLabel.getAttribute('for');
              var associatedElement = document.querySelector("#".concat(elementId));
              if (associatedElement) {
                if (event.type === 'keyup' && (event.key === 'Enter' || event.key === ' ') && !event.target.closest('.sc-accordion')) {
                  // Check the input if it's a checkbox or radio button for the keyboard event
                  associatedElement.checked = true;
                }
                (0, _scCommonMethods.handleAnalyticsCTA)(event, closestLabel);
              }
            }
          };

          // Attach event listeners
          label.addEventListener('click', handleLabelEvent);
          label.addEventListener('keyup', handleLabelEvent);
        });
      }
    }
  }]);
  return CommonEventListener;
}();
var instance = new CommonEventListener();
window.addEventListener('load', function () {
  if (typeof scAnalyticsDataArray !== 'undefined') {
    instance.init();
  }
});
var _default = instance;
exports.default = _default;

},{"../../../../../../nitro/src/js/sc-common-methods":1,"./analytics-event-handler":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _scCommonMethods = require("../../../../../../nitro/src/js/sc-common-methods");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Implement tracking using Google Analytics
 */
var GoogleMain = /*#__PURE__*/function () {
  function GoogleMain() {
    _classCallCheck(this, GoogleMain);
  }
  _createClass(GoogleMain, [{
    key: "init",
    value: function init() {
      this.pageContext = (0, _scCommonMethods.getPageContext)();
      this.pageUrl = (0, _scCommonMethods.getPageUrl)();
    }
    /**
     * collect object from queue and push it in dataLayer for Google Analytics
     * @param {String} msg - pass custom message
     * @param {Object} dataObj - collections of events objects
     * @example
     * handleDataLayerPush('custom message', {event: 'ctaClick', title: document.title})
     */
  }, {
    key: "handleDataLayerPush",
    value: function handleDataLayerPush(msg) {
      var dataObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (dataObj) {
        var title = dataObj.title,
          href = dataObj.href,
          context = dataObj.context;
        if (!context) {
          return;
        }
        var country = this.pageContext.country;
        if (!this.pageContext.country) {
          country = this.pageUrl.country;
        }
        var dataSet = {
          event: 'trackElement',
          eventCategory: '~' + country + ' : ^' + this.pageContext.title,
          eventAction: title.trim() + (context !== '' ? '-' + context.trim() : ''),
          eventLabel: href
        };
        window.dataLayer.push(dataSet);
      }
    }
  }]);
  return GoogleMain;
}();
var instance = new GoogleMain();
instance.init();
var _default = instance;
exports.default = _default;

},{"../../../../../../nitro/src/js/sc-common-methods":1}]},{},[2])