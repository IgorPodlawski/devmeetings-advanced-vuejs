import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('base-button', function (resolve) {
  require(['@/components/base-components/Button.vue'], resolve)
})

Vue.component('base-input', function (resolve) {
  require(['@/components/base-components/Input.vue'], resolve)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
