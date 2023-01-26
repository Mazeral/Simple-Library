<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import endpoints from '@/endpoints';
const value = ref(false);
const booklist: string[] = [];
const author = ref({
  firstname: '',
  lastname: '',
});
const newFirst = ref();
const newLast = ref();
const bookname = ref();
//first or last = fol
let fol = ref('First');
const folFun = () => {
  if (value.value) fol.value = 'First';
  else fol.value = 'Last';
};
const addname = () => {
  booklist.push(bookname.value);
  console.log(booklist);
};
const update = async () => {
  if (!value.value && newFirst.value == true) {
    await axios
      .post(endpoints.updateAuthorFirstName, {
        FirstName: author.value.firstname,
        LastName: author.value.lastname,
        NewFirstName: newFirst.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    console.log('updated first name');
  }
  if (value.value && newLast.value == false) {
    await axios
      .post(endpoints.updateAuthorLastName, {
        FirstName: author.value.firstname,
        LastName: author.value.lastname,
        NewLastName: newLast.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    console.log('updated last name');
  }
  if (booklist) {
    await axios
      .post(endpoints.updateAuthorBooks, {
        firstname: author.value.firstname,
        lastname: author.value.lastname,
        books: booklist,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    console.log('updated books');
  }
};
const remelement = (index: number) => {
  console.log('Delete:' + booklist[index]);
  booklist.splice(index, 1);
};
</script>

<template>
  <v-form>
    <!-- First and last names -->
    <v-text-field
      label="Author First Name"
      required
      clearable
      v-model="author.firstname"
    ></v-text-field>
    <v-text-field
      label="Author Last Name"
      required
      clearable
      v-model="author.lastname"
    ></v-text-field>
    <!-- Either update first or last name via a switch -->
    <v-switch
      v-model="value"
      color="primary"
      :label="`${fol} Name`"
      @click.self="folFun"
    ></v-switch>
    <v-text-field
      label="Change The First Name"
      v-show="!value"
      clearable
    ></v-text-field>

    <v-text-field
      label="Change The Last Name"
      clearable
      v-show="value"
    ></v-text-field>
    <!-- For books -->

    <v-text-field
      label="Add Books For This Author"
      clearable
      v-model="bookname"
    ></v-text-field>
    <v-list>
      <v-list-item
        v-for="(item, index) in booklist"
        :key="index"
        :title="item"
        @click="remelement(index)"
      ></v-list-item>
    </v-list>
    <v-btn @click="addname">Add Books</v-btn>
    <v-divider></v-divider>
    <v-btn color="green" class="mt-6" @click="update">Update!</v-btn>
  </v-form>
</template>

<style></style>
