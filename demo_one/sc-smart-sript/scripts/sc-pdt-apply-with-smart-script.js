/* eslint-disable no-undef */
class SmartScript {
  constructor() {
    this.oneLink = null;
    this.deepLink = null;

    // Define shared settings
    this.defaultParams = {
      mediaSource: { keys: ['media_source'], defaultValue: 'Website' },
      campaign: { keys: ['campaign'], defaultValue: 'NA' },
      cid: { paramKey: 'cid', keys: ['cid'], defaultValue: 'NA' },
      channel: { defaultValue: 'Website' },
      custom_ss_ui: { paramKey: 'af_ss_ui', defaultValue: 'true' }
    };
  }

  /**
   * Represents an initial function.
   * @function init
   * @description It will run on script execution
   */
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      // Handle modal event
      document.body.addEventListener('click', event => {
        const anchor = event.target.closest('a');
        if (anchor) {
          this.handleModalEvent(anchor, event);
        }
      });

      this.initializeOnelink();
    });
  }

  /**
   * Handle character encode string
   */
  customEncodeUrl(url = '') {
    let encodedUrl = url
      .replace(/&/g, '%26')
      .replace(/\?/g, '%3F')
      .replace(/:/g, '%3A')
      .replace(/\//g, '%2F');
    return encodedUrl;
  }

  /**
   * Handle modal click events
   */
  handleModalEvent(anchor, event) {
    const selectedId = anchor.getAttribute('href');
    if (selectedId) {
      const modalsource = anchor.getAttribute('data-modal-source');
      if (modalsource) {
        const modal = document.querySelector('.c-modal.is-open');
        if (modal) {
          event.preventDefault();
          const activeModal = modal.querySelector('.m-text-content');
          const activeModalId = activeModal?.getAttribute('data-modal-id');
          if (activeModal && activeModalId) {
            setTimeout(() => {
              const activeModalEle = activeModal.querySelector('.sc-pdt-apply-with-smart-script');
              if (activeModalEle) {
                this.oneLink = activeModalEle.getAttribute('data-one-link');
                this.deepLink = activeModalEle.getAttribute('data-deep-link');
                const encodedDeepLink = this.customEncodeUrl(this.deepLink);
                const result = this.generateOneLinkURL(this.oneLink, encodedDeepLink);
                if (result) {
                  this.generateQr(activeModalEle, result);
                  this.updateLink(activeModalEle, result);
                }
              }
            }, 400);
          }
        }
      }
    }
  }

  /**
   * Initialize OneLink URL on load
   */
  initializeOnelink() {
    const modalApplyProducts = document.querySelectorAll('.sc-pdt-apply-with-smart-script');
    modalApplyProducts.forEach(modalApplyProduct => {
      this.oneLink = modalApplyProduct.getAttribute('data-one-link');
      this.deepLink = modalApplyProduct.getAttribute('data-deep-link');
      const encodedDeepLink = this.customEncodeUrl(this.deepLink);
      const result = this.generateOneLinkURL(this.oneLink, encodedDeepLink);
      if (result) {
        this.generateQr(modalApplyProduct, result);
        this.updateLink(modalApplyProduct, result);
      }
    });
  }

  /**
   * Generate OneLink URL with predefined parameters
   */
  generateOneLinkURL(oneLinkURL, deepLinkValue) {
    if (!oneLinkURL) return null;
    const { mediaSource, campaign, cid, channel, custom_ss_ui } = this.defaultParams;
    const deepLinkParam = { defaultValue: deepLinkValue };

    return window.AF_SMART_SCRIPT.generateOneLinkURL({
      oneLinkURL: oneLinkURL,
      afParameters: {
        mediaSource,
        campaign,
        deepLinkValue: deepLinkParam,
        afCustom: [cid, custom_ss_ui],
        channel
      }
    });
  }

  /**
   * Generate QR Code
   */
  generateQr(activeModal, result) {
    if (result && result.clickURL) {
      const qrDiv = activeModal.querySelector(
        '.sc-pdt-apply-with-smart-script__onelink-qr-container'
      );
      if (qrDiv) {
        qrDiv.querySelectorAll('canvas').forEach(canvas => canvas.remove()); // Remove existing QR canvases
        const qrId = qrDiv.getAttribute('id').trim();
        window.AF_SMART_SCRIPT.displayQrCode(qrId);
      }
    }
  }

  /**
   * Update generated link
   */
  updateLink(activeModal, result) {
    if (result && result.clickURL) {
      activeModal
        .querySelectorAll('.sc-pdt-apply-with-smart-script__onelink-btn')
        .forEach(oneLinkUrlelem => {
          oneLinkUrlelem.setAttribute('href', result.clickURL);
        });
    }
  }
}

const instance = new SmartScript();
instance.init();

export default instance;
