<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="buffetOrders.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="buffetOrderCard"
            title="Buffet Orders List"
            action-collapse
          >
            <b-modal
              id="delete-buffet-order-modal"
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
                cols="12"
                align-h="center"
              >
                <b-button
                  v-if="can('create_buffet_order')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  size="sm"
                  variant="primary"
                  to="/buffet-orders/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Order</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                align-h="center"
                class="mb-2"
              >
                <b-input-group style="position: relative;top: 13px;">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="buffetOrders.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseBuffetOrders"
                  />
                </b-input-group>
              </b-col>
              <b-col
                cols="6"
                class="text-right"
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
                  :items="buffetOrders.data"
                  :fields="buffetOrders.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ buffetOrders.meta.current_page * buffetOrders.recordsPerPage - buffetOrders.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(customer)="data">
                    <router-link :to="`/customers/${data.item.customer.id}`">
                      #TKB{{ data.item.customer.id }} - {{ data.item.customer.name | capitalize }}
                    </router-link>
                  </template>
                  <template #cell(stocks)="data">
                    <router-link
                      v-for="(stock, index) in data.item.stocks"
                      :key="index"
                      :to="`/stocks/${stock.id}`"
                    >
                      <b-badge
                        :variant="'primary'"
                        class="mb-5-px"
                      >
                        {{ stock.pivot.quantity }} {{ stock.name | capitalize }}
                      </b-badge><br>
                    </router-link>
                  </template>
                  <template #cell(discount)="data">
                    {{ data.item.discount }}%
                  </template>
                  <template #cell(total)="data">
                    {{ total(data.item) }} EGP
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_buffet_order')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Order"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/buffet-orders/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_buffet_order')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Order"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/buffet-orders/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_buffet_order')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Order"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteOrder(data)"
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
                    v-model="buffetOrders.recordsPerPage"
                    size="sm"
                    :options="buffetOrders.paginateOptions"
                    class="w-50"
                    @change="browseBuffetOrders(1)"
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
                  v-model="buffetOrders.meta.current_page"
                  :total-rows="buffetOrders.meta.total"
                  :per-page="buffetOrders.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseBuffetOrders"
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
  name: 'BrowseOrders',
  directives: {
    Ripple,
  },
  data: () => ({
    buffetOrders: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'customer', label: 'Customer' },
        { key: 'stocks', label: 'Items' },
        { key: 'discount', label: 'Discount' },
        { key: 'total', label: 'Total' },
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
    this.browseBuffetOrders(this.buffetOrders.meta.current_page)
  },
  methods: {
    browseBuffetOrders(page = 0) {
      this.buffetOrders.isLoading = true
      this.$store.dispatch('buffetOrder/browse', `?paginate=${this.buffetOrders.recordsPerPage}&page=${page}&filter[search]=${this.buffetOrders.search}`).then(response => {
        this.buffetOrders.data = response.data.data
        this.buffetOrders.meta = response.data.meta.pagination
        this.buffetOrders.isLoading = false
      }).catch(error => {
        console.error(error)
        this.buffetOrders.isLoading = false
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
          this.$store.dispatch('buffetOrder/delete', data.item.id).then(response => {
            this.buffetOrders.data = this.buffetOrders.data.filter(buffetOrderDetails => buffetOrderDetails.id !== data.item.id)
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

    total(order) {
      const total = order.stocks.reduce((a, b) => +a + +(b.sale_price * b.pivot.quantity), 0)
      // eslint-disable-next-line no-mixed-operators
      return total - total * order.discount / 100
    },
    exportCsv() {
      const csvExporter = new ExportToCsv({
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Buffet Orders List',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      })

      csvExporter.generateCsv(this.buffetOrders.data.map(order => ({
        Id: order.id,
        Customer: `#TKB${order.customer.id} - ${order.customer.name}`,
        Stocks: order.stocks.map(stock => `${stock.name} x ${stock.pivot.quantity}`).join(', '),
        Discount: order.discount,
        Total: order.total,
        'Created At': new Date(order.created_at).toDateString(),
      })))
    },
  },
}
</script>

<style>
.mb-5-px {
    margin-bottom: 5px;
}
</style>
