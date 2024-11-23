import ReadPosition from "../components/positions/readPositions.vue";
import AddPosition from "../components/positions/addPositions.vue";

const positionRoutes = [
    {
        path: '/position',
        name: 'ReadPosition',
        component: ReadPosition,
    },
    {
        path: '/position-add',
        name: 'AddPosition',
        component: AddPosition,
    },
    {
        path: '/position-edit/:id',
        name: 'EditPosition',
        component: AddPosition,
        props: true
    }
];

export default positionRoutes;
