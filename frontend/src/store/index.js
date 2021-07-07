import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

// eslint-disable-next-line import/no-cycle
import auth from './auth/moduleAuth'
import user from './user/moduleUser'
import rolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    auth,
    user,
    rolesAndPermissions,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.DEV,
})
