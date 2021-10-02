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
                    v-model="customers.search"
                    placeholder="Search"
                    @change="browseCustomers(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Customer Type -->
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Customer Types"
                label-for="filter_customer_types"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="UsersIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="customers.customer_type"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="customers.customer_types"
                    label="text"
                    @change="browseCustomers(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Next Follow Up From"
                label-for="from"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="CalendarIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="from"
                    v-model="customers.from"
                    type="date"
                    @change="browseCustomers(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Next Follow Up To"
                label-for="to"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="CalendarIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="to"
                    v-model="customers.to"
                    type="date"
                    @change="browseCustomers(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>
      <b-col cols="12">
        <b-overlay
          :show="customers.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="customerCard"
            title="Customers List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_customer')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/customers/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Customer</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                class="text-right"
                align-h="center"
              >
                <b-button
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  @click="exportCsv"
                >
                  <feather-icon
                    icon="FileIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Export CSV</span>
                </b-button>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="customers.data"
                  :fields="customers.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ customers.meta.current_page * customers.recordsPerPage - customers.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(id)="data">
                    #TKB{{ data.item.id }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_customer')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Customer"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/customers/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_customer')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Customer"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/customers/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_customer')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Customer"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteCustomer(data)"
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
                    v-model="customers.recordsPerPage"
                    size="sm"
                    :options="customers.paginateOptions"
                    class="w-50"
                    @change="browseCustomers(1)"
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
                  v-model="customers.meta.current_page"
                  :total-rows="customers.meta.total"
                  :per-page="customers.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseCustomers"
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
// eslint-disable-next-line import/no-extraneous-dependencies
import { ExportToCsv } from 'export-to-csv'

export default {
  name: 'BrowseCustomers',
  directives: {
    Ripple,
  },
  data: () => ({
    customers: {
      isLoading: false,
      search: '',
      from: '',
      to: '',
      customer_type: '',
      customer_types: [{ text: 'All', value: '' }],
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
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
    this.browseCustomers(this.customers.meta.current_page)
    this.browseCustomerTypes(1)
  },
  methods: {
    browseCustomerTypes() {
      this.$store.dispatch('seed/browseCustomerTypes', '').then(response => {
        this.customers.customer_types = [
          { text: 'All', value: '' },
          ...response.data.data.map(record => ({
            text: record.type,
            value: record.id,
          })),
        ]
      }).catch(error => {
        console.error(error)
      })
    },

    browseCustomers(page = 0) {
      this.customers.isLoading = true
      this.$store.dispatch('customer/browse', `?paginate=${this.customers.recordsPerPage}&page=${page}&filter[search]=${this.customers.search}&filter[customer_type]=${this.customers.customer_type}&filter[next_follow_up_from]=${this.customers.from}&filter[next_follow_up_to]=${this.customers.to}`).then(response => {
        this.customers.data = response.data.data
        this.customers.meta = response.data.meta.pagination
        this.customers.isLoading = false
      }).catch(error => {
        console.error(error)
        this.customers.isLoading = false
      })
    },

    deleteCustomer(data) {
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
          this.$store.dispatch('customer/delete', data.item.id).then(response => {
            this.customers.data = this.customers.data.filter(customer => customer.id !== data.item.id)
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

    exportCsv() {
      const csvExporter = new ExportToCsv({
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Customers List',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      })

      csvExporter.generateCsv(this.customers.data.map(customer => ({
        Id: `#TKB${customer.id}`,
        Name: customer.name,
        Email: customer.email,
        Phone: customer.phone,
        'Birth Date': customer.date_of_birth,
        'National ID': customer.national_id,
        Address: customer.address,
        'Created At': customer.created_at,
      })))
    },
  },
}
</script>

<style>
</style>
