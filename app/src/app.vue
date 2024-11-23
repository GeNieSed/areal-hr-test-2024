<template>
  <div id="app">
    <h1>Управление данными</h1>
    <button @click="$router.push('/')">Организации</button>
    <button @click="$router.push('/department')">Отделы</button>
    <button @click="$router.push('/position')">Должности</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
