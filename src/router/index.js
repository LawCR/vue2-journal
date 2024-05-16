import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import daybook from '@/modules/daybook/router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/daybook'
      // name: 'home',
      // component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/daybook',
      ...daybook
    }
  ]
})

export default router
