<template>
  <section id="stock-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="stock.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createStock"
              title="Create Stock"
              action-collapse
            >
              <validation-observer
                ref="createStockForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createStock)">
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
                              <feather-icon icon="BoxIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="stock.form.name"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Name"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Quantity -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Quantity"
                        label-for="quantity"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Quantity"
                          vid="quantity"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="LayersIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="quantity"
                              v-model.number="stock.form.quantity"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Quantity"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Price per piece -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Price Per Piece"
                        label-for="price_per_piece"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Price per piece"
                          vid="price_per_piece"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="price_per_piece"
                              v-model.number="stock.form.price_per_piece"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Price per piece"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Sale Price -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Sale Price"
                        label-for="sale_price"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Sale price"
                          vid="sale_price"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="sale_price"
                              v-model.number="stock.form.sale_price"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Sale price"
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
                          rules="required"
                          name="Payment type"
                          vid="payment_type"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="CreditCardIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="payment_type"
                              v-model="stock.form.payment_type"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Payment type"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Total -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Total"
                        label-for="total"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Total"
                          vid="total"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="total"
                              v-model.number="stock.form.total"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Total"
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
                          rules="required"
                          name="Paid"
                          vid="paid"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="DollarSignIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="paid"
                              v-model.number="stock.form.paid"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Paid"
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
                            :disabled="stock.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="stock.isLoading">
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
  name: 'CreateStock',
  directives: {
    Ripple,
  },
  data: () => ({
    stock: {
      isCardLoading: false,
      isLoading: false,
      stock_types: [],
      form: {
        name: '',
        quantity: 0,
        price_per_piece: 0,
        sale_price: 0,
        payment_type: '',
        total: 0,
        paid: 0,
      },
    },
  }),
  methods: {
    createStock() {
      this.stock.isLoading = true
      this.$store.dispatch('stock/create', this.stock.form).then(response => {
        this.stock.isLoading = false
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
        this.$router.push(`/stocks/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.createStockForm.setErrors(error.response.data.errors)
        this.stock.isLoading = false
      })
    },
    reset() {
      this.stock.form.name = ''
      this.stock.form.quantity = 0
      this.stock.form.price_per_piece = 0
      this.stock.form.sale_price = 0
      this.stock.form.payment_type = ''
      this.stock.form.total = 0
      this.stock.form.paid = 0
    },
  },
}
</script>

<style>
#stock-form ul,
#stock-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
