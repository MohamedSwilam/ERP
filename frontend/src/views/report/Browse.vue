<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="reports.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="reportCard"
            title="Reports List"
            action-collapse
          >
            <b-modal
              id="delete-report-modal"
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
                  v-if="can('create_report')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/reports/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Report</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                align-h="center"
                class="text-right"
              >
                <b-input-group style="position: relative;top: 13px;">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="reports.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseReports"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="reports.data"
                  :fields="reports.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ reports.meta.current_page * reports.recordsPerPage - reports.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(customer)="data">
                    <router-link :to="`/customers/${data.item.customer.id}`">
                      {{ data.item.customer.name }}
                    </router-link>
                  </template>
                  <template #cell(start_date)="data">
                    {{ data.item.start_date | date(true) }} - {{ data.item.start_date | time }}
                  </template>
                  <template #cell(end_date)="data">
                    {{ data.item.end_date | date(true) }} - {{ data.item.end_date | time }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_report')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Report"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/reports/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_report')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Report"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/reports/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_report')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Report"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteReport(data)"
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
                    v-model="reports.recordsPerPage"
                    size="sm"
                    :options="reports.paginateOptions"
                    class="w-50"
                    @change="browseReports(1)"
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
                  v-model="reports.meta.current_page"
                  :total-rows="reports.meta.total"
                  :per-page="reports.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseReports"
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
  name: 'BrowseReports',
  directives: {
    Ripple,
  },
  data: () => ({
    reports: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'start_date', label: 'Start Date' },
        { key: 'end_date', label: 'End Date' },
        { key: 'total_messages', label: 'Total Messages' },
        { key: 'follow_up', label: 'Follow Up' },
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
    this.browseReports(this.reports.meta.current_page)
  },
  methods: {
    browseReports(page = 0) {
      this.reports.isLoading = true
      this.$store.dispatch('reports/browse', `?paginate=${this.reports.recordsPerPage}&page=${page}&filter[search]=${this.reports.search}`).then(response => {
        this.reports.data = response.data.data
        this.reports.meta = response.data.meta.pagination
        this.reports.isLoading = false
      }).catch(error => {
        console.error(error)
        this.reports.isLoading = false
      })
    },

    deleteReport(data) {
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
          this.$store.dispatch('reports/delete', data.item.id).then(response => {
            this.reports.data = this.reports.data.filter(reportDetails => reportDetails.id !== data.item.id)
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

<style lang="scss">
@import '~@/assets/scss/variables/_variables.scss';
.table .thead-dark th {
    background-color: $primary !important;
    border-color: #195cff !important;
}
.dark-layout .table thead.thead-dark th, [dir] .dark-layout .table tfoot.thead-dark th {
    color: white !important;
}
</style>
