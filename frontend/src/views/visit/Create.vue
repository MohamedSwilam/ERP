<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="visit.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createVisit"
              title="Create Visit"
              action-collapse
            >
              <validation-observer
                ref="createVisitForm"
                v-slot="{ handleSubmit }"
              >
                <!-- Form -->
                <b-form @submit.prevent="handleSubmit(createVisit)">
                  <b-row>
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
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
                            :options="visit.customers"
                            label="text"
                            :state="errors.length > 0 ? false:null"
                            @search="browseCustomers"
                            @change="browseCustomerOrders"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <!-- Order -->
                      <b-form-group
                        label="Available Orders"
                        label-for="order"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Order"
                          vid="order"
                        >
                          <v-select
                            v-model="visit.order"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="visit.orders"
                            label="text"
                            :state="errors.length > 0 ? false:null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <!-- Rooms -->
                      <b-form-group
                        v-if="visit.order && visit.order.package"
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
                            v-model="visit.room"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="visit.order.package.rooms"
                            label="name"
                            :state="errors.length > 0 ? false:null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <!-- Date -->
                      <b-form-group
                        label="Date"
                        label-for="date"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Date"
                          rules="required"
                          vid="date"
                        >
                          <flat-pickr
                            id="date"
                            v-model="visit.form.date"
                            class="form-control"
                            :config="{ enableTime: false, dateFormat: 'Y-m-d'}"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <!-- Start Time -->
                      <b-form-group
                        label="Start Time"
                        label-for="start_time"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Start Time"
                          rules="required"
                          vid="start_time"
                        >
                          <b-form-timepicker
                            id="start_time"
                            v-model="visit.form.start_time"
                            locale="en"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <!-- End Time -->
                      <b-form-group
                        label="End Time"
                        label-for="end_time"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="End Time"
                          rules="required"
                          vid="end_time"
                        >
                          <b-form-timepicker
                            id="end_time"
                            v-model="visit.form.end_time"
                            locale="en"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <!-- Status -->
                      <b-form-group
                        label="Status"
                        label-for="visit_status_id"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Status"
                          rules="required"
                          vid="visit_status_id"
                        >
                          <v-select
                            id="visit_status_id"
                            v-model="visit.form.visit_status_id"
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
                            :disabled="visit.isLoading"
                            variant="primary"
                            class="mr-1"
                            @click="visit.createNew = false"
                          >
                            <template v-if="visit.isLoading">
                              <b-spinner small />
                              Loading...
                            </template>
                            <template v-else>
                              <feather-icon
                                icon="SaveIcon"
                                class="mr-50"
                              />
                              <span class="align-middle">Save</span>
                            </template>
                          </b-button>
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            type="submit"
                            :disabled="visit.isLoading"
                            variant="primary"
                            class="mr-1"
                            @click="visit.createNew = true"
                          >
                            <template v-if="visit.isLoading">
                              <b-spinner small />
                              Loading...
                            </template>
                            <template v-else>
                              <feather-icon
                                icon="SaveIcon"
                                class="mr-50"
                              />
                              <span class="align-middle">Save & Create New</span>
                            </template>
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
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'Create',
  components: {
    vSelect,
    flatPickr,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    selectedCustomer: null,
    visit: {
      isLoading: false,
      selectedCustomer: null,
      customers: [],
      orders: [],
      order: null,
      room: null,
      form: {
        room_id: null,
        date: null,
        start_time: null,
        end_time: null,
        visit_status_id: 1,
      },
    },
  }),
  watch: {
    selectedCustomer(customer) {
      this.visit.selectedCustomer = customer
      this.browseCustomerOrders()
    },
  },
  methods: {
    browseCustomers(search) {
      this.$store.dispatch('customer/browse', `?paginate=100&page=1&filter[search]=${search}`)
        .then(response => {
          this.visit.customers = this.reformatCustomersData(response.data.data)
        }).catch(error => {
          console.error(error)
        })
    },

    reformatCustomersData(customers) {
      return [
        ...customers.map(customer => ({ ...customer, value: customer.id, text: `#TKB${customer.id} - ${customer.name}` })),
      ]
    },

    browseCustomerOrders() {
      this.$store.dispatch('orders/browse', `?customer=${this.visit.selectedCustomer.id}&paginate=10000&page=1`)
        .then(response => {
          this.visit.orders = this.reformatOrdersData(response.data.data)
        }).catch(error => {
          console.error(error)
        })
    },

    reformatOrdersData(orders) {
      return [
        ...orders.map(order => ({ ...order, value: order.id, text: `${order.package.name} - ${order.remaining_hours} remaining hours` })),
      ]
    },

    createVisit() {
      this.visit.isLoading = true
      this.visit.form.room_id = this.visit.room.id
      this.$store.dispatch('orders/createVisit', {
        id: this.visit.order.id,
        data: this.visit.form,
      }).then(response => {
        this.visit.isLoading = false
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
        if (!this.visit.createNew) this.$router.push(`/calendar`)
        else {
          this.visit.form.start_time = null
          this.visit.form.end_time = null
        }
      }).catch(error => {
        this.$refs.createVisitForm.setErrors(error.response.data.errors)
        this.visit.isLoading = false
      })
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
