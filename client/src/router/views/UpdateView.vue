<script setup>
/**The update view, where it contains the UpdateAuthor and UpdateBook components */
//NEEDS TO BE WRITTEN!!!1
import { ref } from 'vue';
import UpdateBook from '../../components/book/UpdateBook.vue';
import UpdateAuthor from '../../components/author/UpdateAuthor.vue';
//these varaibles by default are NOT reactive unless if ref was added to the variables
//For example: const foo is not reactive
//const foo = ref() is reactive
const isBook = ref(false);
const isAuthor = ref(false);
//The post request data:
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
</script>

<template>
  <div class="container">
    <!--a nested form, the user will choose what he wants to update and then the form will appear depending on what he choosed, some scripted is needed. -->
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
          <label for="book" class="form-check-label">Update book</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="author"
            @click="authorForm"
            v-model="isAuthor"
          />
          <label for="author" class="form-check-label">Update author</label>
        </div>
      </div>
    </form>

    <form action="post" v-if="isBook">
      <UpdateBook />
    </form>
    <form action="post" v-if="isAuthor">
      <UpdateAuthor />
    </form>
  </div>
</template>
