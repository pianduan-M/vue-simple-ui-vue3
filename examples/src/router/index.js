import { createRouter, createWebHashHistory } from 'vue-router'

import Admin from '@/views/Admin.vue'
import PageContent from '@/views/PageContent.vue'

const routes = [
  {
    path: '/',
    redirect: '/page-content'
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/page-content',
    name: 'admin-page',
    component: PageContent
  }
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior: () => {}
})

export const registerRouter = (app) => {
  app.use(router)
}
