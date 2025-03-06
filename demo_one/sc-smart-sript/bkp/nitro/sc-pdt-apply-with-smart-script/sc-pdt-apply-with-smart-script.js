class ScSmartScript {
  constructor() {
    this.oneLink = null;
    this.deepLink = null;

    // Define shared settings
    this.defaultParams = {
      mediaSource: { keys: ['media_source'], defaultValue: 'Website' },
      campaign: { keys: ['campaign'], defaultValue: 'NA' },
      cid: { paramKey: 'cid', keys: ['cid'], defaultValue: 'NA' },
      channel: { defaultValue: 'Website' },
      is_retargeting: { paramKey: 'is_retargeting', defaultValue: 'true' },
      custom_ss_ui: { paramKey: 'af_ss_ui', defaultValue: 'true' }
    };
  }

  /**
   * Represents an initial function.
   * @function init
   * @description It will run on script execution
   */
  init() {
    // Handle modal event
    document.body.addEventListener('click', event => {
      const anchor = event.target.closest('a[data-modal-source][href]');
      if (anchor) {
        setTimeout(() => {
          this.handleModalEvent(anchor, event);
        }, 500);
      }
    });

    this.initializeOnelink();
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
    const modalSource = anchor.getAttribute('data-modal-source');
    if (modalSource) {
      const modal = document.querySelector('.sc-modal.sc-modal--show');
      if (modal) {
        event.preventDefault();
        const activeModal = modal.querySelector('.sc-modal__content');
        const activeModalId = activeModal?.getAttribute('data-modal-id');
        if (activeModal && activeModalId) {
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
    const {
      mediaSource,
      campaign,
      cid,
      channel,
      custom_ss_ui,
      is_retargeting
    } = this.defaultParams;
    const deepLinkParam = { defaultValue: deepLinkValue };

    return window.AF_SMART_SCRIPT.generateOneLinkURL({
      oneLinkURL: oneLinkURL,
      afParameters: {
        mediaSource,
        campaign,
        deepLinkValue: deepLinkParam,
        afCustom: [cid, custom_ss_ui, is_retargeting],
        channel
      }
    });
  }

  /**
   * Generate QR Code
   */
  generateQr(activeModal, result) {
    if (!result || !result.clickURL) return; // Ensure result and clickURL exist before proceeding

    const qrDiv = activeModal.querySelector(
      '.sc-pdt-apply-with-smart-script__onelink-qr-container'
    );

    if (qrDiv) {
      // Remove existing QR canvases
      qrDiv.querySelectorAll('canvas').forEach(canvas => canvas.remove());
      qrDiv.setAttribute(
        'id',
        qrDiv.getAttribute('id') + '-' + Math.floor(Math.random() * 100) + 1
      );
      // Ensure the QR container has a valid ID before proceeding
      const qrId = qrDiv.getAttribute('id')?.trim();
      if (qrId) {
        // Display the QR code using the specified ID
        if (window.AF_SMART_SCRIPT?.displayQrCode) {
          window.AF_SMART_SCRIPT.displayQrCode(qrId);
        }
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

const instance = new ScSmartScript();
window.addEventListener('load', function() {
  instance.init();
});
export default instance;
