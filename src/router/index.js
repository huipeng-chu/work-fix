import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkbox from '../components/checkBox/checkBox'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path: '/home/checkbox',
    name: Checkbox,
    component: Checkbox
  }
]

const router = new VueRouter({
  routes
})

export default router
