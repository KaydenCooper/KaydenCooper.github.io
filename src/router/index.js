import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import About from '../views/About.vue'
// @ts-ignore
import SoftwareDevelopment from '../views/SoftwareDevelopment.vue'
// @ts-ignore
import Photography from '../views/Photography.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/software-development',
    name: 'software-development',
    component: SoftwareDevelopment
  },
  {
    path: '/photography',
    name: 'photography',
    component: Photography
  }
]

export default router
