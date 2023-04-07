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
      path: '/features',
      component: () => import('../views/uav-features.vue')
    },
    {
      path: '/aboutus',
      component: () => import('../views/uav-aboutus.vue')
    },
    {
      path: '/uav',
      component: () => import('../views/uav.vue'),
      children: [
        {
          path: 'status',
          component: () => import('../views/vue-status.vue')
        },
        {
          path: 'map',
          component: () => import('../views/uav-map.vue')
        },
        {
          path: 'control',
          component: () => import('../views/uav-control.vue')
        }
      ]
    }
  ]
})

export default router
