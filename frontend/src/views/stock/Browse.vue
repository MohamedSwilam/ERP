<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="stocks.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="stockCard"
            title="Stocks List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_stock')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/stocks/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Stock</span>
                </b-button>
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
                      v-model="stocks.sort.by"
                      :options="stocks.sort.options"
                      class="w-75"
                      @change="browseStocks(1)"
                    >
                      <template v-slot:first>
                        <option value="">
                          -- none --
                        </option>
                      </template>
                    </b-form-select>
                    <b-form-select
                      v-model="stocks.sort.desc"
                      size="sm"
                      :disabled="!stocks.sort.by"
                      class="w-25"
                      @change="browseStocks(1)"
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
                align-h="center"
              >
                <b-form-group
                  label="Search"
                  label-size="sm"
                  label-for="search"
                  class="mb-0"
                >
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <feather-icon icon="SearchIcon" />
                    </b-input-group-prepend>
                    <b-form-input
                      id="search"
                      v-model="stocks.search"
                      size="sm"
                      placeholder="Search name"
                      @change="browseStocks"
                    />
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="stocks.data"
                  :fields="stocks.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ stocks.meta.current_page * stocks.recordsPerPage - stocks.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_stock')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Stock"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/stocks/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_stock')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Stock"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/stocks/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_stock')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Stock"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteStock(data)"
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
                    v-model="stocks.recordsPerPage"
                    size="sm"
                    :options="stocks.paginateOptions"
                    class="w-50"
                    @change="browseStocks(1)"
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
                  v-model="stocks.meta.current_page"
                  :total-rows="stocks.meta.total"
                  :per-page="stocks.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseStocks"
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
  name: 'BrowseStocks',
  directives: {
    Ripple,
  },
  data: () => ({
    stocks: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      sort: {
        by: '',
        desc: false,
        options: [
          { text: 'Name', value: 'name' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Price Per Piece', value: 'price_per_piece' },
          { text: 'Sale Price', value: 'sale_price' },
          { text: 'Payment Type', value: 'payment_type' },
          { text: 'Total', value: 'total' },
          { text: 'Paid', value: 'paid' },
          { text: 'Created At', value: 'created_at' },
        ],
      },
      fields: [
        { key: 'index', label: '#' },
        { key: 'name', label: 'Name' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'sale_price', label: 'Sale Price' },
        { key: 'total', label: 'Total' },
        { key: 'paid', label: 'Paid' },
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
    this.browseStocks(this.stocks.meta.current_page)
  },
  methods: {
    browseStocks(page = 0) {
      this.stocks.isLoading = true
      this.$store.dispatch('stock/browse', `?paginate=${this.stocks.recordsPerPage}&page=${page}&filter[search]=${this.stocks.search}&sort=${this.stocks.sort.desc ? '-' : ''}${this.stocks.sort.by}`).then(response => {
        this.stocks.data = response.data.data
        this.stocks.meta = response.data.meta.pagination
        this.stocks.isLoading = false
      }).catch(error => {
        console.error(error)
        this.stocks.isLoading = false
      })
    },

    deleteStock(data) {
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
          this.$store.dispatch('stock/delete', data.item.id).then(response => {
            this.stocks.data = this.stocks.data.filter(stockDetails => stockDetails.id !== data.item.id)
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
        title: 'Stocks List',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      })
      csvExporter.generateCsv(this.stocks.data.map((stock, index) => ({
        '#': index + 1,
        Name: stock.name,
        Quantity: stock.quantity,
        'Price Per Piece': stock.price_per_piece,
        'Sale Price': stock.sale_price,
        'Payment Type': stock.payment_type,
        Total: stock.total,
        Paid: stock.paid,
        'Created At': new Date(stock.created_at).toDateString(),
      })))
    },
  },
}
</script>

<style>
</style>
