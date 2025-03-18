/* global digitalData, scAnalyticsDataArray, _satellite, noUiSlider */

class ScCommonMethodsz {
  // Define constants within the class
  static scCommonConstants = {
    DEVELOPMENT: "development",
    PREVIEW: "preview",
    PRODUCTION: "production",
    STAGING: "staging",
    LANGUAGES: ["en", "zh"],
    ALLOWABLE_QUERYSTRING: {
      scb: [
        "subChanCode",
        "camp_id",
        "pid",
        "promoCode",
        "promo",
        "referId",
        "instance",
        "state",
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "GiPrm",
        "productName",
        "truspleBuyerId",
        "CTID",
      ],
      others: ["gclid", "gclsrc"],
      "partner-urls": [
        "https://www.royalsundaram.in/.*",
        "https://www.maxbupa.com/.*",
        "https://www.bharti-axagi.co.in/.*",
        "https://www.iciciprulife.com/.*",
        "https://www.einsure.allianz.com.sg/.*",
        "https://www.allianz-travel-insure.com.sg/.*",
        "https://www.lin.ee/.*",
        "https://www.piapp.com/.*",
      ],
    },
  };

  /**
   * check class name and return link type
   * @param {String} className class name of the clicked element
   * @return {String} return link type like link, button, carousel etc
   * @example
   * ScCommonMethods.getCtaType('sc-btn')
   */
  getCtaType(className, target) {
    if (target?.closest("header")) return "nav-link";
    if (target?.closest(".sc-banner__content")) return "masthead-button";
    if (target?.closest(".sc-banner-slider__thumbnail")) return "button";
    if (target?.closest(".sc-benefits-slider-tab__tabs-0")) return "button";
    if (target?.closest(".sc-banner-przn-block")) return "widget-button";
    if (target?.closest(".sc-filter__btn")) return "button";
    if (target?.closest(".sc-quick-tools__links")) return "quick-link";
    if (target?.closest(".sc-filter")) return "button";
    if (target?.closest(".sc-digital-guide .splide")) return "button";
    if (target?.closest(".sc-benefits-slider-tab__tab")) return "button";
    if (target?.closest(".sc-footer")) return "footer-link";
    if (target?.closest(".sc-persistent-bar")) return "persistent-bar-link";
    if (
      className === "" ||
      typeof className !== "string" ||
      typeof className.includes === "undefined"
    )
      return "link";
    if (className.indexOf("sc-btn") !== -1) return "link";
    return "link";
  }

  /**
   * Track customer interaction for CTA Click.
   */
  handleAnalyticsCTA(ev, targetClass = "", ctaObj = {}) {
    const closest = targetClass ? targetClass : ev.target.closest("a");
    let customLinkText =
      closest?.getAttribute("title") ||
      closest?.innerText ||
      closest?.textContent;
    if (customLinkText) customLinkText = customLinkText.trim().toLowerCase();
    let { ctaType, ctaPosition, xLinkRegion } = ctaObj;

    if (!ctaPosition) ctaPosition = this.calcElementLocation(ev.target);
    if (!xLinkRegion) xLinkRegion = this.getHorizontalPosition(ev.clientX);

    const customLinkRegion = `${xLinkRegion} ${ctaPosition}`;
    if (typeof eddlEnabled === "undefined") {
      digitalData.ctaName = customLinkText;
      digitalData.ctaPosition = ctaPosition;
      _satellite.track("callToAction");
      return;
    }
    const ctaName =
      document.querySelector("title")?.innerText?.toLowerCase() || "na";
    const linkName = ctaName;

    if (!ctaType)
      ctaType = closest
        ? this.getCtaType(closest.className, ev.target)
        : "link";

    const dataObject = {
      ...digitalData,
      customLinkClick: {
        customLinkText,
        customLinkRegion,
        customLinkType: ctaType,
        customLinkName: linkName,
      },
      event: "ctaClick",
      title: customLinkText,
      href: window.location.href,
      context: closest?.getAttribute("data-context") || " ",
    };
    dataObject.ctaName = customLinkText || ctaName;
    dataObject.ctaPosition = ctaPosition;
    dataObject.ctaType = ctaType;
    scAnalyticsDataArray.push(dataObject);
  }

  /**
   * calculate vertical position
   * @param {Event} target event of the selector
   * @return {String} return top, middle, bottom, persistent-bar, lightbox etc.
   * @example
   * ScCommonMethods.calcElementLocation(event)
   */
  calcElementLocation(target) {
    if (!target) return "";
    if (target.closest(".sc-modal")) return "lightbox";

    const positions = [
      { name: "top", depth: 30 },
      { name: "middle", depth: 70 },
      { name: "bottom", depth: 100 },
    ];
    const maxHeight = Math.max(document.body.clientHeight, window.outerHeight);
    const scrollDepth =
      maxHeight > 0
        ? (parseInt(this.getPosition(target)) * 100) / maxHeight
        : 0;
    for (const position of positions) {
      if (scrollDepth < position.depth) return position.name;
    }
    if (target.parentNode?.parentNode?.className.includes("sc-hdr__search"))
      return "top";
    return "bottom";
  }

  /**
   * return absolute position of selected div in px
   * @param {String} element class elements name as an object
   * @return {Number} return horizontal position in px
   * @example
   * getPosition('.selector')
   */
  getPosition = (element) => {
    if (!element) return "";
    let yPosition = 0;
    while (element) {
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }
    return yPosition;
  };

  /**
   * capture horizontal click position and return its left or right
   * @param {Number} xClick horizontal click position
   * @return {String} return 'left' or 'right'
   * @example
   * ScCommonMethods.getHorizontalPosition(1000)
   */
  getHorizontalPosition(xClick) {
    const width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
    return xClick < width / 2 ? "left" : "right";
  }

  /**
   * Trims whitespace from a given text.
   * @param {string} text - The text to trim.
   * @returns {string} The trimmed text.
   */
  trim(text) {
    return text ? text.trim() : text;
  }

  // Other methods and logic can go here
}

const instanceN = new ScCommonMethodsz();
