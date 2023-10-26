import { createRouter, createWebHistory } from 'vue-router'
import lunetteVue from '../views/LunetteView.vue'
import Personnalisation from '../views/PersoView.vue'
import Connexion from '../views/ConnexionView.vue'
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
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    }
  ]
})

export default router
