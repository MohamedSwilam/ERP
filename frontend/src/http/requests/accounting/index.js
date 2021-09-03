import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/accounting${filters}`)
  },

  view(id) {
    return axios.get(`/api/accounting/${id}`)
  },

  create(data) {
    return axios.post('/api/accounting', data)
  },

  update(id, data) {
    return axios.put(`/api/accounting/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/accounting/${id}`)
  },
}
