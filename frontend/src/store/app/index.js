import { $themeBreakpoints } from '@themeConfig'
// eslint-disable-next-line import/no-cycle
import router from '@/router'

export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    shallShowOverlay: false,
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
  },
  actions: {
  // eslint-disable-next-line no-unused-vars
    async handleError({ commit }, payload) {
      switch (payload.error.response.status) {
        case 401:
          await router.push('/error-403')
          break
        case 403:
          await router.push('/error-403')
          break
        case 404:
          await router.push('/error-404')
          break
        default:
          payload.reject(payload.error)
      }
    },
  },
}
