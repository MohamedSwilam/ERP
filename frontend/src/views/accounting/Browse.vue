<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="accounting.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="accountingCard"
            title="Accounting List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_accounting')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/accounting/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Accounting</span>
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
                    v-model="accounting.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseAccounting"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="accounting.data"
                  :fields="accounting.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ accounting.meta.current_page * accounting.recordsPerPage - accounting.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(Profit)="data">
                    {{ data.item.revenue - ( data.item.utilities + data.item.monthly_rent + data.item.advertising_budget + data.item.fixes + data.item.employees_data + data.item.suppliers_data ) }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('update_accounting')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Accounting"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/accounting/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_accounting')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Accounting"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteAccounting(data)"
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
                    v-model="accounting.recordsPerPage"
                    size="sm"
                    :options="accounting.paginateOptions"
                    class="w-50"
                    @change="browseAccounting(1)"
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
                  v-model="accounting.meta.current_page"
                  :total-rows="accounting.meta.total"
                  :per-page="accounting.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseAccounting"
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
  name: 'BrowseAccounting',
  directives: {
    Ripple,
  },
  data: () => ({
    accounting: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'utilities', label: 'Utilities' },
        { key: 'monthly_rent', label: 'Monthly Rent' },
        { key: 'advertising_budget', label: 'Advertising Budget' },
        { key: 'fixes', label: 'Fixes' },
        { key: 'employees_data', label: 'Employees Data' },
        { key: 'suppliers_data', label: 'Suppliers Data' },
        { key: 'revenue', label: 'Revenue' },
        'Profit',
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
    this.browseAccounting(this.accounting.meta.current_page)
  },
  methods: {
    browseAccounting(page = 0) {
      this.accounting.isLoading = true
      this.$store.dispatch('accounting/browse', `?paginate=${this.accounting.recordsPerPage}&page=${page}&filter[search]=${this.accounting.search}`).then(response => {
        this.accounting.data = response.data.data
        this.accounting.meta = response.data.meta.pagination
        this.accounting.isLoading = false
      }).catch(error => {
        console.error(error)
        this.accounting.isLoading = false
      })
    },

    deleteAccounting(data) {
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
          this.$store.dispatch('accounting/delete', data.item.id).then(response => {
            this.accounting.data = this.accounting.data.filter(accountingDetails => accountingDetails.id !== data.item.id)
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
