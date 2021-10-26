<template>
  <section id="accounting-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="accounting.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="editAccounting"
              title="Edit Accounting"
              action-collapse
            >
              <validation-observer
                ref="editAccountingForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editAccounting)">
                  <b-row>
                    <!-- Utilities -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Utilities"
                        label-for="utilities"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Utilities"
                          vid="utilities"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="utilities"
                              v-model.number="accounting.form.utilities"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Utilities"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Monthly Rent -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Monthly Rent"
                        label-for="monthly_rent"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Monthly Rent"
                          vid="monthly_rent"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="monthly_rent"
                              v-model.number="accounting.form.monthly_rent"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Monthly rent"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Advertising Budget -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Advertising Budget"
                        label-for="advertising_budget"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Advertising Budget"
                          vid="advertising_budget"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="advertising_budget"
                              v-model.number="accounting.form.advertising_budget"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Advertising budget"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Fixes -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Fixes"
                        label-for="fixes"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Fixes"
                          vid="fixes"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="fixes"
                              v-model.number="accounting.form.fixes"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Fixes"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Employees Data -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Employees Data"
                        label-for="employees_data"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Employees Data"
                          vid="employees_data"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="employees_data"
                              v-model.number="accounting.form.employees_data"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Employees Data"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Suppliers Data -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Suppliers Data"
                        label-for="suppliers_data"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Suppliers Data"
                          vid="suppliers_data"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="suppliers_data"
                              v-model.number="accounting.form.suppliers_data"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Suppliers data"
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
                              v-model.number="accounting.form.revenue"
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
                            :disabled="accounting.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="accounting.isLoading">
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
  name: 'EditAccounting',
  directives: {
    Ripple,
  },
  data: () => ({
    accounting: {
      isCardLoading: false,
      isLoading: false,
      form: {
        utilities: 0,
        monthly_rent: 0,
        advertising_budget: 0,
        fixes: 0,
        employees_data: 0,
        suppliers_data: 0,
        revenue: 0,
      },
    },
  }),
  mounted() {
    this.viewAccounting()
  },
  methods: {
    viewAccounting() {
      this.accounting.isCardLoading = true
      this.$store.dispatch('accounting/view', this.$route.params.id).then(response => {
        this.accounting.form = response.data.data
        this.accounting.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.accounting.isCardLoading = false
      })
    },
    editAccounting() {
      this.accounting.isLoading = true
      this.$store.dispatch('accounting/update', {
        id: this.$route.params.id,
        data: this.accounting.form,
      }).then(response => {
        this.accounting.isLoading = false
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
        this.$router.push('/accounting')
      }).catch(error => {
        this.$refs.editAccountingForm.setErrors(error.response.data.errors)
        this.accounting.isLoading = false
      })
    },
    reset() {
      this.viewAccounting()
    },
  },
}
</script>

<style>
#accounting-form ul,
#accounting-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
