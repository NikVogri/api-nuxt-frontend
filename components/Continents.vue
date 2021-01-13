<template>
  <section class="continents">
    <div class="continents__text">
      <h2 class="heading-2">Continents</h2>
      <p>
        Broad data, displayed with blobs. For more data please visit a specific
        continent page.
      </p>
    </div>

    <VisualData
      v-for="continent in continentData"
      :data="continent"
      :key="continent.continent"
      :peoplePerBlob="100000"
      :viewMoreUrl="`/continents?name=${continent.continent}`"
      :animateOnScroll="true"
    >
      <h2 class="heading-3">{{ continent.continent }}</h2>
      <p>
        {{ continent.totalCases | formatNumber }} total infected since the start
      </p>
      <p>
        {{ continent.activeCases | formatNumber }} active cases (+{{
          continent.newCases | formatNumber
        }})
      </p>
      <p>
        {{ continent.totalDeaths | formatNumber }}deaths (+{{
          continent.newDeaths | formatNumber
        }})
      </p>
    </VisualData>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Continent } from "~/types/Continent";

export default Vue.extend({
  async fetch() {
    const res = await this.$axios.$get("/continents");
    const continentsData = res.data.filter(
      (continent: Continent) => continent.continent !== "All"
    );

    this.continentData = continentsData;
  },
  data() {
    return {
      continentData: null
    };
  }
});
</script>

<style lang="scss" scoped>
.continents {
  &__text {
    @apply mb-8 text-center;
  }
}
</style>
