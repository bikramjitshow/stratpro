/* eslint-disable no-undef */
import Highcharts from 'highcharts';
import ScCommonMethods from '../../../assets/js/commons/sc-common-methods';
import AdobeAnalyticsCommon from '../../../assets/js/analytics/analytics-adobe-common';
import AdobeAnalytics from '../../../assets/js/analytics/analytics-insurance-campaign';

class scInsuranceCampaign {
  static selectedPersona;
  static selectedCheckbox = [];
  static selectedradio = [];

  init() {
    const that = this;
    document.addEventListener('DOMContentLoaded', function() {
      let campaign = document.querySelector('.sc-li-campaign');
      let campaigndata = JSON.parse(campaign.dataset.pageDetails);
      let firstpersonaBtn = document.querySelector('.sc-li-campaign__persona-btn');
      let personaitem = firstpersonaBtn.dataset.persona;
      that.createTitle();
      that.activeModal();
      that.paramCheck();
      that.generateChart(1, personaitem);
      that.tiggerContentFilter(personaitem);
      AdobeAnalytics.handlePageView(campaigndata);
    });
  }

  paramCheck() {
    let that = this;
    let queryString = Utils.getPageContext().queryString;
    const persona = ScCommonMethods.getQueryParam(
      queryString,
      document.querySelector('.sc-li-campaign').getAttribute('data-query-param')
    );
    const firstpersonaBtn = document.querySelector('.sc-li-campaign__persona-btn');
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
    var newUrl = currentUrl.split('?')[0] + '?' + urlParams.toString();

    // Push the new URL to the browser history without reloading the page
    window.history.pushState({ path: newUrl }, '', newUrl);
  }

  tiggerPersona(persona) {
    // Get all persona buttons
    const personaBtns = document.querySelectorAll('.sc-li-campaign__persona-btn');
    const queryparam = document.querySelector('.sc-li-campaign').getAttribute('data-query-param');

    // Function to handle click event
    const handleClick = (btn, index) => {
      let personaitem = btn.dataset.persona;
      // Remove active class from all persona buttons
      personaBtns.forEach(btn => {
        btn.classList.remove('sc-li-campaign__persona-btn-active');
      });

      // Add active class to the clicked button
      btn.classList.add('sc-li-campaign__persona-btn-active');
      this.addUrlParam(queryparam, personaitem);
      this.activeBanner(personaitem);
      this.activeContentBox(personaitem);
      this.generateChart(index + 1, personaitem);
      this.tiggerContentFilter(personaitem);
    };

    // Add click event listener to each persona button
    personaBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        handleClick(btn, index);
      });
    });

    // Trigger click event with specified persona value
    if (persona) {
      const personaIndex = Array.from(personaBtns).findIndex(
        btn => btn.dataset.persona === persona
      );
      if (personaIndex !== -1) {
        handleClick(personaBtns[personaIndex], personaIndex);
      }
    }
  }

  tiggerContentFilter(personaitem) {
    let filteritemparent, parentitem, isHide;
    let isFirstFilterActivated = false;
    let filters = document.querySelectorAll('.sc-li-campaign__policy-type-filter-step-item');
    if (filters.length) {
      filters.forEach(filter => {
        parentitem = filter.closest('.sc-li-campaign__content-box-item');
        filteritemparent = parentitem.dataset.content;
        isHide = parentitem.classList.contains('hide');
        let firstTitle = filters[0].dataset.filterItem;
        let title = filter.dataset.filterItem;
        if (personaitem === filteritemparent && !isHide) {
          if (!isFirstFilterActivated) {
            filter.classList.add('sc-li-campaign__policy-type-filter-step-item--active');
            this.activeFilterContent(firstTitle);
          } else {
            filter.classList.remove('sc-li-campaign__policy-type-filter-step-item--active');
          }
          isFirstFilterActivated = true;
          filter.addEventListener('click', e => {
            this.activeFilter(e);
            this.activeFilterContent(title);
          });
        }
      });
    }
  }

  activeFilter(e) {
    const targetelem = document.querySelectorAll('.sc-li-campaign__policy-type-filter-step-item');
    targetelem.forEach(el => {
      el.classList.remove('sc-li-campaign__policy-type-filter-step-item--active');
    });
    e.target.classList.add('sc-li-campaign__policy-type-filter-step-item--active');
  }

  activeFilterContent(activeTitle) {
    let filterContents = document.querySelectorAll(
      '.sc-li-campaign__policy-type-filter-panels-content'
    );
    if (filterContents.length) {
      filterContents.forEach(content => {
        let datafilter = content.dataset.filterSelect;
        if (activeTitle === datafilter) {
          content.classList.add('sc-li-campaign__policy-type-filter-panels-content--active');
        } else {
          content.classList.remove('sc-li-campaign__policy-type-filter-panels-content--active');
        }
      });
    }
  }

  activeBanner(activePersona) {
    let banneritems = document.querySelectorAll('.sc-li-campaign__banner');
    if (banneritems.length) {
      banneritems.forEach(banneritem => {
        let datafilter = banneritem.dataset.banner;
        if (activePersona === datafilter) {
          banneritem.classList.remove('hide');
        } else {
          banneritem.classList.add('hide');
        }
      });
    }
  }

  activeContentBox(activePersona) {
    let contentboxs = document.querySelectorAll('.sc-li-campaign__content-box-item');
    if (contentboxs.length) {
      contentboxs.forEach(contentbox => {
        let datafilter = contentbox.dataset.content;
        if (activePersona === datafilter) {
          contentbox.classList.remove('hide');
        } else {
          contentbox.classList.add('hide');
        }
      });
    }
  }

  createTitle() {
    let cards = document.querySelectorAll('.sc-li-campaign__policy-type-card-box');
    cards.forEach(item => {
      let title = item.querySelector('.sc-li-campaign__policy-type-title');
      let campBtn = item.querySelector('.sc-li-campaign__active-modal-btn');
      let learnBtn = item.querySelector('.sc-li-campaign__policy-type-learn-more');
      let campBtnTitle = `${campBtn.children[0].innerText.trim()} - ${title.innerText.trim()}`;
      let learnBtnTitle = `${learnBtn.innerText.trim()} - ${title.innerText.trim()}`;
      campBtn.setAttribute('title', campBtnTitle);
      learnBtn.setAttribute('title', learnBtnTitle);
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
    const gh = document.querySelectorAll('.sc-li-campaign__graph');
    if (gh.length) {
      gh.forEach(item => {
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
          type: 'pie',
          backgroundColor: null
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderWidth: 4,
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        legend: {
          className: 'sc-li-campaign__graph-legend',
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          labelFormat: '{name}: <b>{y}%</b>',
          symbolHeight: 14,
          symbolWidth: 14,
          symbolRadius: 2,
          width: '50%',
          itemStyle: {
            fontSize: '12px',
            fontWeight: '400'
          }
        },
        series: [
          {
            name: seriesName?.toString() ?? 'series',
            colorByPoint: true,
            data: [
              {
                name: ghdata?.d1?.title?.toString() ?? 'data 1',
                y: ghdata?.d1?.value ?? 0,
                color: '#00BCD3'
              },
              {
                name: ghdata?.d2?.title?.toString() ?? 'data 2',
                y: ghdata?.d2?.value ?? 0,
                color: '#2772C7'
              },
              {
                name: ghdata?.d3?.title?.toString() ?? 'data 3',
                y: ghdata?.d3?.value ?? 0,
                color: '#00A9F3'
              },
              {
                name: ghdata?.d4?.title?.toString() ?? 'data 4',
                y: ghdata?.d4?.value ?? 0,
                color: '#AE6BFC'
              }
            ]
          }
        ],
        exporting: false
      });
    }
  }

  // hasClasses
  hasClasses(event, classNames) {
    let target = event.target;
    let isClass = classNames.some(className => target.classList.contains(className));
    return isClass;
  }

  // form
  activeModal() {
    const that = this;
    const activemodalbtn = document.querySelector('.sc-li-campaign__active-modal-btn').dataset
      .modalSource;
    document.body.addEventListener('click', function(event) {
      let ctaTitle = event.target.title ? event.target.title : event.target.innerText;
      // let classesToCheck = [
      //   'sc-li-campaign__persona-btn',
      //   'sc-btn',
      //   'sc-li-campaign__policy-type-filter-step-item',
      //   'sc-li-campaign__policy-type-learn-more'
      // ];
      // console.log(that.hasClasses(event, classesToCheck));
      // if (that.hasClasses(event, classesToCheck)) {
      //   console.log('Target has all specified classes.');
      //   // AdobeAnalyticsCommon.handleCtaClick(ctaTitle, 'button', event.target);
      // }
      // track if modal close
      if (
        event.target.classList.contains('closebutton') ||
        event.target.classList.contains('wrapper')
      ) {
        AdobeAnalyticsCommon.handleCtaClick('closebutton', 'button', event.target);
        that.closeModal(this.lastAccessedField);
      }
      // verify the modal open
      if (event.target.dataset.modalSource === activemodalbtn) {
        let closestAnchor = event.target.closest('a');
        let formModal = document.querySelector('.sc-li-campaign-form-modal');
        let popupdata = JSON.parse(formModal.dataset.popup);
        let modalAttr = closestAnchor.getAttribute('data-modal-source');
        let formmodalAttr = formModal.getAttribute('data-modal-id');
        let wrapp = document.querySelector('.c-modal');
        if (modalAttr === formmodalAttr) {
          formModal.classList.add('sc-li-campaign-form-modal-active');
          wrapp.classList.add('sc-li-campaign-form-modal-main');
          AdobeAnalytics.handelFormStartShortForm(popupdata);
          that.getCheckboxes();
          that.formLastAccessedField();
          // form
          that.formSubmit();
        }
      }
    });
  }

  statusModal(status) {
    const errorModal = document.querySelector('.sc-error-modal');
    let errorModalStatus = errorModal.dataset.formStatus;
    if (status) {
      //If referral code is empty or invalid
      errorModal.classList.add('sc-error-modal--show');
      AdobeAnalytics.handleFormStatus(errorModalStatus);
    } else {
      errorModal.classList.remove('sc-error-modal--show');
    }
  }

  closeModal() {
    let lastAccessedField = this.lastAccessedField || 'na';
    if (lastAccessedField) {
      AdobeAnalytics.handleFormAbandon(lastAccessedField);
    } else {
      AdobeAnalytics.handleFormAbandon(lastAccessedField);
    }
  }

  getCheckboxes() {
    const that = this;
    var anycheckboxChecked, anyradioChecked;
    var checkboxes = document.querySelectorAll(
      '.sc-li-campaign-form__checkboxs .sc-radio-box__input'
    );
    var radios = document.querySelectorAll('.sc-li-campaign-form__radios .sc-radio-box__input');
    var formSubmitBtn = document.querySelector('.sc-li-campaign-form__submit-btn');
    radios[0].checked = true;
    var selecteditems = {};

    checkboxes.forEach(function(checkbox, i) {
      checkbox.addEventListener('change', function(e) {
        anycheckboxChecked = Array.from(checkboxes).some(function(checkbox) {
          return checkbox.checked;
        });
        radios.forEach(function() {
          anyradioChecked = Array.from(radios).some(function(radio) {
            return radio.checked;
          });
        });

        if (anycheckboxChecked && anyradioChecked) {
          formSubmitBtn.classList.remove('sc-btn--disabled');
        } else {
          formSubmitBtn.classList.add('sc-btn--disabled');
        }
        if (this.checked) {
          selecteditems.fieldTitle = e.target
            .closest('.sc-li-campaign-form__item')
            .querySelector('.sc-li-campaign-form__item-title').dataset.field;
          selecteditems.checkname = `${checkbox.name}_${i + 1}`;
          let formData = that.buildFormDataItem();
          AdobeAnalytics.handleInsuranceFormCheck(e.target, formData.name, formData.fields);
        } else {
          selecteditems.fieldTitle = e.target
            .closest('.sc-li-campaign-form__item')
            .querySelector('.sc-li-campaign-form__item-title').dataset.field;
          selecteditems.checkname = `uncheck_${i + 1}`;
          let formData = that.buildFormDataItem();
          AdobeAnalytics.handleInsuranceFormCheck(e.target, formData.name, formData.fields);
        }
      });
    });
    radios.forEach(function(radio, i) {
      radio.addEventListener('change', function(e) {
        anyradioChecked = Array.from(radios).some(function(radio) {
          return radio.checked;
        });

        if (anyradioChecked && anycheckboxChecked) {
          formSubmitBtn.classList.remove('sc-btn--disabled');
        } else {
          formSubmitBtn.classList.add('sc-btn--disabled');
        }
        if (this.checked) {
          selecteditems.fieldTitle = e.target
            .closest('.sc-li-campaign-form__item')
            .querySelector('.sc-li-campaign-form__item-title').dataset.field;
          selecteditems.radioname = `${radio.name}_${i + 1}`;
          let formData = that.buildFormDataItem();
          AdobeAnalytics.handleInsuranceFormCheck(e.target, formData.name, formData.fields);
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
    return names.join('|');
  }

  // Function to extract checkbox values
  getCheckboxValues(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    let values = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        values.push(checkbox.value);
      }
    });
    return values.join('|');
  }

  // Function to extract radio button Name
  getRadioNames(container) {
    const radios = container.querySelectorAll('input[type="radio"]');
    let name = '';
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
    let value = '';
    radios.forEach(radio => {
      if (radio.checked) {
        value = radio.value;
      }
    });
    return value;
  }

  // function to build form data object on submit
  buildFormData() {
    this.existingFieldNames = new Set();
    let formModal = document.querySelector('.sc-li-campaign-form-modal');
    let popupdata = JSON.parse(formModal.dataset.popup);
    const formdata = {
      name: popupdata.formname,
      fields: []
    };
    const formItems = document.querySelectorAll('.sc-li-campaign-form__item');
    formItems.forEach(item => {
      const fieldTitleElement = item.querySelector('.sc-li-campaign-form__item-title');
      const fieldTitle = fieldTitleElement.getAttribute('data-field');

      // Skip if the field name already exists
      if (this.existingFieldNames.has(fieldTitle)) {
        return;
      }

      let fieldValue = '';
      const checkboxContainer = item.querySelector('.sc-li-campaign-form__checkboxs');
      if (checkboxContainer) {
        fieldValue = this.getCheckboxValues(checkboxContainer);
      } else {
        const radioContainer = item.querySelector('.sc-li-campaign-form__radios');
        if (radioContainer) {
          fieldValue = this.getRadioValue(radioContainer);
        }
      }

      formdata.fields.push({
        fieldName: fieldTitle,
        fieldValue: fieldValue
      });

      // Add field name to the set to track it
      this.existingFieldNames.add(fieldTitle);
    });
    return formdata;
  }

  // function to build form data object on check
  buildFormDataItem() {
    this.existingFieldNames = new Set();
    let formModal = document.querySelector('.sc-li-campaign-form-modal');
    let popupdata = JSON.parse(formModal.dataset.popup);
    const formdata = {
      name: popupdata.formname,
      fields: []
    };
    const formItems = document.querySelectorAll('.sc-li-campaign-form__item');
    formItems.forEach(item => {
      const fieldTitleElement = item.querySelector('.sc-li-campaign-form__item-title');
      const fieldTitle = fieldTitleElement.getAttribute('data-field');

      // Skip if the field name already exists
      if (this.existingFieldNames.has(fieldTitle)) {
        return;
      }

      let fieldValue = '';
      const checkboxContainer = item.querySelector('.sc-li-campaign-form__checkboxs');
      if (checkboxContainer) {
        fieldValue = this.getCheckboxValues(checkboxContainer);
      } else {
        const radioContainer = item.querySelector('.sc-li-campaign-form__radios');
        if (radioContainer) {
          fieldValue = this.getRadioValue(radioContainer);
        }
      }

      formdata.fields.push({
        fieldName: fieldTitle,
        fieldValue: fieldValue
      });

      // Add field name to the set to track it
      this.existingFieldNames.add(fieldTitle);
    });
    return formdata;
  }

  // function for form Submit
  formSubmit() {
    const formSubmitBtn = document.querySelector('.sc-li-campaign-form__submit-btn');
    formSubmitBtn.addEventListener('click', () => {
      try {
        let formData = this.buildFormData();
        formData.ctaname = formSubmitBtn.textContent.trim();

        AdobeAnalytics.handleInsuranceFormSubmit(formData.name, formData.ctaname, formData.fields);

        setTimeout(() => {
          this.statusModal(true);
        }, 600);
      } catch (error) {
        let errObj = {
          code: error.statusCode,
          description: error.message,
          field: this.lastAccessedField
        };
        AdobeAnalytics.handleFormError(errObj);
        this.statusModal(false); // Optionally close the modal on error
      }
    });
    document.querySelector('.sc-error-modal__alert-close').addEventListener('click', () => {
      this.statusModal(false);
    });
  }

  formLastAccessedField() {
    // Get the form and all input fields
    const form = document.querySelector('.sc-li-campaign-form');
    if (!form) return;
    const formElements = form.querySelectorAll('input');

    // Add event listeners to all input fields
    formElements.forEach(element => {
      element.addEventListener('change', event => {
        const itemElement = event.target.closest('.sc-li-campaign-form__item');
        const titleElement = itemElement.querySelector('.sc-li-campaign-form__item-title');
        this.lastAccessedField = titleElement.innerText;
      });
    });
  }
}

const instance = new scInsuranceCampaign();
instance.init();

export default instance;