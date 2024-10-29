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
    that.oneLink = null;
    that.deepLink = null;
    document.addEventListener("DOMContentLoaded", function () {
      const deeplinkBtns = document.querySelectorAll(
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
              console.log(result);
              that.generateQr(result)
            }
          });
        });
      }
    });
  }

  // generate QR Code
  generateQr(result) {
    console.log(result)
    if (result && result.clickURL) {
      // Display the QR code in the div
      window.AF_SMART_SCRIPT.displayQrCode("onelink-qr", {
        logo: "../assets/images/logo-mb.png", // optional logo
        colorCode: "#3498db", // optional custom color
      });

      // Optionally fire an impression
      setTimeout(() => {
        window.AF_SMART_SCRIPT.fireImpressionsLink();
      }, 1000);
    } else {
      console.error("Failed to generate OneLink URL");
    }
  }
}

const Instance = new scInsuranceCampaign();
Instance.init();
