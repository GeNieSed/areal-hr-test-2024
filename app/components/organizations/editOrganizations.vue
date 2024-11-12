<template>
  <div>
    <h2>Редактировать организацию</h2>
    <form @submit.prevent="updateOrganization">
      <div>
        <label>Имя</label>
        <input v-model="name" type="text" required />
      </div>
      <div>
        <label>Комментарий</label>
        <input v-model="comment" type="text" />
      </div>
      <button type="submit">Сохранить изменения</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditOrganization',
  props: ['id'],
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  async created() {
    await this.fetchOrganization();
  },
  methods: {
    async fetchOrganization() {
      try {
        const response = await axios.get(`http://localhost:3001/api/organization/${this.id}`);
        this.name = response.data.name;
        this.comment = response.data.comment;
      } catch (error) {
        console.error('Ошибка при загрузке данных организации:', error);
      }
    },
    async updateOrganization() {
      try {
        await axios.put(`http://localhost:3001/api/organization/${this.id}`, {
          name: this.name,
          comment: this.comment,
        });
        alert('Организация обновлена');
        this.$router.push('/');
      } catch (error) {
        console.error('Ошибка при обновлении:', error);
        alert('Ошибка при обновлении организации');
      }
    },
  },
};
</script>
