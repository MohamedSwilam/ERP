<template>
  <section id="customer-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="customer.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="editCustomer"
              title="Edit Customer"
              action-collapse
            >
              <validation-observer
                ref="editCustomerForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editCustomer)">
                  <b-row>
                    <!-- Customer Type -->
                    <b-col cols="12">
                      <b-form-group
                        label="Customer Type"
                        label-for="customer_type_id"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Customer Type"
                          vid="customer_type_id"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UsersIcon" />
                            </b-input-group-prepend>
                            <b-form-select
                              v-model="customer.form.customer_type_id"
                              :options="customer.customer_types"
                              :state="errors.length > 0 ? false:null"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Name -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Name"
                        label-for="name"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Name"
                          vid="name"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UsersIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="customer.form.name"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Name"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Email -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Email"
                        label-for="email"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="email"
                          name="Email"
                          vid="email"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="MailIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="code"
                              v-model="customer.form.email"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Email"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Phone -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Phone"
                        label-for="phone"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Phone"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="PhoneIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="customer.form.phone"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Phone"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Birth Date -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Birth Date"
                        label-for="date_of_birth"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Birth Date"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="CalendarIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="customer.form.date_of_birth"
                              type="date"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Birth Date"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- National ID -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="National ID"
                        label-for="national_id"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="National ID"
                          rules="length:14"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="CreditCardIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="customer.form.national_id"
                              :state="errors.length > 0 ? false:null"
                              placeholder="National ID"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Address -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Address"
                        label-for="address"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Address"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="HomeIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="customer.form.address"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Address"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Last Follow Up -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Last Follow Up"
                        label-for="last_follow_up"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Last Follow Up"
                          rules=""
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UserCheckIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="customer.form.last_follow_up"
                              :state="errors.length > 0 ? false:null"
                              type="datetime-local"
                              placeholder="Last follow up"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Next Follow Up -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Next Follow Up"
                        label-for="next_follow_up"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Next Follow Up"
                          rules=""
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UserCheckIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="customer.form.next_follow_up"
                              :state="errors.length > 0 ? false:null"
                              type="datetime-local"
                              placeholder="Next follow up"
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
                            :disabled="customer.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="customer.isLoading">
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
  name: 'EditCustomer',
  directives: {
    Ripple,
  },
  data: () => ({
    customer: {
      isCardLoading: false,
      isLoading: false,
      customer_types: [],
      form: {
        name: '',
        email: '',
        phone: '',
        national_id: '',
        date_of_birth: '',
        address: '',
        customer_type_id: null,
        last_follow_up: null,
        next_follow_up: null,
      },
    },
  }),
  mounted() {
    this.browseCustomerTypes()
  },
  methods: {
    browseCustomerTypes() {
      this.customer.isCardLoading = true
      this.$store.dispatch('seed/browseCustomerTypes', '')
        .then(response => {
          this.customer.customer_types = this.reformatCustomerTypesData(response.data.data)
          this.viewCustomer()
        }).catch(error => {
          console.error(error)
          this.customer.isCardLoading = false
        })
    },

    reformatCustomerTypesData(customerTypes) {
      const reformatted = [{ value: null, text: 'Select customer type' }]
      customerTypes.forEach(customerType => {
        reformatted.push({ value: customerType.id, text: customerType.type })
      })
      return reformatted
    },

    viewCustomer() {
      this.customer.isCardLoading = true
      this.$store.dispatch('customer/view', this.$route.params.id).then(response => {
        this.customer.form = {
          ...response.data.data,
          last_follow_up:
          response.data.data.last_follow_up
            ? new Date(`${new Date(response.data.data.last_follow_up).toString().split('GMT')[0]} UTC`).toISOString().split('.')[0]
            : '',
          next_follow_up:
          response.data.data.next_follow_up
            ? new Date(`${new Date(response.data.data.next_follow_up).toString().split('GMT')[0]} UTC`).toISOString().split('.')[0]
            : '',
        }
        this.customer.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.customer.isCardLoading = false
      })
    },

    editCustomer() {
      this.customer.isLoading = true
      this.$store.dispatch('customer/update', {
        id: this.$route.params.id,
        data: this.customer.form,
      }).then(response => {
        this.customer.isLoading = false
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
        this.$router.push(`/customers/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.editCustomerForm.setErrors(error.response.data.errors)
        this.customer.isLoading = false
      })
    },
    reset() {
      this.viewCustomer()
    },
  },
}
</script>

<style>
#customer-form ul,
#customer-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
