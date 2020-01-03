import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkbox from '../components/checkBox/checkBox'
import Menu from '../components/menu/menu'
import Tree from '../components/tree/tree'
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
  },
  {
    path: '/home/menu',
    name: Menu,
    component: Menu
  },
  {
    path: '/home/tree',
    name: Tree,
    component: Tree
  }
]

const router = new VueRouter({
  routes
})

export default router
