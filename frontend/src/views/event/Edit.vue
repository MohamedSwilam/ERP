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
              ref="editEvent"
              title="Edit Event"
              action-collapse
            >
              <validation-observer
                ref="editEventForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editEvent)">
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
                        label-for="event_date"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Title"
                          vid="event_date"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="event_date"
                              v-model="event.form.event_date"
                              type="datetime-local"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event date"
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

                    <!-- Duration -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Duration"
                        label-for="duration"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Duration"
                          vid="duration"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="duration"
                              v-model="event.form.duration"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Event duration"
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

export default {
  name: 'EditEvent',
  directives: {
    Ripple,
  },
  data: () => ({
    event: {
      isCardLoading: false,
      isLoading: false,
      event_types: [],
      form: {
        title: '',
        event_date: '',
        host: '',
        duration: '',
        event_type: '',
        instructor: '',
        num_of_attendance: 0,
        budget: 0,
        expenses: 0,
        revenue: 0,
      },
    },
  }),
  mounted() {
    this.viewEvent()
  },
  methods: {
    viewEvent() {
      this.event.isCardLoading = true
      this.$store.dispatch('events/view', this.$route.params.id).then(response => {
        this.event.form = response.data.data
        // eslint-disable-next-line prefer-destructuring
        this.event.form.event_date = new Date(`${new Date(response.data.data.event_date).toString().split('GMT')[0]} UTC`).toISOString().split('.')[0]
        this.event.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.event.isCardLoading = false
      })
    },
    editEvent() {
      this.event.isLoading = true
      this.$store.dispatch('events/update', {
        id: this.$route.params.id,
        data: this.event.form,
      }).then(response => {
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
        this.$refs.editEventForm.setErrors(error.response.data.errors)
        this.event.isLoading = false
      })
    },
    reset() {
      this.viewEvent()
    },
  },
}
</script>

<style>
#event-form ul,
#event-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
