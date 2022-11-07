import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Router from "@/router";
import piniaPersist from "pinia-plugin-persist";

import "./index.css";

const pinia = createPinia();
pinia.use(piniaPersist);

createApp(App).use(pinia).use(Router).mount("#app");
