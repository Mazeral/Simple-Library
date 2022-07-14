<script setup></script>
<template>
  <form>
    <div class="mb-3">
      <label for="title">What's the title of this book?</label>
      <input type="text" id="title" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="desc">What's the book about?</label>
      <textarea id="desc" cols="30" rows="10"></textarea>
    </div>
    <div class="mb-3">
      <label for="author">Who's the author of this book?</label>
      <input
        type="text"
        id="firstname"
        class="form-control"
        placeholder="First Name"
      />
      <input
        type="text"
        id="lastname"
        class="form-control"
        placeholder="Last Name"
      />
    </div>
  </form>
</template>
<style></style>
