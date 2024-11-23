<template>
  <div>
    <h2>Редактировать отдел</h2>
    <form @submit.prevent="updateDepartment">
      <label>Название отдела:</label>
      <input v-model="department.name" required />

      <label>Организация:</label>
      <select v-model="department.organization_id" required>
        <option v-for="org in organizations" :key="org.id" :value="org.id">
          {{ org.name }}
        </option>
      </select>

      <label>Родительский отдел:</label>
      <select v-model="department.parent_id">
        <option v-for="dept in departments" :key="dept.id" :value="dept.id">
          {{ dept.name }}
        </option>
      </select>

      <button type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      department: {
        name: '',
        organization_id: '',
        parent_id: null
      },
      organizations: [],
      departments: []
    };
  },
  async created() {
    await this.fetchOrganizations();
    await this.fetchDepartments();
    await this.fetchDepartmentData();
  },
  methods: {
    async fetchOrganizations() {
      const response = await axios.get('http://localhost:3001/api/organization');
      this.organizations = response.data;
    },
    async fetchDepartments() {
      const response = await axios.get('http://localhost:3001/api/department');
      this.departments = response.data;
    },
    async fetchDepartmentData() {
      const response = await axios.get(`http://localhost:3001/api/department/${this.$route.params.id}`);
      this.department = response.data;
    },
    async updateDepartment() {
      try {
        await axios.put(`http://localhost:3001/api/department/${this.$route.params.id}`, this.department);
        alert('Отдел обновлен');
        this.$router.push('/');
      } catch (error) {
        console.error('Ошибка при обновлении отдела:', error);
      }
    }
  }
};
</script>
