import { createRouter, createWebHistory } from "vue-router";
import DepartmentPage from "@/pages/DepartmentsPage.vue";

const routes = [
  {
    path: "/department",
    component: DepartmentPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
