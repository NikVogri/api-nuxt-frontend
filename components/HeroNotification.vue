<template>
  <div class="notification">
    <div class="notification__type">Update!</div>
    <div class="notification__text">
      Latest database update: {{ updatedAt | formatDate }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    updatedAt: {
      type: Date,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.notification {
  @apply w-full flex border border-gray-400 rounded-lg mt-16 mb-24;

  @media (max-width: 564px) {
    @apply flex-col mb-8 mt-4;
  }

  &__type {
    background-color: var(--primary-blue);
    color: var(--white);

    @apply rounded-lg text-center py-2 font-bold;
    width: 145px;

    @media (max-width: 564px) {
      @apply w-full;
    }
  }
  &__text {
    @apply text-center py-2 flex-1 font-medium;

    @media (max-width: 564px) {
      @apply w-full text-sm;
    }
  }
}
</style>
