import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Housing from '../views/Housing/Housing.vue'
import About from '../views/About/About.vue'
import PageNotFound from '../views/PageNotFound/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Fiche-Logement/:id',
      name: 'housing',
      component: Housing
    },
    {
      path: '/A-Propos',
      name: 'about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: PageNotFound
    }
  ]
})

export default router
