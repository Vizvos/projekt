import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import SeriesPage from './pages/SeriesPage.vue'
import FavoritesPage from './pages/FavoritesPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/serialy', component: SeriesPage },
  { path: '/oblibene', component: FavoritesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
