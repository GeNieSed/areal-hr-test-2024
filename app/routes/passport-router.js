// import AddDepartments from "@/modules/departments/components/add-departments.vue";
// import EditDepartments from "@/modules/departments/components/edit-departments.vue";
import ReadPassport from "@/modules/passports/components/read-passport.vue";

export default [
  {
    path: "/passports",
    name: "ReadAddresses",
    component: ReadPassport,
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
