<template>
  <div>
    <h2>Создать организацию</h2>
    <form @submit.prevent="addOrganization">
      <!-- Поле для ввода названия -->
      <label for="name">Название</label>
      <input id="name" type="text" v-model="formData.name" required />

      <!-- Поле для ввода комментария -->
      <label for="comment">Комментарий</label>
      <textarea id="comment" v-model="formData.comment"></textarea>

      <!-- Кнопка отправки -->
      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import axios from "@/http-common";

export default {
  data() {
    return {
      formData: {
        name: "", // Название организации
        comment: "", // Комментарий к организации
      },
    };
  },
  methods: {
    async addOrganization() {
      try {
        // Вывод данных перед отправкой
        console.log("Отправляемые данные:", this.formData);

        // Отправляем запрос на сервер
        const response = await axios.post("/organization", this.formData);

        // Уведомляем пользователя
        alert("Организация успешно создана!");

        // Логируем данные ответа
        console.log("Ответ сервера:", response.data);

        // Очищаем форму
        this.formData.name = "";
        this.formData.comment = "";

        // Перенаправляем на другую страницу (например, список организаций)
        this.$router.push("/organization");
      } catch (error) {
        // Логируем ошибку и уведомляем пользователя
        console.error(
          "Ошибка при создании организации:",
          error.response?.data || error.message,
        );
        alert("Не удалось создать организацию.");
      }
    },
  },
};
</script>

<style scoped>
/* Пример стилей для формы */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}
button {
  background-color: #287c58;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1e5a42;
}
</style>
