import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/index.js";
import "./style.css";
import VueAwesomePaginate from "vue-awesome-paginate";
createApp(App).use(VueAwesomePaginate).use(router).mount("#app");
