<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
const firstName = ref('');
const lastName = ref('');

async function removeAuthor() {
  const Data = reactive({
    FirstName: firstName.value,
    LastName: lastName.value,
  });

  const res = await axios
    .delete('http://localhost:3000/api/author/deleteAuthor', {
      data: {
        FirstName: Data.FirstName,
        LastName: Data.LastName,
      },
    })
    .then(() => {
      firstName.value = '';
      lastName.value = '';
    });

  return res;
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="removeAuthor()">
      <div>
        <label for="FirstName" class="form-label"
          >Enter the author first name</label
        >
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          class="form-control"
          required
          v-model="firstName"
        />
        <label for="LastName" class="form-label"
          >Enter the author last name</label
        >
        <input
          v-model="lastName"
          type="text"
          name="LastName"
          id="LastName"
          class="form-control"
          required
        />
      </div>
      <button @click="removeAuthor" type="button" class="btn btn-danger">
        Remove the author
      </button>
    </form>
  </div>
</template>
