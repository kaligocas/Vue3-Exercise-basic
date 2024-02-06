import { createRouter, createWebHistory } from 'vue-router'
import Password from '../views/Password.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'password',
      component: Password
    },
    {
      path: '/ex-readmore',
      name: 'readmore',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReadMore.vue')
    }
  ]
})

export default router
