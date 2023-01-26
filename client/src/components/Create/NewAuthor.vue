<script setup lang="ts">
import { ref } from 'vue';
import endpoints from '@/endpoints';
import axios from 'axios';
const firstname = ref('');
const lastname = ref('');
const submit = async () => {
  await axios
    .post(endpoints.createAuthor, {
      FirstName: firstname.value,
      LastName: lastname.value,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
</script>
<template>
  <v-form>
    <!-- v-model will contain the varible that will carry the value of the input. -->
    <v-container>
      <v-text-field v-model="firstname" label="First Name"></v-text-field>
      <v-text-field v-model="lastname" label="Last Name"></v-text-field>
      <v-btn @click="submit">Create An Author</v-btn></v-container
    >
  </v-form>
</template>
