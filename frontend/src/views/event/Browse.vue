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
                    id="search_order"
                    v-model="events.search"
                    placeholder="Search title, host"
                    @change="browseEvents(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Room -->
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Rooms"
                label-for="filter_rooms"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BoxIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="events.room"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="events.rooms"
                    label="text"
                    @change="browseEvents(1)"
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
                    v-model="events.from"
                    type="date"
                    @change="browseEvents(1)"
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
                    v-model="events.to"
                    type="date"
                    @change="browseEvents(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>
      <b-col cols="12">
        <b-overlay
          :show="events.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="eventCard"
            title="Events List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_event')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/events/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Event</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                class="text-right"
                align-h="center"
              >
                <b-button
                  v-if="can('create_event')"
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
                  :items="events.data"
                  :fields="events.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ events.meta.current_page * events.recordsPerPage - events.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(customer)="data">
                    <router-link :to="`/customers/${data.item.customer.id}`">
                      {{ data.item.customer.name }}
                    </router-link>
                  </template>
                  <template #cell(event_date)="data">
                    {{ data.item.event_date | date(true) }} - {{ data.item.event_date | time }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_event')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Event"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/events/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_event')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Event"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/events/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_event')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Event"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteEvent(data)"
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
                    v-model="events.recordsPerPage"
                    size="sm"
                    :options="events.paginateOptions"
                    class="w-50"
                    @change="browseEvents(1)"
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
                  v-model="events.meta.current_page"
                  :total-rows="events.meta.total"
                  :per-page="events.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseEvents"
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
  name: 'BrowseEvents',
  directives: {
    Ripple,
  },
  data: () => ({
    events: {
      isLoading: false,
      search: '',
      from: '',
      to: '',
      room: '',
      rooms: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'title', label: 'Title' },
        { key: 'host', label: 'Host' },
        { key: 'event_type', label: 'Type' },
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
    this.browseEvents(this.events.meta.current_page)
    this.browseRooms()
  },
  methods: {
    browseRooms() {
      this.$store.dispatch('seed/browseRooms', '').then(response => {
        this.events.rooms = [
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
    browseEvents(page = 0) {
      this.events.isLoading = true
      this.$store.dispatch('events/browse', `?paginate=${this.events.recordsPerPage}&page=${page}&filter[search]=${this.events.search}&filter[room]=${this.events.room}&filter[from]=${this.events.from}&filter[to]=${this.events.to}`).then(response => {
        this.events.data = response.data.data
        this.events.meta = response.data.meta.pagination
        this.events.isLoading = false
      }).catch(error => {
        console.error(error)
        this.events.isLoading = false
      })
    },

    deleteEvent(data) {
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
          this.$store.dispatch('events/delete', data.item.id).then(response => {
            this.events.data = this.events.data.filter(eventDetails => eventDetails.id !== data.item.id)
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
        title: 'Events List',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      })

      csvExporter.generateCsv(this.events.data.map(event => ({
        Id: event.id,
        Title: event.title,
        Host: event.host,
        Type: event.event_type,
        Instructor: event.instructor,
        'Number Of Attendance': event.num_of_attendance,
        Budget: event.budget,
        Expenses: event.expenses,
        Revenue: event.revenue,
        Room: event.room ? event.room.name : event.other_room,
        'Created At': event.created_at,
      })))
    },
  },
}
</script>

<style>
</style>
