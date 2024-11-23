<template>
  <div>
    <h1>Список департаментов</h1>
    <DepartmentTable
      :departments="departments"
      @edit="editDepartment"
      @delete="deleteDepartment"
    />
    <button @click="showForm = true">Добавить департамент</button>

    <DepartmentForm v-if="showForm" @submit="addDepartment" />
  </div>
</template>

<script>
import {
  getDepartments,
  createDepartment,
  deleteDepartment,
} from "@/modules/departments/api/departmentsApi";
import DepartmentTable from "@/modules/departments/components/DepartmentTable.vue";
import DepartmentForm from "@/modules/departments/components/DepartmentForm.vue";

export default {
  components: { DepartmentTable, DepartmentForm },
  data() {
    return {
      departments: [],
      showForm: false,
    };
  },
  async created() {
    const response = await getDepartments();
    this.departments = response.data;
  },
  methods: {
    async addDepartment(data) {
      const response = await createDepartment(data);
      this.departments.push(response.data);
      this.showForm = false;
    },
    async deleteDepartment(id) {
      await deleteDepartment(id);
      this.departments = this.departments.filter((dep) => dep.id !== id);
    },
    editDepartment(department) {
      this.$router.push(`/departments/edit/${department.id}`);
    },
  },
};
</script>
