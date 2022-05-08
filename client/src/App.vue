<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />

  <RouterView />

  <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>This website was made by : Mohammad Omar Siddiq</small>
    </div>
  </footer>
</template>

<style></style>
