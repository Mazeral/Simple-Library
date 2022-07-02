<script setup>
import { ref } from 'vue';
let books = ref(null);
books =  fetch('localhost:3000/api/book/')
  .then((res) => res.json())
  .then((data) => (books.value = data))
  .catch((err) => console.log(err));

console.log(books);
</script>

<template>
  <div class="card" v-for="book in books" :key="book.id">
    <div class="card-header">{{ book.title }}</div>
    <div class="card-body">{{ book.description }}</div>
  </div>
  <div>{{ books.value }}</div>
</template>

<style></style>
