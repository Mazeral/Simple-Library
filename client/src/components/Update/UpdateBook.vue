<script setup lang="ts">
//dont forget to use ref!
</script>

<template>
  <v-form>
    <!-- First and last names -->
    <v-text-field label="Book Title"></v-text-field>

    <v-text-field label="Change The Title"></v-text-field>
    <!-- For books -->
    <v-textarea label="Change The details Of The Book"></v-textarea>
    <h3>Quick note: You can change both the title and the detais</h3>
    <v-divider></v-divider>
    <v-btn color="green" class="mt-6">Update!</v-btn>
  </v-form>
</template>
