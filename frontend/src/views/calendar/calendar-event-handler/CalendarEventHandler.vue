<template>
  <div>
    <b-sidebar
      id="sidebar-add-new-event"
      sidebar-class="sidebar-lg"
      :visible="isEventHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-event-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            {{ eventLocal.id ? 'Update': 'Add' }} Record
          </h5>
          <div>
            <feather-icon
              v-if="eventLocal.id"
              icon="TrashIcon"
              class="cursor-pointer"
              @click="$emit('remove-event'); hide();"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>
        <b-tabs
          content-class="mt-2"
          justified
        >
          <!-- Body -->
          <validation-observer
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >

            <!-- Form -->
            <b-form
              class="p-2"
              @submit.prevent="handleSubmit(onSubmit)"
              @reset.prevent="resetForm"
            >
              <!-- Calendar -->
              <validation-provider
                #default="validationContext"
                name="Calendar"
                rules="required"
              >

                <b-form-group
                  label="Tag"
                  label-for="calendar"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="eventLocal.extendedProps.calendar"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="calendarOptions"
                    label="label"
                    :reduce="calendar => calendar.label"
                    input-id="calendar"
                  >

                    <template #option="{ color, label }">
                      <div
                        class="rounded-circle d-inline-block mr-50"
                        :class="`bg-${color}`"
                        style="height:10px;width:10px"
                      />
                      <span> {{ label }}</span>
                    </template>

                    <template #selected-option="{ color, label }">
                      <div
                        class="rounded-circle d-inline-block mr-50"
                        :class="`bg-${color}`"
                        style="height:10px;width:10px"
                      />
                      <span> {{ label }}</span>
                    </template>
                  </v-select>

                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Start Date -->
              <validation-provider
                #default="validationContext"
                name="Start Date"
                rules="required"
              >
                <b-form-group
                  label="Start Date"
                  label-for="start-date"
                  :state="getValidationState(validationContext)"
                >
                  <flat-pickr
                    v-model="eventLocal.start"
                    class="form-control"
                    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- End Date -->
              <validation-provider
                #default="validationContext"
                name="End Date"
                rules="required"
              >

                <b-form-group
                  label="End Date"
                  label-for="end-date"
                  :state="getValidationState(validationContext)"
                >
                  <flat-pickr
                    v-model="eventLocal.end"
                    class="form-control"
                    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- All Day -->
              <b-form-group>
                <b-form-checkbox
                  v-model="eventLocal.isEvent"
                  name="check-button"
                  inline
                  switch
                >
                  Is Event
                </b-form-checkbox>
              </b-form-group>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Event Title"
                  label-for="title"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="title"
                    vid="title"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="ClipboardIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="title"
                        v-model="eventLocal.title"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Event Title"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Event Type"
                  label-for="type"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="type"
                    vid="type"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="ClipboardIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="type"
                        v-model="eventLocal.type"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Event type"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Instructor"
                  label-for="instructor"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="Instructor"
                    vid="instructor"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="UserIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="instructor"
                        v-model="eventLocal.instructor"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Instructor"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Budget"
                  label-for="budget"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="Budget"
                    vid="budget"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="DollarSignIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="budget"
                        v-model="eventLocal.budget"
                        type="number"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Budget"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Expenses"
                  label-for="expenses"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="Expenses"
                    vid="expenses"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="DollarSignIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="expenses"
                        v-model="eventLocal.expenses"
                        type="number"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Expenses"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Revenue"
                  label-for="revenue"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="Revenue"
                    vid="revenue"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="DollarSignIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="revenue"
                        v-model="eventLocal.revenue"
                        type="number"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Revenue"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Number Of Attendee"
                  label-for="num_of_attendance"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="Number Of Attendee"
                    vid="num_of_attendance"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="UsersIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="num_of_attendance"
                        v-model="eventLocal.num_of_attendance"
                        type="number"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Number Of Attendee"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <template v-if="eventLocal.isEvent">
                <b-form-group
                  label="Target Segment"
                  label-for="revenue"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :rules="eventLocal.isEvent ? 'required':''"
                    name="Target Segment"
                    vid="target_segment"
                  >
                    <b-input-group :class="errors.length === 0 ? '' : 'is-invalid'">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="TargetIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="target_segment"
                        v-model="eventLocal.target_segment"
                        :state="errors.length > 0 ? false:null"
                        placeholder="Target Segment"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </template>

              <!-- Form Actions -->
              <div class="d-flex mt-2">
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  class="mr-2"
                  type="submit"
                >
                  {{ eventLocal.id ? 'Update' : 'Add ' }}
                </b-button>
                <b-button
                  v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                  type="reset"
                  variant="outline-secondary"
                >
                  Reset
                </b-button>
              </div>
            </b-form>
          </validation-observer>
        </b-tabs>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email, url } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import useCalendarEventHandler from './useCalendarEventHandler'

export default {
  components: {
    vSelect,
    flatPickr,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isEventHandlerSidebarActive',
    event: 'update:is-event-handler-sidebar-active',
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    event: {
      type: Object,
      required: true,
    },
    clearEventData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      required,
      email,
      url,
    }
  },
  setup(props, { emit }) {
    /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:

     * We created reactive property `clearFormData` and set to null so we can get `resetEventLocal` from `useCalendarEventHandler` composition function.
     * Once we get `resetEventLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎

     ? Behind The Scene
     ? When we passed it to `useCalendarEventHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarEventHandler` composition function and it is getting correct value in second time and can work w/o any issues.
    */
    const clearFormData = ref(null)

    const {
      eventLocal,
      resetEventLocal,
      calendarOptions,

      // UI
      onSubmit,
      guestsOptions,
    } = useCalendarEventHandler(toRefs(props), clearFormData, emit)

    const {
      refFormObserver,
      getValidationState,
      resetForm,
      clearForm,
    } = formValidation(resetEventLocal, props.clearEventData)

    clearFormData.value = clearForm

    return {
      // Add New Event
      eventLocal,
      calendarOptions,
      onSubmit,
      guestsOptions,

      // Form Validation
      resetForm,
      refFormObserver,
      getValidationState,
    }
  },
  mounted() {
    this.eventLocal.isEvent = this.$route.query.create === 'event'
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
