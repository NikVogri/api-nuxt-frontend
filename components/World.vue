<template>
  <VisualData
    :data="data"
    :peoplePerBlob="500000"
    :animateOnScroll="animateOnScroll"
  >
    <h2 class="heading-2">World</h2>
    <p>{{ data.totalCases | formatNumber }} total infected since the start</p>
    <p>
      {{ data.activeCases | formatNumber }} active cases (+{{
        data.newCases | formatNumber
      }})
    </p>
    <p>
      {{ data.totalDeaths | formatNumber }} deaths ( +{{
        data.newDeaths | formatNumber
      }})
    </p>
  </VisualData>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    data: {
      required: true,
      type: Object
    },
    animateOnScroll: {
      required: false,
      type: Boolean
    }
  }
});
</script>

<style></style>
