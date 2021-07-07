<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="orders.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="orderCard"
            title="Orders List"
            action-collapse
          >
            <b-modal
              id="delete-order-modal"
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
                  v-if="can('store_order')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/calendar?create=order"
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
                class="text-right"
              >
                <b-input-group style="position: relative;top: 13px;">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="orders.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseOrders"
                  />
                </b-input-group>
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
                  <template #cell(index)="data">
                    {{ orders.meta.current_page * orders.recordsPerPage - orders.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(date)="data">
                    {{ data.item.calendars[0].start | date(true) }}
                  </template>
                  <template #cell(start)="data">
                    {{ data.item.calendars[0].start | time }}
                  </template>
                  <template #cell(end)="data">
                    {{ data.item.calendars[0].end | time }}
                  </template>
                  <template #cell(customer)="data">
                    <router-link :to="`/customers/${data.item.customer.id}`">
                      {{ data.item.customer.name }}
                    </router-link>
                  </template>
                  <template #cell(created_by)="data">
                    <router-link :to="`/users/${data.item.created_by.id}`">
                      {{ data.item.created_by.name }}
                    </router-link>
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_order')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Order"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/orders/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('edit_order')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Order"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/orders/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('destroy_order')"
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

export default {
  name: 'BrowseOrders',
  directives: {
    Ripple,
  },
  data: () => ({
    orders: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'date', label: 'Date' },
        { key: 'start', label: 'Start' },
        { key: 'end', label: 'End' },
        { key: 'customer', label: 'Customer' },
        { key: 'created_by', label: 'Created By' },
        'Action',
      ],
      data: [
        {
          calendars: [
            {
              start: new Date().getTime(),
              end: new Date().getTime() + 1000 * 60 * 60,
            },
          ],
          created_by: {
            id: 3,
            name: 'Mohamed Swilam',
          },
          customer: {
            id: 1,
            name: 'Mohamed Khaled',
          },
        },
        {
          calendars: [
            {
              start: new Date().getTime(),
              end: new Date().getTime() + 1000 * 60 * 60,
            },
          ],
          created_by: {
            id: 3,
            name: 'Mohamed Swilam',
          },
          customer: {
            id: 1,
            name: 'Mohamed Khaled',
          },
        },
        {
          calendars: [
            {
              start: new Date().getTime(),
              end: new Date().getTime() + 1000 * 60 * 60,
            },
          ],
          created_by: {
            id: 3,
            name: 'Mohamed Swilam',
          },
          customer: {
            id: 1,
            name: 'Mohamed Khaled',
          },
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
    // this.browseOrders(this.orders.meta.current_page)
  },
  methods: {
    browseOrders(page = 0) {
      this.orders.isLoading = true
      this.$store.dispatch('order/browse', `?paginate=${this.orders.recordsPerPage}&page=${page}&filter[search]=${this.orders.search}`).then(response => {
        this.orders.data = response.data.data
        this.orders.meta = response.data.meta.pagination
        this.orders.isLoading = false
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
          this.$store.dispatch('order/delete', data.item.id).then(response => {
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
