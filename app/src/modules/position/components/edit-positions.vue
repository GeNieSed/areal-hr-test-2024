<template>
  <div>
    <h1>Редактирование должности</h1>
    <form @submit.prevent="saveChanges">
      <label for="name">Название должности:</label>
      <input id="name" type="text" v-model="formData.name" required />

      <label for="department">Отдел:</label>
      <select id="department" v-model="formData.department_id" required>
        <option value="" disabled>Выберите отдел</option>
        <option v-for="dept in departments" :key="dept.id" :value="dept.id">
          {{ dept.name }}
        </option>
      </select>

      <button type="submit">Сохранить изменения</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  getPositionById,
  updatePosition,
} from "@/modules/position/api/positions-api";
import { getDepartments } from "@/modules/departments/api/departments-api";

export default {
  name: "EditPosition",
  setup() {
    const formData = ref({
      name: "",
      department_id: "",
    });

    const departments = ref([]);

    const fetchPosition = async (id) => {
      const response = await getPositionById(id);
      formData.value = response.data;
    };

    const fetchDepartments = async () => {
      const response = await getDepartments();
      departments.value = response.data;
    };

    const saveChanges = async () => {
      const id = this.$route.params.id;
      await updatePosition(id, formData.value);
      alert("Должность обновлена!");
      this.$router.push("/positions");
    };

    onMounted(() => {
      const id = this.$route.params.id;
      fetchPosition(id);
      fetchDepartments();
    });

    return {
      formData,
      departments,
      fetchPosition,
      fetchDepartments,
      saveChanges,
    };
  },
};
</script>
