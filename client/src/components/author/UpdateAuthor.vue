<script setup>
//multple forms that reach to different endpoints.
//easy
import { reactive, ref } from 'vue';
import * as axios from 'axios';
// variables for the checkboxes
const booksForm = ref(false);
const firstNameForm = ref(false);
const lastNameForm = ref(false);
// Vars for the object
const firstName = ref('');
const lastName = ref('');
const books = ref([]);
const bookname = ref('');
// vars for receiving the updating values
const newFirstName = ref('');
const newLastName = ref('');
// functions that control the variables of the checkboxes.
const bookUpdate = () => {
  if (firstNameForm.value === true || lastNameForm.value === true) {
    firstNameForm.value = false;
    lastNameForm.value = false;
  }
  booksForm.value = !booksForm.value;
};
const firstNameUpdate = () => {
  if (booksForm.value === true || lastNameForm.value === true) {
    booksForm.value = false;
    lastNameForm.value = false;
  }
  firstNameForm.value = !firstNameForm.value;
};
const lastNameUpdate = () => {
  if (booksForm.value === true || firstNameForm.value === true) {
    booksForm.value = false;
    firstNameForm.value = false;
  }
  lastNameForm.value = !lastNameForm.value;
};
// A function for the array of book names:
const addBook = () => {
  books.value.push(bookname.value);
  bookname.value = '';
};
// objects that contain the updating informations
// The object containing the data for adding books

// The variable that have the object.
// The object containing the data for changing the first name:

// The object containing the data for chaning the last name:

// fetch requests for the buttons!

// Fetch for adding books
async function updateBooksFetch(
  url = 'http://localhost:3000/api/author/books',
) {
  const objectForBooks = reactive({
    author: { FirstName: firstName, LastName: lastName },
    books: books.value,
  });
  const response = await axios.patch(url, objectForBooks).then(() => {
    firstName.value = '';
    lastName.value = '';
    books.value = [];
    console.log('an author post request has been sent');
  });

  return response;
}
// Fetch for updating the first name
async function updateFirstNameFetch(
  url = 'http://localhost:3000/api/author/firstname',
) {
  const objectForFirstName = reactive({
    author: { FirstName: firstName.value, LastName: lastName.value },
    NewFirstName: newFirstName.value,
  });
  const response = await axios.patch(url, objectForFirstName).then(() => {
    firstName.value = '';
    lastName.value = '';
    newFirstName.value = '';
  });
  // YOLO

  console.log('an author post request has been sent');
  return response;
}
// Fetch for updating the last name
async function updateLastNameFetch(
  url = 'http://localhost:3000/api/author/lastname',
) {
  const objectForLastname = reactive({
    author: { FirstName: firstName.value, LastName: lastName.value },
    NewLastName: newLastName.value,
  });
  const response = await axios.patch(url, objectForLastname).then(() => {
    firstName.value = '';
    lastName.value = '';
    newLastName.value = '';
    console.log('an author post request has been sent');
  });
  // YOLO

  return response;
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
            id="books"
            @click="bookUpdate"
            v-model="booksForm"
          />
          <label for="books" class="form-check-label">Add books</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="firstName"
            @click="firstNameUpdate"
            v-model="firstNameForm"
          />
          <label for="firstName" class="form-check-label"
            >Change the first name of the author</label
          >
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="lastName"
            @click="lastNameUpdate"
            v-model="lastNameForm"
          />
          <label for="lastName" class="form-check-label"
            >Change the last name of the author</label
          >
        </div>
      </div>
    </form>

    <!-- A form to add books -->
    <form v-if="booksForm" @submit.prevent="updateBooksFetch()">
      <div>
        <label for="FirstName" class="form-label"
          >Enter the fist name of the author</label
        >
        <input
          type="text"
          class="form-control"
          id="FirstName"
          v-model="firstName"
          required
        />
        <label for="LastName" class="form-label">Enter the last name</label>
        <input
          type="text"
          id="LastName"
          class="form-control"
          v-model="lastName"
          required
        />
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
        <button type="button" class="btn btn-primary" @click="addBook()">
          Add a book!
        </button>
        <button type="button" class="btn btn-danger" @click="books = []">
          Reset the list
        </button>
        <div>list of books : {{ books }}</div>
        <button type="submit" class="btn btn-primary">
          Add a book to the author!
        </button>
      </div>
    </form>
    <!-- A form to change the first name. -->
    <form v-if="firstNameForm" @submit.prevent="updateFirstNameFetch()">
      <div>
        <label for="OldFirstName" class="form-label"
          >Enter the authors original first name</label
        >
        <input
          type="text"
          name=""
          id="OldFirstName"
          class="form-control"
          v-model="firstName"
        />
        <label for="LastName" class="form-label"
          >Enter the authors last name</label
        >
        <input
          type="text"
          name=""
          id="LastName"
          class="form-control"
          v-model="lastName"
        />
        <label for="NewFirstName" class="form-label"
          >Enter the new authors first name</label
        >
        <input
          type="text"
          name=""
          id="NewFirstName"
          class="form-control"
          v-model="newFirstName"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Change the first name
      </button>
    </form>
    <!-- A form to change the last name. -->
    <form v-if="lastNameForm" @submit.prevent="updateLastNameFetch()">
      <div>
        <label for="FirstName" class="form-label"
          >Enter the authors first name</label
        >
        <input
          type="text"
          name=""
          id="FirstName"
          class="form-control"
          v-model="firstName"
        />
        <label for="OldLastName" class="form-label"
          >Enter the authors original last name</label
        >
        <input
          type="text"
          name=""
          id="OldLastName"
          class="form-control"
          v-model="lastName"
        />
        <label for="NewLastName" class="form-label"
          >Enter the new authors last name</label
        >
        <input
          type="text"
          name=""
          id="NewLastName"
          class="form-control"
          v-model="newLastName"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Change the last name
      </button>
    </form>
  </div>
</template>
