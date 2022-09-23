<script setup>
import { ref } from 'vue';
import axios from 'axios';
// #1 fetch the data and insert them into local vars
let authors = ref([]);
// if I wanted fetch
// fetch('http://localhost:3000/api/author/', {
//   method: 'GET',
//   mode: 'cors',
// })
//   .then((res) => res.json())
//   .then((data) => (authors.value = data))
//   .catch((err) => console.log(err.message));
axios
  .get('http://localhost:3000/api/author')
  .then((res) => res.data)
  .then((data) => (authors.value = data))
  .catch((err) => console.log(err.message));
// #2 use the vars and make them in the templatez
</script>

<template>
  <div class="container">
    <div class="card" v-for="author in authors" :key="author.id">
      <div class="card-header">
        First name: {{ author.FirstName }} <br />
        Last Name: {{ author.LastName }}
      </div>
      <!-- In order to output a item of the object use : author.Books.map((book) => book.title) -->
      <div v-if="author.books != undefined">
        <div
          class="card-body"
          v-for="title in author.books.map((book) => book.Title)"
          :key="title"
        >
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
