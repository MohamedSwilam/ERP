import axios from '@/libs/axios'

export default {
  login(payload) {
    return axios.post('/oauth/token', payload)
  },

  getUserData() {
    return axios.get('/api/personal-data')
  },
}
