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
            <b-row>
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
                <b>Customer</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link :to="`/customers/${events.data.customer.id}`">
                  {{ events.data.customer.name }}
                </router-link>
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
                {{ events.data.type }}
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
                <b>Target Segment</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ events.data.target_segment }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Created By</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link :to="`/users/${events.data.created_by.id}`">
                  {{ events.data.created_by.name }}
                </router-link>
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
                    v-if="can('update_events')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/calendar?edit=3`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit Event</span>
                  </b-button>
                  <b-button
                    v-if="can('delete_events')"
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
      data: {
        id: 1,
        title: 'Event Title A',
        type: 'Type A',
        instructor: 'Instructor Name',
        budget: 300,
        num_of_attendance: 5,
        expenses: 0,
        revenue: 0,
        target_segment: 'Target Segment',
        customer: {
          id: 2,
          name: 'Mohamed Swilam',
        },
        created_by: {
          id: 3,
          name: 'Mohamed Swilam',
        },
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        isDeleted: false,
      },
    },
  }),
  mounted() {
    // this.viewEvent()
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
              this.$router.push('/eventss')
            }).catch(error => {
              console.error(error)
              this.events.isLoadingDelete = false
            })
          }
        })
    },
  },
}
</script>

<style scoped>

</style>
