import axios from '@/libs/axios'

export default {
  browse(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/roles${filters}`)
  },

  view(id) {
    return axios.get(`/api/roles/${id}`)
  },

  create(data) {
    return axios.post('/api/roles', data)
  },

  update(id, data) {
    return axios.put(`/api/roles/${id}/permissions`, data)
  },

  delete(id) {
    return axios.delete(`/api/roles/${id}`)
  },
}
