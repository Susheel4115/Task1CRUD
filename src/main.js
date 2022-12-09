import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueToastify from "vue-toastify";

Vue.config.productionTip = false;

Vue.use(VueToastify, {
  position: "top-right",
  canTimeout: true,
  errorDuration: 500,
  successDuration: 100,
  alertInfoDuration: 100,
  duration: 100,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
