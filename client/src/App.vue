<template>
  <!-- Everything should be a child of v-main. -->
  <v-app>
    <v-main>
      <AppBar />
      <v-navigation-drawer permanent> <MainList /> </v-navigation-drawer>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from '@/components/AppBar.vue';
import MainList from './components/MainList.vue';
</script>
