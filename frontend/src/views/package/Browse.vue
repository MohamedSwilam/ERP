<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-card-actions
          ref="filterCard"
          title="Filters"
          no-actions
        >
          <b-row>
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Search"
                label-for="search"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="search_order"
                    v-model="packages.search"
                    placeholder="Search name, price"
                    @change="browsePackages(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Package Type -->
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Package Types"
                label-for="filter_package_types"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BoxIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="packages.package_type"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="packages.package_types"
                    label="text"
                    @change="browsePackages(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Room -->
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Rooms"
                label-for="filter_rooms"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BoxIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="packages.room"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="packages.rooms"
                    label="text"
                    @change="browsePackages(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Customer Type -->
            <b-col
              lg="6"
              md="6"
              sm="12"
              xs="12"
            >
              <b-form-group
                label="Filter Customer Types"
                label-for="filter_customer_types"
              >
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon icon="UsersIcon" />
                  </b-input-group-prepend>
                  <b-select
                    v-model="packages.customer_type"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="packages.customer_types"
                    label="text"
                    @change="browsePackages(1)"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>
      <b-col cols="12">
        <b-overlay
          :show="packages.isLoading"
          rounded="sm"
        >
          <b-card-actions
            ref="packageCard"
            title="Packages List"
            action-collapse
          >
            <b-row>
              <b-col
                cols="12"
                align-h="center"
              >
                <b-button
                  v-if="can('create_package')"
                  v-ripple.400="'rgba(255,255,255,0.15)'"
                  class="my-1"
                  size="sm"
                  variant="primary"
                  to="/packages/create"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Create Package</span>
                </b-button>
              </b-col>
              <b-col
                cols="6"
                class="mb-2"
              >
                <b-form-group
                  label="Sort"
                  label-size="sm"
                  label-for="sortBySelect"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-select
                      id="sortBySelect"
                      v-model="packages.sort.by"
                      :options="packages.sort.options"
                      class="w-75"
                      @change="browsePackages(1)"
                    >
                      <template v-slot:first>
                        <option value="">
                          -- none --
                        </option>
                      </template>
                    </b-form-select>
                    <b-form-select
                      v-model="packages.sort.desc"
                      size="sm"
                      :disabled="!packages.sort.by"
                      class="w-25"
                      @change="browsePackages(1)"
                    >
                      <option :value="false">
                        Asc
                      </option>
                      <option :value="true">
                        Desc
                      </option>
                    </b-form-select>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-table
                  responsive
                  :outlined="true"
                  :items="packages.data"
                  :fields="packages.fields"
                  :head-variant="'dark'"
                >
                  <!-- A virtual column -->
                  <template #cell(index)="data">
                    {{ packages.meta.current_page * packages.recordsPerPage - packages.recordsPerPage + data.index + 1 }}
                  </template>
                  <template #cell(type)="data">
                    {{ data.item.package_type ? data.item.package_type.name : '-' }}
                  </template>
                  <template #cell(price)="data">
                    {{ data.item.price }} {{ data.item.is_flexible ? ' / hour' : '' }}
                  </template>
                  <template #cell(membership)="data">
                    <b-badge :variant="data.item.membership ? 'success' : 'danger'">
                      {{ data.item.membership ? 'Yes' : 'No' }}
                    </b-badge>
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.item.created_at | date(true) }} - {{ data.item.created_at | time }}
                  </template>
                  <template #cell(action)="data">
                    <span class="text-nowrap">
                      <b-button
                        v-if="can('view_package')"
                        v-b-tooltip.hover.v-primary
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="View Package"
                        variant="primary"
                        class="btn-icon rounded-circle"
                        :to="`/packages/${data.item.id}`"
                      >
                        <feather-icon icon="EyeIcon" />
                      </b-button>
                      <b-button
                        v-if="can('update_package')"
                        v-b-tooltip.hover.v-warning
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Edit Package"
                        variant="warning"
                        class="btn-icon rounded-circle ml-1"
                        :to="`/packages/${data.item.id}/edit`"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-if="can('delete_package')"
                        v-b-tooltip.hover.v-danger
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        title="Delete Package"
                        variant="danger"
                        class="btn-icon rounded-circle ml-1"
                        @click="deletePackage(data)"
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
                    v-model="packages.recordsPerPage"
                    size="sm"
                    :options="packages.paginateOptions"
                    class="w-50"
                    @change="browsePackages(1)"
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
                  v-model="packages.meta.current_page"
                  :total-rows="packages.meta.total"
                  :per-page="packages.recordsPerPage"
                  align="right"
                  class="my-0"
                  first-number
                  last-number
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="browsePackages"
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
  name: 'BrowsePackages',
  directives: {
    Ripple,
  },
  data: () => ({
    packages: {
      isLoading: false,
      search: '',
      customer_type: '',
      customer_types: [],
      package_type: '',
      package_types: [],
      room: '',
      rooms: [],
      paginateOptions: [5, 10, 25, 50, 100, 250],
      recordsPerPage: 50,
      sort: {
        by: '',
        desc: false,
        options: [
          { text: 'Name', value: 'name' },
          { text: 'Hours', value: 'hours' },
          { text: 'Price', value: 'price' },
          { text: 'Membership', value: 'membership' },
          { text: 'Package Type', value: 'package_type_id' },
        ],
      },
      fields: [
        { key: 'index', label: '#' },
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'package_type' },
        { key: 'price', label: 'Price' },
        { key: 'membership', label: 'Membership' },
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
    this.browsePackages(this.packages.meta.current_page)
    this.browseCustomerTypes()
    this.browsePackageTypes()
    this.browseRooms()
  },
  methods: {
    browseRooms() {
      this.$store.dispatch('seed/browseRooms', '').then(response => {
        this.packages.rooms = [
          { text: 'All', value: '' },
          ...response.data.data.map(record => ({
            text: record.name,
            value: record.id,
          })),
        ]
      }).catch(error => {
        console.error(error)
      })
    },
    browseCustomerTypes() {
      this.$store.dispatch('seed/browseCustomerTypes', '').then(response => {
        this.packages.customer_types = [
          { text: 'All', value: '' },
          ...response.data.data.map(record => ({
            text: record.type,
            value: record.id,
          })),
        ]
      }).catch(error => {
        console.error(error)
      })
    },
    browsePackageTypes() {
      this.$store.dispatch('seed/browsePackageTypes', '').then(response => {
        this.packages.package_types = [
          { text: 'All', value: '' },
          ...response.data.data.map(record => ({
            text: record.name,
            value: record.id,
          })),
        ]
      }).catch(error => {
        console.error(error)
      })
    },
    browsePackages(page = 0) {
      this.packages.isLoading = true
      this.$store.dispatch('packages/browse', `?paginate=${this.packages.recordsPerPage}&page=${page}&filter[search]=${this.packages.search}&filter[package_type]=${this.packages.package_type}&filter[customer_type]=${this.packages.customer_type}&filter[room]=${this.packages.room}&sort=${this.packages.sort.desc ? '-' : ''}${this.packages.sort.by}`).then(response => {
        this.packages.data = response.data.data
        this.packages.meta = response.data.meta.pagination
        this.packages.isLoading = false
      }).catch(error => {
        console.error(error)
        this.packages.isLoading = false
      })
    },

    deletePackage(data) {
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
          this.$store.dispatch('packages/delete', data.item.id).then(response => {
            this.packages.data = this.packages.data.filter(packageDetails => packageDetails.id !== data.item.id)
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
