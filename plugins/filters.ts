import Vue from "vue";

import months from "~/assets/months";

Vue.filter("formatNumber", (num: string) => {
  return num.toLocaleString();
});

Vue.filter("formatDate", (date: Date) => {
  const day = date.getDay();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const time = date.toTimeString().slice(0, 8);

  return `${months[monthIndex]} ${day}. ${year} at ${time}`;
});
