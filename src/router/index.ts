import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Sign up',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookshelf.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue')
  },
  {
    path: '/book',
    name: 'Book registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookRegistration.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
