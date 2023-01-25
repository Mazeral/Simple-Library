<script setup lang="ts">
const ListItems = [
  {
    id: 1,
    name: 'Authors',
    path: '/authors',
  },
  {
    id: 2,
    name: 'Books',
    path: '/books',
  },
  {
    id: 3,
    name: 'Show Authors and books',
    path: '/all',
  },
  {
    id: 4,
    name: 'Add Authors',
    path: '/authors/new',
  },
  {
    id: 5,
    name: 'Add Books',
    path: '/books/new',
  },
  {
    id: 6,
    name: 'Update Authors',
    path: '/authors/update',
  },
  {
    id: 7,
    name: 'Update Books',
    path: '/books/update',
  },
  {
    id: 8,
    name: 'Delete Authors',
    path: '/authors/delete',
  },
  {
    id: 9,
    name: 'Delete Books',
    path: '/books/delete',
  },
];
</script>
<template>
  <v-list lines="one">
    <v-list-item v-for="item in ListItems" :key="item.id">
      <!-- The : behind 'to' is intended to make the path dynamic -->
      <router-link :to="item.path" id="router">
        <v-btn> {{ item.name }} </v-btn></router-link
      >
    </v-list-item>
  </v-list>
</template>

<style scoped>
#router {
  text-decoration: none;
  color: black;
}
</style>
