<script setup lang="ts">
import { ref } from 'vue';
import { Ref } from 'vue';
const value: Ref<boolean> = ref(false);
let fol: Ref<string> = ref('First');
const folFun = () => {
  if (value.value) fol.value = 'First';
  else fol.value = 'Last';
};
</script>

<template>
  <v-form>
    <!-- First and last names -->
    <v-text-field label="Author First Name"></v-text-field>
    <v-text-field label="Author Last Name"></v-text-field>
    <!-- Either update first or last name via a switch -->
    <v-switch
      v-model="value"
      color="primary"
      :label="`${fol} Name`"
      @click.self="folFun"
    ></v-switch>
    <v-text-field label="Change The First Name" v-show="!value"></v-text-field>

    <v-text-field label="Change The Last Name" v-show="value"></v-text-field>
    <!-- For books -->

    <v-text-field label="Add Books For This Author (Optional) "></v-text-field>
    <v-list> some elements here.... </v-list>
    <v-btn>Add Books</v-btn>
    <v-divider></v-divider>
    <v-btn color="green" class="mt-6">Submit!</v-btn>
  </v-form>
</template>

<style></style>
