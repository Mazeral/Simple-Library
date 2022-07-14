<script setup>
//This component will be about the option if the user decided to update a book
/**1-Search
 * 2-Find
 * 3-Edit
 * 4-Update
 */
//multple forms that reach to different endpoints.
//easy
import { reactive, ref } from 'vue';
import * as axios from 'axios';
// variables for the checkboxes and the forms
const titleForm = ref(false);
const descForm = ref(false);
const title = ref('');
const desc = ref('');
const newTitle = ref('');
const newDesc = ref('');
// Functions for the checkboxes
const titleUpdate = () => {
  if (descForm.value === true) {
    descForm.value = false;
  }
  titleForm.value = !titleForm.value;
};
const descUpdate = () => {
  if (titleForm.value === true) {
    titleForm.value = false;
  }
  descForm.value = !descForm.value;
};
// Objects for the forms:
const titleFormData = reactive({
  Title: title.value,
  NewTitle: newTitle.value,
});
const descFormData = reactive({
  Title: title.value,
  NewDesc: newDesc.value,
});
// Patch functions with axios
async function titlePatch(
  url = 'http://localhost:3000/api/book/title',
  data = titleFormData,
) {
  const response = await axios.patch(url, data);
  title.value = '';
  newTitle.value = '';
  desc.value = '';
  return response;
}
async function descPatch(
  url = 'http://localhost:3000/api/book/title',
  data = descFormData,
) {
  const response = await axios.patch(url, data);
  title.value = '';
  newDesc.value = '';
  desc.value = '';
  return response;
}
</script>

<template>
  <div class="container">
    <form action="">
      <div>
        <div class="form-check">
          <input
            type="checkbox"
            name="TitleForm"
            id="TitleForm"
            class="form-check-input"
            @click="titleUpdate()"
            v-model="titleForm"
          />
          <label for="TitleForm" class="form-check-label"
            >Change a book title</label
          >
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            name="DescForm"
            id="DescForm"
            class="form-check-input"
            @click="descUpdate()"
            v-model="descForm"
          />
          <label for="DescForm" class="form-check-label"
            >change the description of a book</label
          >
        </div>
      </div>
    </form>

    <!-- A form to change the title of a book -->
    <form v-if="titleForm" @submit.prevent="titlePatch()">
      <div>
        <label for="Title" class="form-label"
          >Enter the original book title</label
        >
        <input
          type="text"
          class="form-control"
          id="Title"
          v-model="title"
          required
        />
        <label for="Newtitle" class="form-label">Enter the new title</label>
        <input
          type="text"
          name="NewTitle"
          id="NewTitle"
          class="form-control"
          v-model="newTitle"
          required
        />
      </div>
      <button class="btn btn-primary">Change the book title</button>
    </form>
    <!-- Form for changing the desc -->
    <form v-if="descForm" @submit.prevent="descPatch()">
      <div>
        <label for="Title" class="form-label"
          >Enter the title of the book</label
        >
        <input
          type="text"
          name="Title"
          id="Title"
          class="form-control"
          v-model="title"
          required
        />
        <label for="newDesc" class="form-label"
          >Enter the new description</label
        >
        <input
          type="text"
          name="newDesc"
          id="newDesc"
          v-model="newDesc"
          required
          class="form-control"
        />
      </div>
      <button class="btn btn-primary">Change the book description</button>
    </form>
  </div>
</template>
