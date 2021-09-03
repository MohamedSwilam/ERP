import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/reports${filters}`)
  },

  view(id) {
    return axios.get(`/api/reports/${id}`)
  },

  create(data) {
    return axios.post('/api/reports', data)
  },

  update(id, data) {
    return axios.put(`/api/reports/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/reports/${id}`)
  },
}
