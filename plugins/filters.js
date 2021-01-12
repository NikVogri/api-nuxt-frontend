import Vue from "vue";

Vue.filter("parseNumbers", num => {
  return num.toLocaleString();
});
