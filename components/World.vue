<template>
  <VisualData>
    <h2 class="heading-2">World</h2>
    <p>{{ data.totalCases | parseNumbers }} total infected since the start</p>
    <p>
      {{ data.activeCases | parseNumbers }} active cases (+{{
        data.newCases | parseNumbers
      }})
    </p>
    <p>
      {{ data.totalDeaths | parseNumbers }} deaths ( +{{
        data.newDeaths | parseNumbers
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
    }
  },
  created() {
    console.log(this.data);
  }
});
</script>

<style></style>
