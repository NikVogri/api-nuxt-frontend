<template>
  <section class="world">
    <h2 class="heading-2">World</h2>
    <p>
      {{ todaysWorldData.totalCases | formatNumber }} total infected since the
      start
    </p>
    <p>
      {{ todaysWorldData.activeCases | formatNumber }} active cases (+{{
        todaysWorldData.newCases | formatNumber
      }})
    </p>
    <p>
      {{ todaysWorldData.totalDeaths | formatNumber }} deaths ( +{{
        todaysWorldData.newDeaths | formatNumber
      }})
    </p>
    <Chart :data="worldData" />
    <VisualData
      :data="todaysWorldData"
      :animateOnScroll="false"
      :peoplePerBlob="500000"
    />
  </section>
</template>

<script>
export default {
  async asyncData(ctx) {
    const res = await ctx.$axios.$get("/world");
    const worldData = res.data;

    return {
      todaysWorldData: worldData[worldData.length - 1],
      worldData
    };
  },
  data() {
    return {
      todayWorldData: null,
      worldData: null,
      animateOnScroll: false
    };
  }
};
</script>

<style lang="scss">
.world {
  min-height: var(--full-height);
  @apply text-center p-8;

  @media (max-width: 724px) {
    @apply p-0;
  }
}
</style>
