<template>
  <section class="chart">
    <canvas ref="chart"></canvas>
  </section>
</template>

<script>
import Chart from "chart.js";
import chartOptions from "~/assets/chartOptions";
import formatChartDate from "~/helpers/formatChartDate";

export default {
  methods: {
    getChartData() {
      const labels = [];
      const data = [];

      this.data.forEach(item => {
        labels.push(formatChartDate(new Date(item.created_at)));
        data.push(item[this.dataType]);
      });

      return [labels, data];
    },
    renderChart() {
      const [labels, data] = this.getChartData();

      console.log(chartOptions);

      new Chart(this.$refs.chart.getContext("2d"), {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Daily infections in the world: ",
              data,
              backgroundColor: ["rgba(75, 192, 192, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"]
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
  @apply p-8;
  .ct-chart {
    width: 100%;
  }
}
</style>
