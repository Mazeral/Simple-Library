<script setup lang="ts">
import { ref } from 'vue';
import endpoints from '@/endpoints';
import axios from 'axios';
const title = ref('');
const confimation = ref(false);
const deleteBook = async () => {
  if (confimation.value && title.value)
    await axios
      .post(endpoints.deleteBook, {
        title: title.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
};
</script>

<template>
  <v-form>
    <v-text-field
      label="Book Title"
      clearable
      required
      v-model="title"
    ></v-text-field>
    <v-checkbox label="ARE YOU SURE?" v-model="confimation"></v-checkbox>
    <v-btn color="error" @click="deleteBook">Commit</v-btn>
  </v-form>
</template>
