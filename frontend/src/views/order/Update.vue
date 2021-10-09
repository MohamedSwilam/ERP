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
              ref="editOrder"
              title="Edit Order"
              action-collapse
            >
              <validation-observer
                ref="editOrderForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editOrder)">
                  <b-row>
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
                              :max="order.total"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Paid"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Payment Type -->
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
                          name="Payment Type"
                          rules="required"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="CreditCardIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              v-model="order.form.payment_type"
                              min="0"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Payment type"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col cols="6">
                      <h1><b>Total</b></h1>
                      {{ order.total }} EGP
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

export default {
  name: 'EditOrder',
  directives: {
    Ripple,
  },
  data: () => ({
    order: {
      isCardLoading: false,
      isLoading: false,
      total: 0,
      form: {
        paid: 0,
        seller: '',
        payment_type: '',
      },
    },
  }),
  mounted() {
    this.viewOrder()
  },
  methods: {
    viewOrder() {
      this.order.isCardLoading = true
      this.$store.dispatch('orders/view', this.$route.params.id).then(response => {
        this.order.form.seller = response.data.data.seller
        this.order.form.paid = response.data.data.paid
        this.order.form.payment_type = response.data.data.payment_type
        this.order.total = response.data.data.total
        this.order.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.order.isCardLoading = false
      })
    },
    editOrder() {
      this.order.isLoading = true
      this.$store.dispatch('orders/update', {
        id: this.$route.params.id,
        data: this.order.form,
      }).then(response => {
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
        this.$refs.editOrderForm.setErrors(error.response.data.errors)
        this.order.isLoading = false
      })
    },
    reset() {
      this.viewOrder()
    },
  },
}
</script>

<style lang="scss">
#order-form ul,
#order-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
