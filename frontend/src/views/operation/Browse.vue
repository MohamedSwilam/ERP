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
            title="Operations"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  size="sm"
                  variant="primary"
                  to="/orders/create"
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
                align-h="center"
                class="text-right mb-2"
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
                  </template>
                  <template #cell(price)="data">
                    {{ data.item.package.price }}
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
        { key: 'id', label: 'ID' },
        { key: 'customers', label: 'Customer(s)' },
        { key: 'package', label: 'Package' },
        { key: 'price', label: 'Price' },
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
  },
  methods: {
    browseOrders(page = 0) {
      this.orders.isLoading = true
      this.$store.dispatch('orders/browse', `?paginate=${this.orders.recordsPerPage}&page=${page}&filter[search]=${this.orders.search}&lastVisit=true&lastComment=true`).then(response => {
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
.mb-5-px {
    margin-bottom: 5px;
}
</style>
