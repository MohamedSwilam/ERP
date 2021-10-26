<template>
  <section id="employer-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="employer.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createEmployer"
              title="Create Employer"
              action-collapse
            >
              <validation-observer
                ref="createEmployerForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createEmployer)">
                  <b-row>
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
                              <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="employer.form.name"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Name"
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
                          rules=""
                          name="Phone"
                          vid="phone"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="PhoneIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="phone"
                              v-model="employer.form.phone"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Phone"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- address -->
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
                          rules=""
                          name="Address"
                          vid="address"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="MapPinIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="address"
                              v-model="employer.form.address"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Address"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- national_id -->
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
                          rules=""
                          name="National ID"
                          vid="national_id"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="CreditCardIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="national_id"
                              v-model="employer.form.national_id"
                              :state="errors.length > 0 ? false:null"
                              placeholder="National ID"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- joining_date -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Joining Date"
                        label-for="joining_date"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Joining Date"
                          vid="joining_date"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="joining_date"
                              v-model="employer.form.joining_date"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Joining Date"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- salary -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Salary"
                        label-for="salary"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Salary"
                          vid="salary"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="salary"
                              v-model="employer.form.salary"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Salary"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- military_status -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Military Status"
                        label-for="military_status"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Military Status"
                          vid="military_status"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="AlertOctagonIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="military_status"
                              v-model="employer.form.military_status"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Military Status"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- criminal_record_status -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Criminal Record Status"
                        label-for="criminal_record_status"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Criminal Record Status"
                          vid="criminal_record_status"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="AlertOctagonIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="criminal_record_status"
                              v-model="employer.form.criminal_record_status"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Criminal Record Status"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- medical_insurance_number -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Medical Insurance Number"
                        label-for="medical_insurance_number"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Medical Insurance Number"
                          vid="medical_insurance_number"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="AlertOctagonIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="medical_insurance_number"
                              v-model="employer.form.medical_insurance_number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Medical Insurance Number"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- social_insurance_number -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Social Insurance Number"
                        label-for="social_insurance_number"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Social Insurance Number"
                          vid="social_insurance_number"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="AlertOctagonIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="social_insurance_number"
                              v-model="employer.form.social_insurance_number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Social Insurance Number"
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
                            :disabled="employer.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="employer.isLoading">
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

export default {
  name: 'CreateEmployer',
  directives: {
    Ripple,
  },
  data: () => ({
    employer: {
      isCardLoading: false,
      isLoading: false,
      form: {
        name: '',
        phone: '',
        address: '',
        national_id: '',
        joining_date: '',
        salary: '',
        military_status: '',
        criminal_record_status: '',
        medical_insurance_number: '',
        social_insurance_number: '',
      },
    },
  }),
  methods: {
    createEmployer() {
      this.employer.isLoading = true
      this.$store.dispatch('employers/create', this.employer.form).then(response => {
        this.employer.isLoading = false
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
        this.$router.push('/employers')
      }).catch(error => {
        this.$refs.createEmployerForm.setErrors(error.response.data.errors)
        this.employer.isLoading = false
      })
    },
    reset() {
      Object.keys(this.employer.form).forEach(key => {
        this.employer.form[key] = ''
      })
    },
  },
}
</script>

<style>
#employer-form ul,
#employer-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
