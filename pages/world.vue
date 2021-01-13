<template>
  <section class="world">
    <World :data="worldData" :animateOnScroll="false" />
  </section>
</template>

<script>
export default {
  async fetch() {
    const res = await this.$axios.$get("/world");
    const worldData = res.data;

    this.worldData = worldData[worldData.length - 1];
  },
  data() {
    return {
      worldData: null
    };
  }
};
</script>

<style lang="scss">
.world {
  min-height: var(--full-height);
  @apply flex justify-center items-center;
}
</style>
