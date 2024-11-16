<template>
  <table>
    <thead>
    <tr>
      <th>Название</th>
      <th>Комментарий</th>
      <th>Действия</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="department in departments" :key="department.id">
      <td>{{ department.name }}</td>
      <td>{{ department.comment }}</td>
      <td>
        <button @click="$emit('edit', department)">Редактировать</button>
        <button @click="$emit('delete', department.id)">Удалить</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    departments: Array
  }
};
</script>
