class ScProductChoose {
  /**
   * Initializes the event listeners and checks for an initially selected radio button.
   */
  init() {
    this.radioBtns = "";
    this.pdtChooseWraps = "";
    this.mainModalId = "";
    this.mainModalEvent = "";
    this.childModalId = "";
    this.checkedFirstRadioBtn();
    this.handleModalApplyNowBtn();
    this.handleRadioBtns();
    this.makeContentWrapperClickable();
  }

  /**
   * Checks the first radio button and updates the Apply button attributes.
   */
  checkedFirstRadioBtn() {
    const modals = document.querySelectorAll("a[href='#null']");
    if (modals.length) {
      modals.forEach((modal) =>
        modal.addEventListener("click", (event) => {
          console.log("modal click open");
          this.mainModalEvent = event.target.closest("a");
          const modalId = this.mainModalEvent.getAttribute("data-modal-source");
          const currentModal = document.querySelector(
            `[data-modal-id='${modalId}'] .sc-product-choose`
          );

          if (currentModal) {
            this.mainModalId = modalId;
            setTimeout(() => {
              this.initializeRadioButtons(".sc-modal .sc-product-choose");
            }, 100);
          }
        })
      );
    }

    // For cases without modals
    setTimeout(() => {
      this.initializeRadioButtons(".sc-product-choose");
    }, 100);
  }

  /**
   * Initializes radio buttons and sets up the Apply button attributes.
   * @param {string} selector - Selector to find the parent element containing radio buttons.
   */
  initializeRadioButtons(selector) {
    this.radioBtns = document.querySelectorAll(
      `${selector} .sc-radio-box__input`
    );
    this.pdtChooseWraps = document.querySelectorAll(
      `${selector} .sc-product-choose__content-wrapper`
    );
    console.log({ selector });
    console.log(this.radioBtns);
    console.log(this.pdtChooseWraps);

    this.makeContentWrapperClickable();
    if (this.radioBtns.length > 0) {
      const firstRadio = this.radioBtns[0];
      firstRadio.checked = true;
      this.updateApplyButton(firstRadio);
      this.handleRadioBtns();
    }
  }

  /**
   * Updates the Apply button's attributes based on the selected radio button.
   * @param {HTMLElement} radioButton - The selected radio button.
   */
  updateApplyButton(radioButton) {
    const applyBtn = document.querySelector(
      ".sc-modal .sc-product-choose a"
    );
    console.log(applyBtn);
    const popupId = radioButton.getAttribute("data-popup-id");
    const dataHref = radioButton.getAttribute("data-href");

    this.childModalId = popupId || "";
    if (popupId) {
      applyBtn.setAttribute("data-modal-source", popupId);
      applyBtn.setAttribute("data-send", "show-overlay");
    } else if (dataHref) {
      applyBtn.setAttribute("href", dataHref);
    }
  }

  /**
   * Handles the Apply Now button's behavior, ensuring proper modal interaction.
   */
  // handleModalApplyNowBtn() {
  //   const that = this;
  //   document.body.addEventListener("click", (event) => {
  //     if (
  //       event.target.closest(".closebutton") ||
  //       event.target.closest(".sc-pdt-apply-with-smart-script__back") ||
  //       event.target.closest(".wrapper")
  //     ) {
  //       const childModal = document.querySelector(
  //         `.sc-modal .sc-modal__content[data-modal-id='${that.childModalId}']`
  //       );
  //       if (childModal) {
  //         event.preventDefault();
  //         event.stopImmediatePropagation();
  //         that.childModalId = "";
  //         const mainModal = document.querySelector(
  //           `a[data-modal-source='${that.mainModalId}']`
  //         );
  //         console.log(childModal)
  //         if (mainModal) {
  //           setTimeout(() => {
  //             that.mainModalEvent.click();
  //           }, 300);
  //         }
  //       }
  //     }
  //   });
  // }
  handleModalApplyNowBtn() {
    document.body.addEventListener("click", (event) => {
      const closeSelectors = [
        ".closebutton",
        ".sc-pdt-apply-with-smart-script__back",
        ".wrapper",
      ];
      console.log(closeSelectors)
      if (closeSelectors.some((selector) => event.target.closest(selector))) {
        const childModal = document.querySelector(
          `.sc-modal .sc-modal__content[data-modal-id='${this.childModalId}']`
        );
        console.log(childModal)
        if (childModal) {
          event.preventDefault();
          event.stopImmediatePropagation();
          this.childModalId = "";
          const mainModalTrigger = document.querySelector(
            `a[data-modal-source='${this.mainModalId}']`
          );
          console.log(mainModalTrigger)
          if (mainModalTrigger) {
            setTimeout(() => this.mainModalEvent.click(), 300);
          }
        }
      }
    });
  }

  /**
   * Sets up click handlers for radio buttons to update Apply button attributes dynamically.
   */
  handleRadioBtns() {
    this.radioBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        this.updateApplyButton(btn);
        handleAnalyticsCTA(
          event,
          btn
            .closest(".sc-radio-box")
            .querySelector(".sc-radio-box__input-label"),
          { ctaType: "radio-button" }
        );
      });
    });
  }

  /**
   * Makes the content wrapper clickable to select the corresponding radio button.
   */
  makeContentWrapperClickable() {
    this.pdtChooseWraps.forEach((wrapper) => {
      wrapper.addEventListener("click", () => {
        const radioInput = wrapper
          .closest(".sc-product-choose__pdt-box")
          .querySelector(".sc-radio-box__input");

        if (radioInput) {
          radioInput.checked = true;
          radioInput.dispatchEvent(new Event("click")); // Trigger other events tied to the radio click
        }
      });
    });
  }
}

// Initialize the ProductChoose class instance
const Instance2 = new ScProductChoose();
Instance2.init();
