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
          meta: {
            title: 'Home - Fhaladin Dev',
            description:
              'Explore the portfolio of Farhan Hanif A., a proficient full-stack developer specializing in web applications. Passionate about modern technologies like TypeScript and Vue.js, and committed to continuous learning and sharing insights.',
          },
        },
        {
          path: '/contact-me',
          name: 'contact-me',
          component: () => import('@/views/ContactMeView.vue'),
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
          path: '/blog',
          name: 'blog',
          component: () => import('@/views/BlogView.vue'),
        },
        {
          path: '/playground',
          name: 'playground',
          component: () => import('@/views/PlaygroundView.vue'),
        },
      ],
    },
  ],
})

export default router
