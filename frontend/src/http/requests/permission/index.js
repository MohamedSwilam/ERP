import axios from '@/libs/axios'

export default {
  browse() {
    return axios.get('/api/permissions')
  },
}
