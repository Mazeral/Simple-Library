<script setup>
import { ref, reactive } from 'vue';
import * as axios from 'axios';
const title = ref('');
const data = reactive({ Title: title });
async function deleteBook(
  url = 'http://localhost:3000/api/book/remove',
  Data = data,
) {
  const res = axios.delete(url, Data);
  title.value = '';
  return res;
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="deleteBook()">
      <label for="Title" class="form-label">Enter the book title</label>
      <input
        type="text"
        name="Title"
        id="Title"
        class="form-control"
        required
      />
      <button class="btn btn-danger">Remove the book</button>
    </form>
  </div>
</template>
