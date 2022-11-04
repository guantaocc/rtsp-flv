import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import JSMpegPlayer from 'vue-jsmpeg-player';
// import 'vue-jsmpeg-player/dist/jsmpeg-player.css';

Vue.use(ElementUI);
// Vue.use(JSMpegPlayer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
