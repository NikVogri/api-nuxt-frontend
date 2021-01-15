<template>
  <div class="chart-control">
    <div>
      <p>Period:</p>
      <ul>
        <li
          v-for="period in periods"
          :key="period"
          @click="changeChartDisplayPeriod(period)"
          :class="{
            active: activePeriod === period
          }"
        >
          {{ period }}
        </li>
      </ul>
    </div>
    <div>
      <p>Sort by:</p>
      <ul>
        <li
          v-for="dataType in dataTypes"
          :key="dataType.type"
          @click="changeChartDataType(dataType.type)"
          :class="{
            active: activeDataType === dataType.type
          }"
        >
          {{ dataType.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      periods: ["Week", "Month", "Year"],
      dataTypes: [
        {
          type: "newCases",
          text: "New Cases"
        },
        {
          type: "activeCases",
          text: "Active Cases"
        },
        {
          type: "totalDeaths",
          text: "Total Deaths"
        },
        {
          type: "newDeaths",
          text: "New Deaths"
        }
      ]
    };
  },
  props: {
    activePeriod: {
      type: String,
      required: true
    },
    activeDataType: {
      type: String,
      required: true
    }
  },
  methods: {
    changeChartDataType(dataType) {
      this.$emit("onChartDataTypeChange", dataType);
    },
    changeChartDisplayPeriod(period) {
      this.$emit("onChartDisplayPeriodChange", period);
    }
  }
};
</script>

<style lang="scss">
.chart-control {
  @apply flex justify-between mt-8;
  p {
    @apply font-bold text-left  px-2;
  }

  ul {
    @apply flex items-center cursor-pointer;
    color: var(--primary-blue);
    font-weight: 500;

    @media (max-width: 724px) {
      @apply flex-col;
    }

    li {
      @apply px-3 py-1;
      &:not(:last-of-type) {
        margin-right: 15px;

        @media (max-width: 724px) {
          margin-right: 0;
        }
      }

      &.active {
        background-color: var(--primary-blue);
        @apply px-2 py-1 text-white;
      }
    }
  }
}
</style>
