import axios from '../../../libs/axios'

export default {
  browseCustomerTypes(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/customer-types${filters}`)
  },
  browsePackageTypes(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/package-types${filters}`)
  },
  browseRooms(filters) {
    // filters=?paginate=5&sortAsc=id
    return axios.get(`/api/rooms${filters}`)
  },
}
