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
    }, {
        id: 4,
        name: "Add Authors"
    }, {
        id: 5,
        name: "Add Books"
    }, {
        id: 6,
        name: "Update Authors"
    },
    {
        id: 7,
        name: "Update Books"
    },
    {
        id: 8,
        name: "Delete Authors"
    }, {
        id: 9,
        name: "Delete Books"
    }
]
</script>
<template>
    <v-list lines="one">
        <v-list-item v-for="item in ListItems" :key="item.id"><v-btn> {{ item.name }} </v-btn></v-list-item>
    </v-list>

</template>