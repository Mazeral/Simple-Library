<script setup lang="ts">
const firstname: string = '';
const lastname: string = '';
</script>
<template>
  <v-form>
    <!-- v-model will contain the varible that will carry the value of the input. -->
    <v-container>
      <v-text-field v-model="firstname" label="First Name"></v-text-field>
      <v-text-field v-model="lastname" label="Last Name"></v-text-field>
      <v-btn>Create An Author</v-btn></v-container
    >
  </v-form>
</template>
