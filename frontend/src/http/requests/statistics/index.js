import axios from '../../../libs/axios'

export default {
  /**
   *
   * @return {Promise<AxiosResponse<any>>}
   * @param query
   */
  browse(query) {
    return axios.get(`/api/statistics${query}`)
  },
}
