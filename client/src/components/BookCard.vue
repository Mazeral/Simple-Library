<script setup>
let books = null;
books = fetch('http://localhost:3000/api/books');
// .then((res) => res.json())
// .then((data) => (this.books = data))
// .catch((err) => console.log(err));

console.log(books);
</script>

<template>
  <div class="card" v-for="book in books" :key="book.id">
    <div class="card-header">{{ book.title }}</div>
    <div class="card-body">{{ book.description }}</div>
  </div>
</template>

<style></style>
