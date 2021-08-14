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
      console.log(permission)
      return store.state.auth.user.allPermissions
        .filter(userPermission => userPermission.name === permission).length > 0
      // return !!permission
    },
  },
}
