<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="events.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="eventsCard"
            title="Event Details"
            action-collapse
          >
            <b-row v-if="events.data">
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>ID</b>
              </b-col>
              <b-col
                cols="8"
                lg="10"
                md="10"
                sm="10"
                class="mb-1"
              >
                {{ events.data.id }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Title</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.title }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Event Type</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.event_type }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Instructor</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.instructor }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Number Of Attendance</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.num_of_attendance }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Budget</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.budget }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Expenses</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.expenses }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Revenue</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.revenue }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Host</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.host }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Room</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.room ? events.data.room.name : '-' }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Marketing Plan</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <span v-if="events.data.marketing_plan">
                  <a :href="events.data.marketing_plan" target="_blank">Click Here To View Marketing Plan</a>
                </span>
                <span v-else>-</span>
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Created At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.created_at | date(true) }} - {{ events.data.created_at | time }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Updated At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.updated_at | date(true) }} - {{ events.data.updated_at | time }}
              </b-col>
            </b-row>
            <hr>
            <b-container>
              <b-row
                class="mt-1"
                align-h="center"
              >
                <b-col
                  cols="12"
                  style="text-align: center;"
                >
                  <b-button
                    v-if="can('update_event')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/events/${$route.params.id}/edit`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit Event</span>
                  </b-button>
                  <b-button
                    v-if="can('delete_event')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    class="ml-1"
                    :disabled="events.isLoadingDelete"
                    variant="danger"
                    @click="deleteEvent(events.data.id)"
                  >
                    <template v-if="events.isLoadingDelete">
                      <b-spinner small />
                      Loading...
                    </template>
                    <template v-else>
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Delete Event</span>
                    </template>
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
    <b-row v-if="can('browse_visit')">
      <b-col cols="12">
        <b-overlay
          :show="visits.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="visitsCard"
            title="Visits List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              />
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
                    v-model="visits.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseVisits"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="visits.data"
                  :fields="visits.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ visits.meta.current_page * visits.recordsPerPage - visits.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(visit_status)="data">
                    <b-badge
                      v-if="data.item.visit_status"
                      :variant="data.item.visit_status.color"
                      class="mb-5-px"
                    >
                      {{ data.item.visit_status.name }}
                    </b-badge>
                  </template>
                  <template #cell(room)="data">
                    {{ data.item.room ? data.item.room.name : '-' }}
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
                    v-model="visits.recordsPerPage"
                    size="sm"
                    :options="visits.paginateOptions"
                    class="w-50"
                    @change="browseVisits(1)"
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
                  v-model="visits.meta.current_page"
                  :total-rows="visits.meta.total"
                  :per-page="visits.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseVisits"
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
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'ViewEvent',
  directives: {
    Ripple,
  },
  data: () => ({
    events: {
      isLoading: false,
      isLoadingDelete: false,
      data: null,
    },
    visits: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'date', label: 'Date' },
        { key: 'start_time', label: 'Start Time' },
        { key: 'end_time', label: 'End Time' },
        { key: 'room', label: 'Room' },
        { key: 'visit_status', label: 'Status' },
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
    this.viewEvent()
    if (this.can('browse_visit')) {
      this.browseVisits()
    }
  },
  methods: {
    viewEvent() {
      this.events.isLoading = true
      this.$store.dispatch('events/view', this.$route.params.id).then(response => {
        this.events.data = response.data.data
        this.events.isLoading = false
      }).catch(error => {
        console.error(error)
        this.events.isLoading = false
      })
    },
    deleteEvent(id) {
      this.$bvModal
        .msgBoxConfirm('You will not be able to retrieve this again!', {
          title: 'Are you sure?',
          size: 'sm',
          okTitle: 'Yes, Delete',
          okVariant: 'danger',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-primary',
          centered: true,
        })
        .then(confirmed => {
          if (confirmed) {
            this.events.isLoadingDelete = true
            this.$store.dispatch('events/delete', id).then(response => {
              this.events.isLoadingDelete = false
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
              this.$router.push('/events')
            }).catch(error => {
              console.error(error)
              this.events.isLoadingDelete = false
            })
          }
        })
    },

    browseVisits(page = 0) {
      this.visits.isLoading = true
      this.$store.dispatch('visits/browse', `?paginate=${this.visits.recordsPerPage}&page=${page}&filter[search]=${this.visits.search}&event=${this.$route.params.id}`).then(response => {
        this.visits.data = response.data.data
        this.visits.meta = response.data.meta.pagination
        this.visits.isLoading = false
      }).catch(error => {
        console.error(error)
        this.visits.isLoading = false
      })
    },
  },
}
</script>

<style>
.mb-5-px {
    margin-bottom: 5px;
}
</style>
