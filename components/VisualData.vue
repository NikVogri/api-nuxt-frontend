<template>
  <section class="visual-data">
    <div class="visual-data__quick-info">
      <slot />
    </div>

    <CircleDataGraph
      :total="data.totalCases"
      :active="data.activeCases"
      :deaths="data.totalDeaths"
      :blobValue="peoplePerBlob"
    />
    <div class="visual-data__button">
      <router-link v-if="viewMoreUrl" :to="viewMoreUrl" class="btn btn-primary">
        Get more data
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    viewMoreUrl: {
      type: String,
      required: false
    },
    data: {
      type: Object,
      required: true
    },
    peoplePerBlob: {
      type: Number,
      required: true
    }
  },
  mounted() {
    console.log(this.data);
  }
});
</script>

<style lang="scss" scoped>
.visual-data {
  @apply text-center;

  &__quick-info {
    @apply mb-12;
    p {
      @apply text-lg text-gray-800;
    }
  }

  &__button {
    @apply flex justify-center my-16;
  }
}
</style>
