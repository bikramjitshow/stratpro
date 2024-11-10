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

    //Handle modal close event
    document.body.addEventListener("click", function (event) {
      if (modalOpen) {
        let anchor = event.target.closest("a");
        if (anchor) {
          const selectedId = anchor.getAttribute("href");
          const mdlSource = anchor.getAttribute("data-modal-source");
          if (selectedId) {
            setTimeout(() => {
              let ssPopup = Array.from(
                document.querySelector(".c-modal .m-text-content").children
              ).some((child) =>
                child.classList.contains("sc-pdt-apply-with-smart-script")
              );
              console.log({
                ssPopup,
                mdlSource,
                mainModalId: that.mainModalId,
                anchor,
                event: event.target
              });
              that.checkInitialRadio();
              if (
                event.target.className.indexOf("closebutton") !== -1 ||
                event.target.className.indexOf("wrapper") !== -1
              ) {
                modalOpen = false;
                console.log({
                  ssPopup
                });
                if (ssPopup) {
                  that.applyProductModalClosed(that.mainModalId);
                }
              }
              that.modalOpenAA();
              that.backBtnHandler(that.mainModalId);
            }, 400);
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
    const dataModalIdCode = radio.getAttribute("data-modal-id-code");
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
    console.log({ modalid });
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

  modalOpenAA() {
    const that = this;
    setTimeout(() => {
      const modal = document.querySelector(".c-modal.is-open");
      const activeModal = modal?.querySelector(".m-text-content");
      const activeModalId = activeModal?.getAttribute("data-modal-id");
      const popupName =
        activeModal?.getAttribute("data-popup-name") || "Default-Popup";

      if (modal && activeModalId) {
        console.log({ modal, activeModalId, popupName });
        that.triggerPopupViewedTagging(popupName);
      }
    }, 400);
  }

  // AA
  /**
   * capture horizontal click position and return it's left or right
   * @param {Number} xClick horizontal click position
   * @return {String} return it's left or right
   * @example
   * getHorizontalPosition(1000)
   */
  getHorizontalPosition(xClick) {
    let width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
    let median = width / 2;
    return xClick < median ? "left" : "right";
  }

  /**
   * check class name and return link type
   * @param {String} className class name of the clicked element
   * @return {String} return link type like link, button, carousel etc
   * @example
   * getCtaType('sc-btn')
   */
  getCtaType(className, target) {
    if (target && target.closest(".sc-nav")) {
      return "nav-link";
    } else if (
      className == "" ||
      typeof className !== "string" ||
      typeof className.includes === "undefined"
    ) {
      return "link";
    } else if (
      className.indexOf("sc-btn") !== -1 ||
      className.indexOf("c-button") !== -1
    ) {
      return "button";
    } else if (
      className.indexOf("sc-bnr__link") !== -1 ||
      className.indexOf("slide-anchor-bg") !== -1
    ) {
      return "banner";
    } else if (className.indexOf("sc-carousel__pintiles-item") !== -1) {
      return "carousel";
    } else if (className.indexOf("sc-quick-links__link") !== -1) {
      return "quick-links";
    } else if (className.indexOf("sc-tag") !== -1) {
      return "tabs";
    } else {
      return "link";
    }
  }

  /**
   * Represents a function to generate page name for AA EDDL
   * @function ctaClick
   * @param {event} event
   */
  ctaClick(event) {
    const that = this;
    let closestAnchor = event.target.closest("a");
    let customLinkText = event.target.innerText
      ? event.target.innerText.trim().toLowerCase()
      : event.target.textContent.trim().toLowerCase();
    let ctaType = closestAnchor
      ? that.getCtaType(closestAnchor.className, event.target)
      : "link";
    let linkName =
      document.querySelector("title") &&
      document.querySelector("title").innerText
        ? document.querySelector("title").innerText.toLowerCase()
        : "na";
    let ctaName = event.target.getAttribute("title");

    // Check if the event target is a radio button
    if (event.target.type === "radio" && event.target.checked) {
      const radioLabel = document.querySelector(
        `label[for="${event.target.id}"]`
      );
      customLinkText = radioLabel
        ? radioLabel.innerText.trim().toLowerCase()
        : customLinkText;
      ctaName = customLinkText;
      ctaType = "radio input";
    }

    let dataObject = {
      ...JSON.parse(JSON.stringify(digitalData)),
      customLinkClick: {
        customLinkText: customLinkText,
        customLinkRegion:
          that.getHorizontalPosition(event.clientX) +
          " " +
          Utils.calcElementLocation(event.target),
        customLinkType: ctaType,
        customLinkName: linkName,
      },
      event: "ctaClick",
      title: document.title,
      href: window.location.href,
      context: customLinkText,
    };
    dataObject.ctaName = ctaName || customLinkText;
    dataObject.ctaPosition = Utils.calcElementLocation(event.target);
    dataObject.ctaType = ctaType;

    if (Utils.getCurrentCountry() == "hk") {
      delete dataObject.customLinkClick;
    }

    console.log({ dataObject });
    scAnalyticsDataArray.push(dataObject);
    if (
      Array.isArray(window.digitalData.products) &&
      window.digitalData.products[0] &&
      window.digitalData.products[0].productFields
    ) {
      delete window.digitalData.products[0].productFields;
    }
  }

  /**
   * trigger adobe popupViewed event when showing popups _satellite.track('popupViewed');
   */
  triggerPopupViewedTagging(popupName) {
    setTimeout(() => {
      let dataObject = {
        ...digitalData,
        form: {
          formName: "",
          formStepName: "",
          formType: "",
          formPlatform: "",
        },
      };
      dataObject.form.popupName = popupName;
      dataObject.event = "popupViewed";
      console.log("popupviewed--", { dataObject });
      scAnalyticsDataArray.push(dataObject);
    }, 500);
  }

  /**
   * trigger adobe ctaClick event Digitaldata during click action
   */
  triggerCtaClickTagging(event) {
    const that = this;
    let ctaType;
    let customLinkText;

    if (event.target.type === "radio" && event.target.checked) {
      // Get label text associated with the radio button
      const radioLabel = document.querySelector(
        `label[for="${event.target.id}"]`
      );
      customLinkText = radioLabel
        ? radioLabel.innerText.trim().toLowerCase()
        : "radio button";
      ctaType = "radio input";
    } else {
      // Default ctaType and customLinkText for non-radio elements
      ctaType = event.target.type === "button" ? event.target.type : "link";
      customLinkText = event.target.getAttribute("title")
        ? event.target.getAttribute("title")
        : event.target instanceof SVGElement ||
          event.target.getElementsByTagName("svg").length ||
          event.target.classList.contains("closebutton")
        ? "Close"
        : event.target.innerText
        ? event.target.innerText.trim().toLowerCase()
        : event.target.textContent.trim().toLowerCase();
    }

    digitalData.event = "ctaClick";
    digitalData.ctaName = customLinkText;
    digitalData.ctaType = ctaType;
    digitalData.ctaPosition =
      that.getHorizontalPosition(event.clientX) +
      " " +
      Utils.calcElementLocation(event.target);
    console.log({ digitalData });
    _satellite.track("callToAction");
  }
}

// Initialize the ProductChoose class instance
const Instance2 = new ProductChoose();
Instance2.init();
