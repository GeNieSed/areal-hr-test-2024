<template>
  <form @submit.prevent="handleSubmit">
    <label>Название департамента</label>
    <input v-model="formData.name" required />

    <label>Комментарий</label>
    <textarea v-model="formData.comment"></textarea>

    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
export default {
  props: {
    department: Object
  },
  data() {
    return {
      formData: {
        name: this.department?.name || '',
        comment: this.department?.comment || ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formData);
    }
  }
};
</script>

