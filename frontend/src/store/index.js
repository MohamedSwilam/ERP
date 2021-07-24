import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line import/no-extraneous-dependencies
import VuexPersistence from 'vuex-persist'

// Modules
// eslint-disable-next-line import/no-cycle
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

// eslint-disable-next-line import/no-cycle
import auth from './auth/moduleAuth'
import user from './user/moduleUser'
import customer from './customer'
import packages from './package'
import comment from './comment'
import seed from './seed'
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
    customer,
    packages,
    comment,
    seed,
    rolesAndPermissions,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.DEV,
})
