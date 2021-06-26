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
              ref="createRole"
              title="Create Role"
              action-collapse
            >
              <validation-observer
                ref="createRoleForm"
                v-slot="{ handleSubmit }"
              >
                <b-form @submit.prevent="handleSubmit(createRole)">
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
                            type="reset"
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
  name: 'Create',
  directives: {
    Ripple,
  },
  data: () => ({
    role: {
      permissions: {
        role: [{
          id: 1, name: 'browse_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 2, name: 'view_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 3, name: 'assign_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 4, name: 'remove_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 5, name: 'create_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 6, name: 'edit_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 7, name: 'delete_role', group: 'role', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }],
        permission: [{
          id: 8, name: 'browse_permission', group: 'permission', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 9, name: 'grant_permission', group: 'permission', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 10, name: 'revoke_permission', group: 'permission', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }],
        user: [{
          id: 16, name: 'browse_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 17, name: 'view_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 18, name: 'store_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 19, name: 'edit_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }, {
          id: 20, name: 'destroy_user', group: 'user', guard_name: 'api', created_at: '2021-05-30T00:01:00.000000Z', updated_at: '2021-05-30T00:01:00.000000Z',
        }],
        invoice: [{
          id: 54, name: 'browse_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z',
        }, {
          id: 55, name: 'create_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z',
        }, {
          id: 56, name: 'view_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z',
        }, {
          id: 57, name: 'edit_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z',
        }, {
          id: 58, name: 'delete_invoice', group: 'invoice', guard_name: 'api', created_at: '2021-05-30T00:01:01.000000Z', updated_at: '2021-05-30T00:01:01.000000Z',
        }],
      },
      selectedGroups: [],
      isCardLoading: false,
      isLoading: false,
      form: {
        name: '',
        permissions: [],
      },
    },
  }),
  mounted() {
    // this.browsePermissions()
  },
  methods: {
    browsePermissions() {
      this.role.isCardLoading = true
      this.$store.dispatch('rolesAndPermissions/getPermissions', '').then(response => {
        this.role.isCardLoading = false
        this.role.permissions = this.groupPermissions(response.data.data)
      }).catch(error => {
        console.log(error)
        this.role.isCardLoading = false
      })
    },
    groupPermissions(permissions) {
      const groups = {}
      permissions.forEach(permission => {
        if (groups.hasOwnProperty(permission.group)) groups[permission.group].push(permission)
        else groups[permission.group] = [permission]
      })
      return groups
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
    createRole() {
      this.role.isLoading = true
      this.$store.dispatch('rolesAndPermissions/create', this.role.form).then(response => {
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
        this.$refs.createRoleForm.setErrors(error.response.data.errors)
        this.role.isLoading = false
      })
    },
    reset() {
      this.role.form.name = ''
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
