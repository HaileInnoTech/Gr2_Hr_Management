import { createWebHistory, createRouter } from "vue-router";
import Login from "../Pages/Login.vue";
import Mainlayout from "../Layout/MainLayout.vue";
import Mainpage from "../Pages/Mainpage.vue";
import EmployeeLayout from "../Layout/EmployeeLayout.vue";
import Individual from "../Pages/Individual.vue";
import Menu from "../Pages/Menu.vue";
import Payroll from "../Pages/Payroll.vue";
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
        path: "/dashboard/menu",
        component: Menu,
      },
    ],
  },
  {
    path: "/dashboard/menu/employee",
    component: EmployeeLayout,
    children: [
      {
        path: "/dashboard/menu/employee/data",
        component: Mainpage,
      },
      {
        path: "/dashboard/menu/employee/data/individual/:email?",
        component: Individual,
        name: "Individual",
        props: true,
      },
      {
        path: "/dashboard/menu/employee/payroll",
        component: Payroll,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
