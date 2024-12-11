<template>
  <div>
    <h2>Создать вид операций</h2>
    <form @submit.prevent="addTypes">
      <!-- Поле для ввода названия -->
      <label for="name">Название</label>
      <input id="name" type="text" v-model="formData.name" required />

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
        name: "",
      },
    };
  },
  methods: {
    async addTypes() {
      try {
        // Вывод данных перед отправкой
        console.log("Отправляемые данные:", this.formData);

        // Отправляем запрос на сервер
        const response = await axios.post("/types", this.formData);

        // Уведомляем пользователя
        alert("Организация успешно создана!");

        // Логируем данные ответа
        console.log("Ответ сервера:", response.data);

        // Очищаем форму
        this.formData.name = "";

        // Перенаправляем на другую страницу (например, список организаций)
        this.$router.push("/types");
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
