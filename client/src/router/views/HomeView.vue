<script setup>
import AuthorCard from '../../components/author/AuthorCard.vue';
import BookCard from '../../components/book/BookCard.vue';
</script>
<template>
  <div class="container">
    <h1>Books</h1>
    <BookCard />
  </div>
  <div class="container">
    <h1>Authors</h1>
    <AuthorCard />
  </div>
</template>
<style></style>
