import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/customers${filters}`)
  },

  view(id) {
    return axios.get(`/api/customers/${id}`)
  },

  create(data) {
    return axios.post('/api/customers', data)
  },

  update(id, data) {
    return axios.put(`/api/customers/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/customers/${id}`)
  },

  browseComments(customerId, filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/customers/${customerId}/comments${filters}`)
  },

  createComment(customerId, data) {
    return axios.post(`/api/customers/${customerId}/comments`, data)
  },
}
