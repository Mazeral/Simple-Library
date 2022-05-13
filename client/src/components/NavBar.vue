<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="nav navbar navbar-dark bg-primary">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <form action="search">
            <label for="searching" class="fw-bold text-white"
              >What are you looking for?</label
            >
            <input type="text" id="search ing" />
            <button class="btn btn-dark">Go!</button>
          </form>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'books' }" class="nav-link"
            ><span class="fw-bold text-white">Books</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'authors' }" class="nav-link"
            ><span class="fw-bold text-white">Authors</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'new' }"
            ><span class="fw-bold text-white">Create</span></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<style></style>
