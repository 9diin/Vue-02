import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./routes";
import "./assets/globals.css";

/** Pinia 인스턴스 생성 */
const pinia = createPinia();

createApp(App)
    .use(pinia) // Pinia 사용
    .use(router) // Vue Router 사용
    .mount("#app");
