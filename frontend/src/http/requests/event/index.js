import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/events${filters}`)
  },

  view(id) {
    return axios.get(`/api/events/${id}`)
  },

  create(data) {
    return axios.post('/api/events', data)
  },

  update(id, data) {
    return axios.put(`/api/events/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/events/${id}`)
  },
}
