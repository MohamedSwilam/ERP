import httpResource from '@/http/requests/customer/index'

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
     * @param id
     * @return {Promise<unknown>}
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
     * @param payload
     * @return {Promise<unknown>}
     */
    create({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.create(payload)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },

    /**
     *
     * @param store
     * @param payload {{
     *     id: number,
     *     data: Record<string, any>
     * }}
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

    /**
     *
     * @param store
     * @param payload {{
     *  id: number,
     *  filters: string
     * }}
     * @return {Promise<unknown>}
     */
    browseComments({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.browseComments(payload.id, payload.filters)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },

    /**
       *
       * @param store
       * @param payload {{
       *  id: number,
       *  data: {..}
       * }}
       * @return {Promise<unknown>}
       */
    createComment({ dispatch }, payload) {
      return new Promise((resolve, reject) => {
        httpResource.createComment(payload.id, payload.data)
          .then(response => resolve(response))
          .catch(error => dispatch('app/handleError', { reject, error }, { root: true }))
      })
    },
  },
}
