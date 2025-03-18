import { handleAnalyticsCTA } from '../../../../../nitro/src/js/sc-common-methods';
class ScProductChoose {
  /**
   * Represents an initial function.
   * @function init
   * @description Initializes the event listeners and checks for an initially selected radio button.
   */
  init() {
    const that = this;
    that.radioBtns = '';
    that.radioLabels = '';
    that.pdtChooseWraps = '';
    that.mainModalId = '';
    that.mainModalEvent = '';
    that.childModalId = '';
    that.checkedFirstRadioBtn();
    that.handleModalApplyNowBtn();
    that.handleRadioBtns();
    that.handleRadioLabels();
    that.makeContentWrapperClickable();
  }

  /**
   * handle checked First Radio Button
   *
   */
  checkedFirstRadioBtn() {
    const that = this;
    const modals = document.querySelectorAll("a[href='#null']");
    if (modals.length) {
      modals.forEach(modal => {
        modal.addEventListener('click', event => {
          //Checked the first checkbox from modal
          that.mainModalEvent = event.target.closest('a');
          const modalId = that.mainModalEvent.getAttribute('data-modal-source');

          const currentModal = document.querySelector(
            `[data-modal-id='${modalId}'] .sc-product-choose`
          );
          if (currentModal) {
            that.mainModalId = modalId;
            setTimeout(() => {
              that.radioBtns = document.querySelectorAll(
                '.sc-modal .sc-product-choose .sc-radio-box__input'
              );
              that.radioLabels = document.querySelectorAll(
                '.sc-modal .sc-product-choose .sc-radio-box__input-label'
              );
              that.pdtChooseWraps = document.querySelectorAll(
                '.sc-modal .sc-product-choose__content-wrapper'
              );
              that.handleRadioLabels();
              that.makeContentWrapperClickable();
              if (that.radioBtns.length > 0) {
                that.radioBtns[0].checked = true;

                const applyBtn = document.querySelector('.sc-modal .sc-product-choose a');
                const popupId = that.radioBtns[0].getAttribute('data-popup-id');
                const dataHref = that.radioBtns[0].getAttribute('data-href');
                if (popupId) {
                  applyBtn.setAttribute('data-modal-source', popupId);
                  applyBtn.setAttribute('data-send', 'show-overlay');
                } else if (dataHref) {
                  applyBtn.setAttribute('href', dataHref);
                }

                that.handleRadioBtns();
              }
            }, 100);
          }
        });
      });
    }
  }

  /**
   * handle Modal Apply Now Btn
   *
   */

  handleModalApplyNowBtn() {
    const that = this;
    document.body.addEventListener('click', event => {
      const closestAnchor = event.target.closest('a');

      // Close button or back button inside modal
      if (
        event.target.closest('.sc-modal__close-button') ||
        event.target.closest('.sc-pdt-apply-with-smart-script__back')
      ) {
        if (that.childModalId && that.mainModalId) {
          event.preventDefault();
          event.stopImmediatePropagation();
          that.childModalId = '';

          const mainModal = document.querySelector(`a[data-modal-source='${that.mainModalId}']`);
          if (mainModal) {
            setTimeout(() => {
              that.mainModalEvent.click();
            }, 300);
          }
          that.mainModalId = '';
        }
      }
      // Click outside modal wrapper but inside modal
      else if (
        event.target.closest('.sc-modal--show') && // Inside modal
        !event.target.closest('.sc-modal__wrapper') // But outside modal content
      ) {
        if (that.childModalId && that.mainModalId) {
          event.preventDefault();
          event.stopImmediatePropagation();
          that.childModalId = '';
          const mainModal = document.querySelector(`a[data-modal-source='${that.mainModalId}']`);
          if (mainModal) {
            setTimeout(() => {
              that.mainModalEvent.click();
            }, 300);
          }
          that.mainModalId = '';
        }
      }
      // Track child modal opening
      else if (
        event.target.closest('.sc-modal--show') &&
        closestAnchor &&
        closestAnchor.getAttribute('href') === '#null'
      ) {
        that.childModalId = closestAnchor.getAttribute('data-modal-source');
      }
    });
  }

  /** Handle Radio Btns*/
  handleRadioBtns() {
    const that = this;
    if (that.radioBtns.length) {
      that.radioBtns.forEach(btn => {
        btn.addEventListener('click', event => {
          const applyBtn = document.querySelector('.sc-modal .sc-product-choose a');
          const popupId = btn.getAttribute('data-popup-id');
          const dataHref = btn.getAttribute('data-href');
          that.childModalId = '';
          if (popupId) {
            applyBtn.setAttribute('data-modal-source', popupId);
            that.childModalId = popupId;
          } else if (dataHref) {
            applyBtn.setAttribute('href', dataHref);
          }

          handleAnalyticsCTA(
            event,
            event.target.closest('.sc-radio-box').querySelector('.sc-radio-box__input-label'),
            {
              ctaType: 'radio-button'
            }
          );
        });
      });
    }
  }

  /**
   * radio label click handler
   */

  handleRadioLabels() {
    const that = this;
    if (that.radioLabels.length) {
      that.radioLabels.forEach(radiolabel => {
        radiolabel.addEventListener('click', () => {
          const radioInput = radiolabel
            .closest('.sc-product-choose__pdt-box')
            .querySelector('.sc-radio-box__input');
          if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('click'));
          }
        });
      });
    }
  }

  /**
   * Content wrapper click handler
   *
   */
  makeContentWrapperClickable() {
    const that = this;
    if (that.pdtChooseWraps.length) {
      that.pdtChooseWraps.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
          const radioInput = wrapper
            .closest('.sc-product-choose__pdt-box')
            .querySelector('.sc-radio-box__input');
          if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('click'));
          }
        });
      });
    }
  }
}

const instance = new ScProductChoose();
window.addEventListener('load', function() {
  instance.init();
});

export default instance;
