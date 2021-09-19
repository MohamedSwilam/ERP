<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="customer.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="customerCard"
            title="Customer Details"
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
                #TKB{{ customer.data.id }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Type</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.customer_type.type }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Name</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.name }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Email</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.email }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Phone</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.phone }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>National ID</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.national_id }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Address</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.address }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Birth Date</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ customer.data.date_of_birth | date(true) }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Last Follow Up</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <span v-if="customer.data.last_follow_up">{{ customer.data.last_follow_up | date(true) }} - {{ customer.data.last_follow_up | time }}</span>
                <span v-else>-</span>
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Next Follow Up</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <span v-if="customer.data.next_follow_up">{{ customer.data.next_follow_up | date(true) }} - {{ customer.data.next_follow_up | time }}</span>
                <span v-else>-</span>
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
                {{ customer.data.created_at | date(true) }} - {{ customer.data.created_at | time }}
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
                {{ customer.data.updated_at | date(true) }} - {{ customer.data.updated_at | time }}
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
                    v-if="can('update_customer')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="warning"
                    :to="`/customers/${customer.data.id}/edit`"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="mr-50"
                    />
                    <span class="align-middle">Edit Customer</span>
                  </b-button>
                  <b-button
                    v-if="can('delete_customer')"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    class="ml-1"
                    :disabled="customer.isLoadingDelete"
                    variant="danger"
                    @click="deleteCustomer(customer.data.id)"
                  >
                    <template v-if="customer.isLoadingDelete">
                      <b-spinner small />
                      Loading...
                    </template>
                    <template v-else>
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Delete Customer</span>
                    </template>
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
    <b-row v-if="can('browse_order')">
      <b-col cols="12">
        <b-overlay
          :show="orders.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="orderCard"
            title="Orders List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_order')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  size="sm"
                  variant="primary"
                  to="/orders/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Order</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                align-h="center"
                class="text-right mb-2"
              >
                <b-input-group style="position: relative;top: 13px;">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="orders.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseOrders"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="orders.data"
                  :fields="orders.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ orders.meta.current_page * orders.recordsPerPage - orders.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(customers)="data">
                    <router-link
                      v-for="(customer, index) in data.item.customers"
                      :key="index"
                      :to="`/customers/${customer.id}`"
                    >
                      <b-badge
                        :variant="customer.id === parseInt($route.params.id) ? 'success' : 'primary'"
                        class="mb-5-px"
                      >
                        #TKB{{ customer.id }} - {{ customer.name | capitalize }}
                      </b-badge>
                    </router-link>
                  </template>
                  <template #cell(expires_at)="data">
                    {{ data.item.expires_at | date(true) }} - {{ data.item.expires_at | time }}
                  </template>
                  <template #cell(customer)="data">
                    <router-link :to="`/customers/${data.item.customer.id}`">
                      {{ data.item.customer.name }}
                    </router-link>
                  </template>
                  <template #cell(created_by)="data">
                    <router-link :to="`/users/${data.item.created_by.id}`">
                      {{ data.item.created_by.name }}
                    </router-link>
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_order')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Order"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/orders/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_order')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Order"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteOrder(data)"
                      >
                        <feather-icon icon="TrashIcon" />
                      </b-button>
                    </span>
                  </template>
                </b-table>
              </b-col>
              <b-col
                md="2"
                sm="4"
                xs="4"
                class="my-1"
              >
                <b-form-group class="mb-0">
                  <label class="d-inline-block text-sm-left mr-50">Per page</label>
                  <b-form-select
                    id="perPageSelect"
                    v-model="orders.recordsPerPage"
                    size="sm"
                    :options="orders.paginateOptions"
                    class="w-50"
                    @change="browseOrders(1)"
                  />
                </b-form-group>
              </b-col>
              <b-col
                md="10"
                sm="8"
                xs="8"
                class="my-1"
              >
                <b-pagination
                  v-model="orders.meta.current_page"
                  :total-rows="orders.meta.total"
                  :per-page="orders.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseOrders"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
              </b-col>
            </b-row>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
    <b-row v-if="can('browse_customer_comment')">
      <b-col cols="12">
        <b-overlay
          :show="comments.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="commentsCard"
            title="Comments"
            action-collapse
          >
            <b-row>
              <b-col cols="12">
                <app-timeline>
                  <app-timeline-item v-if="can('create_customer_comment')">
                    <validation-observer
                      ref="createCommentForm"
                      v-slot="{ handleSubmit }"
                    >
                      <b-form @submit.prevent="handleSubmit(createComment)">
                        <b-row>
                          <!-- Comment -->
                          <b-col cols="12">
                            <b-form-group
                              label="Comment"
                              label-for="comment"
                            >
                              <validation-provider
                                v-slot="{ errors }"
                                name="Comment"
                                rules="required"
                              >
                                <b-form-textarea
                                  v-model="comments.form.comment"
                                  placeholder="type your comment here..."
                                  rows="3"
                                  :state="errors.length > 0 ? false:null"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                              </validation-provider>
                            </b-form-group>
                          </b-col>
                          <b-col
                            cols="12"
                            class="text-right"
                          >
                            <b-button
                              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                              type="submit"
                              :disabled="comments.isCreateLoading"
                              variant="primary"
                              class="mr-1"
                              size="sm"
                            >
                              <template v-if="comments.isCreateLoading">
                                <b-spinner small />
                                Loading...
                              </template>
                              <template v-else>
                                <feather-icon
                                  icon="SendIcon"
                                  class="mr-50"
                                />
                                <span class="align-middle">Post Comment</span>
                              </template>
                            </b-button>
                          </b-col>
                        </b-row>
                      </b-form>
                    </validation-observer>
                  </app-timeline-item>
                  <app-timeline-item
                    v-for="(comment, index) in comments.data"
                    :key="index"
                  >
                    <div
                      v-if="comment.id !== comments.editForm.id"
                      class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                    >
                      <h6>
                        {{ comment.comment }}
                        <div class="mt-1">
                          <b-button
                            v-if="can('update_comment')"
                            size="sm"
                            variant="warning"
                            @click="viewCommentEditForm(comment, index)"
                          >
                            <feather-icon
                              icon="EditIcon"
                              class="mr-50"
                            />
                            Edit
                          </b-button>
                          <b-button
                            v-if="can('delete_comment')"
                            size="sm"
                            variant="danger"
                            class="ml-1"
                            @click="deleteComment(comment.id)"
                          >
                            <feather-icon
                              icon="TrashIcon"
                              class="mr-50"
                            />
                            Delete
                          </b-button>
                        </div>
                      </h6>
                      <small class="text-muted">
                        {{ comment.created_at | date(true) }} - {{ comment.created_at | time }}
                        <p class="mb-0">
                          By <router-link :to="`/users/${ comment.created_by.id }`">
                            {{ comment.created_by.name }}
                          </router-link>
                        </p>
                      </small>
                    </div>
                    <div v-else>
                      <validation-observer
                        ref="editCommentForm"
                        v-slot="{ handleSubmit }"
                      >
                        <b-form @submit.prevent="handleSubmit(editComment)">
                          <b-row>
                            <!-- Comment -->
                            <b-col cols="12">
                              <b-form-group
                                label="Comment"
                                label-for="comment"
                              >
                                <validation-provider
                                  v-slot="{ errors }"
                                  name="Comment"
                                  rules="required"
                                >
                                  <b-form-textarea
                                    v-model="comments.editForm.data.comment"
                                    placeholder="type your comment here..."
                                    rows="3"
                                    :state="errors.length > 0 ? false:null"
                                  />
                                  <small class="text-danger">{{ errors[0] }}</small>
                                </validation-provider>
                              </b-form-group>
                            </b-col>
                            <b-col
                              cols="12"
                              class="text-right"
                            >
                              <b-button
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                type="submit"
                                variant="outline-danger"
                                class="mr-1"
                                size="sm"
                                @click="hideCommentEditForm"
                              >
                                <feather-icon
                                  icon="XIcon"
                                  class="mr-50"
                                /> Cancel
                              </b-button>
                              <b-button
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                type="submit"
                                :disabled="comments.editForm.isLoading"
                                variant="primary"
                                class="mr-1"
                                size="sm"
                              >
                                <template v-if="comments.editForm.isLoading">
                                  <b-spinner small />
                                  Loading...
                                </template>
                                <template v-else>
                                  <feather-icon
                                    icon="SaveIcon"
                                    class="mr-50"
                                  />
                                  <span class="align-middle">Save Comment</span>
                                </template>
                              </b-button>
                            </b-col>
                          </b-row>
                        </b-form>
                      </validation-observer>
                    </div>
                  </app-timeline-item>
                </app-timeline>
              </b-col>
            </b-row>
          </b-card-actions>
        </b-overlay>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

export default {
  name: 'ViewCustomer',
  directives: {
    Ripple,
  },
  components: {
    AppTimeline,
    AppTimelineItem,
  },
  data: () => ({
    customer: {
      isLoading: false,
      isLoadingDelete: false,
      data: {
        id: null,
        name: '',
        email: '',
        phone: '',
        address: '',
        customer_type_id: null,
        customer_type: {
          type: '',
        },
        date_of_birth: '',
        createdAt: '',
        updatedAt: '',
        isDeleted: false,
      },
    },
    orders: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'total_hours', label: 'Total Hours' },
        { key: 'remaining_hours', label: 'Remaining Hours' },
        { key: 'customers', label: 'Customer(s)' },
        { key: 'expires_at', label: 'Expiration Date' },
        { key: 'created_by', label: 'Created By' },
        'Action',
      ],
      data: [],
      meta: {
        count: 0,
        current_page: 1,
        links: {},
        per_page: 0,
        total: 0,
        total_pages: 0,
      },
    },
    comments: {
      isLoading: false,
      isCreateLoading: false,
      data: [],
      form: {
        comment: '',
      },
      editForm: {
        id: null,
        index: null,
        isLoading: false,
        data: {
          comment: '',
        },
      },
    },
  }),
  mounted() {
    this.viewCustomer()
    if (this.can('browse_customer_comment')) {
      this.browseComments()
    }
    if (this.can('browse_order')) {
      this.browseOrders(this.orders.meta.current_page)
    }
  },
  methods: {
    viewCustomer() {
      this.customer.isLoading = true
      this.$store.dispatch('customer/view', this.$route.params.id).then(response => {
        this.customer.data = response.data.data
        this.customer.isLoading = false
      }).catch(error => {
        console.error(error)
        this.customer.isLoading = false
      })
    },
    deleteCustomer(id) {
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
            this.customer.isLoadingDelete = true
            this.$store.dispatch('customer/delete', id).then(response => {
              this.customer.isLoadingDelete = false
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
              this.$router.push('/customers')
            }).catch(error => {
              console.error(error)
              this.customer.isLoadingDelete = false
            })
          }
        })
    },

    browseComments() {
      this.comments.isLoading = true
      this.$store.dispatch('customer/browseComments', {
        id: this.$route.params.id,
        filters: '?sort=-created_at',
      }).then(response => {
        this.comments.data = response.data.data
        this.comments.isLoading = false
      }).catch(error => {
        console.error(error)
        this.comments.isLoading = false
      })
    },

    createComment() {
      this.comments.isCreateLoading = true
      this.$store.dispatch('customer/createComment', {
        id: this.$route.params.id,
        data: this.comments.form,
      }).then(response => {
        this.comments.isCreateLoading = false
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
        this.comments.data.unshift(response.data.data)
        this.comments.form.comment = '.'
      }).catch(error => {
        this.$refs.createCommentForm.setErrors(error.response.data.errors)
        this.comments.isCreateLoading = false
      })
    },

    deleteComment(id) {
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
            this.customer.isLoadingDelete = true
            this.$store.dispatch('comment/delete', id).then(response => {
              this.customer.isLoadingDelete = false
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
              this.comments.data = this.comments.data.filter(comment => comment.id !== id)
            }).catch(error => {
              console.error(error)
              this.customer.isLoadingDelete = false
            })
          }
        })
    },

    viewCommentEditForm(comment, index) {
      this.comments.editForm.data.comment = comment.comment
      this.comments.editForm.id = comment.id
      this.comments.editForm.index = index
    },

    hideCommentEditForm() {
      this.comments.editForm.id = null
      this.comments.editForm.index = null
      this.comments.editForm.data.comment = ''
    },

    editComment() {
      this.comments.editForm.isLoading = true
      this.$store.dispatch('comment/update', {
        id: this.comments.editForm.id,
        data: this.comments.editForm.data,
      }).then(response => {
        this.comments.editForm.isLoading = false
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
        this.comments.data[this.comments.editForm.index] = response.data.data
        this.hideCommentEditForm()
      }).catch(error => {
        this.$refs.editCommentForm.setErrors(error.response.data.errors)
        this.comments.editForm.isLoading = false
      })
    },

    browseOrders(page = 0) {
      this.orders.isLoading = true
      this.$store.dispatch('orders/browse', `?paginate=${this.orders.recordsPerPage}&page=${page}&filter[search]=${this.orders.search}&customer=${this.$route.params.id}`).then(response => {
        this.orders.data = response.data.data
        this.orders.meta = response.data.meta.pagination
        this.orders.isLoading = false
      }).catch(error => {
        console.error(error)
        this.orders.isLoading = false
      })
    },

    deleteOrder(data) {
      this.$bvModal.msgBoxConfirm('You will not be able to retrieve this again!', {
        title: 'Are you sure?',
        size: 'sm',
        okTitle: 'Yes, Delete!',
        okVariant: 'danger',
        cancelTitle: 'Cancel',
        cancelVariant: 'outline-primary',
        centered: true,
      }).then(confirmed => {
        if (confirmed) {
          this.$store.dispatch('orders/delete', data.item.id).then(response => {
            this.orders.data = this.orders.data.filter(orderDetails => orderDetails.id !== data.item.id)
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
          }).catch(error => {
            console.log(error)
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/variables/_variables.scss';
.table .thead-dark th {
    background-color: $primary !important;
    border-color: #195cff !important;
}
.dark-layout .table thead.thead-dark th, [dir] .dark-layout .table tfoot.thead-dark th {
    color: white !important;
}
.mb-5-px {
    margin-bottom: 5px;
}
</style>
