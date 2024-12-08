<template>
  <div>
    <h2>Редактировать отдел</h2>
    <form @submit.prevent="updateDepartment">
      <label for="name">Название отдела</label>
      <input id="name" v-model="formData.name" type="text" required />

      <label for="organization">Организация</label>
      <select id="organization" v-model="formData.organization_id">
        <option value="">Выберите организацию</option>
        <option v-for="org in organizations" :key="org.id" :value="org.id">
          {{ org.name }}
        </option>
      </select>

      <label for="parent">Родительский отдел</label>
      <select id="parent" v-model="formData.parent_department_id">
        <option value="">Нет</option>
        <option v-for="dep in departments" :key="dep.id" :value="dep.id">
          {{ dep.name }}
        </option>
      </select>

      <label for="comment">Комментарий</label>
      <textarea id="comment" v-model="formData.comment"></textarea>

      <button type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import {
  getDepartmentById,
  updateDepartment,
  getDepartments,
} from "@/modules/departments/api/departmentsApi";
import { getOrganizations } from "@/modules/organizations/api/organizationsApi";

export default {
  data() {
    return {
      formData: {
        name: "",
        organization_id: "",
        parent_department_id: "",
        comment: "",
      },
      departments: [],
      organizations: [],
    };
  },
  async created() {
    try {
      const departmentId = this.$route.params.id;

      // Загрузка данных отдела
      const departmentResponse = await getDepartmentById(departmentId);
      this.formData = departmentResponse.data;

      // Загрузка всех организаций
      const organizationsResponse = await getOrganizations();
      this.organizations = organizationsResponse.data;

      // Загрузка всех отделов
      const departmentsResponse = await getDepartments();
      this.departments = departmentsResponse.data;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error.message);
    }
  },
  methods: {
    async updateDepartment() {
      try {
        const departmentId = this.$route.params.id;

        // Создаём копию объекта и удаляем поле id
        const formData = { ...this.formData };
        delete formData.id;

        // Преобразуем пустые строки в null
        if (formData.organization_id === "") formData.organization_id = null;
        if (formData.parent_department_id === "")
          formData.parent_department_id = null;

        const response = await updateDepartment(departmentId, formData);
        alert("Отдел успешно обновлен");
        this.$router.push("/department");
      } catch (error) {
        console.error(
          "Ошибка при обновлении отдела:",
          error.response?.data || error.message,
        );
      }
    },
  },
};
</script>
