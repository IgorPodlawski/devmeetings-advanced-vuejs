import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.module';
import settings from './modules/settings.module';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    user,
    settings
  },
})
