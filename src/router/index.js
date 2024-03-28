import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/pages/homePage.vue'
import aboutUsView from '@/views/aboutUsView.vue'
import productView from '../views/productsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage 
    },
    {
      path:'/nosotros',
      component:aboutUsView
    },
    {
      path:'/productos',
      component: productView
    }
   
  ]
})

export default router
