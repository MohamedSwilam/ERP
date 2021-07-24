import axios from '../../../libs/axios'

export default {
  /**
     *
     * @param id
     * @param data
     * @return {Promise<AxiosResponse<any>>}
     */
  update(id, data) {
    return axios.put(`/api/comments/${id}`, data)
  },

  /**
     *
     * @param id
     * @return {Promise<AxiosResponse<any>>}
     */
  delete(id) {
    return axios.delete(`/api/comments/${id}`)
  },
}
