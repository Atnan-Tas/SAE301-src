import { createRouter, createWebHistory } from 'vue-router'
import lunetteVue from '../views/LunetteView.vue'
import Personnalisation from '../views/PersoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lunette',
      component: lunetteVue
    },
    {
      path: '/perso',
      name: 'Personnalisation',
      component: Personnalisation
    }
  ]
})

export default router
