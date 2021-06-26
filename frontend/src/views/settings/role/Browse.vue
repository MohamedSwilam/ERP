<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="roles.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="roleCard"
            title="Roles List"
            action-collapse
          >
            <b-modal
              id="delete-role-modal"
              title="Are you sure?"
              ok-only
              ok-variant="danger"
              ok-title="Yes, Delete"
              modal-class="modal-danger"
              centered
              no-close-on-backdrop
            >
              <b-card-text>
                You will not be able to retrieve this again!
              </b-card-text>
            </b-modal>
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_role')"
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/roles/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Role</span>
                </b-button>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="roles.data"
                  :fields="roles.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ roles.meta.current_page * roles.recordsPerPage - roles.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(core)="data">
                    <b-badge :variant="data.item.core?'success':'danger'">
                      {{ data.item.core?'Yes':'No' }}
                    </b-badge>
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(updated_at)="data">
                    {{ data.item.updated_at | date(true) }} - {{ data.item.updated_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('browse_role')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Role"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/roles/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('edit_role')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Role"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/roles/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_role')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Role"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteRole(data)"
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
                    v-model="roles.recordsPerPage"
                    size="sm"
                    :options="roles.paginateOptions"
                    class="w-50"
                    @change="browseRoles(1)"
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
                  v-model="roles.meta.current_page"
                  :total-rows="roles.meta.total"
                  :per-page="roles.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseRoles"
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
  name: 'BrowseRoles',
  directives: {
    Ripple,
  },
  data: () => ({
    roles: {
      isLoading: false,
      filter: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'name', label: 'Name' },
        { key: 'core', label: 'Is Core?' },
        { key: 'created_at', label: 'Created At' },
        { key: 'updated_at', label: 'Updated At' },
        'Action',
      ],
      data: [
        {
          name: 'Super Admin',
          core: true,
          created_at: new Date().getTime(),
          updated_at: new Date().getTime(),
        },
        {
          name: 'Accountant',
          core: false,
          created_at: new Date().getTime(),
          updated_at: new Date().getTime(),
        },
      ],
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
    // this.browseRoles(this.roles.meta.current_page)
  },
  methods: {
    browseRoles(page) {
      this.roles.isLoading = true
      this.$store.dispatch('rolesAndPermissions/browse', `?paginate=${this.roles.recordsPerPage}&page=${page}`).then(response => {
        this.roles.data = response.data.data
        // this.roles.meta = response.data.data.meta.pagination
        this.roles.isLoading = false
      }).catch(error => {
        console.error(error)
        this.roles.isLoading = false
      })
    },

    deleteRole(data) {
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
          this.$store.dispatch('rolesAndPermissions/delete', data.item.id).then(response => {
            this.roles.data = this.roles.data.filter(role => role.id !== data.item.id)
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
.table .thead-dark th {
    background-color: #195cff !important;
    border-color: #195cff !important;
}
.dark-layout .table thead.thead-dark th, [dir] .dark-layout .table tfoot.thead-dark th {
    color: white !important;
}
</style>
