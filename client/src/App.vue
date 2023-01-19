<template>
  <v-app>
    <v-main>
      <AppBar />
    </v-main>
    <v-navigation-drawer permanent>
      <MainList/>
        </v-navigation-drawer>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from '@/components/AppBar.vue'
import MainList from './components/MainList.vue';
</script>