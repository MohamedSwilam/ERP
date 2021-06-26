<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="user.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="userCard"
            title="User Details"
            action-collapse
          >
            <b-row>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>ID</b>
              </b-col>
              <b-col
                cols="8"
                lg="10"
                md="10"
                sm="10"
                class="mb-1"
              >
                {{ user.data.id }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Name</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ user.data.name }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Email</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ user.data.email }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Created At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ user.data.created_at | date(true) }} - {{ user.data.created_at | time }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Updated At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ user.data.updated_at | date(true) }} - {{ user.data.updated_at | time }}
              </b-col>
            </b-row>
            <hr>
            <b-container>
              <b-row
                class="mt-1"
                align-h="center"
              >
                <b-col
                  cols="12"
                  style="text-align: center;"
                >
                  <b-button
                    v-if="can('edit_user')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/users/${user.data.id}/edit`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit User</span>
                  </b-button>
                  <b-button
                    v-if="can('destroy_user')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    class="ml-1"
                    :disabled="user.isLoadingDelete"
                    variant="danger"
                    @click="deleteUser(user.data.id)"
                  >
                    <template v-if="user.isLoadingDelete">
                      <b-spinner small />
                      Loading...
                    </template>
                    <template v-else>
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Delete User</span>
                    </template>
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'ViewUser',
  directives: {
    Ripple,
  },
  data: () => ({
    user: {
      isLoading: false,
      isLoadingDelete: false,
      data: {
        id: 3,
        name: 'Mohamed Swilam',
        email: 'mohamed_swilam@hotmail.com',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        isDeleted: false,
      },
    },
  }),
  mounted() {
    // this.viewUser()
  },
  methods: {
    viewUser() {
      this.user.isLoading = true
      this.$store.dispatch('user/view', this.$route.params.id).then(response => {
        this.user.data = response.data.data
        this.user.isLoading = false
      }).catch(error => {
        console.error(error)
        this.user.isLoading = false
      })
    },
    deleteUser(id) {
      this.$bvModal
        .msgBoxConfirm('You will not be able to retrieve this again!', {
          title: 'Are you sure?',
          size: 'sm',
          okTitle: 'Yes, Delete',
          okVariant: 'danger',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-primary',
          centered: true,
        })
        .then(confirmed => {
          if (confirmed) {
            this.user.isLoadingDelete = true
            this.$store.dispatch('user/delete', id).then(response => {
              this.user.isLoadingDelete = false
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: 'Success',
                  icon: 'CheckCircleIcon',
                  text: response.data.message,
                  variant: 'success',
                },
              },
              {
                position: 'bottom-right',
                timeout: 5000,
              })
              this.$router.push('/users')
            }).catch(error => {
              console.error(error)
              this.user.isLoadingDelete = false
            })
          }
        })
    },
  },
}
</script>

<style scoped>

</style>
