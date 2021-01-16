<template>
  <table class="country-data">
    <thead>
      <tr>
        <th>Date</th>
        <th>New Cases</th>
        <th>Active Cases</th>
        <th>New Deaths</th>
        <th>Total Infected</th>
        <th>Deaths</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="country in data" :key="country.id">
        <td>
          {{ formatDate(new Date(country.created_at)) }}
        </td>
        <td>+{{ country.newCases }}</td>
        <td>{{ country.activeCases }}</td>
        <td>+{{ country.newDeaths }}</td>
        <td>{{ country.totalCases }}</td>
        <td>{{ country.totalDeaths }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import formatChartDate from "~/helpers/formatChartDate";
export default {
  props: {
    data: {
      required: true,
      type: Array
    }
  },
  methods: {
    formatDate: formatChartDate
  }
};
</script>

<style scoped lang="scss">
.country-data {
  @apply w-full border-2 border-gray-600;
  th {
    @apply border-2 border-gray-600;
  }
  tr {
    @apply border-b border-gray-200;
  }
  td {
    @apply p-1;
  }
}
</style>
