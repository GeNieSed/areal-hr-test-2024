<template>
  <div>
    <h2>Список организаций</h2>
    <button @click="$router.push('/department-add')">
      Добавить организацию
    </button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название организации</th>
          <th>Название</th>
          <th>Родитель отдела</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="department in departments" :key="department.id">
          <td>{{ department.id }}</td>
          <td>{{ department.name }}</td>
          <td>{{ department.comment }}</td>
          <td>
            <button @click="editDepartment(department.id)">
              Редактировать
            </button>
            <button @click="deleteDepartment(department.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReadDepartment",
  data() {
    return {
      departments: [],
    };
  },
  async created() {
    await this.fetchDepartments();
  },
  methods: {
    async fetchDepartments() {
      try {
        // Обновим URL на правильный путь для получения отделов
        const response = await axios.get(
          "http://localhost:3001/api/department",
        );
        this.departments = response.data;
      } catch (error) {
        console.error("Ошибка при загрузке отделов:", error);
      }
    },
    editDepartment(id) {
      this.$router.push(`/department/${id}`);
    },
    async deleteDepartment(id) {
      try {
        await axios.delete(`http://localhost:3001/api/department/;${id}`);
        this.departments = this.departments.filter((dept) => dept.id !== id);
        alert("Отдел удален");
      } catch (error) {
        console.error("Ошибка при удалении отдела:", error);
        alert("Ошибка при удалении отдела");
      }
    },
  },
};
</script>
