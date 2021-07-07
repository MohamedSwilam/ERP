import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/users${filters}`)
  },

  view(id) {
    return axios.get(`/api/users/${id}`)
  },

  create(data) {
    return axios.post('/api/users', data)
  },

  update(id, data) {
    return axios.put(`/api/users/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/users/${id}`)
  },

  browseStats() {
    return axios.get('/api/statistics')
  },
}
