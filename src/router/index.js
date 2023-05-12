import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/uav',
      component: () => import('../views/uav.vue'),
      children: [
        {
          path: 'main',
          component: () => import('../views/uav-main.vue')
        },
        {
          path: 'status1',
          component: () => import('../views/uav-status.vue')
        },
        {
          path: 'status2',
          component: () => import('../views/uav-status2.vue')
        },
        {
          path: 'map',
          component: () => import('../views/uav-map.vue')
        },
        {
          path: 'task',
          component: () => import('../views/task-add.vue')
        },
        {
          path: 'information',
          component: () => import('../views/information.vue')
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
