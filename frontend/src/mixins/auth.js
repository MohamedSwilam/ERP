// eslint-disable-next-line
import store from '@/store/index'

export default {
  methods: {
    /**
     * Check if the authenticated user can perform an action
     *
     * @param permission
     * @returns {boolean}
     */
    can(permission) {
      // let result = false
      // store.state.auth.user.allPermissions.forEach(userPermission => {
      //   if (userPermission.name === permission) result = true
      // })
      // return result
      return !!permission
    },
  },
}
