// import AddEmployees from "@/modules/departments/components/addDepartments.vue";
// import EditEmployees from "@/modules/departments/components/editDepartments.vue";
import ReadEmployees from "@/modules/employees/components/readEmployees.vue";

export default [
  {
    path: "/employees",
    name: "readEmployees",
    component: ReadEmployees,
  },
  // {
  //   path: "/department-add",
  //   name: "addDepartments",
  //   component: AddDepartments,
  // },
  // {
  //   path: "/department/:id",
  //   name: "editDepartments",
  //   component: EditDepartments,
  //   props: true, // Для передачи ID отдела как параметра
  // },
];
