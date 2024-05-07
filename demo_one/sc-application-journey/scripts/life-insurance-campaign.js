// import Highcharts from "../node_modules/highcharts";

class lifeInsuranceCamp {
  init() {
    console.log("life -insurance-campaign");
    this.generateChart();
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
        text:"",
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
      legend:{
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
        }
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
}

const Instance = new lifeInsuranceCamp();
Instance.init();
