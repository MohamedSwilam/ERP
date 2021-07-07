import user from '@/http/requests/user/index'

export default {
  browse({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      user.browse(payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          dispatch('app/handleError', { reject, error }, { root: true })
        })
    })
  },

  view({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      user.view(id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          dispatch('app/handleError', { reject, error }, { root: true })
        })
    })
  },

  create({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      user.create(payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          dispatch('app/handleError', { reject, error }, { root: true })
        })
    })
  },

  update({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      user.update(payload.id, payload.data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          dispatch('app/handleError', { reject, error }, { root: true })
        })
    })
  },

  delete({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      user.delete(id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          dispatch('app/handleError', { reject, error }, { root: true })
        })
    })
  },
}
