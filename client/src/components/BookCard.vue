<script setup>
import { ref } from 'vue';
let books = ref([]);
fetch('http://localhost:3000/api/book/', {
  method: 'GET',
  mode: 'cors',
})
  .then((res) => res.json())
  .then((data) => (books.value = data))
  .catch((err) => console.log(err.message));
console.log(books.value);
</script>

<template>
  <div class="container">
    <div class="card" v-for="book in books" :key="book.id">
      <div class="card-header">{{ book.title }}</div>
      <div class="card-body">{{ book.description }}</div>
    </div>
    <div>{{ books.value }}</div>
  </div>
</template>

<style></style>
