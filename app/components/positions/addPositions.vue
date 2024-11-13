<template>
  <div>
    <h2>Редактировать должность</h2>
    <form @submit.prevent="updatePosition">
      <label>Название должности:</label>
      <input v-model="position.name" required />

      <label>Отдел:</label>
      <select v-model="position.department_id" required>
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
      position: {
        name: '',
        department_id: ''
      },
      departments: []
    };
  },
  async created() {
    await this.fetchDepartments();
    await this.fetchPositionData();
  },
  methods: {
    // Метод для получения списка всех отделов
    async fetchDepartments() {
      try {
        const response = await axios.get('http://localhost:3001/api/department');
        this.departments = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке отделов:', error);
      }
    },
    // Метод для загрузки данных текущей должности по ID
    async fetchPositionData() {
      try {
        const response = await axios.get(`http://localhost:3001/api/position/${this.$route.params.id}`);
        this.position = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке данных должности:', error);
      }
    },
    // Метод для обновления должности
    async updatePosition() {
      try {
        await axios.put(`http://localhost:3001/api/position/${this.$route.params.id}`, this.position);
        alert('Должность обновлена');
        this.$router.push('/'); // Перенаправление на главную страницу или к списку должностей
      } catch (error) {
        console.error('Ошибка при обновлении должности:', error);
        alert('Не удалось обновить должность');
      }
    }
  }
};
</script>


