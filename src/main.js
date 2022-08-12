import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores"; // 导入创建的pinia

/* 项目重置css样式 */
import "normalize.css";
import "./assets/css/index.css";
import "vant/es/notify/style"; // Notify

function createFn() {
  const app = createApp(App);

  app.use(pinia);

  app.use(router);

  app.mount("#app");
}

createFn();
