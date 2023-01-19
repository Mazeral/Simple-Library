<script setup lang="ts">
const ListItems = [
    {
        id: 1,
        name: "Authors"
    },
    {
        id: 2,
        name: 'Books'
    },
    {
        id: 3,
        name: "Show All"
    }
]
</script>
<template>
        <v-list lines="one">
            <v-list-item v-for="item in ListItems" :key="item.id"><v-btn> {{ item.name }} </v-btn></v-list-item>
        </v-list>

</template>