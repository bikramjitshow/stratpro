/* eslint-disable no-undef */
class ProductChoose {
  /**
   * Represents an initial function.
   * @function init
   * @description Initializes the event listeners and checks for an initially selected radio button.
   */
  init() {
    const that = this;
    that.buttonSelector =
      ".sc-product-choose .sc-btn, .c-modal .sc-product-choose .sc-btn";
    that.radioSelector = ".sc-product-choose .sc-radio-box__input";

    //Handle popup open
    that.mainModalId = "";
    let modalOpen = false;
    setTimeout(() => {
      const openModals = document.querySelectorAll("a[href='#null']");
      if (openModals.length) {
        openModals.forEach(function (el) {
          el.addEventListener("click", () => {
            modalOpen = true;
            that.mainModalId = el.getAttribute("data-modal-source");
          });
        });
      }
    }, 100);

    that.ssPopup = false;
    //Handle modal close event
    document.body.addEventListener("click", function (event) {
      if (modalOpen) {
        // modal on
        let anchor = event.target.closest("a");
        if (anchor) {
          const selectedId = anchor.getAttribute("href");
          if (selectedId) {
            that.checkInitialRadio();
            setTimeout(() => {
              let modal = document.querySelector(".c-modal.is-open");
              let activeModal = modal.querySelector(".m-text-content");
              let activeModalId = activeModal.getAttribute("data-modal-id");
              if (modal && activeModalId) {
                console.log({ modal, activeModalId });
                that.backBtnHandler(that.mainModalId);
              }
            }, 400);
          }
        }

        // modal off
        if (
          event.target.className.indexOf("closebutton") !== -1 ||
          event.target.className.indexOf("wrapper") !== -1
        ) {
          that.ssPopup = Array.from(
            document.querySelector(".m-text-content").children
          ).some((child) =>
            child.classList.contains("sc-pdt-apply-with-smart-script")
          );
          modalOpen = false;
          if (that.ssPopup) {
            that.applyProductModalClosed(that.mainModalId);
          }
        }
      }
    });

    // Initialize event listeners on document ready
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(() => {
        that.initEventListeners();
        that.checkInitialRadio();
      }, 400);
    });
  }

  /**
   * Updates button attributes based on the selected radio button.
   * @param {HTMLElement} radio - The selected radio input element.
   */
  updateButtonAttributes(radio) {
    const that = this;
    const button = document.querySelector(that.buttonSelector);
    if (!button) return;

    // Get the data attributes from the radio input
    const dataModalIdCode = radio.getAttribute("data-popup-id");
    const dataHref = radio.getAttribute("data-href");

    // Clear previous custom attributes
    button.removeAttribute("data-modal-source");
    button.removeAttribute("data-send");
    button.setAttribute("href", "#null");

    // Set the new attributes based on the radio data attributes
    if (dataHref) {
      button.setAttribute("href", dataHref);
    } else if (dataModalIdCode) {
      button.setAttribute("data-modal-source", dataModalIdCode);
      button.setAttribute("data-send", "show-overlay");
    }
  }

  /**
   * Handles click events on radio buttons and action buttons.
   * @param {Event} event - The event triggered by clicking a radio or button.
   */
  handleClick(event) {
    const that = this;
    const applyProductChoose = event.target.closest(".sc-product-choose");

    // Handle radio button selection
    if (applyProductChoose && event.target.matches(that.radioSelector)) {
      if (event.target.checked) {
        // Log the label value of the selected radio button
        const label = document.querySelector(`label[for="${event.target.id}"]`);
        if (label) {
          console.log(label.innerText.trim()); // Log the label text
        }

        // Call ctaClick with the event
        that.ctaClick(event);
        that.triggerCtaClickTagging(event);
        that.updateButtonAttributes(event.target);
      }
    }

    // Handle button click to navigate to dynamically set href
    if (event.target.matches(".sc-btn")) {
      const href = event.target.getAttribute("href");
      if (href && href !== "#null") {
        event.preventDefault();
        window.location.href = href;
      }
    }
  }

  /**
   * Checks for an initially selected radio button on page load.
   */
  checkInitialRadio() {
    const that = this;
    // Select all forms with the specified class
    const forms = document.querySelectorAll(".sc-product-choose");

    forms.forEach((form) => {
      // Check if there's already a checked radio button within the current form
      let checkedRadio = form.querySelector(".sc-radio-box__input:checked");

      // If none are checked, select the first radio button by default
      if (!checkedRadio) {
        checkedRadio = form.querySelector(".sc-radio-box__input");
        if (checkedRadio) {
          checkedRadio.checked = true; // Set the first radio as checked
        }
      }

      if (checkedRadio) {
        that.updateButtonAttributes(checkedRadio);
      }
    });
  }

  /**
   * Initializes event listeners for the class.
   */
  initEventListeners() {
    const that = this;
    // Add change event listener specifically to each radio button
    const radioButtons = document.querySelectorAll(this.radioSelector);
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          that.ctaClick(event);
          that.updateButtonAttributes(event.target);
        }
      });
    });

    document.addEventListener("click", (event) => that.handleClick(event));
  }

  /**
   * Handles the click event on the back button.
   * Closes the current modal and opens the target modal.
   */
  backBtnHandler() {
    const that = this;
    const backButtons = document.querySelectorAll(
      ".sc-pdt-apply-with-smart-script__back"
    );

    if (backButtons.length) {
      backButtons.forEach((backButton) => {
        // Remove any existing event listeners before adding a new one
        backButton.removeEventListener("mousedown", that.backHandler);

        // Define the handler once and attach it
        that.backHandler = (event) => {
          event.preventDefault();
          that.ctaClick(event);
          that.applyProductModalClosed(that.mainModalId);
        };

        backButton.addEventListener("mousedown", that.backHandler);
      });
    }
  }

  /**
   * Handles apply product modal close
   * Closes the current modal and opens the target modal.
   */
  applyProductModalClosed(modalid) {
    const that = this;
    setTimeout(function () {
      const modalId = document.querySelectorAll(
        `[data-modal-source='${modalid}']`
      );
      modalId.forEach((item) => {
        if (modalId && item.classList.contains("sc-btn")) {
          item.click();
        }
      });
    }, 400);
  }
}

// Initialize the ProductChoose class instance
const Instance2 = new ProductChoose();
Instance2.init();
