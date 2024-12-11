<template>
  <div>
    <h2>Редактирование вид операции</h2>
    <form @submit.prevent="editTypes">
      <label for="name">Название</label>
      <input id="name" v-model="formData.name" type="text" required />

      <button type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import {
  updateOperations,
  getOperationsById,
} from "@/modules/types/api/types-api";

export default {
  data() {
    return {
      formData: {
        name: "",
      },
      files: [],
    };
  },
  async created() {
    try {
      const TypesId = this.$route.params.id; // ID из маршрута
      const response = await getOperationsById(TypesId); // Получаем данные организации
      this.formData = { ...response.data }; // Заполняем форму
    } catch (error) {
      console.error(
        "Ошибка при загрузке данных об организации:",
        error.message,
      );
    }
  },
  methods: {
    async editTypes() {
      try {
        const TypesId = this.$route.params.id;
        await updateOperations(TypesId, this.formData); // Отправка данных на сервер
        alert("Данные организации обновлены!");
        this.$router.push("/"); // Возврат на список организаций
      } catch (error) {
        console.error(
          "Ошибка при обновлении организации:",
          error.response?.data || error.message,
        );
      }
    },
  },
};
</script>
