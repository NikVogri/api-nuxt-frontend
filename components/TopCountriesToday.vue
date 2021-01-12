<template>
  <section class="top-countries">
    <h2 class="heading-2">Countries with the highest infection rate today</h2>
    <div class="top-countries__blobs">
      <div>
        <p>Russia</p>
        <span>22,934</span>
      </div>
      <div>
        <p>Russia</p>
        <span>10,047</span>
      </div>
      <div>
        <p>Russia</p>
        <span>9,294</span>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    topCountries: {
      type: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.top-countries {
  &__blobs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 15px;
    @apply grid text-center font-bold items-center;
    & > * {
      @apply flex items-center justify-center flex-col rounded border border-gray-300 h-full w-full;
      min-height: 250px;
      p {
        text-transform: uppercase;
      }
    }
  }
}
</style>
