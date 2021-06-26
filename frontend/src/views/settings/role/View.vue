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
                    v-if="can('edit_role')"
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
        permissions: [{
          id: 1, name: 'browse_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 1 },
        }, {
          id: 2, name: 'view_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 2 },
        }, {
          id: 3, name: 'assign_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 3 },
        }, {
          id: 4, name: 'remove_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 4 },
        }, {
          id: 5, name: 'create_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 5 },
        }, {
          id: 6, name: 'edit_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 6 },
        }, {
          id: 7, name: 'delete_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 7 },
        }, {
          id: 8, name: 'browse_permission', group: 'permission', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 8 },
        }, {
          id: 9, name: 'grant_permission', group: 'permission', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 9 },
        }, {
          id: 10, name: 'revoke_permission', group: 'permission', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 10 },
        }, {
          id: 16, name: 'browse_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 16 },
        }, {
          id: 17, name: 'view_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 17 },
        }, {
          id: 18, name: 'store_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 18 },
        }, {
          id: 19, name: 'edit_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 19 },
        }, {
          id: 20, name: 'destroy_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z', pivot: { role_id: 1, permission_id: 20 },
        }, {
          id: 54, name: 'browse_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z', pivot: { role_id: 1, permission_id: 54 },
        }, {
          id: 55, name: 'create_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z', pivot: { role_id: 1, permission_id: 55 },
        }, {
          id: 56, name: 'view_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z', pivot: { role_id: 1, permission_id: 56 },
        }, {
          id: 57, name: 'edit_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z', pivot: { role_id: 1, permission_id: 57 },
        }, {
          id: 58, name: 'delete_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z', pivot: { role_id: 1, permission_id: 58 },
        }],
      },
    },
  }),
  mounted() {
    // this.viewRole()
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
