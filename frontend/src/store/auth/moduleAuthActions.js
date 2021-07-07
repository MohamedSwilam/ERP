import router from '@/router'
import auth from '@/http/requests/auth/index'

export default {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth.login(payload).then(response => {
        // Set bearer token in axios
        commit('SET_BEARER', response.data)

        auth.getUserData().then(async userData => {
          commit('UPDATE_USER_INFO', userData.data.data)

          // Navigate user to home page
          await router.push(router.currentRoute.query.to ? router.currentRoute.query.to : '/')

          resolve(response)
        })
      }).catch(error => {
        reject(error)
      })
    })
  },

  async logout({ commit }) {
    commit('LOGOUT')
    await router.push('/login')
  },
}
