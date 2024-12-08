import ReadOrganizations from "@/modules/organizations/components/readOrganizations.vue";
import EditOrganizations from "@/modules/organizations/components/editOrganizations.vue";
import AddOrganization from "@/modules/organizations/components/addOrganizations.vue";
const organizationRoutes = [
  {
    path: "/organization",
    name: "Home",
    component: ReadOrganizations,
  },
  {
    path: "/organization-add",
    name: "AddOrganization",
    component: AddOrganization,
  },
  {
    path: "/organization/:id",
    name: "EditOrganization",
    component: EditOrganizations,
    props: true,
  },
];

export default organizationRoutes;
