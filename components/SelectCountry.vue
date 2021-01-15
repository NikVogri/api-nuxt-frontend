<template>
  <div class="select-country">
    <select v-model="selectedCountry">
      <option
        v-for="country in countryList"
        :value="country.name"
        :key="country.name"
        >{{ country.name }}</option
      >
    </select>
    <button class="btn-search" @click="getCountryData">Search</button>
    <button class="btn-random" @click="getRandomCountryData">Random</button>
  </div>
</template>

<script>
import countryList from "~/assets/countryList";
export default {
  data() {
    return {
      selectedCountry: "Afghanistan",
      countryList
    };
  },
  methods: {
    getCountryData() {
      this.$emit("onGetCountryData", this.selectedCountry);
    },
    getRandomCountryData() {
      const randomIndex = Math.floor(Math.random() * this.countryList.length);
      const randomCountryName = this.countryList[randomIndex].name;
      console.log(randomCountryName);

      this.$emit("onGetCountryData", randomCountryName);
    }
  }
};
</script>

<style lang="scss" scoped>
.select-country {
  select {
    @apply border border-gray-600 rounded px-4 py-2;
  }

  .btn {
    &-search,
    &-random {
      @apply px-4 py-2 rounded text-white;
    }

    &-search {
      background-color: var(--primary-blue);
    }
    &-random {
      @apply bg-black;
    }
  }
}
</style>
