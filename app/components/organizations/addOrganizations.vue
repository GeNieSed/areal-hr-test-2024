<template>
  <div>
    <h2>Добавить организацию</h2>
    <form @submit.prevent="addOrganization">
      <div>
        <label>Имя</label>
        <input v-model="name" type="text" required />
      </div>
      <div>
        <label>Комментарий</label>
        <input v-model="comment" type="text" />
      </div>
      <button type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddOrganization',
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods: {
    async addOrganization() {
      try {
        await axios.post('http://localhost:3001/api/organization', {
          name: this.name,
          comment: this.comment,
        });
        alert('Организация добавлена');
        this.$router.push('/');
      } catch (error) {
        console.error('Ошибка при добавлении:', error);
        alert('Ошибка при добавлении организации');
      }
    },
  },
};
</script>

