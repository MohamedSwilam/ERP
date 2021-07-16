import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/packages${filters}`)
  },

  view(id) {
    return axios.get(`/api/packages/${id}`)
  },

  create(data) {
    return axios.post('/api/packages', data)
  },

  update(id, data) {
    return axios.put(`/api/packages/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/packages/${id}`)
  },
}
