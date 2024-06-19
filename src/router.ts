import { createRouter, createWebHistory } from 'vue-router'

import Index from './pages/Index.vue'
import About from './pages/About.vue'
import Question from './pages/Question.vue'
import Caesar from './pages/Caesar.vue'
import Emulator from './pages/Emulator.vue'


const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  {
    path: '/question/:number', 
    component: Question, 
    props: (route: any) => {
      /**
       * This would preserve the other route.params object properties overriding only 
       * `userId` in case it exists with its integer equivalent, or otherwise with 
       * undefined.
       */
      return {
        ...route.params, ...{ userId: Number.parseInt(route.params.userId, 10) || undefined }
      }
    }
  },
  {path: '/caesar', component: Caesar},
  {path: '/emu', component: Emulator},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})