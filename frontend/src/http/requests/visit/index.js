import axios from '../../../libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/visits${filters}`)
  },

  view(id) {
    return axios.get(`/api/visits/${id}`)
  },

  update(id, data) {
    return axios.put(`/api/visits/${id}`, data)
  },

  delete(id) {
    return axios.delete(`/api/visits/${id}`)
  },
}
