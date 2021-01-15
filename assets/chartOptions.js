module.exports = {
  tooltips: {
    callbacks: {
      label(t, d) {
        const xLabel = d.datasets[t.datasetIndex].label;
        const yLabel =
          t.yLabel >= 1000
            ? t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : t.yLabel;
        return xLabel + ": " + yLabel;
      }
    }
  },

  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: label => {
            return label.toLocaleString();
          }
        }
      }
    ]
  }
};
