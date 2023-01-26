<script setup lang="ts">
import endpoints from '@/endpoints';
import axios from 'axios';
import { ref } from 'vue';

const authors = ref();
const getAuthors = async () => {
  await axios
    .get(endpoints.getAuthors)
    .then((res) => (authors.value = res.data))
    .catch((error) => console.error(error));
};
getAuthors();
console.log(authors.value);
</script>
<template>
  <!-- The list of the authors will be printed with the for loop in the list, and the elements will be binded with the API of the card, the same idea will be used with th book card -->
  <v-list v-for="item in authors" :key="item.id">
    <v-card
      :title="item.firstname"
      :subtitle="item.lastname"
      :text="item.books"
    >
    </v-card>
  </v-list>
</template>
<style></style>
