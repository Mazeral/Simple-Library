// Composables
import NewAuthorVue from '@/components/Create/NewAuthor.vue';
import AuthorCardVue from '@/components/Read/AuthorCard.vue';
import BookCardVue from '@/components/Read/BookCard.vue';
import NewBookVue from '@/components/Create/NewBook.vue';
import { createRouter, createWebHistory } from 'vue-router';
import DeleteBookVue from '@/components/Delete/DeleteBook.vue';
import DeleteAuthorVue from '@/components/Delete/DeleteAuthor.vue';
import UpdateAuthor from '@/components/Update/UpdateAuthor.vue';
import UpdateBook from '@/components/Update/UpdateBook.vue';
import AllCardVue from '@/components/Read/AllCard.vue';

const routes = [
  {
    path: '/',
  },
  {
    path: '/authors',
    name: 'Authors',
    component: AuthorCardVue,
  },
  {
    path: '/books',
    name: 'Books',
    component: BookCardVue,
  },
  {
    path: '/authors/new',
    name: 'New Author',
    component: NewAuthorVue,
  },
  {
    path: '/books/new',
    name: 'New Book',
    component: NewBookVue,
  },
  {
    path: '/books/delete',
    name: 'Delete Book',
    component: DeleteBookVue,
  },
  {
    path: '/authors/delete',
    name: 'Delete Author',
    component: DeleteAuthorVue,
  },
  {
    path: '/authors/update',
    name: 'Update Author',
    component: UpdateAuthor,
  },
  {
    path: '/books/update',
    name: 'Update Book',
    component: UpdateBook,
  },

  // {
  //   path: '/',
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
