<script setup>
import { ref } from 'vue';
//these varaibles by default are NOT reactive
const isBook = ref(false);
const isAuthor = ref(false);
//The post request data:
const newBook = ref({ title: '', desc: '' });
const newAuthor = ref({ firstName: '', lastName: '' });
//functions to make only one check box work at a time.
const authorForm = () => {
  if (isBook.value === true) {
    isBook.value = false;
  }
  isAuthor.value = !isAuthor.value;
};
const bookForm = () => {
  if (isAuthor.value === true) {
    isAuthor.value = false;
  }
  isBook.value = !isBook.value;
};
//The post request script:
const post = async () => {
  try {
    let data = await fetch(/**Some api */);
    if (!data.ok) {
      throw Error('something is wrong with the data...');
    }
  } catch (error) {
    console.log(error.message);
  }
};
</script>
<template>
  <div class="container">
    <!--a nested form, the user will choose what he wants to create and then the form will appear depending on what he choosed, some scripted is needed. -->
    <div>
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="book"
          @click="bookForm"
          v-model="isBook"
        />
        <label for="book" class="form-check-label">Create book</label>
      </div>
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="author"
          @click="authorForm"
          v-model="isAuthor"
        />
        <label for="author" class="form-check-label">Create author</label>
      </div>
    </div>
    <form action="create">
      <!-- The author entity contains : first name, last name, an array of books.
      The book entity contains : the title and the description. -->
      <div id="newAuthor" v-if="isAuthor">
        <label for="firstname" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          v-model="newAuthor.firstName"
        />
        <label for="lastname" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          v-model="newAuthor.lastName"
        />
      </div>
      <div id="newBook" v-if="isBook">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="newBook.title"
        />
        <label for="details" class="form-label">Details</label>
        <textarea
          id="details"
          cols="30"
          rows="10"
          class="form-control"
          v-model="newBook.desc"
        ></textarea>
      </div>
    </form>
  </div>
</template>
<style></style>
