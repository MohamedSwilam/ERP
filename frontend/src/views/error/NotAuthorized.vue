<template>
  <div class="misc-wrapper">
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <!-- Brand logo-->
        <b-link class="brand-logo">
          <img
            alt="Tktbosh Logo"
            :src="require('@/assets/images/logo/logo.png')"
          >
        </b-link>
        <!-- /Brand logo-->
        <br>
        <h2 class="mb-1">
          You are not authorized! 🔐
        </h2>
        <p class="mb-2">
          You don’t have permission to access this page. Go Home!!
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          to="/"
        >Back to Home</b-button>
        <b-img
          fluid
          :src="imgUrl"
          alt="Not authorized page"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import store from '@/store/index'

export default {
  components: {
    BLink, BImg, BButton,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/not-authorized.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  mounted() {
    if (this.$route.params.auth) {
      store.commit('auth/LOGOUT')
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-misc.scss';

.misc-wrapper .brand-logo {
  position: relative;
  top: unset;
  left: unset;
}

.misc-wrapper .brand-logo img {
  max-width: 200px;
}
</style>
