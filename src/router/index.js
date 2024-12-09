import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../layouts/dashboard/index.vue'),
    children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/home/index.vue'),
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/product/index.vue'),
        },
        {
          path: 'customers',
          name: 'customers',
          component: () => import('../views/customers/index.vue'),
        },
        {
          path: 'income',
          name: 'income',
          component: () => import('../views/income/index.vue'),
        },
        {
          path: 'promote',
          name: 'promote',
          component: () => import('../views/promote/index.vue'),
        },
        {
          paht: 'help',
          name: 'help',
          component: () => import('../views/help/index.vue'),
        }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

