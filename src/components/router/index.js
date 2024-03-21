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
    path: "/dashboard/:email?/:role?",
    component: Mainlayout,
    name: "Mainlayout",
    props: true,
    children: [
      {
        path: "/dashboard/:email?/:role?/menu",
        component: Menu,
        name: "Menu",
        props: true,
      },
    ],
  },
  {
    path: "/dashboard/:email?/:role?/menu/employee",
    component: EmployeeLayout,
    children: [
      {
        path: "/dashboard/:email?/:role?/menu/employee/data",
        component: Mainpage,
        name: "Mainpage",
      },
      {
        path: "/dashboard/:email?/:role?/menu/employee/data/individual/:curEmp?",
        component: Individual,
        name: "Individual",
        props: true,
      },
      {
        path: "/dashboard/:email?/:role?/menu/employee/payroll",
        component: Payroll,
        name: "Payroll",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
