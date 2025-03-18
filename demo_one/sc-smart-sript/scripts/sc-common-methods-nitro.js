/* global digitalData, scAnalyticsDataArray, _satellite, noUiSlider */

const scCommonConstants = {
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
    scb: [
      'subChanCode',
      'camp_id',
      'pid',
      'promoCode',
      'promo',
      'referId',
      'instance',
      'state',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'GiPrm',
      'productName',
      'truspleBuyerId',
      'CTID'
    ],
    others: ['gclid', 'gclsrc'],
    'partner-urls': [
      'https://www.royalsundaram.in/.*',
      'https://www.maxbupa.com/.*',
      'https://www.bharti-axagi.co.in/.*',
      'https://www.iciciprulife.com/.*',
      'https://www.einsure.allianz.com.sg/.*',
      'https://www.allianz-travel-insure.com.sg/.*',
      'https://www.lin.ee/.*',
      'https://www.piapp.com/.*'
    ]
  },

  URL_OBJ: [
    'cmsdev',
    'preview',
    'standardchartered',
    'sc',
    'com',
    'av',
    'assets',
    'global',
    'development',
    'staging',
    'digital',
    'https',
    'cmsstage',
    'cms',
    'dev',
    'zoo'
  ]
};

/**
 * Breaks down a given URL into its components.
 * @param {string} currentURL - The URL to be broken down.
 * @returns {Object} An object representing the components of the URL.
 */
const urlBreakdown = currentURL => {
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

  if (parts.length <= 4 && scCommonConstants.LANGUAGES.indexOf(pageURL.slug) !== -1) {
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
const parseUrl = url => {
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
const getPageContext = () => {
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
const extend = (obj, src) => {
  Object.keys(src).forEach(function(key) {
    obj[key] = src[key];
  });
  return obj;
};

/**
 * Gets the current country from the page context or URL.
 * @returns {string} The current country.
 */
const getCurrentCountry = () => {
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
const trim = text => {
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
const isInternalDomain = domain => {
  // List of all regular expression for internal domains
  const internal = [
    /^myinfosg.api.gov.sg$/,
    /^sc.com$/,
    /^.*\.sc\.com$/,
    /^standardchartered.com$/,
    /^.*\.standardchartered\.com/,
    /^.*\.standardchartered\.com\..*/,
    /^standardchartered\.co\..*$/,
    /^.*\.standardchartered\.co\..*$/,
    /www.wowmanhattan.com.sg/,
    /saml.singpass.gov.sg/,
    /scb-sg.onelink.me/,
    /#null/
  ];

  for (let i = 0; i < internal.length; i++) {
    if (internal[i].test(domain)) {
      return true;
    }
  }
  return false;
};

/**
 * capture horizontal click position and return it's left or right
 * @param {Number} xClick horizontal click position
 * @return {String} return it's left or right
 * @example
 * getHorizontalPosition(1000)
 */
const getHorizontalPosition = xClick => {
  let width = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
  let median = width / 2;
  return xClick < median ? 'left' : 'right';
};

/**
 * return cookie value
 * @param {String} key is the name of the cookie
 * @return {String} return selected cookie value
 * @example
 * getCookie('subChanCode')
 */
const getCookie = key => {
  const name = key + '=';
  let decodedCookie;

  try {
    //The decodeURIComponent function can throw an error if the cookie value contains invalid encoding, which might happen if special characters are improperly encoded. To fix this, you can add a try-catch block around decodeURIComponent to handle any decoding errors gracefully.
    decodedCookie = decodeURIComponent(document.cookie);
  } catch (e) {
    return null;
  }

  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
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
const getLocalStorageWithExpiry = key => {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
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
const calcElementLocation = target => {
  if (!target) return '';
  if (target.closest('.sc-modal')) {
    return 'lightbox';
  }

  //Sorted array of positions
  let positions = [
    {
      name: 'top',
      depth: 30
    },
    {
      name: 'middle',
      depth: 70
    },
    {
      name: 'bottom',
      depth: 100
    }
  ];
  let maxHeight = Math.max(document.body.clientHeight, window.outerHeight);
  if (maxHeight <= 0) {
    return '';
  }
  let scrollDepth = (parseInt(getPosition(target)) * 100) / maxHeight;
  for (let i = 0; i < positions.length; i++) {
    if (scrollDepth < positions[i].depth) {
      return positions[i].name;
    }
  }
  if (
    typeof target.parentNode.parentNode.className === 'string' &&
    typeof target.parentNode.parentNode.className.includes !== 'undefined' &&
    target.parentNode.parentNode.className.indexOf('sc-hdr__search') !== -1
  ) {
    return 'top';
  }
  return 'bottom';
};

const getCurrentEnvironment = () => {
  var urlObj = scCommonConstants.URL_OBJ;
  var domain = getPageUrl().domain;
  if (domain.indexOf(urlObj[3] + '.' + urlObj[4]) !== -1) {
    if (domain === urlObj[0] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return scCommonConstants.DEVELOPMENT;
    } else if (domain === urlObj[12] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return scCommonConstants.STAGING;
    } else if (domain === urlObj[13] + '.' + urlObj[3] + '.' + urlObj[4]) {
      return scCommonConstants.PREVIEW;
    } else {
      return scCommonConstants.PRODUCTION;
    }
  } else if (domain === urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4]) {
    if (getPageUrl().pathname.match('^/staging')) {
      return scCommonConstants.STAGING;
    } else if (getPageUrl().pathname.match('^/development')) {
      return scCommonConstants.DEVELOPMENT;
    } else {
      return scCommonConstants.PREVIEW;
    }
  } else {
    return scCommonConstants.DEVELOPMENT;
  }
};

const getPageUrl = () => {
  return getPageContext();
};

/**
 * get internal and external campaign info
 * @example
 * getIntExtCampaignInfo('in')
 */
const getIntExtCampaignInfo = country => {
  let allowableQueryString = scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  if (country == 'in' || country == 'pk' || country == 'hk') {
    //Special whitelisted parameters
    allowableQueryString = [
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
    ];
  }
  let externalCampaignParams = ['cid']; //external campaign parameter(s) for HK
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
  //Take it from local storage
  let foundParam = false;
  for (let i = 0; i < total; i++) {
    let cookieValue = getCookie(allowableQueryString[i]);
    let localStorageValue = getLocalStorageWithExpiry(allowableQueryString[i]);

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
        let found = false;
        let result;
        for (let j = 0; j < queryStringList.length; j++) {
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
    for (let i = 0; i < queryStringList.length; i++) {
      let result = queryStringList[i].split('=');
      if (allowableQueryString.indexOf(result[0]) === -1) {
        //exclude whitelisted parameters from external campaign
        if (country !== 'hk' || externalCampaignParams.indexOf(result[0]) !== -1) {
          if (extCampaignValue != '') {
            extCampaignName += ':';
            extCampaignValue += ':';
          }
          extCampaignName += result[0];
          extCampaignValue += result[1];
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
const getPosition = element => {
  if (!element) return '';
  let yPosition = 0;
  while (element) {
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }
  return yPosition;
};

/**
 * Function to detect the user's operating system
 */
const detectOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

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
const getCtaType = (className, target) => {
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
  } else if (
    className == '' ||
    typeof className !== 'string' ||
    typeof className.includes === 'undefined'
  ) {
    return 'link';
  } else if (className.indexOf('sc-btn') !== -1) {
    return 'link';
  } else {
    return 'link';
  }
};

/**
 * Track customer interaction for CTA Click.
 */
const handleAnalyticsCTA = (ev, targetClass = '', ctaObj = {}) => {
  const closest = targetClass ? targetClass : ev.target.closest('a');
  let customLinkText = closest.getAttribute('title') || closest.innerText || closest.textContent;
  if (customLinkText) {
    customLinkText = customLinkText.trim().toLowerCase();
  }
  let { ctaType, ctaPosition, xLinkRegion } = ctaObj;

  if (!ctaPosition) {
    ctaPosition = calcElementLocation(ev.target);
  }

  if (!xLinkRegion) {
    xLinkRegion = getHorizontalPosition(ev.clientX);
  }

  const customLinkRegion = xLinkRegion + ' ' + ctaPosition;
  if (typeof eddlEnabled === 'undefined') {
    //This code is added for the HK market because full EDDL is not implemented in HK market
    digitalData.ctaName = customLinkText;
    digitalData.ctaPosition = ctaPosition;
    _satellite.track('callToAction');
    return;
  }
  const titleSelector = document.querySelector('title');
  const ctaName =
    titleSelector && titleSelector.innerText ? titleSelector.innerText.toLowerCase() : 'na';
  const linkName =
    document.querySelector('title') && document.querySelector('title').innerText
      ? document.querySelector('title').innerText.toLowerCase()
      : 'na';

  if (!ctaType) {
    ctaType = closest ? getCtaType(closest.className, ev.target) : 'link';
  }

  let dataObject = {
    ...digitalData,
    customLinkClick: {
      customLinkText: customLinkText,
      customLinkRegion: customLinkRegion,
      customLinkType: ctaType,
      customLinkName: linkName
    },
    event: 'ctaClick',
    title: customLinkText,
    href: window.location.href,
    context: closest.getAttribute('data-context') || ' '
  };
  dataObject.ctaName = customLinkText || ctaName;
  dataObject.ctaPosition = ctaPosition;
  dataObject.ctaType = ctaType;
  scAnalyticsDataArray.push(dataObject);
};

/**
 * Calculate range values based on original PI value.
 */
const calculateRanges = (fieldNameValue, currentValue) => {
  const newRanges = {
    monthlyIncome: [
      {
        start: 0,
        end: 10000
      },
      {
        start: 10000,
        end: 20000
      },
      {
        start: 20000,
        end: 30000
      },
      {
        start: 30000,
        end: 40000
      },
      {
        start: 40000,
        end: 50000
      },
      {
        start: 50000,
        end: 60000
      },
      {
        start: 60000,
        end: 70000
      },
      {
        start: 70000,
        end: 80000
      },
      {
        start: 80000,
        end: 90000
      },
      {
        start: 90000,
        end: 100000
      },
      {
        start: 100000,
        end: 110000
      },
      {
        start: 110000,
        end: 120000
      },
      {
        start: 120000
      }
    ],
    loanAmount: [
      { start: 0, end: 100000 },
      { start: 100000, end: 200000 },
      { start: 200000, end: 300000 },
      { start: 300000, end: 400000 },
      { start: 400000, end: 500000 },
      { start: 500000, end: 600000 },
      { start: 600000, end: 700000 },
      { start: 700000, end: 800000 },
      { start: 800000, end: 900000 },
      { start: 900000, end: 1000000 },
      { start: 1000000 }
    ],
    repaymentAmount: [
      { start: 0, end: 20000 },
      { start: 20000, end: 50000 },
      { start: 50000, end: 100000 },
      { start: 100000, end: 150000 },
      { start: 150000, end: 200000 },
      { start: 200000, end: 250000 },
      { start: 250000, end: 300000 },
      { start: 300000, end: 350000 },
      { start: 350000 }
    ],
    dailyBalance: [
      { start: 0, end: 2000 },
      { start: 2000, end: 5000 },
      { start: 5000, end: 10000 },
      { start: 10000, end: 15000 },
      { start: 15000, end: 20000 },
      { start: 20000, end: 25000 },
      { start: 25000, end: 30000 },
      { start: 30000, end: 35000 },
      { start: 35000, end: 50000 },
      { start: 50000, end: 100000 },
      { start: 100000, end: 200000 },
      { start: 200000, end: 300000 },
      { start: 3000000, end: 500000 },
      { start: 500000, end: 750000 },
      { start: 750000, end: 1000000 },
      { start: 1000000 }
    ],
    apr: [
      { start: 0, end: 2 },
      { start: 2, end: 5 },
      { start: 5, end: 7 },
      { start: 7, end: 10 },
      { start: 10, end: 15 },
      { start: 15, end: 20 },
      { start: 20, end: 25 },
      { start: 25 }
    ],
    annualIncome: [
      {
        start: 0,
        end: 120000
      },
      {
        start: 120000,
        end: 240000
      },
      {
        start: 240000,
        end: 360000
      },
      {
        start: 360000,
        end: 480000
      },
      {
        start: 480000,
        end: 600000
      },
      {
        start: 600000,
        end: 720000
      },
      {
        start: 720000,
        end: 840000
      },
      {
        start: 840000,
        end: 960000
      },
      {
        start: 960000,
        end: 1080000
      },
      {
        start: 1080000,
        end: 1200000
      },
      {
        start: 1200000,
        end: 1320000
      },
      {
        start: 1320000,
        end: 1440000
      },
      {
        start: 1440000
      }
    ],
    age: [
      { start: 0, end: 18 },
      { start: 18, end: 25 },
      { start: 25, end: 35 },
      { start: 35, end: 45 },
      { start: 45, end: 55 },
      { start: 55, end: 65 },
      { start: 65, end: 75 },
      { start: 75 }
    ]
  };
  let calculatedRange = currentValue;
  if (!calculatedRange) {
    calculatedRange = 'na';
  } else {
    let val = parseInt(calculatedRange.toString().replace(/,/g, ''), 10);
    for (let i = 0; i < newRanges[fieldNameValue].length; i++) {
      let startVal = newRanges[fieldNameValue][i].start;
      let endVal = newRanges[fieldNameValue][i].end;
      if (val >= startVal && (endVal ? val < endVal : true)) {
        if (fieldNameValue === 'monthlyIncome') {
          calculatedRange = endVal
            ? startVal == 0
              ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k'
              : (Math.abs(startVal) / 1000).toFixed() +
                'k-lt' +
                (Math.abs(endVal) / 1000).toFixed() +
                'k'
            : 'ge120k';
          break;
        } else if (fieldNameValue === 'loanAmount') {
          calculatedRange = endVal
            ? startVal == 0
              ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k'
              : (Math.abs(startVal) / 1000).toFixed() +
                'k-lt' +
                (endVal == 1000000 ? '1m' : (Math.abs(endVal) / 1000).toFixed() + 'k')
            : 'ge1m';
          break;
        } else if (fieldNameValue === 'annualIncome') {
          calculatedRange = endVal
            ? startVal == 0
              ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k'
              : (startVal >= 1000000
                  ? Math.abs(startVal) / 1000000 + 'm-lt'
                  : (Math.abs(startVal) / 1000).toFixed() + 'k-lt') +
                (endVal >= 1000000
                  ? Math.abs(endVal) / 1000000 + 'm'
                  : (Math.abs(endVal) / 1000).toFixed() + 'k')
            : 'ge1.44m';
          break;
        } else if (fieldNameValue === 'repaymentAmount') {
          calculatedRange = endVal
            ? startVal == 0
              ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k'
              : (Math.abs(startVal) / 1000).toFixed() +
                'k-lt' +
                (Math.abs(endVal) / 1000).toFixed() +
                'k'
            : 'ge35k';
          break;
        } else if (fieldNameValue === 'dailyBalance') {
          calculatedRange = endVal
            ? startVal == 0
              ? startVal + '-lt' + (Math.abs(endVal) / 1000).toFixed() + 'k'
              : (Math.abs(startVal) / 1000).toFixed() +
                'k-lt' +
                (Math.abs(endVal) / 1000).toFixed() +
                'k'
            : 'ge1m';
          break;
        } else if (fieldNameValue === 'apr') {
          calculatedRange = endVal
            ? startVal == 0
              ? startVal + '-lt' + endVal
              : startVal + '%-lt' + endVal + '%'
            : 'ge25%';
          break;
        } else if (fieldNameValue === 'age') {
          calculatedRange = endVal ? startVal + '-lt' + endVal : 'ge75';
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
const handleCalculatorAnalytics = (calculatorName, fields) => {
  if (typeof digitalData === 'undefined') {
    return; // Exit the function early if digitalData is not defined
  }
  let dataObject = {
    ...digitalData,
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
    href: window.location.href,
    context: `${fields.formFieldName}|${fields.formFieldValue}`
  };
  scAnalyticsDataArray.push(dataObject);
};

/**
 * delay 1 second when once moved the slider bar and trigger events
 * @example
 * debounceEvents()
 */
const debounceEvents = (f, delay) => {
  let timer = null;
  return function() {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = window.setTimeout(function() {
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
const isForm = url => {
  if (
    scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'] != '' &&
    scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'] != undefined
  ) {
    var formRegex = new RegExp(scCommonConstants.ALLOWABLE_QUERYSTRING['form-urls'], 'gi');
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
const shouldCarryTrackingParams = url => {
  if (isForm(url)) {
    return true;
  }
  var partnerRegex = [];
  if (
    scCommonConstants.ALLOWABLE_QUERYSTRING['partner-urls'] &&
    scCommonConstants.ALLOWABLE_QUERYSTRING['partner-urls'].length > 0
  ) {
    for (var j = 0; j < scCommonConstants.ALLOWABLE_QUERYSTRING['partner-urls'].length; j++) {
      partnerRegex[j] = new RegExp(
        scCommonConstants.ALLOWABLE_QUERYSTRING['partner-urls'][j],
        'gi'
      );
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

const applyCookieParams = ($url, $swapping_attrs = '', targetUrlParamsToTakePrecedence = false) => {
  var queryString = '';
  var queryParts = [];
  var pageQueryString = '';
  var urlQueryString = '';
  var pageUrl = getPageUrl();
  var allowableQueryString = scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  var allowableQueryStringOthers = scCommonConstants.ALLOWABLE_QUERYSTRING.others;
  var swap_map = {};
  if ($swapping_attrs !== '') {
    let $swappingList = $swapping_attrs.split('|');
    $swappingList.forEach(function(attr) {
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
        let allowableQueryStringKey = swap_map[allowableQueryString[i]]
          ? swap_map[allowableQueryString[i]]
          : allowableQueryString[i];
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

  let queryStringArray = queryString.split('&');
  if (queryString !== '' && queryStringArray.length > 0) {
    queryStringArray.forEach(function(value) {
      breakdown.rawpath = breakdown.rawpath.replace('&' + value, '');
    });
  }

  if (breakdown.protocal === 'mailto:') {
    return `${breakdown.protocal}${breakdown.hostname}${breakdown.pathname}?${queryString}${breakdown.hash}`;
  } else {
    if ($swapping_attrs !== '' && $swapping_attrs.indexOf(',') !== -1) {
      queryString = bundleParam(queryString, $swapping_attrs);
    }
    if (breakdown.hash.indexOf('?') !== -1) {
      return `${breakdown.protocal}//${breakdown.hostname}${breakdown.rawpath}?${queryString}${breakdown.hash}`;
    }

    return `${breakdown.protocal}//${breakdown.hostname}${breakdown.pathname}?${queryString}${breakdown.hash}`;
  }
};

const getUrlParamName = paramName => {
  var index = -1;
  for (var i = 0; i < scCommonConstants.ALLOWABLE_QUERYSTRING.scb.length; i++) {
    if (paramName.toLowerCase() === scCommonConstants.ALLOWABLE_QUERYSTRING.scb[i].toLowerCase()) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    return scCommonConstants.ALLOWABLE_QUERYSTRING.scb[index];
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

const bundleParam = (queryString, $swapping_attrs) => {
  let swap_map = {};
  let urlQueryString = window.location.search;
  if (!urlQueryString) return queryString;
  urlQueryString = urlQueryString.substr(1);
  if (!urlQueryString) return queryString;
  urlQueryString = urlQueryString.split('&');

  const allowableQueryString = scCommonConstants.ALLOWABLE_QUERYSTRING.scb;
  $swapping_attrs = $swapping_attrs.split('=');
  swap_map = $swapping_attrs[0].split(',');
  let swap_str = '';
  for (let i = 0; i < swap_map.length; i++) {
    if (allowableQueryString.includes(swap_map[i])) {
      for (let j = 0; j < urlQueryString.length; j++) {
        let list = urlQueryString[j].split('=');
        if (list[0] === swap_map[i]) {
          swap_str += swap_str ? ',' : '';
          swap_str += list[1];
        }
      }
    }
  }
  if (!swap_str) return queryString;

  if (queryString.indexOf($swapping_attrs[1]) === -1) {
    queryString += '&' + $swapping_attrs[1] + `=${swap_str}`;
  } else {
    let strList = queryString.split('&');
    queryString = '';
    for (let i = 0; i < strList.length; i++) {
      let list = strList[i].split('=');
      queryString += queryString ? '&' : '';
      if (list[0] === $swapping_attrs[1]) {
        queryString += $swapping_attrs[1] + `=${swap_str}`;
      } else {
        queryString += list[0] + '=' + list[1];
      }
    }
  }
  return queryString;
};

const isEmpty = obj => {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== 'object') return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};

const convertQueryStringToJsonObject = queryString => {
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
const setLocalStorageWithExpiry = (key, value, ttl) => {
  const now = new Date();

  // `item` is an object which contains the original value.
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * This clunky regex is taken directly from http://detectmobilebrowsers.com/
 */
const isMobile = () => {
  // eslint-disable-next-line compat/compat
  const stringCheck = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      stringCheck
    ) ||
    // eslint-disable-next-line no-useless-escape
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      stringCheck.substr(0, 4)
    )
  );
};

/**
 * added comma after each three digits like 1,000,000
 * @example
 * @param {numbers} 10000
 *convertNumbers(10000)
 */
const convertNumbers = (selector, numbers) => {
  if (numbers === '' || !numbers) return 0;
  let returnVal = numbers.toString();
  let tmp = [];
  let fraction = 0;
  if (Number(selector.getAttribute('data-comma-format')) === 2) {
    if (returnVal.indexOf('.') !== -1) {
      let splitValue = returnVal.split('.');
      tmp = splitValue[0].split('').reverse(); //4321
      fraction = parseInt(splitValue[1], 10);
    } else {
      tmp = returnVal.split('').reverse(); //4321
    }

    let strNew = '';
    if (tmp.length > 3) {
      //true
      let lastThree = tmp.splice(0, 3);
      for (let i = 0; i < tmp.length; i++) {
        if (i > 0 && i % 2 == 0) {
          strNew += ',';
        }
        strNew += tmp[i].toString();
      }
      strNew = lastThree.join('') + ',' + strNew;
      strNew = strNew
        .split('')
        .reverse()
        .join('');
    }
    if (strNew) {
      if (fraction) {
        strNew = '' + strNew + `.${fraction}`;
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
      let splitValue = returnVal.split('.');
      tmp = splitValue[0].split('').reverse(); //4321
      fraction = splitValue[1];
    } else {
      tmp = returnVal.split('').reverse(); //4321
    }

    let strNew = '';
    if (tmp.length > 3) {
      //true if it's more than or equal thousands
      for (let i = 0; i < tmp.length; i++) {
        if (i > 0 && i % 3 == 0) {
          strNew += ',';
        }
        strNew += tmp[i].toString();
      }
      strNew = strNew
        .split('')
        .reverse()
        .join('');
    }
    if (strNew) {
      if (fraction) {
        strNew = '' + strNew + `.${fraction}`;
      }
      return strNew;
    } else {
      return returnVal;
    }
  }
};

const handleProductCalculatorSubmit = (calculatorName, fields) => {
  if (typeof digitalData === 'undefined') {
    return; // Exit the function early if digitalData is not defined
  }

  digitalData.calculator = {
    name: calculatorName,
    fields: fields
  };
  _satellite.track('calculatorSubmit');

  //update adobeDataLayer with calculator submit event
  if (typeof window.adobeDataLayer !== 'undefined') {
    let dataObject = {
      ...digitalData,
      event: 'calculatorSubmit'
    };

    //change calculator payload key names for adobeDataLayer object
    let newFields = [];
    let obj = {};
    fields.forEach(el => {
      obj = { ...el };
      obj.formFieldName = obj.fieldName;
      delete obj.fieldName;
      obj.formFieldValue = obj.fieldValue;
      delete obj.fieldValue;
      newFields.push(obj);
    });
    let calculator = {
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
const initializeSlider = (mainSelector, parentSelector) => {
  const docElement = document.documentElement;
  const direction = docElement.getAttribute('dir') ? docElement.getAttribute('dir') : null;
  const allSlider = mainSelector.querySelectorAll('.sc-range-slider');
  if (allSlider.length) {
    //Initialize slider
    allSlider.forEach(function(slider) {
      noUiSlider.create(slider, {
        start: Number(slider.getAttribute('data-default')),
        step: Number(slider.getAttribute('data-step')),
        behaviour: 'snap',
        connect: 'lower',
        range: {
          min: Number(slider.getAttribute('data-min')),
          max:
            Number(slider.getAttribute('data-max')) > 0
              ? Number(slider.getAttribute('data-max'))
              : 10000000
        },
        direction: direction
      });

      const inputField = slider.closest(parentSelector).querySelector('input[class$="-value"]');
      if (inputField) {
        //Slider related with text field
        inputField.value = convertNumbers(mainSelector, slider.getAttribute('data-default'));
      } else {
        const dropdownField = slider
          .closest(parentSelector)
          .querySelector('select[class$="-value"]');
        if (dropdownField) {
          //Slider related with dropdown field
          dropdownField.value = slider.getAttribute('data-default');
        }
      }
    });

    allSlider.forEach(function(el) {
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
const validateInput = (selector, sliderClass, errorSelector) => {
  let selectedClass = selector.querySelector(`.${sliderClass}`),
    inputField = selector.querySelector(`.${sliderClass}-value`),
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

  let initValue = inputField.value,
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
      let raVal = value.split('.');
      if (value === '.') {
        errorSelector.classList.remove('hide');
        return;
      } else if (raVal.length > 2) {
        //more than two floating point
        value = `${raVal[0]}.${raVal[1]}`;
        inputField.value = value;
        return;
      } else if (raVal[1] && raVal[1].length > 2) {
        value = `${raVal[0]}.` + raVal[1].substr(0, 2);
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
const calculatePMT = (interestRate, tenor, loanAmount, advancedPayments = 0) => {
  let monthlyRate = interestRate / 1200;
  let t1 = 1 + monthlyRate;
  let t3 = Math.pow(t1, tenor - advancedPayments);
  return (loanAmount * monthlyRate) / (1 - 1 / t3);
};

/**
 * check error status of the slider input fields
 */
const sliderErrorStatus = (selector, fieldName) => {
  let errorStatus = false;
  const allFields = selector.querySelectorAll(fieldName);
  if (allFields.length) {
    for (let i = 0; i < allFields.length; i++) {
      const value = Number(allFields[i].value.replace(/[^0-9.]/gi, ''));
      let className = allFields[i].className.split(' ');
      className = className[className.length - 1].slice(0, -6);
      const slider = selector.querySelector(`.${className}`),
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
const formatNumbersWithTwoDecimalPlaces = inputString => {
  // Use a regular expression to find numbers (both integer and decimal)
  const regex = /(\d+(\.\d*)?)/g;

  // Replace each matched number with the number formatted to two decimal places
  let filteredResult = inputString.replace(regex, match => {
    const number = parseFloat(match);
    if (!isNaN(number)) {
      return number.toFixed(2);
    }
    return match; // If not a valid number, return the original match
  });
  const parts = filteredResult.split('.');
  const result = parseFloat(parts[0] + '.' + parts.slice(1).join('')).toFixed(2);
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
const vLookup = (lookupValue, tableArray, colIndex) => {
  for (var i = 0; i < tableArray.length; i++) {
    var row = tableArray[i];
    var compareValue = row[0]; // Assuming the lookup column is the first column in the tableArray

    if (
      compareValue <= lookupValue &&
      (i === tableArray.length - 1 || tableArray[i + 1][0] > lookupValue)
    ) {
      return row[colIndex - 1]; // Adjusting for 1-based indexing in Excel
    }
  }

  return undefined; // Return undefined if no match is found
};

/**
 * validate all slider field input
 */
const sliderFieldErrorStatus = (selector, parentClass, errorClass) => {
  const closest = selector.closest(parentClass),
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
const stepFieldErrorStatus = (selector, parentClass, errorClass) => {
  const minValue = Number(selector.getAttribute('data-min')),
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
const calculateFutureValue = (rate, nper, pmt, pv, type) => {
  // Calculate the future value
  const roundedNper = Math.round(nper);
  const factor = Math.pow(1 + rate, roundedNper);
  const futureValue = pv * factor + (pmt * (1 - factor)) / rate;

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
const convertMonthsToYearsAndMonths = months => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return { years, months: remainingMonths };
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
const extendedPMT = (rate, nper, pv, fv, type) => {
  if (rate === 0) {
    return -(pv + fv) / nper;
  }

  var pvif = Math.pow(1 + rate, nper);
  var pmt = (rate * (fv + pvif * pv)) / (pvif - 1);

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
const calculateNPER = (rate, payment, present, future, type) => {
  // Initialize type
  type = typeof type === 'undefined' ? 0 : type;

  // Initialize future value
  future = typeof future === 'undefined' ? 0 : future;

  // Return number of periods
  const num = payment * (1 + rate * type) - future * rate;
  const den = present * rate + payment * (1 + rate * type);
  return Math.log(num / den) / Math.log(1 + rate);
};

/**
 * Calculates the number of years and months from a given number of months.
 *
 * @param {number} numberOfMonths - The total number of months.
 * @returns {String} String with the calculated number of years and months.
 */
const calculateYearMonth = numberOfMonths => {
  let months = numberOfMonths % 12;
  let years = Math.floor(numberOfMonths / 12);
  if (years > 1) {
    years = `${years} Year(s)`;
  } else if (years === 1) {
    years = `${years} Year`;
  } else {
    years = '';
  }

  if (months > 1) {
    months = ` ${months} Month(s)`;
  } else if (months === 1) {
    months = ` ${months} Month`;
  } else {
    months = '';
  }

  return `${years}${months}`;
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
const calculateEIR = (periods, payment, present, future, type, guess) => {
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
const calculateIRR = (cashFlows, iterations = 100, tolerance = 0.00001) => {
  let irr = 0.1; // Initial guess for IRR
  let cashflowValue = 0;

  for (let i = 0; i < iterations; i++) {
    cashflowValue = 0;

    for (let j = 0; j < cashFlows.length; j++) {
      cashflowValue += cashFlows[j] / Math.pow(1 + irr, j);
    }

    const derivative = calculateDerivative(cashFlows, irr);
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
const calculateDerivative = (cashFlows, irr) => {
  let derivative = 0;

  for (let i = 0; i < cashFlows.length; i++) {
    derivative -= (i * cashFlows[i]) / Math.pow(1 + irr, i + 1);
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
const calculatePresentValue = (rate, nper, pmt) => {
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
const pmt = (rate, nper, pv) => {
  if (rate === 0) return -pv / nper;
  const pvif = Math.pow(1 + rate, nper);
  return (rate * pv * pvif) / (pvif - 1);
};

/**
 * get current elements height including margin top and bottom
 * @param {Object} el - The elements which height need to be calculated
 * getOuterHeight(document.querySelector('#onetrust-banner-sdk'))
 **/
const getOuterHeight = el => {
  let elHeight = el.offsetHeight;
  elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-top'));
  elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('margin-bottom'));
  return elHeight;
};

/**
 * MatchHeight function to make divs the same height. Use this function only when CSS flexbox is not possible.
 * @param {String} selector - Container class, id, or element.
 */
const matchHeight = selector => {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  // Get the tallest height by mapping all elements to their offsetHeight and finding the max value
  const tallest = Math.max(...[...elements].map(el => el.offsetHeight));

  // Set each element's height to the tallest value
  elements.forEach(el => {
    el.style.height = `${tallest}px`;
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
const smoothScroll = (target, duration, width = 0) => {
  if (!target) return;
  let targetPosition = target.getBoundingClientRect().top - width;
  let startPosition = window.pageYOffset;
  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
};

/**
 * this method will be call when any key pressed in estimate daily field, pass value to calculateInterest method and return start status
 *
 * @param {Number} start get estimate daily balance number of click      *
 * @example
 * activeInputVal(1, 1200)
 */
const validateInputNoSlider = (selector, errorSelector, hideClass = '') => {
  const minValue = Number(selector.getAttribute('data-min'));
  const maxValue = Number(selector.getAttribute('data-max'));
  let decimalPlaces = Number(selector.getAttribute('data-decimal'));

  let initValue = selector.value,
    value = 0;

  hideClass ? errorSelector.classList.add('hide') : (errorSelector.style.display = 'none');
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
      let raVal = value.split('.');
      if (value === '.') {
        hideClass
          ? errorSelector.classList.remove('hide')
          : (errorSelector.style.display = 'block');
        return;
      } else if (raVal.length > decimalPlaces) {
        //more than two floating point
        value = `${raVal[0]}.${raVal[1]}`;
        selector.value = value;
        return;
      } else if (raVal[1] && raVal[1].length > decimalPlaces) {
        value = `${raVal[0]}.` + raVal[1].substr(0, decimalPlaces);
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
    hideClass ? errorSelector.classList.remove('hide') : (errorSelector.style.display = 'block');
  } else if (value < minValue) {
    hideClass ? errorSelector.classList.remove('hide') : (errorSelector.style.display = 'block');
  }
  selector.value = value;
};

const getAssetDomain = () => {
  /* eslint-disable no-undef*/
  if (typeof baseURL === 'undefined' || baseURL === '') {
    var env = getCurrentEnvironment();
    var domain = getPageUrl().domain;
    if (env === scCommonConstants.PRODUCTION) {
      return (
        urlObj[11] +
        '://' +
        urlObj[5] +
        '.' +
        urlObj[3] +
        '.' +
        urlObj[4] +
        '/' +
        urlObj[6] +
        '/' +
        urlObj[7] +
        '/'
      );
    } else if (env === scCommonConstants.DEVELOPMENT) {
      if (domain === urlObj[3] + '.' + urlObj[14]) {
        return '/content/themes/scretail/assets/global/';
      } else if (
        domain === urlObj[1] + '.' + urlObj[2] + '.' + urlObj[4] ||
        domain === urlObj[0] + '.' + urlObj[3] + '.' + urlObj[4]
      ) {
        return (
          urlObj[11] +
          '://' +
          urlObj[1] +
          '.' +
          urlObj[2] +
          '.' +
          urlObj[4] +
          '/' +
          urlObj[8] +
          '/' +
          urlObj[6] +
          '/' +
          urlObj[7] +
          '/'
        );
      } else {
        return '/assets/';
      }
    } else if (env === scCommonConstants.STAGING) {
      return (
        urlObj[11] +
        '://' +
        urlObj[1] +
        '.' +
        urlObj[2] +
        '.' +
        urlObj[4] +
        '/' +
        urlObj[9] +
        '/' +
        urlObj[6] +
        '/' +
        urlObj[7] +
        '/'
      );
    } else {
      return (
        urlObj[11] +
        '://' +
        urlObj[1] +
        '.' +
        urlObj[2] +
        '.' +
        urlObj[4] +
        '/' +
        urlObj[6] +
        '/' +
        urlObj[7] +
        '/'
      );
    }
  } else if (baseURL === '/zoo') {
    return (
      urlObj[11] +
      '://' +
      urlObj[10] +
      '.' +
      urlObj[3] +
      '.' +
      urlObj[4] +
      '/' +
      urlObj[15] +
      '/' +
      urlObj[6] +
      '/'
    );
  } else {
    return baseURL;
  }
  /* eslint-enable no-undef*/
};

export {
  scCommonConstants,
  urlBreakdown,
  parseUrl,
  getPageContext,
  extend,
  getCurrentCountry,
  trim,
  isInternalDomain,
  getHorizontalPosition,
  getCookie,
  getLocalStorageWithExpiry,
  calcElementLocation,
  getCurrentEnvironment,
  getPageUrl,
  getIntExtCampaignInfo,
  detectOS,
  getPosition,
  getCtaType,
  handleAnalyticsCTA,
  calculateRanges,
  handleCalculatorAnalytics,
  debounceEvents,
  isForm,
  shouldCarryTrackingParams,
  applyCookieParams,
  getUrlParamName,
  bundleParam,
  isEmpty,
  convertQueryStringToJsonObject,
  setLocalStorageWithExpiry,
  isMobile,
  handleProductCalculatorSubmit,
  convertNumbers,
  initializeSlider,
  validateInput,
  calculatePMT,
  sliderErrorStatus,
  formatNumbersWithTwoDecimalPlaces,
  vLookup,
  sliderFieldErrorStatus,
  stepFieldErrorStatus,
  calculateFutureValue,
  convertMonthsToYearsAndMonths,
  extendedPMT,
  calculateNPER,
  calculateYearMonth,
  calculateEIR,
  calculateIRR,
  calculateDerivative,
  calculatePresentValue,
  pmt,
  getOuterHeight,
  matchHeight,
  smoothScroll,
  validateInputNoSlider,
  getAssetDomain
};
