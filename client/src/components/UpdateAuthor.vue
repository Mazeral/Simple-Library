<script setup>
//multple forms that reach to different endpoints.
//easy
import { ref } from 'vue';
// variables for the checkboxes
const booksForm = ref(false);
const firstNameForm = ref(false);
const lastNameForm = ref(false);
// Vars for the object
const firstName = ref('');
const lastName = ref('');
const books = ref([]);
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
// objects that contain the updating informations
// The object containing the data for adding books
const objectForBooks = {
  author: { firstName: firstName.value, LastName: lastName.value },
  list: books.value,
};
// The variable that have the object.
const updateBooksData = ref(objectForBooks);
// The object containing the data for changing the first name:
const objectForFirstName = {
  author: { FirstName: firstName.value, LastName: lastName.value },
  NewFirstName: newFirstName.value,
};
// the varible that contains the object :
const updateFirstNameData = ref(objectForFirstName);

// The object containing the data for chaning the last name:
const objectForLastname = {
  author: { FirstName: firstName.value, LastName: lastName.value },
  LastName: newLastName.value,
};
// The variable that contains the object:
const updateLastNameData = ref(objectForLastname);
// fetch requests for the buttons!

// Fetch for adding books
async function updateBooksFetch(
  url = 'localhost:3000/api/author/books',
  Data1 = updateBooksData,
) {
  const response = await fetch(url, {
    // PATCH is ALWAYS for updating.
    method: 'PATCH',
    body: JSON.stringify(Data1),
  });
  // YOLO
  Data1.value.author.firstName = '';
  Data1.value.author.lastName = '';
  Data1.value.list = null;
  console.log('an author post request has been sent');
  return response.json();
}
// Fetch for updating the first name
async function updateFirstNameFetch(
  url = 'localhost:3000/api/author/firstname',
  Data2 = updateFirstNameData,
) {
  const response = await fetch(url, {
    // PATCH is ALWAYS for updating.
    method: 'PATCH',
    body: JSON.stringify(Data2),
  });
  // YOLO
  Data2.value.author.firstName = '';
  Data2.value.author.lastName = '';
  Data2.value.list = null;
  console.log('an author post request has been sent');
  return response.json();
}
// Fetch for updating the last name
async function updateLastNameFetch(
  url = 'localhost:3000/api/author/lastname',
  Data3 = updateLastNameData,
) {
  const response = await fetch(url, {
    // PATCH is ALWAYS for updating.
    method: 'PATCH',
    body: JSON.stringify(Data3),
  });
  // YOLO
  Data3.value.author.firstName = '';
  Data3.value.author.lastName = '';
  Data3.value.list = null;
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
          <label for="author" class="form-check-label"
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
          <label for="author" class="form-check-label"
            >Change the last name of the author</label
          >
        </div>
      </div>
    </form>

    <!-- A form to add books -->
    <form v-if="booksForm" @submit.prevent="updateBooksFetch">
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
        <label for="Book" class="form-label">Enter a book he wrote</label>
        <input
          type="text"
          name=""
          id="Book"
          class="form-control"
          v-model="books"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Add a book to the author!
      </button>
    </form>
    <!-- A form to change the first name. -->
    <form v-if="firstNameForm" @submit.prevent="updateFirstNameFetch">
      <div>
        <label for="OldFirstName" class="form-label"
          >Enter the authors original first name</label
        >
        <input
          type="text"
          name=""
          id="OldFirstName"
          class="form-label"
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
    <form v-if="lastNameForm" @submit.prevent="updateLastNameFetch">
      <div>
        <label for="FirstName" class="form-label"
          >Enter the authors first name</label
        >
        <input
          type="text"
          name=""
          id="FirstName"
          class="form-label"
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
