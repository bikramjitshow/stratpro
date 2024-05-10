// import Highcharts from "../node_modules/highcharts";

class lifeInsuranceCamp {
  static selectedPersona;
  init() {
    const that = this;
    console.log("life -insurance-campaign");
    that.generateChart();
    that.activePersonaClass();
    that.activeModal();
    document.addEventListener("DOMContentLoaded", function () {
      that.tiggerContentFilter();
    });
  }

  activePersonaClass() {
    // Get all persona buttons
    const personaBtns = document.querySelectorAll(
      ".sc-li-campaign__persona-btn"
    );

    // Add click event listener to each persona button
    personaBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all persona buttons
        personaBtns.forEach((btn) => {
          btn.classList.remove("sc-li-campaign__persona-btn-active");
        });

        // Add active class to the clicked button
        this.classList.add("sc-li-campaign__persona-btn-active");
        console.log(btn.textContent.trim());
      });
    });
  }

  tiggerContentFilter() {
    let filters = document.querySelectorAll(
      ".sc-li-campaign__policy-type-filter-step-item"
    );
    if (filters.length) {
      filters.forEach((filter) => {
        let firstTitle = filters[0].dataset.filterItem;
        let title = filter.dataset.filterItem;
        filters[0].classList.add(
          "sc-li-campaign__policy-type-filter-step-item--active"
        );
        this.activeFilterContent(firstTitle);
        filter.addEventListener("click", (e) => {
          this.activeFilter(e);
          this.activeFilterContent(title);
        });
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
    let labelFor = e.target;
  }
  activeFilterContent(activeTitle) {
    console.log(activeTitle);
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

  generateChart() {
    Highcharts.chart("container-new", {
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
              y: 47,
              color: "#00BCD3",
            },
            {
              name: "Saving Account",
              y: 42,
              color: "#2772C7",
            },
            {
              name: "Life",
              y: 7,
              color: "#00A9F3",
            },
            {
              name: "Medical",
              y: 4,
              color: "#AE6BFC",
            },
          ],
        },
      ],
      exporting: false,
    });
  }

  activeModal() {
    const that = this;
    document.body.addEventListener("click", function (event) {
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
}

const Instance = new lifeInsuranceCamp();
Instance.init();
