import Vue from "vue";

import months from "~/assets/months";

Vue.filter("formatNumber", (num: string): string => {
  return num.toLocaleString();
});

Vue.filter("formatDate", (date: Date): string => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const time = date.toTimeString().slice(0, 8);

  const todaysDate = new Date();

  if (todaysDate.getDate() == day && todaysDate.getMonth() == monthIndex) {
    return `Today at ${time}`;
  }

  return `${months[monthIndex]} ${day}, ${year} at ${time}`;
});
