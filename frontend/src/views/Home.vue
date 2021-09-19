<template>
  <section>
    <b-row>
      <b-col
        lg="6"
        md="12"
        sm="12"
      >
        <b-overlay
          :show="customers.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="customerCard"
            title="Today's Birthdate Customers 🎂🎉"
            action-collapse
          >
            <b-row>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="customers.data.filter(customer => new Date(customer.date_of_birth).getDate() === new Date().getDate() && new Date(customer.date_of_birth).getMonth() === new Date().getMonth())"
                  :fields="customers.fields"
                  :head-variant="'dark'"
                >
                  <template #cell(name)="data">
                    #TKB{{ data.item.id }} <br>
                    {{ data.item.name }} <br>
                    {{ data.item.email }}
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
                    </span>
                  </template>
                </b-table>
              </b-col>
              <b-col
                md="4"
                sm="6"
                xs="6"
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
                md="8"
                sm="6"
                xs="6"
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
      <b-col
        lg="6"
        md="12"
        sm="12"
      >
        <b-overlay
          :show="customers.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="customerCard"
            title="Today's Follow Up ⏰"
            action-collapse
          >
            <b-row>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="customers.data.filter(customer => new Date(customer.next_follow_up).getDate() === new Date().getDate() && new Date(customer.next_follow_up).getMonth() === new Date().getMonth() && new Date(customer.next_follow_up).getUTCFullYear() === new Date().getUTCFullYear())"
                  :fields="customers.fields"
                  :head-variant="'dark'"
                >
                  <template #cell(name)="data">
                    #TKB{{ data.item.id }} <br>
                    {{ data.item.name }} <br>
                    {{ data.item.email }}
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
                    </span>
                  </template>
                </b-table>
              </b-col>
              <b-col
                md="4"
                sm="6"
                xs="6"
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
                md="8"
                sm="6"
                xs="6"
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
import Ripple from 'vue-ripple-directive'

export default {
  directives: {
    Ripple,
  },
  data: () => ({
    customers: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'name', label: 'Name' },
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
  },
  methods: {
    browseCustomers(page = 0) {
      this.customers.isLoading = true
      this.$store.dispatch('customer/browse', `?paginate=${this.customers.recordsPerPage}&page=${page}&filter[search]=${new Date().toISOString().split('T')[0]}`).then(response => {
        this.customers.data = response.data.data
        this.customers.meta = response.data.meta.pagination
        this.customers.isLoading = false
      }).catch(error => {
        console.error(error)
        this.customers.isLoading = false
      })
    },
  },
}
</script>

<style>

</style>
