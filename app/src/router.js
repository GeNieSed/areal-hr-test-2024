import {createRouter, createWebHistory} from 'vue-router';
import readOrganizations from "../components/readOrganizations.vue";
import addOrganizations from "../components/addOrganizations.vue";
import editOrganizations from "../components/editOrganizations.vue";


const routes = [
    {path: '/', redirect: '/organizations'},
    {path: '/organizations', component: readOrganizations},
    {path: '/organizations-add', component: addOrganizations},
    {path: '/organizations-edit/:id', component: editOrganizations, props: true},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;