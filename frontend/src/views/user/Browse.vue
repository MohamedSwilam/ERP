<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-card-actions
          ref="filterCard"
          title="Filters"
          no-actions
        >
          <b-row>
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Search"
                label-for="search"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="users.search"
                    placeholder="Search name, email"
                    @change="browseUsers"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Roles -->
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Roles"
                label-for="filter_roles"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="ShieldIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="users.role"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="users.roles"
                    label="text"
                    @change="browseUsers(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>
      <b-col cols="12">
        <b-overlay
          :show="users.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="userCard"
            title="Users List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_user')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/users/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create User</span>
                </b-button>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="users.data"
                  :fields="users.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ users.meta.current_page * users.recordsPerPage - users.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_user')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View User"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/users/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_user')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit User"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/users/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_user')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete User"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteUser(data)"
                      >
                        <feather-icon icon="TrashIcon" />
                      </b-button>
                    </span>
                  </template>
                </b-table>
              </b-col>
              <b-col
                md="2"
                sm="4"
                xs="4"
                class="my-1"
              >
                <b-form-group class="mb-0">
                  <label class="d-inline-block text-sm-left mr-50">Per page</label>
                  <b-form-select
                    id="perPageSelect"
                    v-model="users.recordsPerPage"
                    size="sm"
                    :options="users.paginateOptions"
                    class="w-50"
                    @change="browseUsers(1)"
                  />
                </b-form-group>
              </b-col>
              <b-col
                md="10"
                sm="8"
                xs="8"
                class="my-1"
              >
                <b-pagination
                  v-model="users.meta.current_page"
                  :total-rows="users.meta.total"
                  :per-page="users.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseUsers"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
              </b-col>
            </b-row>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'BrowseUsers',
  directives: {
    Ripple,
  },
  data: () => ({
    users: {
      isLoading: false,
      search: '',
      role: '',
      roles: [
        { text: 'All', value: '' },
      ],
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'created_at', label: 'Created At' },
        'Action',
      ],
      data: [],
      meta: {
        count: 0,
        current_page: 1,
        links: {},
        per_page: 0,
        total: 0,
        total_pages: 0,
      },
    },
  }),
  mounted() {
    this.browseUsers(this.users.meta.current_page)
    this.browseRoles()
  },
  methods: {
    browseRoles() {
      this.$store.dispatch('rolesAndPermissions/browse', '').then(response => {
        this.users.roles = [
          { text: 'All', value: '' },
          ...response.data.data.map(role => ({
            text: role.name,
            value: role.id,
          })),
        ]
      }).catch(error => {
        console.error(error)
      })
    },
    browseUsers(page = 0) {
      this.users.isLoading = true
      this.$store.dispatch('user/browse', `?paginate=${this.users.recordsPerPage}&page=${page}&filter[search]=${this.users.search}&filter[role]=${this.users.role}`).then(response => {
        this.users.data = response.data.data
        this.users.meta = response.data.meta.pagination
        this.users.isLoading = false
      }).catch(error => {
        console.error(error)
        this.users.isLoading = false
      })
    },

    deleteUser(data) {
      this.$bvModal.msgBoxConfirm('You will not be able to retrieve this again!', {
        title: 'Are you sure?',
        size: 'sm',
        okTitle: 'Yes, Delete!',
        okVariant: 'danger',
        cancelTitle: 'Cancel',
        cancelVariant: 'outline-primary',
        centered: true,
      }).then(confirmed => {
        if (confirmed) {
          this.$store.dispatch('user/delete', data.item.id).then(response => {
            this.users.data = this.users.data.filter(user => user.id !== data.item.id)
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
          }).catch(error => {
            console.log(error)
          })
        }
      })
    },
  },
}
</script>

<style>
</style>
