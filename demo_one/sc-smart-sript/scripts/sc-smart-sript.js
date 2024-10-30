/* eslint-disable no-undef */
class scInsuranceCampaign {
  constructor() {
    // this.AnalyticsAdobeCommon = new AnalyticsAdobeCommon();
    this.ScCommonMethods = new ScCommonMethods();
  }

  /**
   * Represents a Initial function.
   * @function init
   * @description It will run on script excution
   */
  init() {
    const that = this;
    that.result = null;
    that.oneLink = null;
    that.deepLink = null;
    that.secProductChoose = document.querySelector(".sc-apply-product-choose");
    that.secProductApply = document.querySelector(".sc-apply-product");

    //Initializing Smart Script arguments
    var oneLinkURL = "";
    var deepLinkValue = "";
    var mediaSource = { keys: ["media_source"], defaultValue: "NA" };
    var campaign = { keys: ["campaign_id"] };
    var cid = { paramKey: "cid", keys: ["cid"], defaultValue: "NA" };
    var custom_ss_ui = { paramKey: "af_ss_ui", defaultValue: "true" };

    document.addEventListener("DOMContentLoaded", function () {
      console.log("result", that.result);
      const deeplinkBtns = that.secProductApply.querySelectorAll(
        ".sc-btn-deeplink-enabled"
      );
      if (deeplinkBtns.length) {
        deeplinkBtns.forEach((deeplinkBtn) => {
          deeplinkBtn.addEventListener("click", (event) => {
            const closest = event.target.closest("a");
            const selectedId = closest.getAttribute("href");
            if (selectedId) {
              event.preventDefault();
              that.oneLink = closest.getAttribute("data-one-link");
              that.deepLink = closest.getAttribute("data-deep-link");
              oneLinkURL = that.oneLink;
              deepLinkValue = {
                defaultValue: that.deepLink,
              };

              //Onelink URL is generated.
              that.result = window.AF_SMART_SCRIPT.generateOneLinkURL({
                oneLinkURL: oneLinkURL,
                afParameters: {
                  mediaSource: mediaSource,
                  campaign: campaign,
                  deepLinkValue: deepLinkValue,
                  afCustom: [cid, custom_ss_ui],
                },
              });

              console.log("result--", that.result);
              setTimeout(() => {
                that.generateQr(that.result);
                that.updateLink(that.result);
              }, 500);
            }
          });
        });
      }
    });
  }

  // radiod
  radioHandeler() {
    const that = this;
    const radioBoxes = that.secProductApply.querySelectorAll(
      ".sc-radio-box__input"
    );
    if (radioBoxes.length) {
      radioBoxes.forEach((radioBox) => {
        radioBox.addEventListener("click", (event) => {
          const closest = event.target.closest("a");
          const selectedId = closest.getAttribute("href");
          if (selectedId) {
            event.preventDefault();
          }
        });
      });
    }
  }

  // generate QR Code
  generateQr(result) {
    console.log(result);
    if (result && result.clickURL) {
      // Display the QR code in the div
      const qrOptions = {
        logo: "../assets/images/logo-mb.png",
        codeColor: "#333333",
      };
      window.AF_SMART_SCRIPT.displayQrCode("onelink-qr");
    } else {
      console.error("Failed to generate OneLink URL");
    }
  }

  // updateLink
  updateLink(result) {
    let result_url = result.clickURL;
    console.log(result_url);
    let oneLinkUrlelem = document.querySelector(
      ".sc-apply-product__onelink-url-href"
    );
    oneLinkUrlelem.setAttribute("href", result_url);
  }
}

const Instance = new scInsuranceCampaign();
Instance.init();
