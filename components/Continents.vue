<template>
  <section class="continents">
    <div class="continents__text">
      <h2 class="heading-2">Continents</h2>
      <p>
        Broad data, displayed with blobs. For more data please visit a specific
        continent page.
      </p>
    </div>

    <VisualData :dataUrl="'https://www.google.si'">
      <h2 class="heading-3">North America</h2>
      <p>91,438,689 total infected since the start</p>
      <p>24,044,055 active cases (+116,566)</p>
      <p>1,956,174 deaths ( +3,640)</p>
    </VisualData>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.continents {
  &__text {
    @apply mb-8 text-center;
  }
}
</style>
