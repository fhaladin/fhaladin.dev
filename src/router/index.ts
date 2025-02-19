import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/LayoutDefault.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HelloView.vue'),
        },
        {
          path: '/about-me',
          name: 'about-me',
          component: () => import('@/views/AboutMeView.vue'),
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('@/views/ProjectsView.vue'),
        },
        {
          path: '/playground',
          name: 'playground',
          component: () => import('@/views/PlaygroundView.vue'),
        },
        {
          path: '/contact-me',
          name: 'contact-me',
          component: () => import('@/views/ContactMeView.vue'),
        },
      ],
    },
  ],
})

export default router
