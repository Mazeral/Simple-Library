<script setup lang="ts">
import endpoints from '@/endpoints';
import { ref } from 'vue';
import axios from 'axios';
const booktitle = ref('');
const newTitle = ref('');
const newDetails = ref('');
const update = async () => {
  if (newTitle.value)
    await axios
      .post(endpoints.updateBookTitle, {
        title: booktitle.value,
        newTitle: newTitle.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  if (newDetails.value)
    await axios
      .post(endpoints.updateBookDetails, {
        Title: booktitle.value,
        NewDesc: newDetails.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
};
</script>

<template>
  <v-form>
    <!-- First and last names -->
    <v-text-field
      label="Book Title"
      requried
      clearable
      v-model="booktitle"
    ></v-text-field>

    <v-text-field
      label="Change The Title"
      v-model="newTitle"
      clearable
    ></v-text-field>
    <!-- For books -->
    <v-textarea
      label="Change The details Of The Book"
      clearable
      v-model="newDetails"
    ></v-textarea>
    <h3>Quick note: You can change both the title and the detais</h3>
    <v-divider></v-divider>
    <v-btn color="green" class="mt-6" @click="update">Update!</v-btn>
  </v-form>
</template>
