<script setup>
import { ref, reactive } from 'vue';
import * as axios from 'axios';
const firstName = ref('');
const lastName = ref('');
const data = reactive({
  FirstName: firstName,
  LastName: lastName,
});
async function removeAuthor(
  url = 'http://localhost/api/author/remove',
  Data = data,
) {
  const res = axios.delete(url, Data);

  firstName.value = '';
  lastName.value = '';
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
        />
        <label for="LastName" class="form-label"
          >Enter the author last name</label
        >
        <input
          type="text"
          name="LastName"
          id="LastName"
          class="form-control"
          required
        />
      </div>
      <button type="button" class="btn btn-danger">Remove the author</button>
    </form>
  </div>
</template>
