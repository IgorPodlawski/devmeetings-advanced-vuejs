import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import enterGuard from './utils/enter-guard.js';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: enterGuard,
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/score',
      name: 'score',
      beforeEnter: enterGuard,
      component: () => import(/* webpackChunkName: "score" */ './views/Score.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/vote',
      name: 'vote',
      beforeEnter: enterGuard,
      component: () => import(/* webpackChunkName: "vote" */ './views/Vote.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      beforeEnter: enterGuard,
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})
