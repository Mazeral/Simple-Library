<script setup></script>
<template>
  <div class="container">
    <!--a nested form, the user will choose what he wants to create and then the form will appear depending on what he choosed, some scripted is needed. -->
    <div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="book" />
        <label for="book" class="form-check-label">Create book</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="author" />
        <label for="author" class="form-check-lael">Create author</label>
      </div>
    </div>
    <form action="create">
      <!-- The author entity contains : first name, last name, an array of books.
      The book entity contains : the title and the description. -->
      <div id="newAuthor">
        <label for="firstname" class="form-label">First name</label>
        <input type="text" class="form-control" id="firstname" />
        <label for="lastname" class="form-label">Last name</label>
        <input type="text" class="form-control" id="lastname" />
      </div>
      <div id="newBook">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" />
        <label for="details" class="form-label">Details</label>
        <textarea
          id="details"
          cols="30"
          rows="10"
          class="form-control"
        ></textarea>
      </div>
    </form>
  </div>
</template>
<style></style>
