<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
const title = ref('');
async function deleteBook(url = 'http://localhost:3000/api/book/delete') {
  const data = reactive(title.value);
  const res = await axios
    .delete(url, {
      data: {
        title: data,
      },
    })
    .then(() => {
      title.value = '';
    });

  return res;
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="deleteBook()">
      <label for="Title" class="form-label">Enter the book title</label>
      <input
        v-model="title"
        type="text"
        name="Title"
        id="Title"
        class="form-control"
        required
      />
      <button class="btn btn-danger" @click="deleteBook">
        Remove the book
      </button>
    </form>
  </div>
</template>
