<template>
  <section class="continents">
    <SelectCountry @onGetCountryData="getCountryData" />

    <div v-if="!loading">
      <div v-if="countryInformation" class="country-info">
        <div class="country-info__head">
          <img :src="countryInformation.flag" :alt="countryInformation.name" />
          <h2 class="heading-2">{{ countryInformation.name }}</h2>
        </div>

        <div class="country-info__body">
          <p>Population: {{ countryInformation.population | formatNumber }}</p>
          <p>Region: {{ countryInformation.region }}</p>
          <p>Area: {{ countryInformation.area | formatNumber }}</p>
          <p>
            Percentage of currently infected:
            <strong>{{ currentlyInfectedPercentage }}%</strong>
          </p>
          <p>
            Percentage of all infected population:
            <strong>{{ allTimeInfectedPopulationPercentage }}%</strong>
          </p>
        </div>
      </div>

      <h2 class="heading-2" v-if="!countryInformation && countryData">
        {{ countryData[0].country }}
      </h2>

      <div class="continents__data" v-if="showData && countryData">
        <Chart :data="countryData" />
        <Table :data="countryData" />
      </div>
    </div>
    <div v-else class="loading-spinner"></div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </section>
</template>

<script>
import formatChartDate from "~/helpers/formatChartDate";

export default {
  async asyncData(ctx) {
    const res = await ctx.$axios.$get("/countries");
    const countryList = res.data;

    return {
      countryList
    };
  },
  data() {
    return {
      countryList: null,
      countryData: null,
      countryInformation: null,
      showData: false,
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async getCountryData(countryName) {
      this.countryData = null;
      this.countryInformation = null;
      this.errorMessage = "";
      this.loading = true;

      try {
        const res = await this.$axios.$get(`/country/${countryName}`);

        if (!res.data.length) {
          return (this.errorMessage = `${countryName} did not return any results.`);
        }

        this.countryData = res.data;
        this.showData = true;
      } catch (err) {
        this.loading = false;
        this.errorMessage = "Something went wrong, please try again later";
      }

      try {
        const res2 = await this.$axios.$get(
          `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
        );

        if (res2) {
          this.countryInformation = res2[0];
        }
      } catch (err) {
        this.loading = false;
      }

      this.loading = false;
    },
    formatDate: formatChartDate,
    roundToNearestDecimalPlace(decimalValue) {
      const decimalValString = decimalValue
        .toString()
        .slice(2, -1)
        .split("");

      let output = "0.";

      for (let digit of decimalValString) {
        output += digit;
        if (Number(digit) > 0) {
          return output;
        }
      }
    }
  },
  computed: {
    currentlyInfectedPercentage() {
      const rawPercentage =
        this.countryData[this.countryData.length - 1].activeCases /
        this.countryInformation.population;

      if (rawPercentage > 1) {
        return rawPercentage.toString().slice(0, 4);
      }

      return this.roundToNearestDecimalPlace(rawPercentage);
    },
    allTimeInfectedPopulationPercentage() {
      const rawPercentage =
        this.countryData[this.countryData.length - 1].totalCases /
        this.countryInformation.population;

      if (rawPercentage > 1) {
        return rawPercentage.toString().slice(0, 4);
      }

      return this.roundToNearestDecimalPlace(rawPercentage);
    }
  }
};
</script>

<style lang="scss">
.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.country-info {
  @apply border border-gray-200 p-4 rounded mt-4 text-left;
  &__head {
    @apply flex items-center;

    h2 {
      @apply m-0;
    }

    img {
      height: 40px;
      width: 60px;
      @apply mr-3;
    }
  }
}
.continents {
  min-height: var(--full-height);
  @apply p-8 text-center flex flex-col;

  &__data {
    @apply pt-4 mt-4;
  }

  @media (max-width: 724px) {
    @apply p-0;
  }

  &__card {
    @apply border border-gray-200 mb-4;
  }
}
</style>
