<template>
  <div>
    <h2>Редактирование организацию</h2>
    <form @submit.prevent="editOrganization">
      <label for="name">Название</label>
      <input id="name" v-model="formData.name" type="text" required />

      <label for="comment">Комментарий</label>
      <textarea id="comment" v-model="formData.comment"></textarea>

      <button type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import {
  updateOrganization,
  getOrganizationById,
} from "@/modules/organizations/api/organizations-api";

export default {
  data() {
    return {
      formData: {
        name: "",
        comment: "",
      },
      organizations: [],
    };
  },
  async created() {
    try {
      const organizationId = this.$route.params.id; // ID из маршрута
      const response = await getOrganizationById(organizationId); // Получаем данные организации
      this.formData = { ...response.data }; // Заполняем форму
    } catch (error) {
      console.error(
        "Ошибка при загрузке данных об организации:",
        error.message,
      );
    }
  },
  methods: {
    async editOrganization() {
      try {
        const organizationId = this.$route.params.id;
        await updateOrganization(organizationId, this.formData); // Отправка данных на сервер
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
