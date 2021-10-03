<template>
  <section id="event-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="event.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createEvent"
              title="Create Event"
              action-collapse
            >
              <validation-observer
                ref="createEventForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createEvent)">
                  <b-row>
                    <!-- Title -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Title"
                        label-for="title"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Title"
                          vid="title"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClipboardIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="title"
                              v-model="event.form.title"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event title"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Date -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Event Date"
                        label-for="date"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Event date"
                          vid="date"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="date"
                              v-model="event.form.date"
                              type="date"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event date"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Start Time -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Start Time"
                        label-for="start_time"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Start time"
                          vid="start_time"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-form-timepicker
                              id="start_time"
                              v-model="event.form.start_time"
                              :state="errors.length > 0 ? false:null"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- End Time -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="End Time"
                        label-for="end_time"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="End time"
                          vid="end_time"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-form-timepicker
                              id="end_time"
                              v-model="event.form.end_time"
                              :state="errors.length > 0 ? false:null"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Host -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Host"
                        label-for="host"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Host"
                          vid="host"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="host"
                              v-model="event.form.host"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event host"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- type -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Type"
                        label-for="type"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Event type"
                          vid="type"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClipboardIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="type"
                              v-model="event.form.event_type"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event type"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Instructor -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Instructor"
                        label-for="instructor"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Instructor"
                          vid="instructor"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="instructor"
                              v-model="event.form.instructor"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event instructor"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Number of attendance -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Number of attendance"
                        label-for="num_of_attendance"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Number of attendance"
                          vid="num_of_attendance"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UsersIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="num_of_attendance"
                              v-model.number="event.form.num_of_attendance"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Number of attendance"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Budget -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Budget"
                        label-for="budget"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Budget"
                          vid="budget"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="budget"
                              v-model.number="event.form.budget"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Budget"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Expenses -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Expenses"
                        label-for="expenses"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Expenses"
                          vid="expenses"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="expenses"
                              v-model.number="event.form.expenses"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Expenses"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Revenue -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Revenue"
                        label-for="revenue"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Revenue"
                          vid="revenue"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="revenue"
                              v-model.number="event.form.revenue"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Revenue"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Rooms -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Room"
                        label-for="room_id"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Rooms"
                          vid="room_id"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="BoxIcon" />
                            </b-input-group-prepend>
                            <b-select
                              v-if="!event.other_room"
                              id="room_id"
                              v-model="event.form.room_id"
                              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                              :options="event.rooms"
                              label="text"
                              :state="errors.length > 0 ? false:null"
                            />
                            <b-form-input
                              v-else
                              id="other_room"
                              v-model.number="event.form.other_room"
                              :state="errors.length > 0 ? false:null"
                              placeholder="room"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                          <b-form-checkbox
                            v-model="event.other_room"
                            class="mt-1"
                            :value="true"
                            @change="event.form.room_id = null"
                          >
                            Other
                          </b-form-checkbox>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Rooms -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Room"
                        label-for="room_id"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Rooms"
                          vid="room_id"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <v-select
                              v-model="event.form.visit_status_id"
                              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                              :options="[
                                {
                                  id: 1,
                                  label: 'Booking',
                                  color: 'primary'
                                },
                                {
                                  id: 2,
                                  label: 'Completed',
                                  color: 'success'
                                },
                                {
                                  id: 3,
                                  label: 'Canceled',
                                  color: 'danger'
                                }
                              ]"
                              label="label"
                              :reduce="calendar => calendar.id"
                              input-id="calendar"
                              style="width: 100%;"
                            >
                              <template #option="{ color, label }">
                                <div
                                  class="rounded-circle d-inline-block mr-50"
                                  :class="`bg-${color}`"
                                  style="height:10px;width:10px"
                                />
                                <span> {{ label }}</span>
                              </template>

                              <template #selected-option="{ color, label }">
                                <div
                                  class="rounded-circle d-inline-block mr-50"
                                  :class="`bg-${color}`"
                                  style="height:10px;width:10px"
                                />
                                <span> {{ label }}</span>
                              </template>
                            </v-select>
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Marketing Plan File -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Marketing Plan"
                        label-for="marketing_plan"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Marketing Plan"
                          vid="marketing_plan"
                        >
                          <!-- Styled -->
                          <b-form-file
                            v-model="event.form.marketing_plan"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- submit and reset -->
                    <b-col cols="12">
                      <b-container>
                        <b-row
                          class="mt-1"
                          align-h="center"
                        >
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            type="submit"
                            :disabled="event.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="event.isLoading">
                              <b-spinner small />
                              Loading...
                            </template>
                            <template v-else>
                              <feather-icon
                                icon="SaveIcon"
                                class="mr-50"
                              />
                              <span class="align-middle">Submit</span>
                            </template>
                          </b-button>
                          <b-button
                            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                            type="reset"
                            variant="warning"
                            @click="reset"
                          >
                            <feather-icon
                              icon="RefreshCcwIcon"
                              class="mr-50"
                            />
                            <span class="align-middle">Reset</span>
                          </b-button>
                        </b-row>
                      </b-container>
                    </b-col>
                  </b-row>
                </b-form>
              </validation-observer>
            </b-card-actions>
          </b-overlay>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import vSelect from 'vue-select'

export default {
  name: 'CreateEvent',
  components: {
    vSelect,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    event: {
      isCardLoading: false,
      isLoading: false,
      other_room: false,
      event_types: [],
      rooms: [],
      form: {
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        host: '',
        event_type: '',
        instructor: '',
        num_of_attendance: 0,
        budget: 0,
        expenses: 0,
        revenue: 0,
        room_id: null,
        visit_status_id: 1,
        other_room: '',
        marketing_plan: null,
      },
    },
  }),
  mounted() {
    this.browseRooms()
  },
  methods: {
    browseRooms() {
      this.event.isCardLoading = true
      this.$store.dispatch('seed/browseRooms', '')
        .then(response => {
          this.event.rooms = [
            { value: null, text: 'Select a room' },
            ...response.data.data.map(room => ({
              value: room.id,
              text: room.name,
            })),
          ]
          this.event.isCardLoading = false
        }).catch(error => {
          console.error(error)
          this.event.isCardLoading = false
        })
    },
    createEvent() {
      this.event.isLoading = true
      const formData = new FormData()
      Object.keys(this.event.form).forEach(key => {
        formData.append(key, this.event.form[key])
      })
      this.$store.dispatch('events/create', formData).then(response => {
        this.event.isLoading = false
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
        this.$router.push(`/events/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.createEventForm.setErrors(error.response.data.errors)
        this.event.isLoading = false
      })
    },
    reset() {
      this.event.form.title = ''
      this.event.form.date = ''
      this.event.form.start_time = ''
      this.event.form.end_time = ''
      this.event.form.host = ''
      this.event.form.event_type = ''
      this.event.form.instructor = ''
      this.event.form.num_of_attendance = 0
      this.event.form.budget = 0
      this.event.form.expenses = 0
      this.event.form.revenue = 0
      this.event.form.room_id = null
      this.event.form.visit_status_id = 1
      this.event.form.other_room = ''
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
#event-form ul,
#event-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
