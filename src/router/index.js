import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('../views/HistoryView.vue'),
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/presentaciones',
      name: 'presentaciones',
      component: () => import('../views/PresentationsView.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {top: 0}
    }
  }
})

export default router
