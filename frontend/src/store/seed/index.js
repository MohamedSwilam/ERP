import httpResource from '@/http/requests/seed/index'

export default {
  namespaced: true,

  state: {},

  getters: {},

  mutations: {},

  actions: {
    /**
     *
     * @param store
     * @param payload
     * @return {Promise<unknown>}
     */
    browseCustomerTypes({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.browseCustomerTypes(payload)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },

    /**
     *
     * @param store
     * @param payload
     * @return {Promise<unknown>}
     */
    browseRooms({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.browseRooms(payload)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },
  },
}
