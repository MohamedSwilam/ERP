<template>
  <div>
    <b-sidebar
      id="sidebar-add-new-event"
      sidebar-class="sidebar-lg"
      :visible="isEventHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-event-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            {{ eventLocal.id ? 'Edit Visit' : 'Add Visit' }}
          </h5>
          <div>
            <feather-icon
              v-if="eventLocal.id"
              icon="TrashIcon"
              class="cursor-pointer"
              @click="$emit('remove-event'); hide();"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>
        <b-tabs
          content-class="mt-2"
          justified
        >
          <!-- Body -->
          <validation-observer
            v-if="!eventLocal.id"
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >
            <!-- Form -->
            <b-form
              class="p-2"
              @submit.prevent="handleSubmit(onSubmit)"
              @reset.prevent="resetForm"
            >
              <!-- Customer -->
              <b-form-group
                label="Customer"
                label-for="customer"
              >
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="Customer"
                  vid="customer"
                >
                  <v-select
                    v-model="selectedCustomer"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="eventLocal.customers"
                    label="text"
                    :state="errors.length > 0 ? false:null"
                    @search="browseCustomers"
                    @change="browseCustomerOrders"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Order -->
              <b-form-group
                label="Available Orders"
                label-for="customer"
              >
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="Order"
                  vid="order"
                >
                  <v-select
                    v-model="eventLocal.order"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="eventLocal.orders"
                    label="text"
                    :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Rooms -->
              <b-form-group
                v-if="eventLocal.order && eventLocal.order.package"
                label="Room"
                label-for="room"
              >
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="Room"
                  vid="room"
                >
                  <v-select
                    v-model="eventLocal.room"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="eventLocal.order.package.rooms"
                    label="name"
                    :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Date -->
              <validation-provider
                #default="validationContext"
                name="Date"
                rules="required"
              >
                <b-form-group
                  label="Date"
                  label-for="date"
                  :state="getValidationState(validationContext)"
                >
                  <flat-pickr
                    v-model="eventLocal.date"
                    class="form-control"
                    :config="{ enableTime: false, dateFormat: 'Y-m-d'}"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Start Time -->
              <validation-provider
                #default="validationContext"
                name="Start Time"
                rules="required"
              >
                <b-form-group
                  label="Start Time"
                  label-for="start-time"
                  :state="getValidationState(validationContext)"
                >
                  <b-form-timepicker
                    v-model="eventLocal.start_time"
                    locale="en"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- End Date -->
              <validation-provider
                #default="validationContext"
                name="End Time"
                rules="required"
              >
                <b-form-group
                  label="End Time"
                  label-for="end-date"
                  :state="getValidationState(validationContext)"
                >
                  <b-form-timepicker
                    v-model="eventLocal.end_time"
                    locale="en"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Status -->
              <validation-provider
                #default="validationContext"
                name="Calendar"
                rules="required"
              >
                <b-form-group
                  label="Status"
                  label-for="calendar"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="eventLocal.visit_status_id"
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
                      }
                    ]"
                    label="label"
                    :reduce="calendar => calendar.id"
                    input-id="calendar"
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

                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Form Actions -->
              <div class="d-flex mt-2">
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  class="mr-2"
                  type="submit"
                >
                  {{ eventLocal.id ? 'Update' : 'Add ' }}
                </b-button>
                <b-button
                  v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                  type="reset"
                  variant="outline-secondary"
                >
                  Reset
                </b-button>
              </div>
            </b-form>
          </validation-observer>

          <validation-observer
            v-else
            #default="{ handleSubmit }"
            ref="refUpdateFormObserver"
          >
            <!-- Form -->
            <b-form
              class="p-2"
              @submit.prevent="handleSubmit(updateVisit)"
              @reset.prevent="resetForm"
            >
              <!-- Rooms -->
              <b-form-group
                v-if="eventLocal.order && eventLocal.order.package"
                label="Room"
                label-for="room"
              >
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="Room"
                  vid="room"
                >
                  <v-select
                    v-model="eventLocal.room"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="eventLocal.order.package.rooms"
                    label="name"
                    :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Date -->
              <validation-provider
                #default="validationContext"
                name="Date"
                rules="required"
              >
                <b-form-group
                  label="Date"
                  label-for="date"
                  :state="getValidationState(validationContext)"
                >
                  <flat-pickr
                    v-model="eventLocal.date"
                    class="form-control"
                    :config="{ enableTime: false, dateFormat: 'Y-m-d'}"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Start Time -->
              <validation-provider
                #default="validationContext"
                name="Start Time"
                rules="required"
              >
                <b-form-group
                  label="Start Time"
                  label-for="start-time"
                  :state="getValidationState(validationContext)"
                >
                  <b-form-timepicker
                    v-model="eventLocal.start_time"
                    locale="en"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- End Date -->
              <validation-provider
                #default="validationContext"
                name="End Time"
                rules="required"
              >
                <b-form-group
                  label="End Time"
                  label-for="end-date"
                  :state="getValidationState(validationContext)"
                >
                  <b-form-timepicker
                    v-model="eventLocal.end_time"
                    locale="en"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Status -->
              <validation-provider
                #default="validationContext"
                name="Calendar"
                rules="required"
              >
                <b-form-group
                  label="Status"
                  label-for="calendar"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="eventLocal.visit_status_id"
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

                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Form Actions -->
              <div class="d-flex mt-2">
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  class="mr-2"
                  type="submit"
                >
                  {{ eventLocal.id ? 'Update' : 'Add ' }}
                </b-button>
                <b-button
                  v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                  type="reset"
                  variant="outline-secondary"
                >
                  Reset
                </b-button>
              </div>
            </b-form>
          </validation-observer>
        </b-tabs>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email, url } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import ToastificationContent from '@core/components/toastification/ToastificationContent'
import useCalendarEventHandler from './useCalendarEventHandler'

export default {
  components: {
    vSelect,
    flatPickr,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isEventHandlerSidebarActive',
    event: 'update:is-event-handler-sidebar-active',
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    event: {
      type: Object,
      required: true,
    },
    clearEventData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      required,
      email,
      url,
      customers: [],
      orders: [],
      selectedCustomer: null,
      loadingForm: false,
    }
  },
  watch: {
    // whenever start_date changes, this function will run
    selectedCustomer(customer) {
      this.eventLocal.selectedCustomer = customer
      this.browseCustomerOrders()
    },
    eventLocal(newVal) {
      if (newVal.id && !this.loadingForm) {
        this.viewVisit()
      }
    },
  },
  setup(props, { emit }) {
    /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:

     * We created reactive property `clearFormData` and set to null so we can get `resetEventLocal` from `useCalendarEventHandler` composition function.
     * Once we get `resetEventLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎

     ? Behind The Scene
     ? When we passed it to `useCalendarEventHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarEventHandler` composition function and it is getting correct value in second time and can work w/o any issues.
    */
    const clearFormData = ref(null)

    const {
      eventLocal,
      resetEventLocal,
      calendarOptions,

      // UI
      onSubmit,
      guestsOptions,
    } = useCalendarEventHandler(toRefs(props), clearFormData, emit)

    const {
      refFormObserver,
      getValidationState,
      resetForm,
      clearForm,
    } = formValidation(resetEventLocal, props.clearEventData)

    clearFormData.value = clearForm

    return {
      // Add New Event
      eventLocal,
      calendarOptions,
      onSubmit,
      guestsOptions,

      // Form Validation
      resetForm,
      refFormObserver,
      getValidationState,
    }
  },
  methods: {
    browseCustomers(search) {
      this.$store.dispatch('customer/browse', `?paginate=100&page=1&filter[search]=${search}`)
        .then(response => {
          this.eventLocal.customers = this.reformatCustomersData(response.data.data)
        }).catch(error => {
          console.error(error)
        })
    },

    viewVisit() {
      this.loadingForm = true
      this.$store.dispatch('visits/view', this.eventLocal.id)
        .then(response => {
          this.loadingForm = false
          console.log('Visit to update', response.data)
          this.eventLocal.order = response.data.data.bookable
          this.eventLocal.room = response.data.data.room
          this.eventLocal.date = response.data.data.date
          this.eventLocal.start_time = response.data.data.start_time
          this.eventLocal.end_time = response.data.data.end_time
          this.eventLocal.visit_status_id = response.data.data.visit_status_id
        }).catch(error => {
          this.loadingForm = false
          console.error(error)
        })
    },

    reformatCustomersData(customers) {
      return [
        ...customers.map(customer => ({ ...customer, value: customer.id, text: `#TKB${customer.id} - ${customer.name}` })),
      ]
    },

    browseCustomerOrders() {
      this.$store.dispatch('orders/browse', `?customer=${this.eventLocal.selectedCustomer.id}`)
        .then(response => {
          this.eventLocal.orders = this.reformatOrdersData(response.data.data)
        }).catch(error => {
          console.error(error)
        })
    },

    reformatOrdersData(orders) {
      return [
        ...orders.map(order => ({ ...order, value: order.id, text: `${order.package.name} - ${order.remaining_hours} remaining hours` })),
      ]
    },

    updateVisit() {
      this.$store.dispatch('visits/update', {
        id: this.eventLocal.id,
        data: {
          room_id: this.eventLocal.room.id,
          date: this.eventLocal.date,
          start_time: this.eventLocal.start_time,
          end_time: this.eventLocal.end_time,
          visit_status_id: this.eventLocal.visit_status_id,
        },
      })
        .then(response => {
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
          console.error(error)
          this.$refs.refUpdateFormObserver.setErrors(error.response.data.errors)
        })
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
