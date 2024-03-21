import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/index.js";
import "./style.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import VueAwesomePaginate from "vue-awesome-paginate";
createApp(App)
  .use(VueAwesomePaginate)
  .use(VueSweetalert2)
  .use(router)
  .mount("#app");
