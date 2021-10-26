import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/suppliers${filters}`)
  },

  view(id) {
    return axios.get(`/api/suppliers/${id}`)
  },

  create(data) {
    return axios.post('/api/suppliers', data)
  },

  update(id, data) {
    return axios.put(`/api/suppliers/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/suppliers/${id}`)
  },
}
