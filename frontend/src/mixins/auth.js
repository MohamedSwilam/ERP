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
      return store.state.auth.user.permissions
        .filter(userPermission => userPermission.name === permission).length > 0
      // return !!permission
    },
  },
}
