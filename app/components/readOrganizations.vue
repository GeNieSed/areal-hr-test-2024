<template>
  <div>
    <h2>Список организаций</h2>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Имя</th>
        <th>Комментарий</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="organization in organizations" :key="organization.id">
        <td>{{ organization.id }}</td>
        <td>{{ organization.name }}</td>
        <td>{{ organization.comment }}</td>
        <td>
          <button @click="editOrganization(organization.id)">Редактировать</button>
          <button @click="deleteOrganization(organization.id)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrganizationsTable',
  data() {
    return {
      organizations: [],
    };
  },
  async created() {
    await this.fetchOrganizations();
  },
  methods: {
    async fetchOrganizations() {
      try {
        const response = await axios.get('http://localhost:3001/api/organization');
        this.organizations = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке организаций:', error);
      }
    },
    editOrganization(id) {
      this.$router.push(`/edit-organization/${id}`);
    },
    async deleteOrganization(id) {
      try {
        await axios.delete(`http://localhost:3001/api/${id}`);
        this.organizations = this.organizations.filter(org => org.id !== id);
      } catch (error) {
        console.error('Ошибка при удалении:', error);
      }
    },
  },
};
</script>
