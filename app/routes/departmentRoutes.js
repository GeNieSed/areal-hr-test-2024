import AddDepartments from "@/modules/departments/components/addDepartments.vue";
import EditDepartments from "@/modules/departments/components/editDepartments.vue";
import ReadDepartments from "@/modules/departments/components/readDepartments.vue";

export default [
  {
    path: "/department",
    name: "readDepartments",
    component: ReadDepartments,
  },
  {
    path: "/department-add",
    name: "addDepartments",
    component: AddDepartments,
  },
  {
    path: "/department/:id",
    name: "editDepartments",
    component: EditDepartments,
    props: true, // Для передачи ID отдела как параметра
  },
];
