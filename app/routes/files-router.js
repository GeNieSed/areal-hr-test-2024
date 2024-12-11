// import AddDepartments from "@/modules/departments/components/add-departments.vue";
// import EditDepartments from "@/modules/departments/components/edit-departments.vue";
import ReadFiles from "@/modules/files/components/read-files.vue";

export default [
  {
    path: "/files",
    name: "ReadAddresses",
    component: ReadFiles,
  },
  // {
  //   path: "/departments-add",
  //   name: "addDepartments",
  //   component: AddDepartments,
  // },
  // {
  //   path: "/departments/:id",
  //   name: "editDepartments",
  //   component: EditDepartments,
  //   props: true, // Для передачи ID отдела как параметра
  // },
];
