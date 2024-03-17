import { createWebHistory, createRouter } from "vue-router";
import Login from "../Pages/Login.vue";
import Mainlayout from "../Layout/MainLayout.vue";
import Mainpage from "../Pages/Mainpage.vue";
import Individual from "../Pages/Individual.vue";
const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Mainlayout,
    children: [
      {
        path: "/dashboard/employee",
        component: Mainpage,
      },
      {
        path: "/dashboard/employee/individual/:email?",
        component: Individual,
        name: "Individual",
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
