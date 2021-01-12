<template>
  <main>
    <Hero :updatedAt="updatedAt" />
    <hr />
    <World :data="worldData" />
    <hr />
    <!-- <TopCountriesToday /> -->
    <Continents />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default Vue.extend({
  async fetch() {
    const res = await this.$axios.$get("/world");
    const worldData = res.data;

    this.worldData = worldData[worldData.length - 1];
    this.updatedAt = worldData[worldData.length - 1].created_at;
  },
  created() {
    if (process.client) {
      AOS.init();
    }
  },
  data() {
    return {
      updatedAt: null,
      worldData: null
    };
  }
});
</script>

<style lang="scss">
hr {
  /* width: 80%; */
  @apply bg-gray-300 mx-auto w-full my-16;
}

.heading-2 {
  @apply font-bold text-4xl mb-3 text-center;
}
.heading-3 {
  @apply font-bold text-2xl mb-3 text-center;
}
</style>
