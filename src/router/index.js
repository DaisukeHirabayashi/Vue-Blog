import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/github',
    beforeEnter() {
      window.location = "https://github.com/DaisukeHirabayashi/Vue-Blog"
    }
  },
  {
    path: '/twitter',
    beforeEnter() {
      window.location = "https://twitter.com/daisuke5789"
    }
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import(/* webpackChunkName: "about" */ '../views/Markdown.vue')
  },
  {
    path: '/create_markdown',
    name: 'Create_markdown',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddMarkdown.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
