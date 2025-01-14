<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterPage />
</template>

<style scoped>
*{
  font-family: 'Ubuntu', sans-serif;
}
</style>
