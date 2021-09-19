<template>
  <section id="report-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="report.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createReport"
              title="Create Report"
              action-collapse
            >
              <validation-observer
                ref="createReportForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createReport)">
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
                              <feather-icon icon="FileIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="title"
                              v-model="report.form.title"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Title"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Start Date -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Start Date"
                        label-for="start_date"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Start Date"
                          vid="start_date"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="start_date"
                              v-model="report.form.start_date"
                              type="datetime-local"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Start date"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- End Date -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="End Date"
                        label-for="end_date"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="End Date"
                          vid="end_date"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="end_date"
                              v-model="report.form.end_date"
                              type="datetime-local"
                              :state="errors.length > 0 ? false:null"
                              placeholder="End date"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Total Messages -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Total Messages"
                        label-for="total_messages"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Total Messages"
                          vid="total_messages"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="MessageCircleIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="total_messages"
                              v-model.number="report.form.total_messages"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Total messages"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Customer Numbers -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Customer Numbers"
                        label-for="customer_numbers"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Customer Numbers"
                          vid="customer_numbers"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="UsersIcon" />
                            </b-input-group-prepend>
                            <b-form-textarea
                              id="customer_numbers"
                              v-model="report.form.customer_numbers"
                              placeholder="Customer numbers"
                              :state="errors.length > 0 ? false:null"
                              rows="3"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Follow Up -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Follow Up"
                        label-for="follow_up"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Follow Up"
                          vid="follow_up"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="RefreshCcwIcon" />
                            </b-input-group-prepend>
                            <b-form-textarea
                              id="follow_up"
                              v-model="report.form.follow_up"
                              placeholder="Follow up"
                              :state="errors.length > 0 ? false:null"
                              rows="3"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Results -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Results"
                        label-for="results"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Results"
                          vid="results"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClipboardIcon" />
                            </b-input-group-prepend>
                            <b-form-textarea
                              id="results"
                              v-model="report.form.results"
                              placeholder="Results"
                              :state="errors.length > 0 ? false:null"
                              rows="3"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Audience Description -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Audience Description"
                        label-for="audience_description"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Audience Description"
                          vid="audience_description"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="ClipboardIcon" />
                            </b-input-group-prepend>
                            <b-form-textarea
                              id="audience_description"
                              v-model="report.form.audience_description"
                              placeholder="Audience Description"
                              :state="errors.length > 0 ? false:null"
                              rows="3"
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
                            :disabled="report.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="report.isLoading">
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
  name: 'CreateReport',
  directives: {
    Ripple,
  },
  data: () => ({
    report: {
      isCardLoading: false,
      isLoading: false,
      report_types: [],
      form: {
        start_date: '',
        end_date: '',
        total_messages: 0,
        customer_numbers: '',
        follow_up: '',
        results: '',
        audience_description: '',
        title: '',
      },
    },
  }),
  methods: {
    createReport() {
      this.report.isLoading = true
      this.$store.dispatch('reports/create', this.report.form).then(response => {
        this.report.isLoading = false
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
        this.$router.push(`/reports/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.createReportForm.setErrors(error.response.data.errors)
        this.report.isLoading = false
      })
    },
    reset() {
      this.report.form.start_date = ''
      this.report.form.end_date = ''
      this.report.form.follow_up = ''
      this.report.form.customer_numbers = ''
      this.report.form.total_messages = 0
      this.report.form.results = ''
    },
  },
}
</script>

<style>
#report-form ul,
#report-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
