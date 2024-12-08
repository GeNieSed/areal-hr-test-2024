import { createRouter, createWebHistory } from "vue-router";
import departmentRoutes from "../routes/departmentRoutes";
import organizationRouter from "../routes/organizationRoutes";
import indexRouter from "../routes/indexRouter";
import operationsRouter from "../routes/types_routes";
import employeesRoutes from "../routes/employeesRouter";
const routes = [
  ...indexRouter,
  ...departmentRoutes,
  ...organizationRouter,
  ...operationsRouter,
  ...employeesRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
