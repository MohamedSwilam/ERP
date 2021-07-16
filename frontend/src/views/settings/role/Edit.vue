<template>
  <section id="role-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="role.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="editRole"
              title="Edit Role"
              action-collapse
            >
              <validation-observer
                ref="editRoleForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(editRole)">
                  <b-row>
                    <!-- Name -->
                    <b-col cols="12">
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
                              <feather-icon icon="ShieldIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="role.form.name"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Name"
                              disabled
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <!--permissions-->
                    <b-col cols="12">
                      <h6>Permissions:</h6>
                      <b-row>
                        <b-col
                          v-for="(key, index) in Object.keys(role.permissions)"
                          :key="index"
                          class="mb-2"
                          lg="4"
                          md="6"
                          sm="12"
                          xs="12"
                        >
                          <ul>
                            <li>
                              <b-form-checkbox
                                v-model="role.selectedGroups"
                                :value="key"
                                @change="groupPressed(key)"
                              >
                                <b>{{ key | capitalize }}</b>
                              </b-form-checkbox>
                            </li>
                            <ul>
                              <li
                                v-for="(permission, permission_index) in role.permissions[key]"
                                :key="`p-${permission_index}`"
                              >
                                <b-form-checkbox
                                  v-model="role.form.permissions"
                                  :value="permission.name"
                                >
                                  {{ permission.name | capitalize }}
                                </b-form-checkbox>
                              </li>
                            </ul>
                          </ul>
                        </b-col>
                      </b-row>
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
                            :disabled="role.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="role.isLoading">
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
                            variant="outline-warning"
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
  name: 'Edit',
  directives: {
    Ripple,
  },
  data: () => ({
    role: {
      permissions: {},
      selectedGroups: [],
      isCardLoading: false,
      isLoading: false,
      form: {
        name: '',
        is_core: false,
        permissions: [],
      },
    },
  }),
  mounted() {
    this.browsePermissions()
  },
  methods: {
    browsePermissions() {
      this.role.isCardLoading = true
      this.$store.dispatch('rolesAndPermissions/getPermissions', '').then(response => {
        this.role.permissions = this.groupPermissions(response.data.data)
        this.viewRole()
      }).catch(error => {
        console.log(error)
        this.role.isCardLoading = false
      })
    },
    groupPermissions(permissions) {
      const groups = {}
      permissions.forEach(permission => {
        // eslint-disable-next-line no-prototype-builtins
        if (groups.hasOwnProperty(permission.group)) groups[permission.group].push(permission)
        else groups[permission.group] = [permission]
      })
      return groups
    },
    viewRole() {
      this.$store.dispatch('rolesAndPermissions/view', this.$route.params.id).then(response => {
        this.role.form.name = response.data.data.name
        this.checkPermissions(response.data.data.permissions)
        this.role.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.role.isCardLoading = false
      })
    },
    checkPermissions(permissions) {
      this.role.form.permissions = []
      permissions.forEach(permission => {
        this.role.form.permissions.push(permission.name)
      })
      Object.keys(this.role.permissions).forEach(group => {
        let checkGroup = true
        this.role.permissions[group].forEach(permission => {
          if (!this.role.form.permissions.includes(permission.name)) checkGroup = false
        })
        if (checkGroup) this.role.selectedGroups.push(group)
      })
    },
    groupPressed(group) {
      if (this.role.selectedGroups.includes(group)) {
        for (let i = 0; i < this.role.permissions[group].length; i += 1) {
          if (!this.role.form.permissions.includes(this.role.permissions[group][i].name)) {
            this.role.form.permissions.push(this.role.permissions[group][i].name)
          }
        }
      } else {
        for (let i = 0; i < this.role.permissions[group].length; i += 1) {
          if (this.role.form.permissions.includes(this.role.permissions[group][i].name)) {
            this.role.form.permissions.splice(this.role.form.permissions.indexOf(this.role.permissions[group][i].name), 1)
          }
        }
      }
    },
    editRole() {
      this.role.isLoading = true
      this.$store.dispatch('rolesAndPermissions/update', { id: this.$route.params.id, data: this.role.form }).then(response => {
        this.role.isLoading = false
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
        this.$router.push(`/roles/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.editRoleForm.setErrors(error.response.data.errors)
        this.role.isLoading = false
      })
    },
    reset() {
      this.viewRole()
    },
  },
}
</script>

<style>
#role-form ul,
#role-form li {
    list-style-type: none;
    text-decoration: none;
}
#role-form .weak-text {
    color: gray;
    position: relative;
    top: -5px;
    font-size: 12px;
}
</style>
