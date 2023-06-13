import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from 'vuex'

import defaultLayout from '@/layouts/defaultLayout.vue'
import homePage from '@/views/homePage.vue'
import clientDetail from '@/views/clientDetail.vue'
import tasksPage from "@/views/tasksPage";



const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: defaultLayout,
    children: [
      {
        path: '',
        name: 'HomePage',
        props: true,
        component: homePage
      },
      {
        path: 'client/:id',
        name: 'ClientDetail',
        params: true,
        component: clientDetail
      }, {
        path: 'tasks',
        name: 'tasks',
        props: true,
        component: tasksPage
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
