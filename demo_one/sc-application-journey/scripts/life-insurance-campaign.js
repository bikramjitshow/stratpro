/* eslint-disable no-undef */
class scInsuranceCampaign {
  constructor() {
    // this.AnalyticsAdobeCommon = new AnalyticsAdobeCommon();
    this.ScCommonMethods = new ScCommonMethods();
    let lastAccessedField = null;
    let isModalActive = false;
    this.handleMousedown = this.handleMousedown.bind(this);
  }
  init() {
    const that = this;
    document.addEventListener("DOMContentLoaded", function () {
      // event Click for view product brochure
      const learnmore = document.querySelectorAll(
        ".sc-li-campaign__policy-type-learn-more"
      );
      learnmore.forEach((el) => {
        el.addEventListener("mousedown", (event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("event Click", event.target);
          that.ctaClick(event);
        });
      });

      // event Click for Tab
      const stepItems = document.querySelectorAll(
        ".sc-li-campaign__policy-type-filter-step-item"
      );
      stepItems.forEach((el) => {
        el.addEventListener("mousedown", (event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("event Click", event.target);
          that.ctaClick(event);
        });
      });

      // event Click for Open modal
      const opemmodalbtns = document.querySelectorAll(
        ".sc-li-campaign__active-modal-btn"
      );
      opemmodalbtns.forEach((el) => {
        el.addEventListener("mousedown", (event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("event Click", event.target);
          that.ctaClick(event);
          that.activeModal(event);
        });
      });

      // event Click for learnmore button
      const learnmorebtn = document.querySelectorAll(
        ".sc-li-campaign__learn-more-btn"
      );
      learnmorebtn.forEach((el) => {
        el.addEventListener("mousedown", function (event) {
          event.preventDefault();
          event.stopPropagation();
          console.log("event Click", event.target);
          that.ctaClick(event);
          // Get the target ID from the button's data attribute
          var targetId = this.getAttribute("data-target");
          var target = document.getElementById(targetId);
          if (target) {
            // Scroll to the target element with smooth behavior
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      let firstpersonaBtn = document.querySelector(
        ".sc-li-campaign__persona-btn"
      );
      let personaitem = firstpersonaBtn.dataset.persona;
      that.pageNameInit();
      that.paramCheck();
      that.generateChart(1, personaitem);
      that.tiggerContentFilter(personaitem);
      setTimeout(() => {
        that.createTitle();
      }, 100);
    });
  }

  paramCheck() {
    let that = this;
    let queryString = Utils.getPageContext().queryString;
    const persona = that.ScCommonMethods.getQueryParam(
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

  removeNullHashFromURL() {
    if (window.location.hash === "#null") {
      history.replaceState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
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
    setTimeout(() => {
      this.removeNullHashFromURL();
    }, 10);
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
      btn.addEventListener("mousedown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleClick(btn, index);
        this.ctaClick(event);
      });
    });

    // Trigger click event with specified persona value
    if (persona) {
      const personaIndex = Array.from(personaBtns).findIndex(
        (btn) => btn.dataset.persona === persona
      );
      if (personaIndex !== -1) {
        handleClick(personaBtns[personaIndex], personaIndex);
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
          filter.addEventListener("mousedown", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.activeFilter(event);
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

  createTitle() {
    let cards = document.querySelectorAll(
      ".sc-li-campaign__policy-type-card-box"
    );
    cards.forEach((item) => {
      let title = item.querySelector(".sc-li-campaign__policy-type-title");
      let campBtn = item.querySelector(".sc-li-campaign__active-modal-btn");
      let learnBtn = item.querySelector(
        ".sc-li-campaign__policy-type-learn-more"
      );
      let campBtnTitle = `${campBtn.children[0].innerText.trim()} - ${title.innerText.trim()}`;
      let learnBtnTitle = `${learnBtn.innerText.trim()} - ${title.innerText.trim()}`;
      campBtn.setAttribute("title", campBtnTitle);
      learnBtn.setAttribute("title", learnBtnTitle);
    });
  }

  /**
   * Generate Graph
   *
   * @param {*} id -for graph id
   * @param {*} personaitem - persona name
   */
  generateChart(id, personaitem) {
    let ghdata, seriesName;
    const gh = document.querySelectorAll(".sc-li-campaign__graph");
    if (gh.length) {
      gh.forEach((item) => {
        let pgh = item.parentNode.dataset.content;
        if (personaitem === pgh) {
          seriesName = item.dataset.seriesName;
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
          format: "{series.name}<br>{key}: <b>{point.y}%</b>",
          shared: true,
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
            point: {
              events: {
                legendItemClick: function () {
                  return false;
                },
              },
            },
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
            name: seriesName?.toString() ?? "series",
            colorByPoint: true,
            data: [
              {
                name: ghdata?.d1?.title?.toString() ?? "data 1",
                y: ghdata?.d1?.value ?? 0,
                color: "#00BCD3",
              },
              {
                name: ghdata?.d2?.title?.toString() ?? "data 2",
                y: ghdata?.d2?.value ?? 0,
                color: "#2772C7",
              },
              {
                name: ghdata?.d3?.title?.toString() ?? "data 3",
                y: ghdata?.d3?.value ?? 0,
                color: "#00A9F3",
              },
              {
                name: ghdata?.d4?.title?.toString() ?? "data 4",
                y: ghdata?.d4?.value ?? 0,
                color: "#AE6BFC",
              },
            ],
          },
        ],
        exporting: false,
      });
    }
  }

  // track if modal activated
  // activeModal() {
  //   const that = this;
  //   const activemodalbtn = document.querySelector(
  //     ".sc-li-campaign__active-modal-btn"
  //   ).dataset.modalSource;
  //   document.addEventListener("click", function (event) {
  //     // event.preventDefault();
  //     // event.stopPropagation();
  //     // track if modal close
  //     if (
  //       event.target.classList.contains("closebutton") ||
  //       event.target.classList.contains("wrapper")
  //     ) {
  //       that.closeModal(event, this.lastAccessedField);
  //     }
  //     // verify the modal open
  //     if (event.target.dataset.modalSource === activemodalbtn) {
  //       let closestAnchor = event.target.closest("a");
  //       let formModal = document.querySelector(".sc-li-campaign-form-modal");
  //       let popupdata = JSON.parse(formModal.dataset.popup);
  //       let modalAttr = closestAnchor.getAttribute("data-modal-source");
  //       let formmodalAttr = formModal.getAttribute("data-modal-id");
  //       let wrapp = document.querySelector(".c-modal");
  //       if (modalAttr === formmodalAttr) {
  //         formModal.classList.add("sc-li-campaign-form-modal-active");
  //         wrapp.classList.add("sc-li-campaign-form-modal-main");
  //         setTimeout(() => {
  //           that.handelFormStartShortForm(popupdata);
  //         }, 600);
  //         that.getCheckboxes();
  //         that.formLastAccessedField();
  //         that.formSubmit();
  //       }
  //     }
  //   });
  // }

  handleMousedown(event) {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.target.classList.contains("closebutton") ||
      event.target.classList.contains("wrapper")
    ) {
      this.closeModal(event);
    }
  }

  toCloseModal() {
    const that = this;
    const modalContainer = document.querySelector(
      ".sc-li-campaign-form-modal-main"
    );
    modalContainer.addEventListener("mousedown", this.handleMousedown);
  }

  activeModal(event) {
    const that = this;
    const formmodal = document.querySelector(".sc-li-campaign-form-modal");
    const formmodalid = formmodal.dataset.modalId;
    let popupdata = JSON.parse(formmodal.dataset.popup);
    let modalsource = event.target.dataset.modalSource;

    // modal match
    if (formmodalid === modalsource) {
      that.isModalActive = true;
      // formmodal.classList.add("sc-li-campaign-form-modal-active");
      console.log(event.target.classList);
      setTimeout(() => {
        document
          .querySelector(".c-modal")
          .classList.add("sc-li-campaign-form-modal-main");
        that.handelFormStartShortForm(popupdata);
        that.getCheckboxes();
        that.formLastAccessedField();
        that.formSubmit();
        that.toCloseModal();
      }, 600);
    }
  }

  statusModal(status) {
    const errorModal = document.querySelector(".sc-error-modal");
    let errorModalStatus = JSON.parse(errorModal.dataset.formStatus);
    if (status) {
      //If referral code is empty or invalid
      errorModal.classList.add("sc-error-modal--show");
      return errorModalStatus;
    } else {
      errorModal.classList.remove("sc-error-modal--show");
      return false;
    }
  }

  closeModal(event) {
    event.target.setAttribute("title", "closemodal");
    this.ctaClick(event);
    const modalContainer = document.querySelector(
      ".sc-li-campaign-form-modal-main"
    );
    let lastAccessedField = this.lastAccessedField || "na";
    if (lastAccessedField) {
      setTimeout(() => {
        this.handleFormAbandon(lastAccessedField);
      }, 1000);
      modalContainer.removeEventListener("mousedown", this.handleMousedown);
      this.isModalActive = false;
    }
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
        e.preventDefault();
        e.stopPropagation();
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
        // if (this.checked) {
        //   selecteditems.fieldTitle = e.target
        //     .closest(".sc-li-campaign-form__item")
        //     .querySelector(".sc-li-campaign-form__item-title").dataset.field;
        //   selecteditems.checkname = `${checkbox.name}_${i + 1}`;
        //   let formData = that.buildFormDataItem();
        //   that.handleInsuranceFormCheck(
        //     e.target,
        //     formData.name,
        //     formData.fields
        //   );
        // } else {
        //   selecteditems.fieldTitle = e.target
        //     .closest(".sc-li-campaign-form__item")
        //     .querySelector(".sc-li-campaign-form__item-title").dataset.field;
        //   selecteditems.checkname = `uncheck_${i + 1}`;
        //   let formData = that.buildFormDataItem();
        //   that.handleInsuranceFormCheck(
        //     e.target,
        //     formData.name,
        //     formData.fields
        //   );
        // }
      });
    });
    radios.forEach(function (radio, i) {
      radio.addEventListener("change", function (e) {
        e.preventDefault();
        e.stopPropagation();
        anyradioChecked = Array.from(radios).some(function (radio) {
          return radio.checked;
        });

        if (anyradioChecked && anycheckboxChecked) {
          formSubmitBtn.classList.remove("sc-btn--disabled");
        } else {
          formSubmitBtn.classList.add("sc-btn--disabled");
        }
        // if (this.checked) {
        //   selecteditems.fieldTitle = e.target
        //     .closest(".sc-li-campaign-form__item")
        //     .querySelector(".sc-li-campaign-form__item-title").dataset.field;
        //   selecteditems.radioname = `${radio.name}_${i + 1}`;
        //   let formData = that.buildFormDataItem();
        //   that.handleInsuranceFormCheck(
        //     e.target,
        //     formData.name,
        //     formData.fields
        //   );
        // }
      });
    });
  }

  // Function to extract checkbox Names
  // getCheckboxNames(container) {
  //   const checkboxes = container.querySelectorAll('input[type="checkbox"]');
  //   let names = [];
  //   checkboxes.forEach((checkbox, i) => {
  //     if (checkbox.checked) {
  //       names.push(`${checkbox.name}_${i + 1}`);
  //     }
  //   });
  //   return names.join("|");
  // }

  // Function to extract checkbox values
  getCheckboxValues(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let values = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        values.push(checkbox.value);
      }
    });
    return values.join("|");
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
    radios.forEach((radio) => {
      if (radio.checked) {
        value = radio.value;
      }
    });
    return value;
  }

  // function to build form data object on submit
  buildFormData() {
    this.existingFieldNames = new Set();
    let formModal = document.querySelector(".sc-li-campaign-form-modal");
    let popupdata = JSON.parse(formModal.dataset.popup);
    const formdata = {
      name: popupdata.formname,
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
      const checkboxContainer = item.querySelector(
        ".sc-li-campaign-form__checkboxs"
      );
      if (checkboxContainer) {
        fieldValue = this.getCheckboxValues(checkboxContainer);
      } else {
        const radioContainer = item.querySelector(
          ".sc-li-campaign-form__radios"
        );
        if (radioContainer) {
          fieldValue = this.getRadioValue(radioContainer);
        }
      }

      formdata.fields.push({
        fieldName: fieldTitle,
        fieldValue: fieldValue,
      });

      // Add field name to the set to track it
      this.existingFieldNames.add(fieldTitle);
    });
    console.log("formdata",formdata)
    return formdata;
  }

  // function to build form data object on check
  // buildFormDataItem() {
  //   this.existingFieldNames = new Set();
  //   let formModal = document.querySelector(".sc-li-campaign-form-modal");
  //   let popupdata = JSON.parse(formModal.dataset.popup);
  //   const formdata = {
  //     name: popupdata.formname,
  //     fields: [],
  //   };
  //   const formItems = document.querySelectorAll(".sc-li-campaign-form__item");
  //   formItems.forEach((item) => {
  //     const fieldTitleElement = item.querySelector(
  //       ".sc-li-campaign-form__item-title"
  //     );
  //     const fieldTitle = fieldTitleElement.getAttribute("data-field");

  //     // Skip if the field name already exists
  //     if (this.existingFieldNames.has(fieldTitle)) {
  //       return;
  //     }

  //     let fieldValue = "";
  //     const checkboxContainer = item.querySelector(
  //       ".sc-li-campaign-form__checkboxs"
  //     );
  //     if (checkboxContainer) {
  //       fieldValue = this.getCheckboxValues(checkboxContainer);
  //     } else {
  //       const radioContainer = item.querySelector(
  //         ".sc-li-campaign-form__radios"
  //       );
  //       if (radioContainer) {
  //         fieldValue = this.getRadioValue(radioContainer);
  //       }
  //     }

  //     formdata.fields.push({
  //       fieldName: fieldTitle,
  //       fieldValue: fieldValue,
  //     });

  //     // Add field name to the set to track it
  //     this.existingFieldNames.add(fieldTitle);
  //   });
  //   return formdata;
  // }

  // function for form Submit
  formSubmit() {
    const formSubmitBtn = document.querySelector(
      ".sc-li-campaign-form__submit-btn"
    );
    formSubmitBtn.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      try {
        this.ctaClick(event);
        setTimeout(() => {
          let formstatus = this.statusModal(true);
          if (formstatus) {
            this.handleInsuranceFormSubmit(formstatus);
          }
        }, 2000);
      } catch (error) {
        let errObj = {
          code: error.statusCode,
          description: error.message,
          field: this.lastAccessedField,
        };
        this.handleFormError(errObj);
        this.statusModal(false);
      }
    });
    document
      .querySelector(".sc-error-modal__alert-close")
      .addEventListener("mousedown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("sc-error-modal__alert-close");
        this.ctaClick(event);
        setTimeout(() => {
          this.statusModal(false);
          delete window.digitalData.form;
        }, 2000);
      });
  }

  formLastAccessedField() {
    // Get the form and all input fields
    const form = document.querySelector(".sc-li-campaign-form");
    if (!form) return;
    const formElements = form.querySelectorAll("input");

    // Add event listeners to all input fields
    formElements.forEach((element) => {
      element.addEventListener("change", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const itemElement = event.target.closest(".sc-li-campaign-form__item");
        const titleElement = itemElement.querySelector(
          ".sc-li-campaign-form__item-title"
        );
        this.lastAccessedField = titleElement.innerText;
      });
    });
  }

  pageNameInit() {
    console.log("pageNameInit");
    const that = this;
    let allowableQueryString = Utils.constants.ALLOWABLE_QUERYSTRING.scb;
    let pageSlug = document.querySelector('meta[name="sc:page-slug"]')
      ? document
          .querySelector('meta[name="sc:page-slug"]')
          .getAttribute("content")
      : null;
    let linkName =
      document.querySelector("title") &&
      document.querySelector("title").innerText
        ? document.querySelector("title").innerText.toLowerCase()
        : "na";
    const mktCountryCode = Utils.getCurrentCountry();
    this.productId = "na";
    this.pfmId = "na";
    that.getProductIdPfm();
    window.digitalData = window.digitalData || {};
    if (window.digitalData) {
      window.digitalData.page = window.digitalData.page || {};
      window.digitalData.page.attributes =
        window.digitalData.page.attributes || {};
      window.digitalData.page.attributes.platform =
        mktCountryCode == "hk" ? "web" : "website";
      window.digitalData.page.attributes.pfm = this.pfmId;
    }

    //Push form name and page name in digitalData
    if (
      window.digitalData.page.pageInfo &&
      window.digitalData.page.pageInfo.pageName
    ) {
      //Set na if pageName are empty
      let pageName = window.digitalData.page.pageInfo.pageName;
      pageName = pageName.split(":");
      let pageNameList = [];
      if (pageName.length > 1) {
        for (let i = 0; i < pageName.length; i++) {
          if (i == 7) {
            pageNameList.push("na");
          } else {
            pageNameList.push(pageName[i] ? pageName[i] : "na");
          }
        }
      }

      if (pageName.length <= 8) {
        if (mktCountryCode == "hk") {
          //Screen Name field in CMS is used if filled, in HK.
          pageNameList.push(
            pageName[pageName.length - 1] ? pageName[pageName.length - 1] : "na"
          );
        } else {
          pageNameList.push(pageSlug);
        }
      }

      //Set na if category objects are empty
      if (window.digitalData.page.category) {
        let catName = window.digitalData.page.category;
        // eslint-disable-next-line no-unused-vars
        for (let index in catName) {
          window.digitalData.page.category[index] = catName[index]
            ? catName[index]
            : "na";
        }
      }

      const environment = Utils.getCurrentEnvironment();
      window.digitalData.page.pageInfo.pageName = pageNameList.join(":");
      window.digitalData.page.pageInfo.buildDetails = "web3.0";
      window.digitalData.page.pageInfo.libDetails =
        environment === "preview" ? "staging" : environment;
    }

    let pageName = window.digitalData.page.pageInfo.pageName.split(":");
    window.digitalData.user = window.digitalData.user || {};
    window.digitalData.user.userInfo = {
      userStatus: "guest",
      userType: "NTB",
      segment: pageName[3],
      userID: "na",
    };

    //Update page name
    window.digitalData.page.pageInfo.pageName = pageName.join(":");
    //Add user info
    window.digitalData.userInfo = window.digitalData.userInfo || {};
    window.digitalData.userInfo = window.digitalData.user.userInfo;
    window.digitalData.userInfo.loginStatus = "not logged-in";
    delete window.digitalData.user;
    //Add product info
    if (pageName[4] != "na" || pageName[5] != "na" || pageName[6] != "na") {
      window.digitalData.products = window.digitalData.products || [];
      window.digitalData.products = [
        {
          productName: pageName[6],
          subProduct1: pageName[4],
          subProduct2: pageName[5],
        },
      ];
    }

    let campaignData = that.getCampaignInfo(allowableQueryString);
    window.digitalData.campaign = window.digitalData.campaign || {};
    window.digitalData.campaign = {
      internal: {
        campaignName: campaignData[0],
        campaignValue: campaignData[1],
      },
      external: {
        campaignName: campaignData[0],
        campaignValue: campaignData[1],
      },
    };

    let eventName = mktCountryCode == "hk" ? "page-view" : "pageView";
    let dataObject = {
      ...digitalData,
      event: eventName,
      title: document.title,
      href: window.location.href,
      context: "page view",
    };

    console.log("page-view dataObject", dataObject);
    window.adobeDataLayer.push(dataObject);
    // _satellite.track("page-view");
  }

  pageNameUpdate(eventName) {
    console.log("pageNameUpdate");
    let eventlist = [
      "formStart_shortForm",
      "formSubmit_shortForm",
      "formAbandon",
      "formError",
      "ctaClick",
    ];
    let pageSlug = document.querySelector('meta[name="sc:page-slug"]')
      ? document
          .querySelector('meta[name="sc:page-slug"]')
          .getAttribute("content")
      : null;
    const mktCountryCode = Utils.getCurrentCountry();
    const formmodal = document.querySelector(".sc-li-campaign-form-modal");
    let popupdata = JSON.parse(formmodal.dataset.popup);

    //Push form name and page name in digitalData
    // if (window.digitalData.hasOwnProperty("form")) {
    if (
      window.digitalData.page.pageInfo &&
      window.digitalData.page.pageInfo.pageName
    ) {
      //Set na if pageName are empty
      let pageName = window.digitalData.page.pageInfo.pageName;
      pageName = pageName.split(":");
      let pageNameList = [];
      console.log("event: ", window.digitalData.event);
      if (pageName.length > 1) {
        for (let i = 0; i < pageName.length; i++) {
          if (i == 7) {
            console.log("event:", eventName, eventlist.includes(eventName));
            if (
              eventlist.includes(eventName) &&
              window.digitalData.hasOwnProperty("form")
            ) {
              pageNameList.push(
                popupdata.formname
                  ? popupdata.formname.replace(/ /g, "-")
                  : "na"
              );
            } else {
              pageNameList.push("na");
            }
          } else {
            pageNameList.push(pageName[i] ? pageName[i] : "na");
          }
        }
      }

      if (pageName.length <= 8) {
        if (mktCountryCode == "hk") {
          //Screen Name field in CMS is used if filled, in HK.
          pageNameList.push(
            pageName[pageName.length - 1] ? pageName[pageName.length - 1] : "na"
          );
        } else {
          pageNameList.push(pageSlug);
        }
      }
      window.digitalData.page.pageInfo.pageName = pageNameList.join(":");
    }
    // }
  }

  /**
   * get productId from URL
   * @example
   * getProductId()
   */
  getProductIdPfm() {
    let queryStringList = [];
    let queryString = window.location.search;
    if (queryString) {
      queryString = queryString.substring(1);
      if (queryString) {
        queryStringList = queryString.split("&");
        if (queryStringList.length) {
          for (let i = 0; i < queryStringList.length; i++) {
            let result = queryStringList[i].split("=");
            if (result[0].toLowerCase() == "productid") {
              this.productId = result[1].toLowerCase();
            } else if (result[0].toLowerCase() == "pfm") {
              this.pfmId = result[1].toLowerCase();
            }
          }
        }
      }
    }
  }

  /**
   * based on white list parameters return campaignName and campaignValue
   * @param {Object} allowableQueryString are whitelist parameters
   * @return {Object} return collections of campaignName and campaignValue
   * @example
   * getCampaignInfo(['subChanCode', 'camp_id', 'promoCode'])
   */
  getCampaignInfo(allowableQueryString) {
    const that = this;
    if (!allowableQueryString.length) return "";
    let total = allowableQueryString.length;
    let campaignName = "";
    let campaignValue = "";
    for (let i = 0; i < total; i++) {
      let cookieValue = that.getCookie(allowableQueryString[i]);
      let localStorageValue = Utils.getLocalStorageWithExpiry(
        allowableQueryString[i]
      );
      if (cookieValue || localStorageValue) {
        if (campaignName) {
          campaignName += ":";
          campaignValue += ":";
        }
        campaignName += allowableQueryString[i];
        campaignValue += cookieValue || localStorageValue;
      }
    }
    if (!campaignName) campaignName = "na";
    if (!campaignValue) campaignValue = "na";
    return [campaignName, campaignValue];
  }

  /**
   * return cookie value
   * @param {String} key is the name of the cookie
   * @return {String} return selected cookie value
   * @example
   * getCookie('subChanCode')
   */
  getCookie(key) {
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return null;
  }

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

  ctaClick(event) {
    const that = this;
    that.pageNameUpdate("ctaClick");
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
    let ctaClass = event.target.classList;

    console.log(ctaName, ctaClass);

    // status ok popup click sc-error-modal__alert-close
    if (event.target.classList.contains("sc-error-modal__alert-close")) {
      const errorModal = document.querySelector(".sc-error-modal");
      let errorModalStatus = JSON.parse(errorModal.dataset.formStatus);
      let pageName = window.digitalData.page.pageInfo.pageName.split(":");
      window.digitalData.form.popupName = errorModalStatus.popupname;
      delete window.digitalData.products;
      //Add product info
      if (pageName[4] != "na" || pageName[5] != "na" || pageName[6] != "na") {
        window.digitalData.products = window.digitalData.products || [];
        window.digitalData.products = [
          {
            productName: pageName[6],
            subProduct1: pageName[4],
            subProduct2: pageName[5],
          },
        ];
      }
    }

    //  submit cta click sc-li-campaign-form__submit-btn
    if (event.target.classList.contains("sc-li-campaign-form__submit-btn")) {
      console.log("ctaName == submit");
      let formData = that.buildFormData();
      console.log("formData",formData)
      if (formData && window.digitalData.products) {
        window.digitalData.products.forEach((item, index) => {
          window.digitalData.products[index].productFields = [];
          formData.fields.forEach((field) => {
            window.digitalData.products[index].productFields.push({
              formFieldName: field.fieldName,
              formFieldValue: field.fieldValue,
            });
          });
        });
      }
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

    console.log("ctaClick dataObject - ", dataObject);
    window.adobeDataLayer.push(dataObject);
    delete window.digitalData.products[0].productFields;
  }

  /**
   * Track "formStart_shortForm" actions in the page using EDDL approach.
   */
  handelFormStartShortForm(data) {
    if (typeof window.adobeDataLayer !== "undefined") {
      window.digitalData.form = {};
      this.pageNameUpdate("formStart_shortForm");
      let dataObject = {
        ...digitalData,
        event: "formStart_shortForm",
      };
      window.digitalData.form.formName = data.formname || "na";
      window.digitalData.form.formStepName = data.formstepname || "na";
      window.digitalData.form.formType = data.formtype || "na";
      window.digitalData.form.formPlatform = data.formplatform || "na";

      console.log("formStart_shortForm dataObject-", dataObject);
      window.adobeDataLayer.push(dataObject);
    }
  }

  /**
   * form submit event
   */
  handleInsuranceFormSubmit(formstatus) {
    if (typeof window.adobeDataLayer == "undefined") return;

    if (!window.digitalData.form) {
      window.digitalData.form = {};
    }
    this.pageNameUpdate("formSubmit_shortForm");

    let dataObject = {
      ...JSON.parse(JSON.stringify(digitalData)),
      event: "formSubmit_shortForm",
    };

    dataObject.products[0].applicationReferenceNumber =
      formstatus.refno || "na";
    dataObject.products[0].applicationSubmissionStatus =
      formstatus.status || "na";

    console.log("formSubmit_shortForm dataObject-", dataObject);
    window.adobeDataLayer.push(dataObject);
  }

  /**
   * Track Form Abandon
   */
  handleFormAbandon(field) {
    if (typeof window.adobeDataLayer !== "undefined") {
      this.pageNameUpdate("formAbandon");
      let dataObject = {
        ...JSON.parse(JSON.stringify(digitalData)),
        event: "formAbandon",
      };
      dataObject.form.formLastAccessedField = field || "na";
      console.log("formAbandon dataObject-", dataObject);
      window.adobeDataLayer.push(dataObject);
      delete window.digitalData.form;
    }
  }

  /**
   * Track Form Abandon
   */
  handleFormError(err) {
    if (typeof window.adobeDataLayer !== "undefined") {
      this.pageNameUpdate("formError");
      let error = [
        {
          errorCode: err.code || "na",
          errorDescription: err.description || "na",
          errorField: err.field || "na",
        },
      ];

      let dataObject = {
        ...digitalData,
        event: "formError",
      };
      window.digitalData.error = [];
      window.digitalData.error.push(...error);
      console.log("formError dataObject-", dataObject);
      window.adobeDataLayer.push(dataObject);
    }
  }

  /**
   * Track Insurance Form Check actions in the page using EDDL approach.
   */
  // handleInsuranceFormCheck(target, formname, fields) {
  //   if (typeof window.adobeDataLayer == "undefined") return;
  //   if (!window.digitalData.form) {
  //     window.digitalData.form = {};
  //   }
  //   if (window.digitalData.products) {
  //     window.digitalData.products.forEach((item, index) => {
  //       window.digitalData.products[index].productFields = [];
  //       fields.forEach((field) => {
  //         window.digitalData.products[index].productFields.push({
  //           formFieldName: field.fieldName,
  //           formFieldValue: field.fieldValue,
  //         });
  //       });
  //     });
  //   }

  //   let dataObject = {
  //     ...digitalData,
  //     event: "ctaClick",
  //   };

  //   console.log("FormCheck dataObject-", dataObject);
  //   window.adobeDataLayer.push(dataObject);
  // }
}

const Instance = new scInsuranceCampaign();
Instance.init();
