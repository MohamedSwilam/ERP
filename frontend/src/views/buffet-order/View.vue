<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="orders.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="ordersCard"
            title="Buffet Order Details"
            action-collapse
          >
            <b-row>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>ID</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.id }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Customer</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link
                  :to="`/customers/${orders.data.customer.id}`"
                >
                  #TKB{{ orders.data.customer.id }} - {{ orders.data.customer.name }}
                </router-link>
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Items</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link
                  v-for="(stock, index) in orders.data.stocks"
                  :key="index"
                  :to="`/stocks/${stock.id}`"
                  class="mr-1 mb-1"
                >
                  <b-badge
                    :variant="'primary'"
                    class="mb-5-px"
                  >
                    {{ stock.pivot.quantity }} {{ stock.name | capitalize }}
                  </b-badge>
                </router-link>
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Discount</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.discount }}%
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Created At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.created_at | date(true) }} - {{ orders.data.created_at | time }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Updated At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.updated_at | date(true) }} - {{ orders.data.updated_at | time }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Total</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ totalPrice }} EGP
              </b-col>
            </b-row>
            <hr>
            <b-container>
              <b-row
                class="mt-1"
                align-h="center"
              >
                <b-col
                  cols="12"
                  style="text-align: center;"
                >
                  <b-button
                    v-if="can('update_buffet_order')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/buffet-orders/${orders.data.id}/edit`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit Order</span>
                  </b-button>
                  <b-button
                    v-if="can('delete_buffet_order')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    class="ml-1"
                    :disabled="orders.isLoadingDelete"
                    variant="danger"
                    @click="deleteOrder(orders.data.id)"
                  >
                    <template v-if="orders.isLoadingDelete">
                      <b-spinner small />
                      Loading...
                    </template>
                    <template v-else>
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Delete Order</span>
                    </template>
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'ViewOrder',
  directives: {
    Ripple,
  },
  data: () => ({
    orders: {
      isLoading: false,
      isLoadingDelete: false,
      data: {
        id: null,
        customer_id: [],
        customer: {
          id: null,
          name: '',
        },
        stocks: [],
        discount: 0,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        isDeleted: false,
      },
    },
  }),
  computed: {
    totalPrice() {
      let sum = 0
      this.orders.data.stocks.forEach(stock => {
        sum += stock.sale_price * stock.pivot.quantity
      })
      // eslint-disable-next-line no-mixed-operators
      return sum - sum * this.orders.data.discount / 100
    },
  },
  mounted() {
    this.viewBuffetOrder()
  },
  methods: {
    viewBuffetOrder() {
      this.orders.isLoading = true
      this.$store.dispatch('buffetOrder/view', this.$route.params.id).then(response => {
        this.orders.data = response.data.data
        this.orders.isLoading = false
      }).catch(error => {
        console.error(error)
        this.orders.isLoading = false
      })
    },
    deleteOrder(id) {
      this.$bvModal
        .msgBoxConfirm('You will not be able to retrieve this again!', {
          title: 'Are you sure?',
          size: 'sm',
          okTitle: 'Yes, Delete',
          okVariant: 'danger',
          cancelTitle: 'Cancel',
          cancelVariant: 'outline-primary',
          centered: true,
        })
        .then(confirmed => {
          if (confirmed) {
            this.orders.isLoadingDelete = true
            this.$store.dispatch('buffetOrder/delete', id).then(response => {
              this.orders.isLoadingDelete = false
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
              this.$router.push('/buffet-orders')
            }).catch(error => {
              console.error(error)
              this.orders.isLoadingDelete = false
            })
          }
        })
    },
  },
}
</script>

<style>
.mb-5-px {
    margin-bottom: 5px;
}
</style>
