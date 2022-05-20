import { createRouter, createWebHistory } from 'vue-router';
import Newitem from './views/NewItem.vue';
import Home from './views/HomeView.vue';
import Authors from './views/AuthorsView.vue';
import Books from './views/BooksView.vue';
import Update from './views/UpdateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/new',
      name: 'new',
      component: Newitem,
    },
    {
      path: '/books',
      name: 'books',
      component: Books,
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors,
    },
    {
      path: '/update',
      name: 'update',
      component: Update,
    },
  ],
});

export default router;
