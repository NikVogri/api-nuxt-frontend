<template>
  <section class="visual-data">
    <div class="visual-data__quick-info">
      <slot />
    </div>

    <CircleDataGraph
      :total="91438689"
      :active="24044055"
      :deaths="1956174"
      :blobValue="500000"
    />
    <div class="visual-data__button">
      <router-link v-if="dataUrl" :to="dataUrl" class="btn btn-primary">
        Get more data
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    dataUrl: {
      type: String,
      required: false
    }
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
