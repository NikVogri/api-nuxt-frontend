<template>
  <div class="hero">
    <transition name="heroText" appear>
      <div>
        <HeroNotification :updatedAt="new Date(updatedAt)" />
        <div class="hero__text">
          <h1>Corona Virus Statistics and Visualization</h1>
          <p>
            Daily updated data from over 180 countries. View data or use our API
            to display data in your own applications
          </p>
        </div>
        <div class="hero__buttons">
          <nuxt-link to="/world" class="btn btn-primary">World Data</nuxt-link>
          <nuxt-link to="/daily-updates" class="btn btn-dark"
            >Get Daily Updates</nuxt-link
          >
        </div>
        <HeroQuote />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    updatedAt: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.hero {
  max-width: 740px;
  min-height: var(--full-height);
  @apply flex mx-auto;

  @media (max-width: 564px) {
    min-height: 100px;
  }

  &__text {
    h1 {
      font-size: 70px;
      line-height: 1;
      @apply mb-4 font-bold text-center;
      color: var(--primary-blue);

      @media (max-width: 564px) {
        font-size: 54px;
      }
    }
    p {
      @apply text-gray-800 mb-16 text-lg text-center;
      @media (max-width: 564px) {
        @apply text-sm mb-8;
      }
    }
  }

  .hero__buttons {
    @apply flex justify-center mb-16;

    & > a:first-child {
      @apply mr-8;
      @media (max-width: 564px) {
        @apply mr-0;
      }
    }

    @media (max-width: 564px) {
      @apply flex-col items-center mb-4;

      a {
        @apply w-full mb-4;
      }
    }
  }
}

.heroText-enter-active {
  animation: dropIn 0.8s ease;
}

@keyframes dropIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
