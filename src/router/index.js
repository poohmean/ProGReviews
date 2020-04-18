import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Showphone from '../views/Showphone.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:name',
    name: 'ShowPhone',
    component: Showphone
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
