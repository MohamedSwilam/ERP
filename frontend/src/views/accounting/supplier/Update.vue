<template>
  <section id="supplier-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="supplier.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="updateSupplier"
              title="Edit Supplier"
              action-collapse
            >
              <validation-observer
                ref="updateSupplierForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(updateSupplier)">
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
                              v-model="supplier.form.name"
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
                              v-model="supplier.form.phone"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Phone"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- email -->
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
                          rules=""
                          name="Email"
                          vid="email"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="MailIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="email"
                              v-model="supplier.form.email"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Email"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- product -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Product"
                        label-for="product"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Product"
                          vid="product"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="BoxIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="product"
                              v-model="supplier.form.product"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Product"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- code -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Code"
                        label-for="code"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Code"
                          vid="code"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="StarIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="code"
                              v-model="supplier.form.code"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Code"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- payment_type -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Payment Type"
                        label-for="payment_type"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules=""
                          name="Payment Type"
                          vid="payment_type"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="payment_type"
                              v-model="supplier.form.payment_type"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Payment Type"
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
                            :disabled="supplier.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="supplier.isLoading">
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
  name: 'UpdateSupplier',
  directives: {
    Ripple,
  },
  data: () => ({
    supplier: {
      isCardLoading: false,
      isLoading: false,
      form: {
        name: '',
        phone: '',
        email: '',
        product: '',
        code: '',
        payment_type: '',
      },
    },
  }),
  mounted() {
    this.viewSupplier()
  },
  methods: {
    viewSupplier() {
      this.supplier.isCardLoading = true
      this.$store.dispatch('suppliers/view', this.$route.params.id).then(response => {
        this.supplier.form = response.data.data
        this.supplier.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.supplier.isCardLoading = false
      })
    },
    updateSupplier() {
      this.supplier.isLoading = true
      this.$store.dispatch('suppliers/update', {
        id: this.$route.params.id,
        data: this.supplier.form,
      }).then(response => {
        this.supplier.isLoading = false
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
        this.$router.push('/suppliers')
      }).catch(error => {
        this.$refs.updateSupplierForm.setErrors(error.response.data.errors)
        this.supplier.isLoading = false
      })
    },
    reset() {
      this.viewSupplier()
    },
  },
}
</script>

<style>
#supplier-form ul,
#supplier-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
