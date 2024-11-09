/* eslint-disable no-undef */
class smartScript {
  /**
   * Represents an initial function.
   * @function init
   * @description It will run on script execution
   */
  init() {
    const that = this;
    that.oneLink = null;
    that.deepLink = null;

    //Initializing Smart Script arguments
    var oneLinkURL = "";
    var deepLinkValue = "";
    var mediaSource = { keys: ["media_source"], defaultValue: "Website" };
    var campaign = { keys: ["campaign"], defaultValue: "NA" };
    var cid = { paramKey: "cid", keys: ["cid"], defaultValue: "NA" };
    var channel = { defaultValue: "Website" };
    var custom_ss_ui = { paramKey: "af_ss_ui", defaultValue: "true" };

    document.addEventListener("DOMContentLoaded", function () {
      //Handle modal event
      document.body.addEventListener("click", function (event) {
        const anchor = event.target.closest("a");
        if (anchor) {
          const selectedId = anchor.getAttribute("href");
          if (selectedId) {
            let modalsource = anchor.getAttribute("data-modal-source");
            if (modalsource) {
              let modal = document.querySelector(".c-modal.is-open");
              let activeModal = modal.querySelector(".m-text-content");
              let activeModalId = activeModal.getAttribute("data-modal-id");
              event.preventDefault();
              if (modal && activeModalId) {
                console.log(activeModalId);
                setTimeout(() => {
                  let activeModalEle = activeModal.querySelector(
                    ".sc-pdt-apply-with-smart-script"
                  );
                  console.log(activeModalEle);
                  if (activeModalEle) {
                    that.oneLink = activeModalEle.getAttribute("data-one-link");
                    that.deepLink =
                      activeModalEle.getAttribute("data-deep-link");
                    oneLinkURL = that.oneLink;
                    deepLinkValue = {
                      defaultValue: that.deepLink,
                    };
                    console.log("oneLink--", that.oneLink);
                    console.log("deepLink--", that.deepLink);
                    //Onelink URL is generated.
                    var result = window.AF_SMART_SCRIPT.generateOneLinkURL({
                      oneLinkURL: oneLinkURL,
                      afParameters: {
                        mediaSource: mediaSource,
                        campaign: campaign,
                        deepLinkValue: deepLinkValue,
                        afCustom: [cid, custom_ss_ui],
                        channel: channel,
                      },
                    });

                    console.log("result--", result);
                    that.generateQr(activeModalEle, result);
                    that.updateLink(activeModalEle, result);
                  }
                }, 400);
              }
            }
          }
        }
      });

      that.initializeOnelink();
    });
  }

  //initializeOnelink
  initializeOnelink() {
    const that = this;
    var mediaSource = { keys: ["media_source"], defaultValue: "Website" };
    var campaign = { keys: ["campaign"], defaultValue: "NA" };
    var cid = { paramKey: "cid", keys: ["cid"], defaultValue: "NA" };
    var channel = { defaultValue: "Website" };
    var custom_ss_ui = { paramKey: "af_ss_ui", defaultValue: "true" };

    let modalApplyProducts = document.querySelectorAll(
      ".sc-pdt-apply-with-smart-script"
    );
    if (modalApplyProducts.length) {
      modalApplyProducts.forEach((modalApplyProduct) => {
        that.oneLink = modalApplyProduct.getAttribute("data-one-link");
        that.deepLink = modalApplyProduct.getAttribute("data-deep-link");

        let deepLinkValue = { defaultValue: that.deepLink };
        let oneLinkURL = that.oneLink;

        // Generate OneLink URL
        let result = window.AF_SMART_SCRIPT.generateOneLinkURL({
          oneLinkURL: oneLinkURL,
          afParameters: {
            mediaSource: mediaSource,
            campaign: campaign,
            deepLinkValue: deepLinkValue,
            afCustom: [cid, custom_ss_ui],
            channel: channel,
          },
        });

        console.log("result--", result);

        // Generate QR and update link
        that.generateQr(modalApplyProduct, result);
        that.updateLink(modalApplyProduct, result);
      });
    }
  }

  // generate QR Code
  generateQr(activeModal, result) {
    if (result && result.clickURL) {
      const qrDiv = activeModal.querySelector(
        ".sc-pdt-apply-with-smart-script__onelink-qr-container"
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
      let oneLinkUrlelems = activeModal.querySelectorAll(
        ".sc-pdt-apply-with-smart-script__onelink-url-href"
      );
      if (oneLinkUrlelems.length) {
        oneLinkUrlelems.forEach((oneLinkUrlelem) => {
          if (oneLinkUrlelem) {
            oneLinkUrlelem.setAttribute("href", result.clickURL);
          }
        });
      }
    }
  }
}

const Instance = new smartScript();
Instance.init();
