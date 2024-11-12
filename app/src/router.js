
import { createRouter, createWebHistory } from 'vue-router';
import ReadOrganizations from '../components/organizations/readOrganizations.vue';
import AddOrganization from '../components/organizations/addOrganizations.vue';
import EditOrganization from '../components/organizations/editOrganizations.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ReadOrganizations,
    },
    {
        path: '/organization-add',
        name: 'AddOrganization',
        component: AddOrganization,
    },
    {
        path: '/organization-edit/:id',
        name: 'EditOrganization',
        component: EditOrganization,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
