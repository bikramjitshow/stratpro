/* global digitalData, _satellite */

/**
 * Pre-defined ranges that can be used in tracking.
 * These ranges can be used inside data-range attributes without having to specifying the data again.
 * E.g. data-range="annualIcome" will get data from ranges.annualIncome.
 */
const newranges = {
  monthlyIncome: [
    {
      start: 0,
      end: 10000,
    },
    {
      start: 10000,
      end: 20000,
    },
    {
      start: 20000,
      end: 30000,
    },
    {
      start: 30000,
      end: 40000,
    },
    {
      start: 40000,
      end: 50000,
    },
    {
      start: 50000,
      end: 60000,
    },
    {
      start: 60000,
      end: 70000,
    },
    {
      start: 70000,
      end: 80000,
    },
    {
      start: 80000,
      end: 90000,
    },
    {
      start: 90000,
      end: 100000,
    },
    {
      start: 100000,
      end: 110000,
    },
    {
      start: 110000,
      end: 120000,
    },
    {
      start: 120000,
    },
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
    { start: 1000000 },
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
    { start: 350000 },
  ],
  dailyBalance: [
    { start: 0, end: 20000 },
    { start: 20000, end: 50000 },
    { start: 50000, end: 100000 },
    { start: 100000, end: 150000 },
    { start: 150000, end: 200000 },
    { start: 200000, end: 250000 },
    { start: 250000, end: 300000 },
    { start: 300000, end: 350000 },
    { start: 350000, end: 500000 },
    { start: 500000, end: 1000000 },
    { start: 1000000, end: 2000000 },
    { start: 2000000, end: 3000000 },
    { start: 3000000, end: 5000000 },
    { start: 5000000, end: 7500000 },
    { start: 7500000, end: 10000000 },
    { start: 10000000 },
  ],
  apr: [
    { start: 0, end: 2 },
    { start: 2, end: 5 },
    { start: 5, end: 7 },
    { start: 7, end: 10 },
    { start: 10, end: 15 },
    { start: 15, end: 20 },
    { start: 20, end: 25 },
    { start: 25 },
  ],
  annualIncome: [
    {
      start: 0,
      end: 120000,
    },
    {
      start: 120000,
      end: 240000,
    },
    {
      start: 240000,
      end: 360000,
    },
    {
      start: 360000,
      end: 480000,
    },
    {
      start: 480000,
      end: 600000,
    },
    {
      start: 600000,
      end: 720000,
    },
    {
      start: 720000,
      end: 840000,
    },
    {
      start: 840000,
      end: 960000,
    },
    {
      start: 960000,
      end: 1080000,
    },
    {
      start: 1080000,
      end: 1200000,
    },
    {
      start: 1200000,
      end: 1320000,
    },
    {
      start: 1320000,
      end: 1440000,
    },
    {
      start: 1440000,
    },
  ],
  age: [
    { start: 0, end: 18 },
    { start: 18, end: 25 },
    { start: 25, end: 35 },
    { start: 35, end: 45 },
    { start: 45, end: 55 },
    { start: 55, end: 65 },
    { start: 65, end: 75 },
    { start: 75 },
  ],
};
/**
 * Implementation for Adobe Analytics Common.
 */
class AnalyticsAdobeCommon {
  /**
   * Calculate range values based on original PI value.
   */
  calculateRanges(fieldNameValue, currentValue) {
    let calculatedRange = currentValue;
    if (!calculatedRange) {
      calculatedRange = "na";
    } else {
      let val = parseInt(calculatedRange.toString().replace(/,/g, ""), 10);
      for (let i = 0; i < newranges[fieldNameValue].length; i++) {
        let startVal = newranges[fieldNameValue][i].start;
        let endVal = newranges[fieldNameValue][i].end;
        if (val >= startVal && (endVal ? val < endVal : true)) {
          if (fieldNameValue === "monthlyIncome") {
            calculatedRange = endVal
              ? (startVal == 0
                  ? startVal + "-lt"
                  : (Math.abs(startVal) / 1000).toFixed() + "k-lt") +
                (Math.abs(endVal) / 1000).toFixed() +
                "k"
              : "ge120k";
            break;
          } else if (fieldNameValue === "loanAmount") {
            calculatedRange = endVal
              ? (startVal == 0
                  ? startVal + "-lt"
                  : (Math.abs(startVal) / 1000).toFixed() + "k-lt") +
                (endVal == 1000000
                  ? "1m"
                  : (Math.abs(endVal) / 1000).toFixed() + "k")
              : "ge1m";
            break;
          } else if (fieldNameValue === "annualIncome") {
            calculatedRange = endVal
              ? startVal == 0
                ? startVal + "-lt"
                : (startVal >= 1000000
                    ? Math.abs(startVal) / 1000000 + "m-lt"
                    : (Math.abs(startVal) / 1000).toFixed() + "k-lt") +
                  (endVal >= 1000000
                    ? Math.abs(endVal) / 1000000 + "m"
                    : (Math.abs(endVal) / 1000).toFixed() + "k")
              : "ge1.44m";
            break;
          } else if (fieldNameValue === "repaymentAmount") {
            calculatedRange = endVal
              ? (startVal == 0
                  ? startVal + "-lt"
                  : (Math.abs(startVal) / 1000).toFixed() + "k-lt") +
                (Math.abs(endVal) / 1000).toFixed() +
                "k"
              : "ge35k";
            break;
          } else if (fieldNameValue === "dailyBalance") {
            calculatedRange = endVal
              ? startVal == 0
                ? startVal + "-lt" + (Math.abs(endVal) / 1000).toFixed() + "k"
                : (Math.abs(startVal) / 1000).toFixed() < 1000
                ? (Math.abs(startVal) / 1000).toFixed() +
                  "k-lt" +
                  (Math.abs(endVal) / 1000).toFixed() +
                  "k"
                : (Math.abs(startVal) / 1000000).toFixed() +
                  "m-lt" +
                  (Math.abs(endVal) / 1000000).toFixed() +
                  "m"
              : "ge10m";

            break;
          } else if (fieldNameValue === "apr") {
            calculatedRange = endVal
              ? startVal == 0
                ? startVal + "-lt" + endVal + "%"
                : startVal + "%-lt" + endVal + "%"
              : "ge25%";
            break;
          } else if (fieldNameValue === "age") {
            calculatedRange = endVal ? startVal + "-lt" + endVal : "ge75";
            break;
          }
        }
      }
    }
    return calculatedRange;
  }
  /**
   * Track customer interaction with calculators.
   */
  handleProductCalculatorSubmit(calculatorName, fields) {
    digitalData.calculator = {
      name: calculatorName,
      fields: fields,
    };
    _satellite.track("calculatorSubmit");

    //update adobeDataLayer with calculator submit event
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        event: "calculatorSubmit",
      };

      //change calculator payload key names for adobeDataLayer
      let newFields = [];
      let obj = {};
      fields.forEach((el) => {
        obj = { ...el };
        obj.formFieldName = obj.fieldName;
        delete obj.fieldName;
        obj.formFieldValue = obj.fieldValue;
        delete obj.fieldValue;
        newFields.push(obj);
      });
      let calculator = {
        name: calculatorName,
        fields: newFields,
      };
      delete dataObject.calculator;
      dataObject.calculator = calculator;

      window.adobeDataLayer.push(dataObject);
    }
  }
  /**
   * Track customer interaction with calculators using EDDL approach.
   */
  handleCalculatorSubmitEDDL(calculatorName, fields) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        calculator: {
          name: calculatorName,
          fields: fields,
        },
        event: "calculatorSubmit",
      };
      window.adobeDataLayer.push(dataObject);
    }
  }
  /**
   * Track click to action in the page using EDDL approach.
   */
  handleCtaClickEDDL(fields) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        customLinkClick: {
          customLinkText: fields.customLinkText,
          customLinkRegion: fields.customLinkRegion,
          customLinkType: fields.customLinkType,
          customLinkName: fields.customLinkName,
        },
        event: "ctaClick",
      };
      if (fields.form) {
        dataObject.form = fields.form;
      }
      dataObject.ctaName = fields.customLinkName;
      dataObject.ctaPosition = fields.customLinkRegion;
      dataObject.ctaType = fields.customLinkType;
      window.adobeDataLayer.push(dataObject);
    }
  }
  /**
   * Track popup view actions in the page using EDDL approach.
   */
  handlePopupViewedEDDL(popupdata) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        form: popupdata,
        event: "popupViewed",
      };
      window.adobeDataLayer.push(dataObject);
    }
  }
  /**
   * Track filter applied actions in the page using EDDL approach.
   */
  handleFilterAppliedEDDL(fields) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        customLinkClick: {
          customLinkText: fields.customLinkText,
          customLinkRegion: fields.customLinkRegion,
          customLinkType: fields.customLinkType,
          customLinkName: fields.customLinkName,
        },
        customFilter: {
          filterTitle: fields.customFilter.filterTitle,
          filterValue: fields.customFilter.filterValue,
        },
        event: "filterApplied",
      };
      dataObject.ctaName = fields.customLinkName;
      window.adobeDataLayer.push(dataObject);
    }
  }

  /**
   * calculate vertical position
   * @param {Event} target event of the selector
   * @return {String} return top, middle, bottom, persistent-bar, lightbox etc.
   * @example
   * calcElementLocation(event)
   */
  calcElementLocation(target) {
    if (!target) return "";
    if (target.closest(".c-modal") || target.closest(".sc-modal")) {
      return "lightbox";
    }

    if (
      typeof target.className === "string" &&
      typeof target.className.includes !== "undefined" &&
      (target.className.indexOf("sc-card-comparator__compare-btn") !== -1 ||
        target.className.indexOf("sc-card-comparator__card-remove") !== -1)
    ) {
      return "bottom";
    }

    if (
      target.closest(".m-persistent-bar") ||
      target.closest(".sc-persistent-bar") ||
      target.closest(".m-persistent-bootom-bar")
    ) {
      return "persistent-bar";
    }

    //Sorted array of positions
    let positions = [
      {
        name: "top",
        depth: 30,
      },
      {
        name: "middle",
        depth: 70,
      },
      {
        name: "bottom",
        depth: 100,
      },
    ];
    let maxHeight = Math.max(document.body.clientHeight, window.outerHeight);
    if (maxHeight <= 0) {
      return "";
    }
    let scrollDepth = (parseInt(this.getPosition(target)) * 100) / maxHeight;
    for (let i = 0; i < positions.length; i++) {
      if (scrollDepth < positions[i].depth) {
        return positions[i].name;
      }
    }
    if (
      typeof target.parentNode.parentNode.className === "string" &&
      typeof target.parentNode.parentNode.className.includes !== "undefined" &&
      target.parentNode.parentNode.className.indexOf("sc-hdr__search") !== -1
    ) {
      return "top";
    }
    return "bottom";
  }
  /**
   * return absolute position of selected div in px
   * @param {String} element class elements name as an object
   * @return {Number} return horizontal position in px
   * @example
   * getPosition('.selector')
   */
  getPosition(element) {
    if (!element) return "";
    let yPosition = 0;
    while (element) {
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }
    return yPosition;
  }

  /**
   * Trigger adobe and google analytics
   * @param {string} title
   * @param {string} type
   * @param {string} target
   */
  handleCtaClick(title, type, target) {
    digitalData.event = "ctaClick";
    digitalData.ctaName = title;
    digitalData.ctaType = type;
    digitalData.ctaPosition = this.calcElementLocation(target);
    _satellite.track("callToAction");
  }
  /**
   * delay 1 second when once moved the slider bar and trigger events
   * @example
   * debounceEvents()
   */
  debounceEvents(f, delay) {
    let timer = null;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = window.setTimeout(function () {
        f.apply(context, args);
      }, delay || 500);
    };
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
    return xClick < median ? "left" : "right";
  }
}

const instance2 = new AnalyticsAdobeCommon();

// export default instance;
