import axios from '../../../libs/axios'

export default {
  browse(filters) {
    return axios.get(`/api/buffet-orders${filters}`)
  },

  view(id) {
    return axios.get(`/api/buffet-orders/${id}`)
  },

  create(data) {
    return axios.post('/api/buffet-orders', data)
  },

  update(id, data) {
    return axios.put(`/api/buffet-orders/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/buffet-orders/${id}`)
  },
}
