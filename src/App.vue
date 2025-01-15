<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <div class="container-fluid mx-0 px-0">
    <Navbar />
  <RouterView />
  <FooterPage />
  </div>
</template>

<style scoped>
*{
  font-family: 'Ubuntu', sans-serif;
}
</style>
