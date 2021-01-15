<template>
  <div class="quote">
    <p>"{{ quote }}"</p>
    <span>{{ author }}</span>
  </div>
</template>

<script>
import Vue from "vue";
import quotes from "~/assets/quotes";
export default Vue.extend({
  data() {
    return {
      quote: "",
      author: ""
    };
  },
  created() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    this.quote = randomQuote.quote;
    this.author = randomQuote.author;
  }
});
</script>

<style lang="scss" scoped>
.quote {
  width: 100%;
  @apply text-center pb-8;

  p {
    @apply mb-2;
  }
  span {
    @apply font-medium;
  }
}
</style>
