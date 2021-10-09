<template>
  <section>
    <b-row class="mt-2 mb-3">
      <b-col cols="12">
        <h1 class="font-weight-bolder">
          Welcome <span class="text-primary">{{ fullName }},</span>
        </h1>
      </b-col>
    </b-row>
    <b-row v-if="can('browse_statistics') && can('browse_home')">
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="UsersIcon"
          :statistic="statistics.data ? statistics.data.monthly_registered_users : 0"
          statistic-title="Month Customers"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="Edit3Icon"
          :statistic="statistics.data ? statistics.data.monthly_orders : 0"
          statistic-title="Month Orders"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="ShoppingBagIcon"
          :statistic="statistics.data ? statistics.data.monthly_buffet_orders.count : 0"
          statistic-title="Month Buffet Orders"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="DollarSignIcon"
          :statistic="statistics.data ? statistics.data.monthly_package_sales.total : 0"
          statistic-title="Month Package Sales"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="DollarSignIcon"
          :statistic="statistics.data ? statistics.data.monthly_package_sales.paid : 0"
          statistic-title="Month Paid Sales"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="DollarSignIcon"
          :statistic="statistics.data ? statistics.data.monthly_package_sales.total - statistics.data.monthly_package_sales.paid : 0"
          statistic-title="Month Remaining Sales"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="DollarSignIcon"
          :statistic="statistics.data ? statistics.data.monthly_buffet_orders.amount : 0"
          statistic-title="Month Buffet Sales"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="CalendarIcon"
          :statistic="statistics.data ? statistics.data.monthly_visits.orders : 0"
          statistic-title="Month Order Visits"
        />
      </b-col>
      <b-col
        lg="4"
        md="4"
        sm="6"
      >
        <statistic-card-horizontal
          icon="CalendarIcon"
          :statistic="statistics.data ? statistics.data.monthly_visits.events : 0"
          statistic-title="Month Event Visits"
        />
      </b-col>
    </b-row>
    <b-row v-if="can('browse_home')">
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
    <b-row v-if="can('browse_home')">
      <b-col cols="12">
        <div class="app-calendar overflow-hidden border">
          <full-calendar
            ref="refCalendar"
            :options="calendarOptions"
            class="full-calendar"
          />
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import FullCalendar from '@fullcalendar/vue'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import store from '@/store'
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    FullCalendar,
    StatisticCardHorizontal,
  },
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
    calendarOptions: {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
      initialView: 'timeGridWeek',
      headerToolbar: {
        start: 'sidebarToggle, prev,next, title',
        end: 'timeGridWeek,timeGridDay,listMonth',
      },
      events: [],
    },
    statistics: {
      isLoading: false,
      data: null,
    },
  }),
  computed: {
    fullName() {
      return JSON.parse(localStorage.getItem('vuex')).auth.user ? `${JSON.parse(localStorage.getItem('vuex')).auth.user.name}` : ''
    },
  },
  mounted() {
    if (this.can('browse_home')) {
      this.browseCustomers(this.customers.meta.current_page)
      this.fetchEvents()
      if (this.can('browse_statistics')) {
        this.browseStatistics()
      }
    }
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
    browseStatistics() {
      this.statistics.isLoading = true
      this.$store.dispatch('statistic/browse', '').then(response => {
        this.statistics.data = response.data.data
        this.statistics.isLoading = false
      }).catch(error => {
        console.error(error)
        this.statistics.isLoading = false
      })
    },
    fetchEvents() {
      store
        .dispatch('visits/browse', '')
        .then(response => {
          this.calendarOptions.events = response.data.data.map(visit => ({
            allDay: false,
            start: new Date(`${visit.date} ${visit.start_time}`),
            startStr: new Date(`${visit.date} ${visit.start_time}`).toISOString(),
            end: new Date(`${visit.date} ${visit.end_time}`),
            endStr: new Date(`${visit.date} ${visit.end_time}`).toISOString(),
            timeZone: 'local',
            id: visit.id,
            url: '',
            title: `${visit.isEvent ? visit.bookable.title : visit.room.name}`,
            extendedProps: {
              calendar: visit.visit_status.name,
            },
            room_id: visit?.room?.id,

            date: visit.date,
            start_time: visit.start_time,
            end_time: visit.end_time,
            visit_status_id: visit.visit_status_id,

            order: visit.bookable,
            room: visit.room,
            rooms: visit.bookable ? visit?.bookable?.package?.rooms : [],
            customers: visit.bookable ? visit?.bookable?.customers : [],
          }))
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
@import "~@core/scss/vue/apps/calendar.scss";
.app-calendar {
    padding: 40px;
}
.fc-timegrid-event .fc-event-time,
.fc-v-event .fc-event-title-container{
    color: white;
    font-weight: bold;
    font-size: 14px;
}
</style>
