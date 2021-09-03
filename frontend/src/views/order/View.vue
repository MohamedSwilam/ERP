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
                <b>Package</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link
                  :to="`/packages/${orders.data.package.id}`"
                >
                  {{ orders.data.package.name }}
                </router-link>
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Total Hours</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.total_hours }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Remaining Hours</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.remaining_hours }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Starts_at</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.starts_at | date(true) }} - {{ orders.data.starts_at | time }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Expires At</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.expires_at | date(true) }} - {{ orders.data.expires_at | time }}
              </b-col>
              <b-col
                cols="4"
                lg="2"
                md="2"
                sm="2"
                class="mb-1"
              >
                <b>Customers</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                <router-link
                  v-for="(customer, index) in orders.data.customers"
                  :key="index"
                  class="mr-1 mb-1"
                  :to="`/customers/${customer.id}`"
                >
                  <b-badge variant="primary">
                    #TKB{{ customer.id }} - {{ customer.name | capitalize }}
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
                <b>Seller</b>
              </b-col>
              <b-col
                cols="8"
                lg="4"
                md="4"
                sm="10"
                class="mb-1"
              >
                {{ orders.data.seller }}
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
                {{ orders.data.discount }}
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
                    v-if="can('update_orders')"
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
                    v-if="can('delete_order')"
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
    <b-row v-if="can('browse_visit')">
      <b-col cols="12">
        <b-overlay
          :show="visits.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="visitsCard"
            title="Visits List"
            action-collapse
          >
            <b-modal
              id="delete-order-modal"
              title="Are you sure?"
              ok-only
              ok-variant="danger"
              ok-title="Yes, Delete"
              modal-class="modal-danger"
              centered
              no-close-on-backdrop
            >
              <b-card-text>
                You will not be able to retrieve this again!
              </b-card-text>
            </b-modal>
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <!--                <b-button-->
                <!--                  v-if="can('create_order')"-->
                <!--                  v-ripple.400="'rgba(255,255,255,0.15)'"-->
                <!--                  size="sm"-->
                <!--                  variant="primary"-->
                <!--                  to="/visits/create"-->
                <!--                >-->
                <!--                  <feather-icon-->
                <!--                    icon="PlusIcon"-->
                <!--                    class="mr-50"-->
                <!--                  />-->
                <!--                  <span class="align-middle">Create Order</span>-->
                <!--                </b-button>-->
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
                    v-model="visits.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseVisits"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="visits.data"
                  :fields="visits.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ visits.meta.current_page * visits.recordsPerPage - visits.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(visit_status)="data">
                    <b-badge
                      v-if="data.item.visit_status"
                      :variant="data.item.visit_status.color"
                      class="mb-5-px"
                    >
                      {{ data.item.visit_status.name }}
                    </b-badge>
                  </template>
                  <template #cell(room)="data">
                    {{ data.item.room ? data.item.room.name : '-' }}
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
                    v-model="visits.recordsPerPage"
                    size="sm"
                    :options="visits.paginateOptions"
                    class="w-50"
                    @change="browseVisits(1)"
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
                  v-model="visits.meta.current_page"
                  :total-rows="visits.meta.total"
                  :per-page="visits.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseVisits"
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
    <b-row v-if="can('browse_order_comment')">
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
                  <app-timeline-item v-if="can('create_order_comment')">
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
  name: 'ViewOrder',
  directives: {
    Ripple,
  },
  components: {
    AppTimeline,
    AppTimelineItem,
  },
  data: () => ({
    orders: {
      isLoading: false,
      isLoadingDelete: false,
      data: {
        id: null,
        customers: [],
        created_by: {
          id: null,
          name: '',
        },
        package: {
          id: null,
          name: '',
        },
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        isDeleted: false,
      },
    },
    visits: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'date', label: 'Date' },
        { key: 'start_time', label: 'Start Time' },
        { key: 'end_time', label: 'End Time' },
        { key: 'room', label: 'Room' },
        { key: 'visit_status', label: 'Status' },
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
    this.viewOrder()

    if (this.can('browse_order_comment')) {
      this.browseComments()
    }

    if (this.can('browse_visit')) {
      this.browseVisits()
    }
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

    browseVisits(page = 0) {
      this.visits.isLoading = true
      this.$store.dispatch('visits/browse', `?paginate=${this.visits.recordsPerPage}&page=${page}&filter[search]=${this.visits.search}&order=${this.$route.params.id}`).then(response => {
        this.visits.data = response.data.data
        this.visits.meta = response.data.meta.pagination
        this.visits.isLoading = false
      }).catch(error => {
        console.error(error)
        this.visits.isLoading = false
      })
    },

    browseComments() {
      this.comments.isLoading = true
      this.$store.dispatch('orders/browseComments', {
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
      this.$store.dispatch('orders/createComment', {
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
            this.orders.isLoadingDelete = true
            this.$store.dispatch('comment/delete', id).then(response => {
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
              this.comments.data = this.comments.data.filter(comment => comment.id !== id)
            }).catch(error => {
              console.error(error)
              this.orders.isLoadingDelete = false
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
