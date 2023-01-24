<script setup lang="ts">
const title: string = '';
const details: string = '';
</script>
<template>
  <v-form>
    <!-- v-model will contain the varible that will carry the value of the input. -->
    <v-container>
      <v-text-field v-model="title" label="Book Title"></v-text-field>
      <v-textarea v-model="details" label="Book details"></v-textarea>
      <v-btn>Create A book</v-btn></v-container
    >
  </v-form>
</template>
