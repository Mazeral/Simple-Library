<script setup lang="ts">
import { ref } from 'vue';
import endpoints from '@/endpoints';
import axios from 'axios';
const books = ref();
axios
  .get(endpoints.getBooks)
  .then((res) => (books.value = res.data))
  .catch((error) => console.error(error));
console.log(books.value);
</script>
<template>
  <!-- The list of the Books will be printed with the for loop in the list, and the elements will be binded with the API of the card, the same idea will be used with th Author card -->
  <v-list v-for="item in books" :key="item.id">
    <v-card :title="`Book name: ${item.title}`" :text="item.detail">
      <v-card-subtitle v-for="item in item.Authors" :key="item.id"
        >{{ item.firstname }} {{ item.lastname }}</v-card-subtitle
      >
    </v-card>
  </v-list>
</template>
<style></style>
