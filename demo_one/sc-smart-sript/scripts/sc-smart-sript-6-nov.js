/* eslint-disable no-undef */
class smartScript {
  /**
   * Represents an initial function.
   * @function init
   * @description It will run on script execution
   */
  init() {
    const that = this;
    that.result = null;
    that.oneLink = null;
    that.deepLink = null;
    that.secProductChoose = document.querySelector(".sc-apply-product-choose");
    that.secProductApply = document.querySelector(".sc-apply-product");

    document.addEventListener("DOMContentLoaded", function () {
      that.initializeOnelink();
      that.deeplinkEnabledClick();
    });
  }

  //initializeOnelink
  initializeOnelink() {
    const that = this;
    var mediaSource = { keys: ["media_source"], defaultValue: "NA" };
    var campaign = { keys: ["campaign_id"] };
    var cid = { paramKey: "cid", keys: ["cid"], defaultValue: "NA" };
    var custom_ss_ui = { paramKey: "af_ss_ui", defaultValue: "true" };

    let modalApplyProducts = document.querySelectorAll(".sc-apply-product");
    if (modalApplyProducts.length) {
      modalApplyProducts.forEach((modalApplyProduct) => {
        that.oneLink = modalApplyProduct.getAttribute("data-one-link");
        that.deepLink = modalApplyProduct.getAttribute("data-deep-link");

        let deepLinkValue = { defaultValue: that.deepLink };
        let oneLinkURL = that.oneLink;

        // Generate OneLink URL
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

        // Generate QR and update link
        that.generateQr(modalApplyProduct, that.result);
        that.updateLink(modalApplyProduct, that.result);
      });
    }
  }

  //deeplinkEnabledClick
  deeplinkEnabledClick() {
    const that = this;
    //Initializing Smart Script arguments
    var oneLinkURL = "";
    var deepLinkValue = "";
    var mediaSource = { keys: ["media_source"], defaultValue: "NA" };
    var campaign = { keys: ["campaign_id"] };
    var cid = { paramKey: "cid", keys: ["cid"], defaultValue: "NA" };
    var custom_ss_ui = { paramKey: "af_ss_ui", defaultValue: "true" };

    const deeplinkBtns = document.querySelectorAll(".sc-btn-deeplink-enabled");
    if (deeplinkBtns.length) {
      deeplinkBtns.forEach((deeplinkBtn) => {
        deeplinkBtn.addEventListener("click", (event) => {
          const closest = event.target.closest("a");
          const selectedId = closest.getAttribute("href");
          if (selectedId) {
            event.preventDefault();

            setTimeout(() => {
              let activeModalEle = document.querySelector(
                ".c-modal .sc-apply-product"
              );
              console.log(activeModalEle);
              that.oneLink = activeModalEle.getAttribute("data-one-link");
              that.deepLink = activeModalEle.getAttribute("data-deep-link");
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
              that.generateQr(activeModalEle, that.result);
              that.updateLink(activeModalEle, that.result);
            }, 600);
          }
        });
      });
    }
  }

  // generate QR Code
  generateQr(activeModal, result) {
    if (result && result.clickURL) {
      const qrDiv = activeModal.querySelector(
        ".sc-apply-product__onelink-qr-container"
      );
      if (qrDiv) {
        // Check and remove any existing canvas elements
        const existingCanvases = qrDiv.querySelectorAll("canvas");
        existingCanvases.forEach((canvas) => canvas.remove());

        const qrId = qrDiv.getAttribute("id").trim();
        console.log(`Generating QR for ID: ${qrId}`);
        window.AF_SMART_SCRIPT.displayQrCode(qrId);
      }
    } else {
      console.error("Failed to generate OneLink URL");
    }
  }

  // updateLink
  updateLink(activeModal, result) {
    if (result && result.clickURL) {
      let oneLinkUrlelem = activeModal.querySelector(
        ".sc-apply-product__onelink-url-href"
      );
      if (oneLinkUrlelem) {
        oneLinkUrlelem.setAttribute("href", result.clickURL);
      }
    }
  }
}

const Instance = new smartScript();
Instance.init();
