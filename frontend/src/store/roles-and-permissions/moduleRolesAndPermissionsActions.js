import role from '@/http/requests/role/index'
import permission from '@/http/requests/permission/index'

export default {
  browse({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      role.browse(payload).then(response => {
        resolve(response)
      }).catch(error => {
        dispatch('app/handleError', { reject, error }, { root: true })
      })
    })
  },

  view({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      role.view(id).then(response => {
        resolve(response)
      }).catch(error => {
        dispatch('app/handleError', { reject, error }, { root: true })
      })
    })
  },

  create({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      role.create(payload).then(response => {
        resolve(response)
      }).catch(error => {
        dispatch('app/handleError', { reject, error }, { root: true })
      })
    })
  },

  update({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      role.update(payload.id, payload.data).then(response => {
        resolve(response)
      }).catch(error => {
        dispatch('app/handleError', { reject, error }, { root: true })
      })
    })
  },

  delete({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      role.delete(id).then(response => {
        resolve(response)
      }).catch(error => {
        dispatch('app/handleError', { reject, error }, { root: true })
      })
    })
  },

  getPermissions({ dispatch }) {
    return new Promise((resolve, reject) => {
      permission.browse().then(response => {
        resolve(response)
      }).catch(error => {
        dispatch('app/handleError', { reject, error }, { root: true })
      })
    })
  },
}
