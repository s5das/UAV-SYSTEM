import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/main-page.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/status',
      component: () => import('../views/uav-status.vue')
    },
    {
      path: '/features',
      component: () => import('../views/uav-features.vue')
    },
    {
      path: '/aboutus',
      component: () => import('../views/uav-aboutus.vue')
    },
    {
      path: '/control',
      component: () => import('../views/uav-control.vue')
    }
  ]
})

export default router
