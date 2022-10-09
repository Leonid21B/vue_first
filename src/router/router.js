import { createRouter, createWebHistory } from 'vue-router'
import Settings from '../pages/Settings/Settings.vue'
import EmptyPage from '../pages/EmptyPage/EmptyPage.vue'
const routes = [
  {
    path: '/',
    name: 'settings',
    component: Settings
  },
  {
    path: '/courses-list',
    name: 'courses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EmptyPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
