class lifeInsuranceCamp {
  static selectedPersona;
  static selectedCheckbox = [];
  static selectedradio = [];
  init() {
    const that = this;
    console.log("life -insurance-campaign");
    that.activePersonaClass();
    that.activeModal();
    document.addEventListener("DOMContentLoaded", function () {
      const firstpersonaBtn = document.querySelector(
        ".sc-li-campaign__persona-btn"
      );
      let personaitem = firstpersonaBtn.dataset.persona;
      that.generateChart(1, personaitem);
      that.tiggerContentFilter(personaitem);

      // // form
      // const formSubmitBtn = document.querySelector(
      //   ".sc-li-campaign-form__submit-btn"
      // );
      // formSubmitBtn.addEventListener("click", () => {
      //   console.log("Form Submit")
      //   that.allSelectedData();
      // });
    });
  }

  activePersonaClass() {
    // Get all persona buttons
    const personaBtns = document.querySelectorAll(
      ".sc-li-campaign__persona-btn"
    );

    // Add click event listener to each persona button
    personaBtns.forEach((btn, index) => {
      const that = this;
      let personaitem = btn.dataset.persona;
      btn.addEventListener("click", function () {
        // Remove active class from all persona buttons
        personaBtns.forEach((btn) => {
          btn.classList.remove("sc-li-campaign__persona-btn-active");
        });

        // Add active class to the clicked button
        this.classList.add("sc-li-campaign__persona-btn-active");
        console.log(btn.textContent.trim());
        that.activeBanner(personaitem);
        that.activeContentBox(personaitem);
        that.generateChart(index + 1, personaitem);
        that.tiggerContentFilter(personaitem);
      });
    });
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
    console.log("activeTitle--", activeTitle);
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

    // Highcharts.chart(`persona_graph_${id}`, {
    //   chart: {
    //     width: null,
    //     height: 200,
    //     type: "pie",
    //     backgroundColor: null,
    //   },
    //   title: {
    //     text: "",
    //   },
    //   tooltip: {
    //     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    //   },
    //   accessibility: {
    //     point: {
    //       valueSuffix: "%",
    //     },
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: "pointer",
    //       borderWidth: 4,
    //       dataLabels: {
    //         enabled: false,
    //       },
    //       showInLegend: true,
    //     },
    //   },
    //   legend: {
    //     className: "sc-li-campaign__graph-legend",
    //     layout: "vertical",
    //     align: "right",
    //     verticalAlign: "middle",
    //     labelFormat: "{name}: <b>{y}%</b>",
    //     symbolHeight: 14,
    //     symbolWidth: 14,
    //     symbolRadius: 2,
    //     width: "50%",
    //     itemStyle: {
    //       fontSize: "12px",
    //       fontWeight: "400",
    //     },
    //   },
    //   series: [
    //     {
    //       name: "Young Generation",
    //       colorByPoint: true,
    //       data: [
    //         {
    //           name: "Critical Illness",
    //           y: ghdata?.d1,
    //           color: "#00BCD3",
    //         },
    //         {
    //           name: "Saving Account",
    //           y: ghdata?.d2,
    //           color: "#2772C7",
    //         },
    //         {
    //           name: "Life",
    //           y: ghdata?.d3,
    //           color: "#00A9F3",
    //         },
    //         {
    //           name: "Medical",
    //           y: ghdata?.d4,
    //           color: "#AE6BFC",
    //         },
    //       ],
    //     },
    //   ],
    //   exporting: false,
    // });
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
          // setTimeout(() => {
          //   that.statusModal(true);
          // }, 6000);
          that.getCheckboxes();
          // form
          const formSubmitBtn = document.querySelector(
            ".sc-li-campaign-form__submit-btn"
          );
          formSubmitBtn.addEventListener("click", () => {
            console.log("Form Submit");
            that.allSelectedData();
          });
        }
      }
    });
  }

  statusModal(status) {
    const errorModal = document.querySelector(".sc-error-modal");
    if (status) {
      //If referral code is empty or invalid
      errorModal.classList.add("sc-error-modal--show");
    }
  }

  getCheckboxes() {
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
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function (e) {
        var anyChecked = Array.from(checkboxes).some(function (checkbox) {
          return checkbox.checked;
        });

        if (anyChecked) {
          formSubmitBtn.classList.remove("sc-btn--disabled");
        } else {
          formSubmitBtn.classList.add("sc-btn--disabled");
        }
        console.log("change", e);
        if (this.checked) {
          console.log(checkbox.getAttribute("id"));
          lifeInsuranceCamp.selectedCheckbox.push(checkbox.getAttribute("id"));
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
        console.log("change", e);
        if (this.checked) {
          console.log(radio.getAttribute("id"));
          lifeInsuranceCamp.selectedradio.push(radio.getAttribute("id"));
        }
        // console.log({selectedCheckbox})
      });
    });
  }

  allSelectedData() {
    // const data = this.selectedCheckbox.con this.selectedradio;
    console.log(lifeInsuranceCamp.selectedCheckbox);
  }

  formSubmit() {}
}

const Instance = new lifeInsuranceCamp();
Instance.init();
