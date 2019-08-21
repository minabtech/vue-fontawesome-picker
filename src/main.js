import Vue from "vue";
import App from "./App.vue";
import VueFontAwesomePicker from "./components/vfa-picker";

Vue.use(VueFontAwesomePicker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
