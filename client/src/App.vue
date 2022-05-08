<script setup>
import { RouterView } from 'vue-router';
import AuthorCard from './components/AuthorCard.vue';
import BookCard from './components/BookCard.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="container">
    <h1>Books</h1>
    <BookCard />
  </div>
  <div class="container">
    <h1>Authors</h1>
    <AuthorCard />
  </div>
  <RouterView />

  <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>This website was made by : Mohammad Omar Siddiq</small>
    </div>
  </footer>
</template>

<style></style>
