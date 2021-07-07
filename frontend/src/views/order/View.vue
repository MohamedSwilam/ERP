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
            title="Order Details"
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
                lg="10"
                md="10"
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
                <router-link :to="`/customers/${orders.data.customer.id}`">
                  {{ orders.data.customer.name }}
                </router-link>
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Created By</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link :to="`/users/${orders.data.created_by.id}`">
                  {{ orders.data.created_by.name }}
                </router-link>
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
                    v-if="can('edit_orders')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/orders/${orders.data.id}/edit`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit Order</span>
                  </b-button>
                  <b-button
                    v-if="can('destroy_orders')"
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
        id: 1,
        customer: {
          id: 2,
          name: 'Mohamed Swilam',
        },
        created_by: {
          id: 3,
          name: 'Mohamed Swilam',
        },
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        isDeleted: false,
      },
    },
  }),
  mounted() {
    // this.viewOrder()
  },
  methods: {
    viewOrder() {
      this.orders.isLoading = true
      this.$store.dispatch('orders/view', this.$route.params.id).then(response => {
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
            this.$store.dispatch('orders/delete', id).then(response => {
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
              this.$router.push('/orders')
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

<style scoped>

</style>
