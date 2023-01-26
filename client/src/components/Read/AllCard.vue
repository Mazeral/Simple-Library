<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import endpoints from '@/endpoints';
const authors = ref();
const books = ref();
const getAuthors = async () => {
  await axios
    .get(endpoints.getAuthors)
    .then((res) => (authors.value = res.data))
    .catch((err) => console.error(err));
};
getAuthors();
const getBooks = async () => {
  await axios
    .get(endpoints.getBooks)
    .then((res) => (books.value = res.data))
    .catch((err) => console.error(err));
};
getBooks();
console.log(authors.value + '\n' + books.value);
</script>

<template>
  <!-- The title for the author name
    The subtitle is the "Books"
The text in the list of the books. -->
  <v-list v-for="item in authors.value" :key="item.id">
    <v-card :title="item.value.firstname" :subtitle="item.value.lastname">
      <v-card-text>
        <v-list v-for="book in item.books" :key="book.books.id">
          {{ book }}
        </v-list>
      </v-card-text>
    </v-card>
  </v-list>

  <!-- The opposite here: book names with authors -->
  <v-list v-for="item in books.value" :key="item.id">
    <v-card :title="item.title" subtitle="Authors:">
      <v-card-text>
        <v-list> {{ item }} </v-list>
      </v-card-text>
    </v-card>
  </v-list>
</template>
