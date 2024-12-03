class ScProductChoose {
  /**
   * Represents an initial function.
   * @function init
   * @description Initializes the event listeners and checks for an initially selected radio button.
   */
  init() {
    const that = this;
    that.radioBtns = "";
    that.pdtChooseWraps = "";
    that.mainModalId = "";
    that.mainModalEvent = "";
    that.childModalId = "";
    that.checkedFirstRadioBtn();
    that.handleModalApplyNowBtn();
    that.handleRadioBtns();
    that.makeContentWrapperClickable();
  }

  checkedFirstRadioBtn() {
    const that = this;
    const modals = document.querySelectorAll("a[href='#null']");
    if (modals.length) {
      modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
          //Checked the first checkbox from modal
          that.mainModalEvent = event.target.closest("a");
          const modalId = that.mainModalEvent.getAttribute("data-modal-source");

          const currentModal = document.querySelector(
            `[data-modal-id='${modalId}'] .sc-product-choose`
          );
          if (currentModal) {
            that.mainModalId = modalId;
            setTimeout(() => {
              that.radioBtns = document.querySelectorAll(
                ".c-modal .sc-product-choose .sc-radio-box__input"
              );
              that.pdtChooseWraps = document.querySelectorAll(
                ".c-modal .sc-product-choose__content-wrapper"
              );
              that.makeContentWrapperClickable();
              if (that.radioBtns.length > 0) {
                that.radioBtns[0].checked = true;

                const applyBtn = document.querySelector(
                  ".c-modal .sc-product-choose a"
                );
                const popupId = that.radioBtns[0].getAttribute("data-popup-id");
                const dataHref = that.radioBtns[0].getAttribute("data-href");
                that.childModalId = "";
                if (popupId) {
                  applyBtn.setAttribute("data-modal-source", popupId);
                  applyBtn.setAttribute("data-send", "show-overlay");
                  that.childModalId = popupId;
                } else if (dataHref) {
                  applyBtn.setAttribute("href", dataHref);
                }

                that.handleRadioBtns();
              }
            }, 100);
          }
        });
      });
    }
  }

  handleModalApplyNowBtn() {
    const that = this;
    document.body.addEventListener("click", (event) => {
      if (
        event.target.closest(".closebutton") ||
        event.target.closest(".sc-pdt-apply-with-smart-script__back") ||
        event.target.closest(".wrapper")
      ) {
        const childModal = document.querySelector(
          `.c-modal .m-text-content[data-modal-id='${that.childModalId}']`
        );
        if (childModal) {
          event.preventDefault();
          event.stopImmediatePropagation();
          that.childModalId = "";
          const mainModal = document.querySelector(
            `a[data-modal-source='${that.mainModalId}']`
          );
          if (mainModal) {
            setTimeout(() => {
              that.mainModalEvent.click();
            }, 300);
          }
        }
      }
    });
  }

  handleRadioBtns() {
    const that = this;
    if (that.radioBtns.length) {
      that.radioBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const applyBtn = document.querySelector(
            ".c-modal .sc-product-choose a"
          );
          const popupId = btn.getAttribute("data-popup-id");
          const dataHref = btn.getAttribute("data-href");
          that.childModalId = "";
          if (popupId) {
            applyBtn.setAttribute("data-modal-source", popupId);
            that.childModalId = popupId;
          } else if (dataHref) {
            applyBtn.setAttribute("href", dataHref);
          }

          handleAnalyticsCTA(
            event,
            event.target
              .closest(".sc-radio-box")
              .querySelector(".sc-radio-box__input-label"),
            {
              ctaType: "radio-button",
            }
          );
        });
      });
    }
  }

  makeContentWrapperClickable() {
    const that = this;
    console.log(that.pdtChooseWraps.length);
    if (that.pdtChooseWraps.length) {
      that.pdtChooseWraps.forEach((wrapper) => {
        wrapper.addEventListener("click", () => {
          console.log("that.pdtChooseWrap", wrapper);
          const radioInput = wrapper
            .closest(".sc-product-choose__pdt-box")
            .querySelector(".sc-radio-box__input");
          if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event("click")); // Trigger any other events tied to radio click
          }
        });
      });
    }
  }
}

// Initialize the ProductChoose class instance
const Instance2 = new ScProductChoose();
Instance2.init();
