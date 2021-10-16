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
              lg="4"
              md="4"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Search Order"
                label-for="search_order"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search_order"
                    v-model="orders.search"
                    placeholder="Search Order"
                    @change="browseOrders(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col
              lg="4"
              md="4"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Search Customer"
                label-for="search_customer"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search_customer"
                    v-model="orders.search_customer"
                    placeholder="Search customer id, name, phone"
                    @change="browseOrders(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Package Type -->
            <b-col
              lg="4"
              md="4"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Package Types"
                label-for="filter_package_types"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BoxIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="orders.package_type"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="orders.package_types"
                    label="text"
                    @change="browseOrders(1)"
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
                label="From"
                label-for="from"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="ClockIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="from"
                    v-model="orders.from"
                    type="date"
                    @change="browseOrders(1)"
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
                label="To"
                label-for="to"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="ClockIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="to"
                    v-model="orders.to"
                    type="date"
                    @change="browseOrders(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>
      <b-col cols-12>
        <b-row>
          <b-col
            lg="3"
            md="3"
            sm="6"
            xs="6"
          >
            <b-overlay
              :show="statistics.isLoading"
              rounded="sm"
            >
              <statistic-card-horizontal
                icon="ShoppingBagIcon"
                :statistic="statistics.data.count"
                statistic-title="Orders"
              />
            </b-overlay>
          </b-col>
          <b-col
            lg="3"
            md="3"
            sm="6"
            xs="6"
          >
            <b-overlay
              :show="statistics.isLoading"
              rounded="sm"
            >
              <statistic-card-horizontal
                icon="DollarSignIcon"
                :statistic="statistics.data.totalSales"
                statistic-title="Total Sales"
              />
            </b-overlay>
          </b-col>
          <b-col
            lg="3"
            md="3"
            sm="6"
            xs="6"
          >
            <b-overlay
              :show="statistics.isLoading"
              rounded="sm"
            >
              <statistic-card-horizontal
                icon="DollarSignIcon"
                :statistic="statistics.data.totalPaid"
                statistic-title="Total Paid"
              />
            </b-overlay>
          </b-col>
          <b-col
            lg="3"
            md="3"
            sm="6"
            xs="6"
          >
            <b-overlay
              :show="statistics.isLoading"
              rounded="sm"
            >
              <statistic-card-horizontal
                icon="DollarSignIcon"
                :statistic="statistics.data.totalSales - statistics.data.totalPaid"
                statistic-title="Total Remaining"
              />
            </b-overlay>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12">
        <b-overlay
          :show="orders.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="orderCard"
            title="Operations"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                class="mb-2"
              >
                <b-form-group
                  label="Sort"
                  label-size="sm"
                  label-for="sortBySelect"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-select
                      id="sortBySelect"
                      v-model="orders.sort.by"
                      :options="orders.sort.options"
                      class="w-75"
                      @change="browseOrders(1)"
                    >
                      <template v-slot:first>
                        <option value="">
                          -- none --
                        </option>
                      </template>
                    </b-form-select>
                    <b-form-select
                      v-model="orders.sort.desc"
                      size="sm"
                      :disabled="!orders.sort.by"
                      class="w-25"
                      @change="browseOrders(1)"
                    >
                      <option :value="false">
                        Asc
                      </option>
                      <option :value="true">
                        Desc
                      </option>
                    </b-form-select>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col
                cols="6"
                class="pt-2 text-right"
                align-h="center"
              >
                <b-button
                  v-ripple.400="'rgba(255,255,255,0.15)'"
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
                  :items="orders.data"
                  :fields="orders.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(id)="data">
                    <router-link :to="`/orders/${data.item.id}`">
                      {{ data.item.id }}
                    </router-link>
                  </template>
                  <template #cell(customers)="data">
                    <router-link
                      v-for="(customer, index) in data.item.customers"
                      :key="index"
                      :to="`/customers/${customer.id}`"
                    >
                      <b-badge
                        :variant="'primary'"
                        class="mb-5-px"
                      >
                        #TKB{{ customer.id }} - {{ customer.name | capitalize }}
                      </b-badge>
                    </router-link>
                  </template>
                  <template #cell(package)="data">
                    <router-link :to="`/packages/${data.item.package.id}`">
                      {{ data.item.package.name }}
                    </router-link>
                    <br> ({{ data.item.package.package_type.name }})
                  </template>
                  <template #cell(price)="data">
                    {{ data.item.package.price }}
                  </template>
                  <template #cell(discount)="data">
                    {{ data.item.discount }}%
                  </template>
                  <template #cell(remaining)="data">
                    {{ data.item.total - data.item.paid }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }}
                    <br>
                    {{ data.item.created_at | time }}
                  </template>
                  <template #cell(last_visit)="data">
                    {{ data.item.last_visit.length > 0 ? data.item.last_visit[0].date : 'No Visits' }}
                  </template>
                  <template #cell(last_comment)="data">
                    <span
                      v-if="data.item.last_comment.length > 0"
                    >
                      {{ data.item.last_comment[0].created_at | date(true) }}
                      <br>
                      {{ data.item.last_comment[0].created_at | time }}
                    </span>
                    <span v-else>
                      No Comments
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
                    v-model="orders.recordsPerPage"
                    size="sm"
                    :options="orders.paginateOptions"
                    class="w-50"
                    @change="browseOrders(1)"
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
                  v-model="orders.meta.current_page"
                  :total-rows="orders.meta.total"
                  :per-page="orders.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseOrders"
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
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'

export default {
  name: 'BrowseOrders',
  components: {
    StatisticCardHorizontal,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    statistics: {
      isLoading: false,
      data: {
        count: 0,
        totalSales: 0,
        totalPaid: 0,
      },
    },
    orders: {
      isLoading: false,
      search: '',
      search_customer: '',
      from: '',
      to: '',
      package_type: '',
      package_types: [{ text: 'All', value: '' }],
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      sort: {
        by: '',
        desc: false,
        options: [
          { text: 'Total Hours', value: 'total_hours' },
          { text: 'Remaining Hours', value: 'remaining_hours' },
          { text: 'Expiration Date', value: 'expires_at' },
          { text: 'Price', value: 'total' },
        ],
      },
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'customers', label: 'Customer(s)' },
        { key: 'package', label: 'Package' },
        { key: 'price', label: 'Price' },
        { key: 'discount', label: 'Discount' },
        { key: 'total', label: 'Total' },
        { key: 'remaining', label: 'Remaining' },
        { key: 'total_hours', label: 'Total Hours' },
        { key: 'remaining_hours', label: 'Remaining Hours' },
        { key: 'seller', label: 'Sales' },
        { key: 'created_at', label: 'Created At' },
        { key: 'last_visit', label: 'Last Visit' },
        { key: 'last_comment', label: 'Last Comment' },
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
    this.browseOrders(this.orders.meta.current_page)
    this.browsePackageTypes()
  },
  methods: {
    browseStatistics() {
      this.statistics.isLoading = true
      this.$store.dispatch('orders/statistics', `?paginate=${this.orders.recordsPerPage}&page=${this.orders.meta.current_page}&filter[customer_filter]=${this.orders.search}&filter[customer_filter]=${this.orders.search_customer}&filter[package_type]=${this.orders.package_type}&filter[from]=${this.orders.from}&filter[to]=${this.orders.to}&sort=${this.orders.sort.desc ? '-' : ''}${this.orders.sort.by}&lastVisit=true&lastComment=true`)
        .then(response => {
          this.statistics.data = response.data.data
          this.statistics.isLoading = false
        }).catch(error => {
          console.error(error)
          this.statistics.isLoading = false
        })
    },
    browsePackageTypes() {
      this.$store.dispatch('seed/browsePackageTypes', '').then(response => {
        this.orders.package_types = [
          { text: 'All', value: '' },
          ...response.data.data.map(record => ({
            text: record.name,
            value: record.id,
          })),
        ]
      }).catch(error => {
        console.error(error)
      })
    },
    browseOrders(page = 0) {
      this.orders.isLoading = true
      this.$store
        .dispatch('orders/browse', `?paginate=${this.orders.recordsPerPage}&page=${page}&filter[customer_filter]=${this.orders.search}&filter[customer_filter]=${this.orders.search_customer}&filter[package_type]=${this.orders.package_type}&filter[from]=${this.orders.from}&filter[to]=${this.orders.to}&sort=${this.orders.sort.desc ? '-' : ''}${this.orders.sort.by}&lastVisit=true&lastComment=true`)
        .then(response => {
          this.orders.data = response.data.data
          this.orders.meta = response.data.meta.pagination
          this.orders.isLoading = false
          this.browseStatistics()
        }).catch(error => {
          console.error(error)
          this.orders.isLoading = false
        })
    },

    deleteOrder(data) {
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
          this.$store.dispatch('orders/delete', data.item.id).then(response => {
            this.orders.data = this.orders.data.filter(orderDetails => orderDetails.id !== data.item.id)
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
        title: 'Operations List',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      })

      csvExporter.generateCsv(this.orders.data.map(order => ({
        Id: order.id,
        Customers: order.customers.map(customer => customer.name).join(', '),
        Package: order.package.name,
        price: order.total,
        'Total Hours': order.total_hours,
        'Remaining Hours': order.remaining_hours,
        Seller: order.seller,
        'Created At': order.created_at,
        'Last Visit': order.last_visit.length > 0 ? order.last_visit[0].date : 'No Visits',
        'Last Comment': order.last_comment.length > 0 ? order.last_comment[0].created_at : 'No Comments',
      })))
    },
  },
}
</script>

<style lang="scss">
.mb-5-px {
    margin-bottom: 5px;
}
</style>
