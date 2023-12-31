<template>
  <section id="user-form">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-overlay
            :show="user.isCardLoading"
            rounded="sm"
          >
            <b-card-actions
              ref="createUser"
              title="Create User"
              action-collapse
            >
              <validation-observer
                ref="createUserForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createUser)">
                  <b-row>
                    <!-- Roles -->
                    <b-col
                      lg="12"
                      md="12"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group label="User Roles">
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required"
                          name="Role"
                          vid="role"
                        >
                          <b-form-checkbox
                            v-for="role in user.roles"
                            :key="role.name"
                            v-model="user.form.roles"
                            :value="role.name"
                            name="flavour-3a"
                            inline
                            @change="updatePermissionsCheckboxes"
                          >
                            {{ role.name }}
                          </b-form-checkbox>
                          <br>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <!--permissions-->
                    <b-col cols="12">
                      <h6>Permissions:</h6>
                      <b-row>
                        <b-col
                          v-for="(key, index) in Object.keys(user.permissions)"
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
                                v-model="user.selectedGroups"
                                :value="key"
                                @change="groupPressed(key)"
                              >
                                <b>{{ key | capitalize }}</b>
                              </b-form-checkbox>
                            </li>
                            <ul>
                              <li
                                v-for="(permission, permission_index) in user.permissions[key]"
                                :key="`p-${permission_index}`"
                              >
                                <b-form-checkbox
                                  v-model="user.form.permissions"
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
                              <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="name"
                              v-model="user.form.name"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Name"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <!-- Email -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Email"
                        label-for="email"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required|email"
                          name="Email"
                          vid="email"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="MailIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="code"
                              v-model="user.form.email"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Email"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <!-- Password -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Password"
                        label-for="password"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required|password"
                          name="Password"
                          vid="password"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="LockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="password"
                              v-model="user.form.password"
                              type="password"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Password"
                            />
                          </b-input-group>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <!-- Confirm Password -->
                    <b-col
                      lg="6"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <b-form-group
                        label="Confirm Password"
                        label-for="confirm-password"
                      >
                        <validation-provider
                          v-slot="{ errors }"
                          rules="required|confirmed:password"
                          name="Confirm Password"
                          vid="confirm-password"
                        >
                          <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                            <b-input-group-prepend is-text>
                              <feather-icon icon="LockIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                              id="confirm-password"
                              v-model="user.form.password_confirmation"
                              type="password"
                              :state="errors.length > 0 ? false:null"
                              placeholder="Confirm Password"
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
                            :disabled="user.isLoading"
                            variant="primary"
                            class="mr-1"
                          >
                            <template v-if="user.isLoading">
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
  name: 'CreateUser',
  directives: {
    Ripple,
  },
  data: () => ({
    user: {
      isCardLoading: false,
      isLoading: false,
      roles: [],
      permissions: {},
      selectedGroups: [],
      form: {
        roles: [],
        permissions: [],
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    },
  }),
  mounted() {
    this.browseRoles()
  },
  methods: {
    browseRoles() {
      this.user.isCardLoading = true
      this.$store.dispatch('rolesAndPermissions/browse', '').then(response => {
        this.user.roles = response.data.data
        this.browsePermissions()
      }).catch(error => {
        console.error(error)
        this.user.isCardLoading = false
      })
    },
    browsePermissions() {
      this.$store.dispatch('rolesAndPermissions/getPermissions', '').then(response => {
        this.user.permissions = this.groupPermissions(response.data.data)
        this.user.isCardLoading = false
      }).catch(error => {
        console.error(error)
        this.user.isCardLoading = false
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
    groupPressed(group) {
      if (this.user.selectedGroups.includes(group)) {
        for (let i = 0; i < this.user.permissions[group].length; i += 1) {
          if (!this.user.form.permissions.includes(this.user.permissions[group][i].name)) {
            this.user.form.permissions.push(this.user.permissions[group][i].name)
          }
        }
      } else {
        for (let i = 0; i < this.user.permissions[group].length; i += 1) {
          if (this.user.form.permissions.includes(this.user.permissions[group][i].name)) {
            this.user.form.permissions.splice(this.user.form.permissions.indexOf(this.user.permissions[group][i].name), 1)
          }
        }
      }
    },
    updatePermissionsCheckboxes() {
      const permissions = []
      const roles = this.user.roles.filter(role => this.user.form.roles.includes(role.name))
      roles.forEach(role => {
        role.permissions.forEach(permission => {
          if (!permissions.includes(permission.name)) permissions.push(permission.name)
        })
      })
      this.user.form.permissions = permissions
      this.updatePermissionGroupsCheckboxes()
    },
    updatePermissionGroupsCheckboxes() {
      Object.keys(this.user.permissions).forEach(group => {
        let allChecked = true
        this.user.permissions[group].forEach(permission => {
          if (!this.user.form.permissions.includes(permission.name)) allChecked = false
        })
        if (allChecked) {
          if (!this.user.selectedGroups.includes(group)) this.user.selectedGroups.push(group)
        } else {
          this.user.selectedGroups = this.user.selectedGroups.filter(groupName => groupName !== group)
        }
      })
    },
    createUser() {
      this.user.isLoading = true
      const { form } = this.user
      if (!form.password) {
        delete form.password
        delete form.password_confirmation
      }
      this.$store.dispatch('user/create', form).then(response => {
        this.user.isLoading = false
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
        this.$router.push(`/users/${response.data.data.id}`)
      }).catch(error => {
        this.$refs.createUserForm.setErrors(error.response.data.errors)
        this.user.isLoading = false
      })
    },
    reset() {
      this.user.form.role = []
      this.user.form.permissions = []
      this.user.form.name = ''
      this.user.form.email = ''
      this.user.form.password = ''
      this.user.form.password_confirmation = ''
    },
  },
}
</script>

<style>
#user-form ul,
#user-form li {
    list-style-type: none;
    text-decoration: none;
}
</style>
