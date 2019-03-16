import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import enterGuard from './utils/enter-guard.js';
import store from './store';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/score',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ './views/Score.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/vote',
      name: 'vote',
      beforeEnter: (to, from, next) => enterGuard(to, from, next, store.state.user.isAdmin),
      component: () => import(/* webpackChunkName: "vote" */ './views/Vote.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      beforeEnter: (to, from, next) => enterGuard(to, from, next, store.state.user.isAdmin),
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})