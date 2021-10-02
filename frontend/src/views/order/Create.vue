<template>
  <section id="order-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="order.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createOrder"
              title="Create Order"
              action-collapse
            >
              <validation-observer
                ref="createOrderForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createOrder)">
                  <b-row>

                    <!-- Customer -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
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
                            v-model="order.selectedCustomers"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="order.customers"
                            multiple
                            label="text"
                            :state="errors.length > 0 ? false:null"
                            :selectable="() => {
                              if (order.form.package_id) {
                                return order.selectedCustomers.length < order.packages.filter(packageInfo => packageInfo.id === order.form.package_id)[0].customers_to_reserve
                              } else {
                                return order.selectedCustomers.length < 1
                              }
                            }"
                            @search="browseCustomers"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Package Types -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Package Type"
                        label-for="package_type"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Package Type"
                          vid="package_type"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="BoxIcon" />
                            </b-input-group-prepend>
                            <b-select
                              v-model="order.package_type_id"
                              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                              :options="order.package_types"
                              label="text"
                              :state="errors.length > 0 ? false:null"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Package -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        v-if="order.selectedCustomers.length > 0"
                        label="Package"
                        label-for="package"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Package"
                          vid="package"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="BoxIcon" />
                            </b-input-group-prepend>
                            <b-select
                              v-model="order.form.package_id"
                              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                              :options="order.packages.filter(packageData =>
                                packageData.value === null ||
                                ((packageData.customer_type_id === order.selectedCustomers[0].customer_type_id || packageData.customer_type_id === null) &&
                                  packageData.package_type_id === order.package_type_id)
                              )"
                              label="text"
                              :state="errors.length > 0 ? false:null"
                              @change="packageSelected"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Starts At -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Starts At"
                        label-for="starts_at"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Starts At"
                          vid="starts_at"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="starts_at"
                              v-model="order.form.starts_at"
                              type="datetime-local"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Starts At"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Seller -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Seller"
                        label-for="seller"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Seller"
                          vid="seller"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="order.form.seller"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Seller"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Discount -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Discount"
                        label-for="discount"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Discount"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="PercentIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model.number="order.form.discount"
                              type="number"
                              min="0"
                              max="100"
                              :state="errors.length > 0 ? false:null"
                              placeholder="discount"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Paid -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Paid"
                        label-for="paid"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Paid"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model.number="order.form.paid"
                              type="number"
                              min="0"
                              max="100"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Paid"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col cols="6">
                      <h1><b>Total</b></h1>
                      <span v-if="order.form.package_id">{{ totalPrice }} EGP</span>
                      <span v-else>0 EGP</span>
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
                            :disabled="order.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="order.isLoading">
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
import vSelect from 'vue-select'

export default {
  name: 'CreateOrder',
  directives: {
    Ripple,
  },
  components: {
    vSelect,
  },
  data: () => ({
    order: {
      isCardLoading: false,
      isLoading: false,
      package_rooms: [],
      packages: [],
      package_types: [],
      customer_types: [],
      customers: [],
      selectedRooms: [],
      selectedCustomers: [],
      package_type_id: null,
      form: {
        customers: [],
        package_id: null,
        starts_at: null,
        discount: 0,
        paid: 0,
        seller: '',
      },
    },
  }),
  computed: {
    totalPrice() {
      if (this.order.form.package_id) {
        const { price } = this.order.packages.filter(packageInfo => packageInfo.id === this.order.form.package_id)[0]
        // eslint-disable-next-line no-mixed-operators
        return price - price * this.order.form.discount / 100
      }
      return 0
    },
  },
  mounted() {
    this.browseRooms()
  },
  methods: {
    packageSelected() {
      const packageCustomersToReserve = this.order.packages.filter(packageData => packageData.id === this.order.form.package_id)[0].customers_to_reserve
      if (this.order.selectedCustomers.length > packageCustomersToReserve && this.order.selectedCustomers.length > 0) {
        this.order.selectedCustomers.splice(this.order.selectedCustomers.length - (this.order.selectedCustomers.length - packageCustomersToReserve), this.order.selectedCustomers.length - packageCustomersToReserve)
      }
    },
    browseCustomers(search) {
      this.order.isCardLoading = true
      this.$store.dispatch('customer/browse', `?paginate=100&page=1&filter[search]=${search}`)
        .then(response => {
          this.order.customers = this.reformatCustomersData(response.data.data)
          this.order.isCardLoading = false
        }).catch(error => {
          console.error(error)
          this.order.isCardLoading = false
        })
    },

    reformatCustomersData(customers) {
      return [
        ...customers.map(customer => ({ ...customer, value: customer.id, text: `#TKB${customer.id} - ${customer.name}` })),
      ]
    },

    browseRooms() {
      this.order.isCardLoading = true
      this.$store.dispatch('seed/browseRooms', '')
        .then(response => {
          this.order.package_rooms = this.reformatRoomsData(response.data.data)
          this.browseCustomerTypes()
        }).catch(error => {
          console.error(error)
          this.order.isCardLoading = false
        })
    },

    reformatRoomsData(rooms) {
      return rooms.map(room => ({ value: room.id, text: room.name }))
    },

    browseCustomerTypes() {
      this.order.isCardLoading = true
      this.$store.dispatch('seed/browseCustomerTypes', '')
        .then(response => {
          this.order.customer_types = this.reformatCustomerTypesData(response.data.data)
          this.browsePackageTypes()
        }).catch(error => {
          console.error(error)
          this.order.isCardLoading = false
        })
    },

    reformatCustomerTypesData(customerTypes) {
      return [
        ...[{ value: null, text: 'Select customer type' }],
        ...customerTypes.map(customerType => ({ value: customerType.id, text: customerType.type })),
      ]
    },

    browsePackageTypes() {
      this.order.isCardLoading = true
      this.$store.dispatch('seed/browsePackageTypes', '')
        .then(response => {
          this.order.package_types = this.reformatPackageTypesData(response.data.data)
          this.browsePackages()
        }).catch(error => {
          console.error(error)
          this.order.isCardLoading = false
        })
    },

    reformatPackageTypesData(packageTypes) {
      return [
        ...[{ value: null, text: 'Select package type' }],
        ...packageTypes.map(packageType => ({ value: packageType.id, text: packageType.name })),
      ]
    },

    browsePackages() {
      this.order.isCardLoading = true
      this.$store.dispatch('packages/browse', '')
        .then(response => {
          this.order.packages = this.reformatPackagesData(response.data.data)
          console.log(response.data.data)
          this.browseCustomers()
        }).catch(error => {
          console.error(error)
          this.order.isCardLoading = false
        })
    },

    reformatPackagesData(packages) {
      return [
        ...[{ value: null, text: 'Select package' }],
        ...packages
          .map(packageData => ({ ...packageData, value: packageData.id, text: packageData.name })),
      ]
    },

    createOrder() {
      this.order.isLoading = true
      this.order.form.customers = this.order.selectedCustomers.map(customer => customer.id)
      this.$store.dispatch('orders/create', this.order.form).then(response => {
        this.order.isLoading = false
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
        this.$router.push(`/orders/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.createOrderForm.setErrors(error.response.data.errors)
        this.order.isLoading = false
      })
    },
    reset() {
      this.order.selectedCustomers = []
      this.order.package_type_id = null
      this.order.form.customers = []
      this.order.form.seller = ''
      this.order.form.discount = 0
      this.order.form.paid = 0
      this.order.form.package_id = null
      this.order.form.starts_at = null
      console.log(this.order)
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
#order-form ul,
#order-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
