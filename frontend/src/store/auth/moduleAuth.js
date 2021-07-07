import state from './moduleAuthState'
import mutations from './moduleAuthMutations'
// eslint-disable-next-line import/no-cycle
import actions from './moduleAuthActions'
import getters from './moduleAuthGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
