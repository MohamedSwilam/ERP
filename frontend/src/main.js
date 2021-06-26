import Vue from 'vue'
import {
  ToastPlugin, ModalPlugin, BootstrapVue, IconsPlugin,
} from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import AuthMixin from '@/mixins/auth'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// Admin Filters
import './filters/filters'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

// Axios Mock Adapter
import '@/@fake-db/db'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.mixin(AuthMixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
