<script setup lang="ts">
const date:string = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
</script>
<template>
    <v-app-bar :elevation="1" title="Simple Library">
        <p class="text-right text-overline">The date is: {{ date }}</p>
    </v-app-bar>
</template>
