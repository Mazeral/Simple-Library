<script setup lang="ts">
import { ref } from 'vue';
import endpoints from '@/endpoints';
import axios from 'axios';
const confimation = ref(false);
const authorFirst = ref('');
const authorLast = ref('');
const removeAuth = async () => {
  if (confimation.value && authorFirst.value)
    await axios
      .post(endpoints.getAuthors, {
        FirstName: authorFirst.value,
        LastName: authorLast.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
};
</script>

<template>
  <v-form>
    <v-text-field
      label="First Name"
      v-model="authorFirst"
      required
      clearable
    ></v-text-field>
    <v-text-field label="Last Name" required clearable></v-text-field>
    <v-checkbox label="ARE YOU SURE?" v-model="confimation"></v-checkbox>
    <v-btn color="error" @click="removeAuth">Commit</v-btn>
  </v-form>
</template>
