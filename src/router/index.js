import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import FavoritesList from '../pages/FavoritesList.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path: '/favorites', name: 'Favorites', component: FavoritesList}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
