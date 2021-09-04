import httpResource from '@/http/requests/visit/index'

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
    browse({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.browse(payload)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },

    /**
     *
     * @param store
     * id: number
     * @return {Promise<unknown>}
     * @param id
     */
    view({ dispatch }, id) {
      return new Promise((resolve, reject) => {
        httpResource.view(id)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },

    /**
     *
     * @param store
     * id: number
     * @return {Promise<unknown>}
     * @param payload
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
     * @param payload
     * @return {Promise<unknown>}
     */
    delete({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.delete(payload)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },
  },
}
