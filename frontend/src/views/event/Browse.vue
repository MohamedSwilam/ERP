<template>
  <section>
    <b-row>
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
            <b-modal
              id="delete-event-modal"
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
                  v-if="can('create_event')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/calendar?create=event"
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
                align-h="center"
                class="text-right"
              >
                <b-input-group style="position: relative;top: 13px;">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="events.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseEvents"
                  />
                </b-input-group>
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
                  <template #cell(created_by)="data">
                    <router-link :to="`/users/${data.item.created_by.id}`">
                      {{ data.item.created_by.name }}
                    </router-link>
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
                        :to="`/calendar?edit=1`"
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

export default {
  name: 'BrowseEvents',
  directives: {
    Ripple,
  },
  data: () => ({
    events: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'title', label: 'Title' },
        { key: 'customer', label: 'Customer' },
        { key: 'type', label: 'Type' },
        { key: 'created_by', label: 'Created By' },
        { key: 'created_at', label: 'Created At' },
        'Action',
      ],
      data: [
        {
          title: 'Event Title A',
          type: 'Type A',
          instructor: 'Instructor Name',
          budget: 'Budget',
          created_by: {
            id: 3,
            name: 'Mohamed Swilam',
          },
          customer: {
            id: 1,
            name: 'Mohamed Khaled',
          },
          created_at: new Date().getTime(),
        },
        {
          title: 'Event Title B',
          type: 'Type B',
          instructor: 'Instructor Name',
          budget: 'Budget',
          created_by: {
            id: 3,
            name: 'Mohamed Swilam',
          },
          customer: {
            id: 1,
            name: 'Mohamed Khaled',
          },
          created_at: new Date().getTime(),
        },
        {
          title: 'Event Title C',
          type: 'Type C',
          instructor: 'Instructor Name',
          budget: 'Budget',
          created_by: {
            id: 3,
            name: 'Mohamed Swilam',
          },
          customer: {
            id: 1,
            name: 'Mohamed Khaled',
          },
          created_at: new Date().getTime(),
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
    // this.browseEvents(this.events.meta.current_page)
  },
  methods: {
    browseEvents(page = 0) {
      this.events.isLoading = true
      this.$store.dispatch('event/browse', `?paginate=${this.events.recordsPerPage}&page=${page}&filter[search]=${this.events.search}`).then(response => {
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
          this.$store.dispatch('event/delete', data.item.id).then(response => {
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
