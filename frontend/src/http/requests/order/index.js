import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/orders${filters}`)
  },

  view(id) {
    return axios.get(`/api/orders/${id}`)
  },

  create(data) {
    return axios.post('/api/orders', data)
  },

  update(id, data) {
    return axios.put(`/api/orders/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/orders/${id}`)
  },

  createVisit(id, data) {
    return axios.post(`/api/orders/${id}/visits`, data)
  },

  browseComments(id, filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/orders/${id}/comments${filters}`)
  },

  createComment(id, data) {
    return axios.post(`/api/orders/${id}/comments`, data)
  },

  statistics(filters) {
    return axios.get(`/api/orders/statistics${filters}`)
  },
}
