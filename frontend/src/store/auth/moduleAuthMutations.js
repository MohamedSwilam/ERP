import axios from '../../libs/axios'

export default {
  SET_BEARER(state, payload) {
    state.accessToken = `${payload.token_type} ${payload.access_token}`
    state.expiresIn = payload.expires_in
    state.refreshToken = payload.refresh_token
    axios.defaults.headers.common['Authorization'] = `${payload.token_type} ${payload.access_token}`
  },
  UPDATE_USER_INFO(state, payload) {
    state.user = payload
  },
  LOGOUT(state) {
    state.accessToken = null
    state.expires_in = null
    state.refresh_token = null
    state.user = null
  },
}
