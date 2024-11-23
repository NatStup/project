import { createRouter, createWebHistory } from 'vue-router'

const MainPage = () => import('@/pages/main-page/ui/main-page.vue') // lazy loading
const AboutProject = () => import('@/pages/about-project.vue') // lazy loading


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutProject,
    },
  ],
})

export default router
