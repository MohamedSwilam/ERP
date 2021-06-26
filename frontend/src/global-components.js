import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import '@validations'

Vue.component(FeatherIcon.name, FeatherIcon)
Vue.component('BCardActions', BCardActions)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
