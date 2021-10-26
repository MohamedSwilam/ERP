import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/employers${filters}`)
  },

  view(id) {
    return axios.get(`/api/employers/${id}`)
  },

  create(data) {
    return axios.post('/api/employers', data)
  },

  update(id, data) {
    return axios.put(`/api/employers/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/employers/${id}`)
  },
}
