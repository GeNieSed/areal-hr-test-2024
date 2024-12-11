// import AddDepartments from "@/modules/departments/components/add-departments.vue";
// import EditDepartments from "@/modules/departments/components/edit-departments.vue";
import ReadAddresses from "@/modules/addresses/components/read-addresses.vue";

export default [
  {
    path: "/addresses",
    name: "ReadAddresses",
    component: ReadAddresses,
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
