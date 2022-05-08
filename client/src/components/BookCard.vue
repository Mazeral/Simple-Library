<script setup>
let books = null;
fetch('http://localhost:3000/books')
  .then((res) => res.json())
  .then((data) => (this.authors = data))
  .catch((err) => console.log(err));
</script>

<template>
  <div class="card" v-for="book in books" :key="book.id">
    <div class="card-header">{{ book.title }}</div>
    <div class="card-body">{{ book.description }}</div>
  </div>
</template>

<style></style>
