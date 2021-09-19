import axios from '@/libs/axios'

export default {
  browse(filters) {
    return axios.get(`/api/stocks${filters}`)
  },

  view(id) {
    return axios.get(`/api/stocks/${id}`)
  },

  create(data) {
    return axios.post('/api/stocks', data)
  },

  update(id, data) {
    return axios.put(`/api/stocks/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/stocks/${id}`)
  },
}
