<script setup>
import { reactive, ref } from 'vue';
import * as axios from 'axios';
//these varaibles by default are NOT reactive unless if ref was added to the variables
//For example: const foo is not reactive
//const foo = ref() is reactive
// Im using here reactive for the objects to make it easier to use.
const isBook = ref(false);
const isAuthor = ref(false);
//The post request data:
const title = ref('');
const description = ref('');
const FirstName = ref('');
const LastName = ref('');
const bookname = ref('');
const booklist = ref([]);
const newBook = reactive({ title: title, description: description });
const newAuthor = reactive({
  firstName: FirstName,
  lastName: LastName,
  Books: booklist,
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
//A function for the book list array
const addBook = () => newAuthor.Books.push(bookname.value);
//post request for authors script:
async function postAuthor(
  url = 'http://localhost:3000/api/author/new',
  data = newAuthor,
) {
  // POSTING WITH AXIOS LETS GOOOOO
  const response = axios
    .post(url, newAuthor)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  data.firstName = '';
  data.lastName = '';

  console.log('an author post request has been sent');
  return response;
}
//The post request for books script:
async function postBook(
  url = 'http://localhost:3000/api/book/new',
  data = newBook,
) {
  // POSTING WITH AXIOS LETS GOOOOO
  const response = axios
    .post(url, newBook)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  data.title = '';
  data.description = '';
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

    <form @submit.prevent="postAuthor()">
      <!-- The author entity contains : first name, last name, an array of books.
      The book entity contains : the title and the description. -->
      <div id="newAuthor" v-if="isAuthor">
        <label for="firstname" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          v-model="newAuthor.FirstName"
          name="firstName"
        />
        <label for="lastname" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          v-model="newAuthor.LastName"
          name="lastName"
        />
        <form @submit.prevent="addBook()">
          <!-- form for the book list insertion via the var booklist -->
          <label for="booklist" class="form-label"
            >Add a book to the author list of books</label
          >
          <input
            type="text"
            class="form-control"
            id="bookname"
            v-model="bookname"
            name="bookname"
          />
          <button type="submit" class="btn btn-primary">Add a book!</button>
          <button type="button" class="btn btn-danger" @click="booklist = []">
            Reset the list
          </button>
          <div>list of books : {{ booklist }}</div>
        </form>
        <!-- button for submitting -->
        <button type="submit" class="btn btn-primary">
          Create new author!
        </button>
      </div>
    </form>
    <form @submit.prevent="postBook()">
      <div id="newBook" v-if="isBook">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="title"
          name="title"
        />
        <label for="details" class="form-label">Details</label>
        <textarea
          id="details"
          cols="30"
          rows="10"
          class="form-control"
          v-model="description"
          name="desciption"
        ></textarea>
        <!-- button for submitting -->
        <button type="submit" class="btn btn-primary">Create new book!</button>
      </div>
    </form>
  </div>
</template>
<style></style>
