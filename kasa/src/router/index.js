import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HousingView from '../views/HousingView.vue'
import AboutView from '../views/AboutView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Fiche-Logement/:id',
      name: 'housing',
      component: HousingView
    },
    {
      path: '/A-Propos',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: PageNotFoundView
    }
  ]
})

export default router