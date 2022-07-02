<script setup>
import BookCard from '../../components/BookCard.vue';
import { ref } from 'vue';
let books = ref([]);
fetch('http://localhost:3000/api/book/')
  .then((res) => res.json())
  .then((data) => (books.value = data))
  .catch((err) => console.log(err.message));
console.log(books.value);
</script>
<template>
  <BookCard />
  <div>{{ books.value }}</div>
</template>
<style></style>
