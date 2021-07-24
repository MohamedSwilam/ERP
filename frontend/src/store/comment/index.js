import httpResource from '@/http/requests/comment/index'

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
    update({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.update(payload.id, payload.data)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },

    /**
     *
     * @param store
     * @param id
     * @return {Promise<unknown>}
     */
    delete({ dispatch }, id) {
      return new Promise((resolve, reject) => {
        httpResource.delete(id)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },
  },
}
