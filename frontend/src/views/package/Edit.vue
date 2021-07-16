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
              ref="editPackage"
              title="Edit Package"
              action-collapse
            >
              <validation-observer
                ref="editPackageForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editPackage)">
                  <b-row>
                    <!-- Package Rooms -->
                    <b-col cols="12">
                      <b-form-group
                        label="Package Rooms"
                        label-for="package_rooms"
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
                            :state="errors.length > 0 ? false:null"
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
                              <feather-icon icon="PackageIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="title"
                              v-model="packages.form.title"
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

                    <!-- Package Description -->
                    <b-col cols="12">
                      <b-form-group
                        label="Package Description"
                        label-for="package_description"
                      >
                        <validation-provider
                          v-slot="{ errors }"
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
  name: 'EditPackage',
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
      selectedRooms: [],
      form: {
        title: '',
        description: '',
        membership: false,
        price: 0,
        tax: 0,
        rooms: [],
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
          this.viewPackage()
        }).catch(error => {
          console.error(error)
          this.packages.isCardLoading = false
        })
    },

    reformatRoomsData(rooms) {
      return rooms.map(room => ({ value: room.id, text: room.name }))
    },

    viewPackage() {
      this.packages.isCardLoading = true
      this.$store.dispatch('packages/view', this.$route.params.id).then(response => {
        this.packages.form = response.data.data
        this.packages.selectedRooms = response.data.data.rooms.map(room => ({ value: room.id, text: room.name }))
        this.packages.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.packages.isCardLoading = false
      })
    },

    editPackage() {
      this.packages.isLoading = true
      this.packages.form.rooms = this.packages.selectedRooms.map(room => (room.value))
      this.$store.dispatch('packages/update', {
        id: this.$route.params.id,
        data: this.packages.form,
      }).then(response => {
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
        this.$refs.editPackageForm.setErrors(error.response.data.errors)
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
