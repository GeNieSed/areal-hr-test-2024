import ReadDepartments from '../../components/departments/readDepartments.vue';
import AddDepartment from '../../components/departments/addDepartments.vue';
import EditDepartment from '../../components/departments/editDepartments.vue';

const departmentRoutes = [
    {
        path: "/department",
        name: "ReadDepartments",
        component: ReadDepartments,
    },
    {
        path: "/department-add",
        name: "AddDepartment",
        component: AddDepartment,
    },
    {
        path: "/department-edit/:id",
        name: "EditDepartment",
        component: EditDepartment,
        props: true
    },
]
export default departmentRoutes;