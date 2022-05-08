<script setup>
let authors = null;
// #1 fetch the data and insert them into local vars
fetch('http://localhost:3000/authors')
  .then((res) => res.json())
  .then((data) => (this.authors = data))
  .catch((err) => console.log(err));
// #2 use the vars and make them in the template
</script>

<template>
  <div class="container">
    <div class="card" v-for="author in authors" :key="author.id">
      <div class="card-header">
        {{ author.FirstName }} {{ author.LastName }}
      </div>
      <div class="card-body">{{ author.Books }}</div>
    </div>
  </div>
</template>

<style></style>
