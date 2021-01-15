<template>
  <section class="chart">
    <canvas ref="chart"></canvas>
    <ChartController
      :activePeriod="activePeriod"
      :activeDataType="activeDataType"
      @onChartDataTypeChange="updateActiveDataType"
      @onChartDisplayPeriodChange="updateActivePeriod"
    />
  </section>
</template>

<script>
import Chart from "chart.js";
import chartOptions from "~/assets/chartOptions";
import formatChartDate from "~/helpers/formatChartDate";

export default {
  data() {
    return {
      label: "Daily infections in the world",
      activePeriod: "Week",
      activeDataType: "newCases",
      chartData: null,
      chart: null
    };
  },
  methods: {
    getDaysFromPeriod() {
      let dayPeriod;

      switch (this.activePeriod) {
        case "Week":
          dayPeriod = 7;
          break;
        case "Month":
          dayPeriod = 31;
          break;
        case "Year":
          dayPeriod = 365;
          break;

        default:
          dayPeriod = 7;
          break;
      }

      return dayPeriod;
    },
    updateActiveDataType(dataType) {
      switch (dataType) {
        case "newCases":
          this.label = "Daily new infections";
          break;
        case "activeCases":
          this.label = "Daily active infections";
          break;
        case "totalDeaths":
          this.label = "Daily deaths";
          break;
        case "newDeaths":
          this.label = "Daily new deaths";
          break;
      }

      this.activeDataType = dataType;
      this.renderChart();
    },
    updateActivePeriod(period) {
      this.activePeriod = period;
      this.renderChart();
    },
    getChartData() {
      const labels = [];
      const data = [];

      const dataToFormat = this.data.slice(
        this.data.length - this.getDaysFromPeriod(),
        this.data.length
      );

      dataToFormat.forEach(item => {
        labels.push(formatChartDate(new Date(item.created_at)));
        data.push(item[this.activeDataType]);
      });

      return [labels, data];
    },
    renderChart() {
      const [labels, data] = this.getChartData();

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(this.$refs.chart.getContext("2d"), {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: this.label,
              data,
              backgroundColor: ["rgba(47,128,237, 0.2)"],
              borderColor: ["rgba(47,128,237, 0.5)"]
            }
          ]
        },
        options: chartOptions
      });
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    dataType: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.renderChart();
  }
};
</script>

<style lang="scss" scoped>
.chart {
  @apply py-4;
  .ct-chart {
    width: 100%;
  }
}
</style>
