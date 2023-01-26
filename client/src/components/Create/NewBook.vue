<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import endpoints from '@/endpoints';
const title = ref();
const details = ref();
const submit = async () => {
  await axios
    .post(endpoints.createBook, {
      title: title.value,
      description: details.value,
    })
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
</script>
<template>
  <v-form>
    <!-- v-model will contain the varible that will carry the value of the input. -->
    <v-container>
      <v-text-field v-model="title" label="Book Title"></v-text-field>
      <v-textarea v-model="details" label="Book details"></v-textarea>
      <v-btn @click="submit">Create A book</v-btn></v-container
    >
  </v-form>
</template>
