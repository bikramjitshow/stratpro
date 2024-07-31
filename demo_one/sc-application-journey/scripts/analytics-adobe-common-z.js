/* global digitalData, _satellite, $ */
/**
 * Implementation for Adobe Analytics Insurance Life Stage Campaign.
 */
class AnalyticsAdobeCommonZ {
  /**
   * Trigger adobe and google analytics
   * @param {string} title
   * @param {string} type
   * @param {string} target
   */
  handleCtaClick(title, type, target) {
    console.log({ title, type, target });
    digitalData.event = "ctaClick";
    digitalData.ctaName = title;
    digitalData.ctaType = this.getCtaType(target.className, target);
    digitalData.ctaPosition = this.calcElementLocation(target);
    _satellite.track("callToAction");
  }

  /**
   * form submit event
   */
  handleInsuranceFormSubmit(formname, ctaname, fields) {
    console.log(fields);
    if (typeof window.adobeDataLayer == "undefined") return;

    if (!window.digitalData.form) {
      window.digitalData.form = {};
    }
    //update adobeDataLayer with calculator submit event
    if (typeof window.adobeDataLayer !== "undefined") {
      if (window.digitalData.products) {
        window.digitalData.products.forEach((item, index) => {
          window.digitalData.products[index].productFields = [];
          fields.forEach((field) => {
            console.log(field);
            window.digitalData.products[index].productFields.push({
              formFieldName: field.fieldName,
              formFieldValue: field.fieldValue,
            });
          });
          window.digitalData.products[index].applicationReferenceNumber = "na";
          window.digitalData.products[index].applicationSubmissionStatus =
            "Submission Successful";
        });
      }

      let dataObject = {
        ...digitalData,
        event: "formSubmit_shortForm",
      };
      console.log({ dataObject });
      window.adobeDataLayer.push(dataObject);
      _satellite.track("formSubmit_shortForm");
    }
  }

  /**
   * form submit Status
   */
  handleFormStatus(status) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        event: "formSubmit_shortForm",
      };
      window.digitalData.form.popupName = status;
      window.adobeDataLayer.push(dataObject);
      _satellite.track("formSubmit_shortForm");
    }
  }

  /**
   * Track Insurance Form Check actions in the page using EDDL approach.
   */
  handleInsuranceFormCheck(target, formname, fields) {
    console.log(target, fields);
    if (typeof window.adobeDataLayer == "undefined") return;

    if (!window.digitalData.form) {
      window.digitalData.form = {};
    }
    if (!window.digitalData.form.formFields) {
      window.digitalData.form.formFields = [];
    }
    //update adobeDataLayer with calculator submit event
    if (typeof window.adobeDataLayer !== "undefined") {
      // window.digitalData.ctaName = target
      //   .closest(".sc-radio-box")
      //   .querySelector("label")
      //   .innerText.trim();
      // window.digitalData.ctaPosition = this.calcElementLocation(target);
      // window.digitalData.form.formFields = [];
      // fields.forEach((field) => {
      //   console.log(field);
      //   window.digitalData.form.formFields.push({
      //     formFieldName: field.fieldName,
      //     formFieldValue: field.fieldValue,
      //   });
      // });

      if (window.digitalData.products) {
        window.digitalData.products.forEach((item, index) => {
          window.digitalData.products[index].productFields = [];
          fields.forEach((field) => {
            console.log(field);
            window.digitalData.products[index].productFields.push({
              formFieldName: field.fieldName,
              formFieldValue: field.fieldValue,
            });
          });
          // window.digitalData.products[index].applicationReferenceNumber = "na";
          // window.digitalData.products[index].applicationSubmissionStatus ="Submission Successful";
        });
      }

      let dataObject = {
        ...digitalData,
        event: "ctaClick",
      };

      window.adobeDataLayer.push(dataObject);
      _satellite.track("ctaClick");
    }
  }

  /**
   * Track Form Abandon
   */
  handleFormAbandon(field) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        event: "formAbandon",
      };
      window.digitalData.form.formLastAccessedField = field || "na";
      window.adobeDataLayer.push(dataObject);
      _satellite.track("formAbandon");
    }
  }

  /**
   * Track Form Abandon
   */
  handleFormError(err) {
    if (typeof window.adobeDataLayer !== "undefined") {
      let error = [
        {
          errorCode: err.code || "na",
          errorDescription: err.description || "na",
          errorField: err.field || "na",
        },
      ];

      let dataObject = {
        ...digitalData,
        event: "formError",
      };
      window.digitalData.error = [];
      window.digitalData.error.push(...error);
      window.adobeDataLayer.push(dataObject);
      _satellite.track("formError");
    }
  }

  /**
   * Track page view actions in the page using EDDL approach.
   */
  handlePageView(data) {
    console.log("------PageView called------");
    console.log(window.digitalData);
    // let pageData = {
    //   market: "hk",
    //   language: "en",
    //   segment: "wealth",
    //   pagetype: "",
    //   productcategory: "Insurance",
    //   productsubcategory: "",
    //   productname: "Insurance Life Stage Campaign",
    //   formname: "comprehensive assessment short form",
    //   screenname: "landing",
    // };
    let products = [
      {
        productName: data.productname || "na",
        subProduct1: data.subproduct1 || "na",
        subProduct2: data.subproduct2 || "na",
      },
    ];

    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        event: "page-view",
      };
      window.digitalData.products = [];
      window.digitalData.products.push(...products);
      // window.digitalData.page.pageInfo.pageName = `${pageData.market}:${pageData.language}:${pageData.segment}:${pageData.pagetype}:${pageData.productcategory}:${pageData.productsubcategory}:${pageData.productname}:${pageData.formname}:${pageData.screenname}`;
      // window.digitalData.page.attributes.country = pageData.market;
      window.adobeDataLayer.push(dataObject);
      _satellite.track("page-view");
    }
  }

  /**
   * Track "formStart_shortForm" actions in the page using EDDL approach.
   */
  handelFormStartShortForm(data) {
    console.log("------handelFormStartShortForm called------");
    let formdata = {
      formName: data.formname || "na",
      formStepName: data.formstepname || "na",
      formType: data.formtype || "na",
      formPlatform: data.formplatform || "na",
      popupName: "na",
    };

    if (typeof window.adobeDataLayer !== "undefined") {
      let dataObject = {
        ...digitalData,
        event: "formStart_shortForm",
      };
      window.digitalData.form = {};
      window.digitalData.form.formName = formdata.formName;
      window.digitalData.form.formStepName = formdata.formStepName;
      window.digitalData.form.formType = formdata.formType;
      window.digitalData.form.formPlatform = formdata.formPlatform;

      window.adobeDataLayer.push(dataObject);
      _satellite.track("formStart_shortForm");
    }
  }

  // const mktCountryCode = Utils.getCurrentCountry();

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
   * check class name and return link type
   * @param {String} className class name of the clicked element
   * @return {String} return link type like link, button, carousel etc
   * @example
   * getCtaType('sc-btn')
   */
  getCtaType(className, target) {
    console.log({ className, target });
    if (target && target.closest(".sc-nav")) {
      return "nav-link";
    } else if (
      className == "" ||
      typeof className !== "string" ||
      typeof className.includes === "undefined"
    ) {
      return "link";
    } else if (
      className.indexOf("sc-btn") !== -1 ||
      className.indexOf("c-button") !== -1
    ) {
      return "button";
    } else if (
      className.indexOf("sc-bnr__link") !== -1 ||
      className.indexOf("slide-anchor-bg") !== -1
    ) {
      return "banner";
    } else if (className.indexOf("sc-carousel__pintiles-item") !== -1) {
      return "carousel";
    } else if (className.indexOf("sc-quick-links__link") !== -1) {
      return "quick-links";
    } else {
      return "link";
    }
  }
}

const instancezzzz = new AnalyticsAdobeCommonZ();

// export default instance;
