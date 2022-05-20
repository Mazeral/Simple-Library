<script setup>
import { ref } from 'vue';
//these varaibles by default are NOT reactive unless if ref was added to the variables
//For example: const foo is not reactive
//const foo = ref() is reactive
const isBook = ref(false);
const isAuthor = ref(false);
//The post request data:
const title = ref('');
const description = ref('');
const FirstName = ref('');
const LastName = ref('');
const newBook = ref({ title: title.value, description: description.value });
const newAuthor = ref({
  FirstName: FirstName.value,
  LastName: LastName.value,
});
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
//The post request for books script:
async function postBook(url = 'localhost:8080/book', data = newBook.value) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  data.description=''
  data.title=''
  console.log('a book post request has been sent');
  return response.json();
}
//post request for authors script:
async function postAuthor(
  url = 'localhost:8080/author',
  data = newAuthor.value,
) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  data.firstName=''
  data.lastName=''
  console.log('an author post request has been sent');
  return response.json();
}
</script>
<template>
  <div class="container">
    <!--a nested form, the user will choose what he wants to create and then the form will appear depending on what he choosed, some scripted is needed. -->
    <form action="">
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
    </form>

    <form @submit.prevent="postAuthor" method="post">
      <!-- The author entity contains : first name, last name, an array of books.
      The book entity contains : the title and the description. -->
      <div id="newAuthor" v-if="isAuthor">
        <label for="firstname" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          v-model="newAuthor.FirstName"
          name="FirstName"
        />
        <label for="lastname" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          v-model="newAuthor.LastName"
          name="LastName"
        />
        <!-- button for submitting -->
        <button type="submit" class="btn btn-primary">
          Create new author!
        </button>
      </div>
    </form>
    <form @submit.prevent="postBook" method="post">
      <div id="newBook" v-if="isBook">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="newBook.title"
          name="title"
        />
        <label for="details" class="form-label">Details</label>
        <textarea
          id="details"
          cols="30"
          rows="10"
          class="form-control"
          v-model="newBook.description"
          name="desciption"
        ></textarea>
        <!-- button for submitting -->
        <button type="submit" class="btn btn-primary">Create new book!</button>
      </div>
    </form>
  </div>
</template>
<style></style>
