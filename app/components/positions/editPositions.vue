<template>
  <div>
    <h2>Редактировать должность</h2>
    <form @submit.prevent="updatePosition">
      <div>
        <label>Название отдела</label>
        <!-- Выпадающий список для выбора отдела -->
        <select v-model="department_id">
          <option v-for="department in departments" :key="department.id" :value="department.id">
            {{ department.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Комментарий</label>
        <input v-model="comment" type="text" />
      </div>
      <button type="submit">Сохранить изменения</button>
    </form>
  </div>
</template>
<script setup lang="ts">

</script>