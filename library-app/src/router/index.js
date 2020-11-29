import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'categories' */ '../views/Categories.vue'),
  },
  {
    path: '/library-items',
    name: 'LibraryItems',
    component: () =>
      import(/* webpackChunkName: 'library-items' */ '../views/LibraryItems.vue'),
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () =>
      import(/* webpackChunkName: 'employees' */ '../views/Employees.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;