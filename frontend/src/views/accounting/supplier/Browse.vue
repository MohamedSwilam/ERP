<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-overlay
          :show="supplier.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="supplierCard"
            title="Suppliers List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="6"
                align-h="center"
              >
                <b-button
                  v-if="can('create_supplier')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/suppliers/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Supplier</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                align-h="center"
                class="text-right"
              >
                <b-input-group style="position: relative;top: 13px;">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search"
                    v-model="supplier.search"
                    size="sm"
                    placeholder="Search"
                    @change="browseSupplier"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="supplier.data"
                  :fields="supplier.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ supplier.meta.current_page * supplier.recordsPerPage - supplier.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(Profit)="data">
                    {{ data.item.revenue - ( data.item.utilities + data.item.monthly_rent + data.item.advertising_budget + data.item.fixes + data.item.employees_data + data.item.suppliers_data ) }}
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('update_supplier')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Supplier"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/suppliers/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_supplier')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Supplier"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deleteSupplier(data)"
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
                    v-model="supplier.recordsPerPage"
                    size="sm"
                    :options="supplier.paginateOptions"
                    class="w-50"
                    @change="browseSupplier(1)"
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
                  v-model="supplier.meta.current_page"
                  :total-rows="supplier.meta.total"
                  :per-page="supplier.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browseSupplier"
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
  </section>
</template>

<script>
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'BrowseSupplier',
  directives: {
    Ripple,
  },
  data: () => ({
    supplier: {
      isLoading: false,
      search: '',
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      fields: [
        { key: 'index', label: '#' },
        { key: 'name', label: 'Name' },
        { key: 'phone', label: 'Phone' },
        { key: 'email', label: 'Email' },
        { key: 'product', label: 'Product' },
        { key: 'code', label: 'Code' },
        { key: 'payment_type', label: 'Payment Type' },
        { key: 'created_at', label: 'Created At' },
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
  }),
  mounted() {
    this.browseSupplier(this.supplier.meta.current_page)
  },
  methods: {
    browseSupplier(page = 0) {
      this.supplier.isLoading = true
      this.$store.dispatch('suppliers/browse', `?paginate=${this.supplier.recordsPerPage}&page=${page}&filter[search]=${this.supplier.search}`).then(response => {
        this.supplier.data = response.data.data
        this.supplier.meta = response.data.meta.pagination
        this.supplier.isLoading = false
      }).catch(error => {
        console.error(error)
        this.supplier.isLoading = false
      })
    },

    deleteSupplier(data) {
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
          this.$store.dispatch('suppliers/delete', data.item.id).then(response => {
            this.supplier.data = this.supplier.data.filter(supplierDetails => supplierDetails.id !== data.item.id)
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

<style>
</style>
