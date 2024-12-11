<template>
  <main>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="4" fill="white" />
      <path
        d="M32.8903 13.4187V15.9875H27.5278V18.7625H31.5403V21.2562H27.5278V26.5812H24.3215V13.4187H32.8903Z"
        fill="#287C58"
      />
      <path
        d="M22.0159 13.4187V26.5812H18.8096V18.6875L15.8659 26.5812H13.2784L10.3159 18.6687V26.5812H7.10962V13.4187H10.8971L14.5909 22.5312L18.2471 13.4187H22.0159Z"
        fill="#287C58"
      />
    </svg>

    <div class="menu">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.414 5H20C21.103 5 22 5.897 22 7V19C22 20.103 21.103 21 20 21H4C2.897 21 2 20.103 2 19V5C2 3.897 2.897 3 4 3H10C10.265 3 10.52 3.105 10.707 3.293L12.414 5ZM6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H16C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15H6Z"
          fill="white"
        />
      </svg>
    </div>
  </main>
  <div class="content">
    <header>
      <h1>Организации</h1>
    </header>
    <div class="function">
      <nav>
        <a href="/">Сотрудники</a>
        <a href="/departments">Отделы</a>
        <a href="/organizations" id="one">Организации</a>
        <a href="/positions">Должность</a>
        <a href="/types">Виды операций</a>
        <a href="/employees">Еще сотрудники</a>
        <a href="/histories">История</a>
        <a href="/passports">Паспорта</a>
        <a href="/addresses">Адрес</a>
      </nav>
      <button @click="$router.push('/organizations-add')" class="primary">
        Добавить
      </button>
    </div>
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>НАЗВАНИЕ</th>
          <th>КОММЕНТАРИЙ</th>
          <th>ДЕЙСТВИЯ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="organization in organizations" :key="organization.id">
          <td>{{ organization.id }}</td>
          <td>{{ organization.name }}</td>
          <td>{{ organization.comment }}</td>
          <td>
            <button
              @click="updateOrganization(organization.id)"
              class="button"
              id="edit"
            >
              Редактировать
            </button>
            <button
              @click="deleteOrganization(organization.id)"
              class="button"
              id="delete"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {
  deleteOrganization,
  getOrganizations,
  updateOrganization,
} from "@/modules/organizations/api/organizations-api";

export default {
  name: "readOrganization",
  data() {
    return {
      organizations: [], // Список организаций
    };
  },
  async created() {
    try {
      const response = await getOrganizations(); // Получение списка организаций
      this.organizations = response.data; // Запись данных в массив `organizations`
    } catch (error) {
      console.error("Ошибка загрузки данных организаций:", error);
    }
  },
  methods: {
    async deleteOrganization(id) {
      try {
        await deleteOrganization(id); // Вызов API-функции для удаления
        this.organizations = this.organizations.filter(
          (organization) => organization.id !== id,
        ); // Удаление организации из локального списка
        alert("Организация успешно удалена");
      } catch (error) {
        console.error("Ошибка при удалении организации:", error);
        alert("Не удалось удалить организацию");
      }
    },
    updateOrganization(id) {
      this.$router.push(`/organizations/${id}`); // Переход на страницу редактирования
    },
  },
};
</script>
