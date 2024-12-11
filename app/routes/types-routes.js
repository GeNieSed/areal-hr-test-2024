import AddTypes from "@/modules/types/components/add-types.vue";
import EditTypes from "@/modules/types/components/edit-types.vue";
import ReadOperations from "@/modules/types/components/read-types.vue";

export default [
  {
    path: "/types",
    name: "readOperations",
    component: ReadOperations,
  },
  {
    path: "/types-add",
    name: "addTypes",
    component: AddTypes,
  },
  {
    path: "/types/:id",
    name: "editDepartments",
    component: EditTypes,
    props: true, // Для передачи ID отдела как параметра
  },
];
