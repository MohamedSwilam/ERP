<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="role.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="roleCard"
            title="Role Details"
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
                {{ role.data.id }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>is Core?</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <b-badge :variant=" role.data.core?'success':'danger'">
                  {{ role.data.core?'Yes':'No' }}
                </b-badge>
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
                {{ role.data.name }}
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
                {{ role.data.created_at | date(true) }} - {{ role.data.created_at | time }}
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
                {{ role.data.updated_at | date(true) }} - {{ role.data.updated_at | time }}
              </b-col>
              <b-col
                cols="12"
                class="mb-1"
              >
                <b>Permissions</b>
              </b-col>
              <b-col
                cols="12"
                class="mb-1"
              >
                <b-badge
                  v-for="(permission, index) in role.data.permissions"
                  :key="index"
                  class="ml-1 mb-1"
                  variant="primary"
                >
                  {{ permission.name | capitalize }}
                </b-badge>
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
                    v-if="can('update_role')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/roles/${role.data.id}/edit`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit Role</span>
                  </b-button>
                  <b-button
                    v-if="can('delete_role')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    class="ml-1"
                    :disabled="role.isLoadingDelete"
                    variant="danger"
                    @click="deleteRole(role.data.id)"
                  >
                    <template v-if="role.isLoadingDelete">
                      <b-spinner small />
                      Loading...
                    </template>
                    <template v-else>
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Delete Role</span>
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
  name: 'ViewRole',
  directives: {
    Ripple,
  },
  data: () => ({
    role: {
      isLoading: false,
      isLoadingDelete: false,
      data: {
        id: 1,
        name: 'Super Admin',
        is_core: true,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        isDeleted: false,
        permissions: [],
      },
    },
  }),
  mounted() {
    this.viewRole()
  },
  methods: {
    viewRole() {
      this.role.isLoading = true
      this.$store.dispatch('rolesAndPermissions/view', this.$route.params.id).then(response => {
        this.role.data = response.data.data
        this.role.isLoading = false
      }).catch(error => {
        console.error(error)
        this.role.isLoading = false
      })
    },
    deleteRole(id) {
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
            this.role.isLoadingDelete = true
            this.$store.dispatch('rolesAndPermissions/delete', id).then(response => {
              this.role.isLoadingDelete = false
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
              this.$router.push('/roles')
            }).catch(error => {
              console.error(error)
              this.role.isLoadingDelete = false
            })
          }
        })
    },
  },
}
</script>

<style scoped>

</style>
