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
              title="Edit Buffet Order"
              action-collapse
            >
              <validation-observer
                ref="editOrderForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editOrder)">
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
                            v-model="order.selectedCustomer"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="order.customers"
                            label="text"
                            :state="errors.length > 0 ? false:null"
                            @search="browseCustomers"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Stock Item -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Items"
                        label-for="items"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="stock"
                          vid="stock"
                        >
                          <v-select
                            v-model="order.selectedStocks"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="order.stocks"
                            multiple
                            label="text"
                            :state="errors.length > 0 ? false:null"
                            @search="browseStocks"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!-- Quantity -->
                    <b-col
                      v-for="(stock, index) in order.selectedStocks"
                      :key="index"
                      cols="6"
                    >
                      <b-form-group
                        :label="`${stock.name} Quantity`"
                        :label-for="stock.name"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          :name="stock.name"
                          :vid="stock.name"
                        >
                          <b-form-spinbutton
                            v-model="stock.quantity"
                            :vid="stock.name"
                            min="1"
                          />
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
                          rules="required"
                          name="Discount"
                          vid="discount"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="PercentIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="discount"
                              v-model.number="order.form.discount"
                              type="number"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Discount"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col cols="12">
                      <b-form-group
                        label="Total Price"
                        label-for="total-price"
                      >
                        <h1 id="total-price">
                          {{ totalPrice }}
                        </h1>
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
  name: 'EditOrder',
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
      customers: [],
      selectedCustomer: null,
      stocks: [],
      selectedStocks: [],
      form: {
        customer_id: null,
        stocks: [],
        discount: 0,
      },
    },
  }),
  computed: {
    totalPrice() {
      let sum = 0
      this.order.selectedStocks.forEach(stock => {
        sum += stock.sale_price * stock.quantity
      })
      // eslint-disable-next-line no-mixed-operators
      return sum - sum * this.order.form.discount / 100
    },
  },
  mounted() {
    // this.browseCustomers('')
    this.browseStocks('')
    this.viewBuffetOrder()
  },
  methods: {
    viewBuffetOrder() {
      this.order.isCardLoading = true
      this.$store.dispatch('buffetOrder/view', this.$route.params.id).then(response => {
        this.order.selectedCustomer = {
          ...response.data.data.customer,
          text: `#TKB${response.data.data.customer.id} - ${response.data.data.customer.name}`,
          value: response.data.data.customer.id,
        }
        this.order.selectedStocks = response.data.data.stocks.map(stock => ({
          ...stock,
          value: stock.id,
          quantity: stock.pivot.quantity,
          text: `Name: ${stock.name} - Price: ${stock.sale_price}`,
        }))
        this.order.form.customer_id = response.data.data.customer_id
        this.order.form.discount = response.data.data.discount
        this.order.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.order.isCardLoading = false
      })
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

    browseStocks(search) {
      this.order.isCardLoading = true
      this.$store.dispatch('stock/browse', `?paginate=100&page=1&filter[search]=${search}`)
        .then(response => {
          this.order.stocks = response.data.data.map(stock => ({
            ...stock,
            value: stock.id,
            quantity: 1,
            text: `Name: ${stock.name} - Price: ${stock.sale_price}`,
          }))
          this.order.isCardLoading = false
        }).catch(error => {
          console.error(error)
          this.order.isCardLoading = false
        })
    },

    editOrder() {
      this.order.isLoading = true
      this.order.form.customer_id = this.order.selectedCustomer?.id
      this.order.form.stocks = this.order.selectedStocks.map(stock => ({
        stock_id: stock.id,
        quantity: stock.quantity,
      }))
      this.$store.dispatch('buffetOrder/update', {
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
        this.$router.push(`/buffet-orders/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.editOrderForm.setErrors(error.response.data.errors)
        this.order.isLoading = false
      })
    },
    reset() {
      this.order.selectedStocks = []
      this.order.selectedCustomer = null
      this.order.form.stocks = []
      this.order.form.customer_id = null
      this.order.form.discount = 0
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
