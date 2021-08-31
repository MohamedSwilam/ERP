<template>
  <section id="packages-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="packages.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createPackage"
              title="Create Package"
              action-collapse
            >
              <validation-observer
                ref="createPackageForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createPackage)">
                  <b-row>

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
                              v-model="packages.form.package_type_id"
                              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                              :options="packages.package_types"
                              label="text"
                              :state="errors.length > 0 ? false:null"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Package Rooms -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Package Rooms"
                        label-for="rooms"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Package Rooms"
                          vid="packages_rooms"
                        >
                          <v-select
                            v-model="packages.selectedRooms"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            multiple
                            :options="packages.package_rooms"
                            label="text"
                            :state="errors.length > 0 ? false : null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Title -->
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
                          name="Title"
                          vid="name"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="PackageIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="packages.form.name"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Title"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- membership -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Membership"
                        label-for="membership"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Membership"
                          vid="membership"
                        >
                          <b-form-checkbox v-model="packages.form.membership">
                            Membership
                          </b-form-checkbox><br>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Price -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Price"
                        label-for="price"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Price"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="packages.form.price"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Price"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Tax -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Tax"
                        label-for="tax"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Tax"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DivideIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="packages.form.tax"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Tax"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Hours -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Hours"
                        label-for="hours"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Hours"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="packages.form.hours"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Hours"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Days To Expire -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Days To Expire"
                        label-for="expiration_in_hours"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Days To Expire"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="packages.form.expiration_in_hours"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Days To Expire"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Customer Types -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Customer Type"
                        label-for="customer_type_id"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Customer Type"
                          vid="customer_type_id"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-select
                              v-model="packages.form.customer_type_id"
                              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                              :options="packages.customer_types"
                              label="text"
                              :state="errors.length > 0 ? false:null"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Customers To Reserve -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Customers To Reserve"
                        label-for="customer_types"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Customers To Reserve"
                          vid="customer_type"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UsersIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="packages.form.customers_to_reserve"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Customers To Reserve"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Package Description -->
                    <b-col cols="12">
                      <b-form-group
                        label="Package Description"
                        label-for="package_description"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          name="Package description"
                          rules="required"
                        >
                          <b-form-textarea
                            v-model="packages.form.description"
                            :state="errors.length > 0 ? false:null"
                            placeholder="Package description"
                            rows="3"
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
                            :disabled="packages.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="packages.isLoading">
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
  name: 'CreatePackage',
  directives: {
    Ripple,
  },
  components: {
    vSelect,
  },
  data: () => ({
    packages: {
      isCardLoading: false,
      isLoading: false,
      package_rooms: [],
      package_types: [],
      customer_types: [],
      selectedRooms: [],
      form: {
        name: '',
        description: '',
        membership: false,
        price: 0,
        tax: 0,
        rooms: [],
        hours: 0,
        expiration_in_hours: 0,
        customer_type_id: null,
        customers_to_reserve: 1,
        package_type_id: null,
      },
    },
  }),
  mounted() {
    this.browseRooms()
  },
  methods: {
    browseRooms() {
      this.packages.isCardLoading = true
      this.$store.dispatch('seed/browseRooms', '')
        .then(response => {
          this.packages.package_rooms = this.reformatRoomsData(response.data.data)
          this.browseCustomerTypes()
        }).catch(error => {
          console.error(error)
          this.packages.isCardLoading = false
        })
    },

    reformatRoomsData(rooms) {
      return rooms.map(room => ({ value: room.id, text: room.name }))
    },

    browseCustomerTypes() {
      this.packages.isCardLoading = true
      this.$store.dispatch('seed/browseCustomerTypes', '')
        .then(response => {
          this.packages.customer_types = this.reformatCustomerTypesData(response.data.data)
          this.browsePackageTypes()
        }).catch(error => {
          console.error(error)
          this.packages.isCardLoading = false
        })
    },

    reformatCustomerTypesData(customerTypes) {
      return [
        ...[{ value: null, text: 'Select customer type' }],
        ...customerTypes.map(customerType => ({ value: customerType.id, text: customerType.type })),
      ]
    },

    browsePackageTypes() {
      this.packages.isCardLoading = true
      this.$store.dispatch('seed/browsePackageTypes', '')
        .then(response => {
          this.packages.package_types = this.reformatPackageTypesData(response.data.data)
          this.packages.isCardLoading = false
        }).catch(error => {
          console.error(error)
          this.packages.isCardLoading = false
        })
    },

    reformatPackageTypesData(packageTypes) {
      return [
        ...[{ value: null, text: 'Select package type' }],
        ...packageTypes.map(packageType => ({ value: packageType.id, text: packageType.name })),
      ]
    },

    createPackage() {
      this.packages.isLoading = true
      this.packages.form.rooms = this.packages.selectedRooms.map(room => (room.value))
      this.packages.form.expiration_in_hours *= 24
      this.$store.dispatch('packages/create', this.packages.form).then(response => {
        this.packages.isLoading = false
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
        this.$router.push(`/packages/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.createPackageForm.setErrors(error.response.data.errors)
        this.packages.isLoading = false
      })
    },
    reset() {
      this.packages.form.name = ''
      this.packages.form.email = ''
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
#packages-form ul,
#packages-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
