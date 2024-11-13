<template>
  <div>
    <h2>Список должностей</h2>
    <button @click="$router.push('/position-add')">Добавить должность</button>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>имя</th>
        <th>комментарий</th>
        <th>действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="position in positions " :key="position.id">
        <td>{{position.id}}</td>
        <td>{{position.department_id}}</td>
        <td>{{position.name}}</td>
        <td>
          <button @click="editPositions(position.id)">Редактировать</button>
          <button @click="deletePositions(position.id)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'ReadOrganizations',
  data() {
    return {
      positions: [],
    }
  },
  async created() {
    await this.fetchPositions()
  },
  methods: {
    async fetchPositions() {
      try {
        const response = await axios.get('http://localhost:3001/api/position');
        this.positions = response.data;
      }
      catch (error) {
        console.log('Ошибка при загрузки должностей', error);
      }
    },
    editPositions(id) {
      this.$router.push(`/positions/edit/${id}`);
    },
    async deletePositions(id) {
      try {
        await axios.delete(`http://localhost:3001/api/position/${id}`);
        this.positions = this.positions.filter(position => position.id !== id);
        alert('позиция удалена')
      }
      catch (error) {
        console.error('Ошибка при удалении:', error);
        alert('ошибка при удалении должности')
      }
    },
  },
}
</script>