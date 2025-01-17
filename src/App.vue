<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/NavbarPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<!-- Contenedor principal de App -->
<template>
  <div class="container-fluid mx-0 px-0">
    <Navbar />
    <RouterView />
    <FooterPage />
  </div>
</template>

<!-- Estilos generales de App -->
<style scoped>
*{
  font-family: 'Ubuntu', sans-serif;
}
</style>
