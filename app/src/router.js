import { createRouter, createWebHistory } from 'vue-router';
import organizationRoutes from './routes/organizationRoutes';
import positionRoutes from './routes/positionRoutes';
import departmentRoutes from './routes/departmentRoutes';
// Объединяем маршруты из всех файлов
const routes = [
    ...organizationRoutes,
    ...positionRoutes,
    ...departmentRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;