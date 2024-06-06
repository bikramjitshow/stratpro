import ScCommonMethods from "./sc-common-methods.js";
class lifeInsuranceCamp {
  constructor() {
    this.ScCalculatorCommon = new ScCalculatorCommon();
    this.AnalyticsAdobeCommon = new AnalyticsAdobeCommon();
  }
  static selectedPersona;
  static selectedCheckbox = [];
  static selectedradio = [];
  init() {
    const that = this;
    document.addEventListener("DOMContentLoaded", function () {
      const firstpersonaBtn = document.querySelector(
        ".sc-li-campaign__persona-btn"
      );
      let personaitem = firstpersonaBtn.dataset.persona;
      that.activeModal();
      that.paramCheck();
      that.generateChart(1, personaitem);
      that.tiggerContentFilter(personaitem);
    });
  }

  paramCheck() {
    let that = this;
    let queryString = Utils.getPageContext().queryString;
    const persona = ScCommonMethods.getQueryParam(
      queryString,
      document.querySelector(".sc-li-campaign").getAttribute("data-query-param")
    );
    const firstpersonaBtn = document.querySelector(
      ".sc-li-campaign__persona-btn"
    );
    let personaitem = firstpersonaBtn.dataset.persona;
    if (persona) {
      that.tiggerPersona(persona);
    } else {
      that.tiggerPersona(personaitem);
    }
  }

  addUrlParam(name, value) {
    var paramName = name;
    var paramValue = value;

    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the parameter already exists in the URL
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(paramName)) {
      // If the parameter exists, update its value
      urlParams.set(paramName, paramValue);
    } else {
      // If the parameter does not exist, add it
      urlParams.append(paramName, paramValue);
    }

    // Construct the new URL with the updated parameters
    var newUrl = currentUrl.split("?")[0] + "?" + urlParams.toString();

    // Push the new URL to the browser history without reloading the page
    window.history.pushState({ path: newUrl }, "", newUrl);
  }

  tiggerPersona(persona) {
    // Get all persona buttons
    const personaBtns = document.querySelectorAll(
      ".sc-li-campaign__persona-btn"
    );
    const queryparam = document
      .querySelector(".sc-li-campaign")
      .getAttribute("data-query-param");

    // Function to handle click event
    const handleClick = (btn, index) => {
      let personaitem = btn.dataset.persona;
      // Remove active class from all persona buttons
      personaBtns.forEach((btn) => {
        btn.classList.remove("sc-li-campaign__persona-btn-active");
      });

      // Add active class to the clicked button
      btn.classList.add("sc-li-campaign__persona-btn-active");
      this.addUrlParam(queryparam, personaitem);
      this.activeBanner(personaitem);
      this.activeContentBox(personaitem);
      this.generateChart(index + 1, personaitem);
      this.tiggerContentFilter(personaitem);
    };

    // Add click event listener to each persona button
    personaBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        handleClick(btn, index);
      });
    });

    // Trigger click event with specified persona value
    if (persona) {
      const personaIndex = Array.from(personaBtns).findIndex(
        (btn) => btn.dataset.persona === persona
      );
      if (personaIndex !== -1) {
        handleClick(personaBtns[personaIndex], personaIndex);
      } else {
        console.error(`Persona "${persona}" not found in the persona buttons.`);
      }
    }
  }

  tiggerContentFilter(personaitem) {
    let filteritemparent, parentitem, isHide;
    let isFirstFilterActivated = false;
    let filters = document.querySelectorAll(
      ".sc-li-campaign__policy-type-filter-step-item"
    );
    if (filters.length) {
      filters.forEach((filter) => {
        parentitem = filter.closest(".sc-li-campaign__content-box-item");
        filteritemparent = parentitem.dataset.content;
        isHide = parentitem.classList.contains("hide");
        let firstTitle = filters[0].dataset.filterItem;
        let title = filter.dataset.filterItem;
        if (personaitem === filteritemparent && !isHide) {
          if (!isFirstFilterActivated) {
            filter.classList.add(
              "sc-li-campaign__policy-type-filter-step-item--active"
            );
            this.activeFilterContent(firstTitle);
          } else {
            filter.classList.remove(
              "sc-li-campaign__policy-type-filter-step-item--active"
            );
          }
          isFirstFilterActivated = true;
          filter.addEventListener("click", (e) => {
            this.activeFilter(e);
            this.activeFilterContent(title);
          });
        }
      });
    }
  }
  activeFilter(e) {
    const targetelem = document.querySelectorAll(
      ".sc-li-campaign__policy-type-filter-step-item"
    );
    targetelem.forEach((el) => {
      el.classList.remove(
        "sc-li-campaign__policy-type-filter-step-item--active"
      );
    });
    e.target.classList.add(
      "sc-li-campaign__policy-type-filter-step-item--active"
    );
  }
  activeFilterContent(activeTitle) {
    let filterContents = document.querySelectorAll(
      ".sc-li-campaign__policy-type-filter-panels-content"
    );
    if (filterContents.length) {
      filterContents.forEach((content) => {
        let datafilter = content.dataset.filterSelect;
        if (activeTitle === datafilter) {
          content.classList.add(
            "sc-li-campaign__policy-type-filter-panels-content--active"
          );
        } else {
          content.classList.remove(
            "sc-li-campaign__policy-type-filter-panels-content--active"
          );
        }
      });
    }
  }
  activeBanner(activePersona) {
    let banneritems = document.querySelectorAll(".sc-li-campaign__banner");
    if (banneritems.length) {
      banneritems.forEach((banneritem) => {
        let datafilter = banneritem.dataset.banner;
        if (activePersona === datafilter) {
          banneritem.classList.remove("hide");
        } else {
          banneritem.classList.add("hide");
        }
      });
    }
  }
  activeContentBox(activePersona) {
    let contentboxs = document.querySelectorAll(
      ".sc-li-campaign__content-box-item"
    );
    if (contentboxs.length) {
      contentboxs.forEach((contentbox) => {
        let datafilter = contentbox.dataset.content;
        if (activePersona === datafilter) {
          contentbox.classList.remove("hide");
        } else {
          contentbox.classList.add("hide");
        }
      });
    }
  }
  /**
   * Generate Graph
   *
   * @param {*} id -for graph id
   * @param {*} personaitem - persona name
   */
  generateChart(id, personaitem) {
    let ghdata;
    const gh = document.querySelectorAll(".sc-li-campaign__graph");
    if (gh.length) {
      gh.forEach((item) => {
        let pgh = item.parentNode.dataset.content;
        if (personaitem === pgh) {
          ghdata = JSON.parse(item.dataset.graphValue);
        }
      });
    }
    if (ghdata) {
      Highcharts.chart(`persona_graph_${id}`, {
        chart: {
          height: 200,
          type: "pie",
          backgroundColor: null,
        },
        title: {
          text: "",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            borderWidth: 4,
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        legend: {
          className: "sc-li-campaign__graph-legend",
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          labelFormat: "{name}: <b>{y}%</b>",
          symbolHeight: 14,
          symbolWidth: 14,
          symbolRadius: 2,
          width: "50%",
          itemStyle: {
            fontSize: "12px",
            fontWeight: "400",
          },
        },
        series: [
          {
            name: "Young Generation",
            colorByPoint: true,
            data: [
              {
                name: "Critical Illness",
                y: ghdata?.d1,
                color: "#00BCD3",
              },
              {
                name: "Saving Account",
                y: ghdata?.d2,
                color: "#2772C7",
              },
              {
                name: "Life",
                y: ghdata?.d3,
                color: "#00A9F3",
              },
              {
                name: "Medical",
                y: ghdata?.d4,
                color: "#AE6BFC",
              },
            ],
          },
        ],
        exporting: false,
      });
    }
  }

  // form
  activeModal() {
    const that = this;
    const activemodalbtn = document.querySelector(
      ".sc-li-campaign__active-modal-btn"
    ).dataset.modalSource;
    document.body.addEventListener("click", function (event) {
      if (event.target.dataset.modalSource === activemodalbtn) {
        let closestAnchor = event.target.closest("a");
        let formModal = document.querySelector(".sc-li-campaign-form-modal");
        let modalAttr = closestAnchor.getAttribute("data-modal-source");
        let formmodalAttr = formModal.getAttribute("data-modal-id");
        let wrapp = document.querySelector(".c-modal");
        if (modalAttr === formmodalAttr) {
          formModal.classList.add("sc-li-campaign-form-modal-active");
          wrapp.classList.add("sc-li-campaign-form-modal-main");
          that.closeModal();
          that.getCheckboxes();
          // form
          that.formSubmit();
        }
      }
    });
  }

  statusModal(status) {
    const errorModal = document.querySelector(".sc-error-modal");
    if (status) {
      //If referral code is empty or invalid
      errorModal.classList.add("sc-error-modal--show");
    } else {
      errorModal.classList.remove("sc-error-modal--show");
    }
  }

  closeModal() {
    // <div class="closebutton icon mobile icon-modal-close-mobile" data-grunticon-embed="" data-send="close-modal"></div>
    let closebutton = document.querySelector(".closebutton");
    let fields = {};

    // if (closebutton && closebutton.dataset.send === "close-modal") {
    closebutton.addEventListener("click", () => {
      // fields.customLinkText = "close-modal";
      // fields.customLinkRegion = "";
      // fields.customLinkType = "";
      // fields.customLinkName = "";
    });
    // }
  }

  getCheckboxes() {
    const that = this;
    var anycheckboxChecked, anyradioChecked;
    var checkboxes = document.querySelectorAll(
      ".sc-li-campaign-form__checkboxs .sc-radio-box__input"
    );
    var radios = document.querySelectorAll(
      ".sc-li-campaign-form__radios .sc-radio-box__input"
    );
    var formSubmitBtn = document.querySelector(
      ".sc-li-campaign-form__submit-btn"
    );
    radios[0].checked = true;
    var selecteditems = {};

    checkboxes.forEach(function (checkbox, i) {
      checkbox.addEventListener("change", function (e) {
        anycheckboxChecked = Array.from(checkboxes).some(function (checkbox) {
          return checkbox.checked;
        });
        radios.forEach(function () {
          anyradioChecked = Array.from(radios).some(function (radio) {
            return radio.checked;
          });
        });

        if (anycheckboxChecked && anyradioChecked) {
          formSubmitBtn.classList.remove("sc-btn--disabled");
        } else {
          formSubmitBtn.classList.add("sc-btn--disabled");
        }
        if (this.checked) {
          selecteditems.fieldTitle = e.target
            .closest(".sc-li-campaign-form__item")
            .querySelector(".sc-li-campaign-form__item-title").dataset.field;
          selecteditems.checkname = `${checkbox.name}_${i + 1}`;
          // let formData = that.buildFormItem(e, selecteditems, "checkbox");
          let formData = that.buildFormDataItem();
          that.AnalyticsAdobeCommon.handleInsuranceFormCheck(
            e.target,
            formData.name,
            formData.fields
          );
        } else {
          selecteditems.fieldTitle = e.target
            .closest(".sc-li-campaign-form__item")
            .querySelector(".sc-li-campaign-form__item-title").dataset.field;
          selecteditems.checkname = `uncheck_${i + 1}`;
          // let formData = that.buildFormItem(e, selecteditems, "checkbox");
          let formData = that.buildFormDataItem();
          that.AnalyticsAdobeCommon.handleInsuranceFormCheck(
            e.target,
            formData.name,
            formData.fields
          );
        }
      });
    });
    radios.forEach(function (radio, i) {
      radio.addEventListener("change", function (e) {
        anyradioChecked = Array.from(radios).some(function (radio) {
          return radio.checked;
        });

        if (anyradioChecked && anycheckboxChecked) {
          formSubmitBtn.classList.remove("sc-btn--disabled");
        } else {
          formSubmitBtn.classList.add("sc-btn--disabled");
        }
        if (this.checked) {
          selecteditems.fieldTitle = e.target
            .closest(".sc-li-campaign-form__item")
            .querySelector(".sc-li-campaign-form__item-title").dataset.field;
          selecteditems.radioname = `${radio.name}_${i + 1}`;
          // let formData = that.buildFormItem(e, selecteditems, "radio");
          let formData = that.buildFormDataItem();
          that.AnalyticsAdobeCommon.handleInsuranceFormCheck(
            e.target,
            formData.name,
            formData.fields
          );
        }
      });
    });
  }

  // Function to extract checkbox Names
  getCheckboxNames(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let names = [];
    checkboxes.forEach((checkbox, i) => {
      if (checkbox.checked) {
        names.push(`${checkbox.name}_${i + 1}`);
      }
    });
    return names.join(",");
  }

  // Function to extract checkbox values
  getCheckboxValues(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let values = [];
    checkboxes.forEach((checkbox, i) => {
      if (checkbox.checked) {
        values.push(checkbox.value);
      }
    });
    return values.join(",");
  }

  // Function to extract radio button Name
  getRadioNames(container) {
    const radios = container.querySelectorAll('input[type="radio"]');
    let name = "";
    radios.forEach((radio, i) => {
      if (radio.checked) {
        name = `${radio.name}_${i + 1}`;
      }
    });
    return name;
  }

  // Function to extract radio button value
  getRadioValue(container) {
    const radios = container.querySelectorAll('input[type="radio"]');
    let value = "";
    radios.forEach((radio, i) => {
      if (radio.checked) {
        value = radio.value;
      }
    });
    return value;
  }

  // Main function to build form data object
  buildFormItem(e, fieldName, fieldType) {
    this.existingFieldNames = new Set();
    const formdata = {
      name: "Insurance Campaign Form",
      fields: [],
    };
    const ContainerType = e.target.type;
    if (ContainerType === "checkbox" && fieldType === "checkbox") {
      formdata.fields.push({
        fieldName: fieldName.fieldTitle,
        CTAName: fieldName.checkname,
      });
    } else if (ContainerType === "radio" && fieldType === "radio") {
      formdata.fields.push({
        fieldName: fieldName.fieldTitle,
        CTAName: fieldName.radioname,
      });
    } else {
      formdata.fields.push({
        fieldName: fieldName.fieldTitle,
        CTAName: "",
      });
    }
    return formdata;
  }

  buildFormData() {
    this.existingFieldNames = new Set();
    const formdata = {
      name: "Insurance Campaign Form",
      fields: [],
    };
    const formItems = document.querySelectorAll(".sc-li-campaign-form__item");
    formItems.forEach((item) => {
      const fieldTitleElement = item.querySelector(
        ".sc-li-campaign-form__item-title"
      );
      const fieldTitle = fieldTitleElement.getAttribute("data-field");

      // Skip if the field name already exists
      if (this.existingFieldNames.has(fieldTitle)) {
        return;
      }

      let fieldValue = "";
      let fieldName = "";
      const checkboxContainer = item.querySelector(
        ".sc-li-campaign-form__checkboxs"
      );
      if (checkboxContainer) {
        fieldValue = this.getCheckboxValues(checkboxContainer);
        fieldName = this.getCheckboxNames(checkboxContainer);
      } else {
        const radioContainer = item.querySelector(
          ".sc-li-campaign-form__radios"
        );
        if (radioContainer) {
          fieldValue = this.getRadioValue(radioContainer);
          fieldName = this.getRadioNames(radioContainer);
        }
      }

      formdata.fields.push({
        fieldName: fieldTitle,
        fieldValue: fieldValue,
        // CTAName: fieldName,
      });

      // Add field name to the set to track it
      this.existingFieldNames.add(fieldTitle);
    });
    return formdata;
  }

  buildFormDataItem() {
    this.existingFieldNames = new Set();
    const formdata = {
      name: "Insurance Campaign Form",
      fields: [],
    };
    const formItems = document.querySelectorAll(".sc-li-campaign-form__item");
    formItems.forEach((item) => {
      const fieldTitleElement = item.querySelector(
        ".sc-li-campaign-form__item-title"
      );
      const fieldTitle = fieldTitleElement.getAttribute("data-field");

      // Skip if the field name already exists
      if (this.existingFieldNames.has(fieldTitle)) {
        return;
      }

      let fieldValue = "";
      let fieldName = "";
      const checkboxContainer = item.querySelector(
        ".sc-li-campaign-form__checkboxs"
      );
      if (checkboxContainer) {
        fieldValue = this.getCheckboxValues(checkboxContainer);
        fieldName = this.getCheckboxNames(checkboxContainer);
      } else {
        const radioContainer = item.querySelector(
          ".sc-li-campaign-form__radios"
        );
        if (radioContainer) {
          fieldValue = this.getRadioValue(radioContainer);
          fieldName = this.getRadioNames(radioContainer);
        }
      }

      formdata.fields.push({
        fieldName: fieldTitle,
        fieldValue: fieldValue,
      });

      // Add field name to the set to track it
      this.existingFieldNames.add(fieldTitle);
    });
    console.log("formdata--->->", formdata);
    return formdata;
  }

  formSubmit() {
    const formSubmitBtn = document.querySelector(
      ".sc-li-campaign-form__submit-btn"
    );
    formSubmitBtn.addEventListener("click", () => {
      let formData = this.buildFormData();
      formData.ctaname = formSubmitBtn.textContent.trim();

      this.AnalyticsAdobeCommon.handleInsuranceFormSubmit(
        formData.name,
        formData.ctaname,
        formData.fields
      );

      setTimeout(() => {
        this.statusModal(true);
      }, 600);
    });
    document
      .querySelector(".sc-error-modal__alert-close")
      .addEventListener("click", () => {
        this.statusModal(false);
      });
  }
}

const Instance = new lifeInsuranceCamp();
Instance.init();
