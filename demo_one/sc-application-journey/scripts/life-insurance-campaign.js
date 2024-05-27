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
    // that.addUrlParam();
    // that.activePersonaClass();

    document.addEventListener("DOMContentLoaded", function () {
      const firstpersonaBtn = document.querySelector(
        ".sc-li-campaign__persona-btn"
      );
      let personaitem = firstpersonaBtn.dataset.persona;
      // that.tiggerPersona(personaitem);
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
    console.log("queryString--", queryString);
    console.log("persona--", persona);
    if (persona) {
      that.tiggerPersona(persona);
    } else {
      that.tiggerPersona(personaitem);
    }
  }

  addUrlParam(name, value) {
    // Define your parameter
    // var paramName = name? name : "persona";
    // var paramValue = value ? value : "young_generation";
    var paramName = name;
    var paramValue = value;

    console.log({ paramName, paramValue });

    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the parameter already exists in the URL
    // var urlParams = new URLSearchParams(window.location.search);
    // if (!urlParams.has(paramName)) {
    //   // Construct the new URL with the parameter
    //   var separator = currentUrl.indexOf("?") !== -1 ? "&" : "?";
    //   var newUrl =
    //     currentUrl +
    //     separator +
    //     paramName +
    //     "=" +
    //     encodeURIComponent(paramValue);

    //   // Push the new URL to the browser history without reloading the page
    //   window.history.pushState({ path: newUrl }, "", newUrl);
    // }

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
      console.log("personaIndex", personaIndex);
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
    // console.log("activeTitle--", activeTitle);
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
    // console.log("activePersona--", activePersona);
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
    // console.log("activePersona--", activePersona);
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
    // console.log("graph id-", id);
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
    // console.log("ghdata", ghdata);

    Highcharts.chart(`persona_graph_${id}`, {
      chart: {
        width: null,
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

  getCheckboxes() {
    const that = this;
    var checkboxes = document.querySelectorAll(
      ".sc-li-campaign-form__checkboxs .sc-radio-box__input"
    );
    var radios = document.querySelectorAll(
      ".sc-li-campaign-form__radios .sc-radio-box__input"
    );
    var formSubmitBtn = document.querySelector(
      ".sc-li-campaign-form__submit-btn"
    );
    
    // var selectedCheckbox = [];
    // var selectedradio = [];
    checkboxes.forEach(function (checkbox, i) {
      checkbox.addEventListener("change", function (e) {
        var anyChecked = Array.from(checkboxes).some(function (checkbox) {
          return checkbox.checked;
        });

        if (anyChecked) {
          formSubmitBtn.classList.remove("sc-btn--disabled");
        } else {
          formSubmitBtn.classList.add("sc-btn--disabled");
        }
        if (this.checked) {
          let formData = that.buildFormData();
          console.log(`${checkbox.name}_${i + 1}`);
          that.AnalyticsAdobeCommon.handleInsuranceFormSubmit(
            formData.name,
            formData.fields
          );
        }
        // console.log({selectedCheckbox})
      });
    });
    radios.forEach(function (radio) {
      radio.addEventListener("change", function (e) {
        var anyChecked = Array.from(radios).some(function (radio) {
          return radio.checked;
        });

        if (anyChecked) {
          formSubmitBtn.classList.remove("sc-btn--disabled");
        } else {
          formSubmitBtn.classList.add("sc-btn--disabled");
        }
        // console.log("change", e);
        if (this.checked) {
          console.log(radio.value);
          lifeInsuranceCamp.selectedradio.push(radio.value);
        }
        // console.log({selectedCheckbox})
      });
    });
  }

  // Function to extract checkbox Names
  getCheckboxNames(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let names = [];
    checkboxes.forEach((checkbox,i) => {
      if (checkbox.checked) {
        names.push(`${checkbox.name}_${i + 1}`);
      } else {
        names.push(`uncheck_${i+1}`);
      }
    });
    return names.join(",");
  }

  // Function to extract checkbox values
  getCheckboxValues(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let values = [];
    checkboxes.forEach((checkbox,i) => {
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
    radios.forEach((radio,i) => {
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
    radios.forEach((radio,i) => {
      if (radio.checked) {
        value = radio.value;
      }
    });
    return value;
  }

  // Main function to build form data object
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
        CTAName: fieldName,
      });

      // Add field name to the set to track it
      this.existingFieldNames.add(fieldTitle);
    });
    console.log("formsa----", formdata);
    return formdata;
  }

  formSubmit() {
    const formSubmitBtn = document.querySelector(
      ".sc-li-campaign-form__submit-btn"
    );
    formSubmitBtn.addEventListener("click", () => {
      console.log("Form Submitted successfully !");

      let formData = this.buildFormData();
      // console.log(formData);

      this.AnalyticsAdobeCommon.handleInsuranceFormSubmit(
        formData.name,
        formData.fields
      );

      setTimeout(() => {
        this.statusModal(true);
      }, 2000);
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
