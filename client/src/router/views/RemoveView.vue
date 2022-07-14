<script setup>
import { ref } from 'vue';
import RemoveAuthorVue from '../../components/author/RemoveAuthor.vue';
import RemoveBookVue from '../../components/book/RemoveBook.vue';
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
    <form>
      <div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="book"
            @click="bookForm"
            v-model="isBook"
          />
          <label for="book" class="form-check-label">Remove book</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="author"
            @click="authorForm"
            v-model="isAuthor"
          />
          <label for="author" class="form-check-label">Remove author</label>
        </div>
      </div>
    </form>
    <div v-if="isAuthor"><RemoveAuthorVue /></div>
    <div v-if="isBook"><RemoveBookVue /></div>
  </div>
</template>
