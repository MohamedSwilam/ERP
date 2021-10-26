import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line import/no-cycle
import AuthMixin from '@/mixins/auth'
// eslint-disable-next-line import/no-cycle
import store from '../store/index'
import axios from '../libs/axios'

Vue.use(VueRouter)

function guard(to, from, next) {
  if (store.state.auth.accessToken) {
    // eslint-disable-next-line
        axios.defaults.headers.common['Authorization'] = store.state.auth.accessToken
    // eslint-disable-next-line
        to.meta.permission === undefined || AuthMixin.methods.can(to.meta.permission)
      ? next() : next('/error-403')
  } else {
    console.log(to)
    next(`/login?to=${to.path}`)
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: guard,
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/calendar',
      name: 'calendar',
      beforeEnter: guard,
      component: () => import('@/views/calendar/Calendar.vue'),
      meta: {
        pageTitle: 'Calendar',
        breadcrumb: [
          {
            text: 'Calendar',
            active: true,
          },
        ],
      },
    },
    // =============================================================================
    // USER ROUTES
    // =============================================================================
    {
      path: '/users',
      name: 'browse-users',
      component: () => import('../views/user/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'User', to: '/users', active: true },
        ],
        pageTitle: 'User',
        permission: 'browse_user',
      },
    },
    {
      path: '/users/create',
      name: 'create-user',
      component: () => import('../views/user/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'User', to: '/users', active: false },
          { text: 'Create User', to: '/users/create', active: true },
        ],
        pageTitle: 'Create User',
        permission: 'create_user',
      },
    },
    {
      path: '/users/:id',
      name: 'view-user',
      component: () => import('../views/user/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'User', to: '/users', active: false },
          { text: 'View User', to: '/users/:id', active: true },
        ],
        pageTitle: 'View User',
        permission: 'view_user',
      },
    },
    {
      path: '/users/:id/edit',
      name: 'edit-user',
      component: () => import('../views/user/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Users', to: '/users', active: false },
          { text: 'User', to: '/users/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit User',
        permission: 'update_user',
      },
    },
    // =============================================================================
    // CUSTOMER ROUTES
    // =============================================================================
    {
      path: '/customers',
      name: 'browse-customers',
      component: () => import('../views/customer/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Customer', to: '/customers', active: true },
        ],
        pageTitle: 'Customer',
        permission: 'browse_customer',
      },
    },
    {
      path: '/customers/create',
      name: 'create-customer',
      component: () => import('../views/customer/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Customer', to: '/customers', active: false },
          { text: 'Create Customer', to: '/customers/create', active: true },
        ],
        pageTitle: 'Add Customer',
        permission: 'create_customer',
      },
    },
    {
      path: '/customers/:id',
      name: 'view-customer',
      component: () => import('../views/customer/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Customer', to: '/customers', active: false },
          { text: 'View Customer', to: '/customers/:id', active: true },
        ],
        pageTitle: 'View Customer',
        permission: 'view_customer',
      },
    },
    {
      path: '/customers/:id/edit',
      name: 'edit-customer',
      component: () => import('../views/customer/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Customers', to: '/customers', active: false },
          { text: 'Customer', to: '/customers/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Customer',
        permission: 'update_customer',
      },
    },

    // =============================================================================
    // ORDER ROUTES
    // =============================================================================
    {
      path: '/orders',
      name: 'browse-orders',
      component: () => import('../views/order/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Orders', to: '/orders', active: true },
        ],
        pageTitle: 'Order',
        permission: 'browse_order',
      },
    },
    {
      path: '/orders/create',
      name: 'create-order',
      component: () => import('../views/order/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Orders', to: '/orders', active: false },
          { text: 'Create Order', to: '/orders/create', active: true },
        ],
        pageTitle: 'Create Order',
        permission: 'create_order',
      },
    },
    {
      path: '/orders/:id',
      name: 'view-order',
      component: () => import('../views/order/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Orders', to: '/orders', active: false },
          { text: 'View Order', to: '/orders/:id', active: true },
        ],
        pageTitle: 'View Order',
        permission: 'view_order',
      },
    },
    {
      path: '/orders/:id/edit',
      name: 'edit-order',
      component: () => import('../views/order/Update.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Orders', to: '/orders', active: false },
          { text: 'View Order', to: '/orders/:id', active: false },
          { text: 'Edit', to: '/orders/:id', active: false },
        ],
        pageTitle: 'Edit Order',
        permission: 'update_order',
      },
    },

    // =============================================================================
    // BUFFET ORDER ROUTES
    // =============================================================================
    {
      path: '/buffet-orders',
      name: 'browse-buffet-orders',
      component: () => import('../views/buffet-order/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Buffet Orders', to: '/buffet-orders', active: true },
        ],
        pageTitle: 'Buffet Orders',
        permission: 'browse_buffet_order',
      },
    },
    {
      path: '/buffet-orders/create',
      name: 'create-buffet-order',
      component: () => import('../views/buffet-order/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Buffet Orders', to: '/buffet-orders', active: false },
          { text: 'Create', to: '/buffet-orders/create', active: true },
        ],
        pageTitle: 'Create Buffet Order',
        permission: 'create_buffet_order',
      },
    },
    {
      path: '/buffet-orders/:id',
      name: 'view-buffet-order',
      component: () => import('../views/buffet-order/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Buffet Orders', to: '/buffet-orders', active: false },
          { text: 'View', to: '/buffet-orders/:id', active: true },
        ],
        pageTitle: 'View Buffet Order',
        permission: 'view_buffet_order',
      },
    },
    {
      path: '/buffet-orders/:id/edit',
      name: 'edit-buffet-order',
      component: () => import('../views/buffet-order/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Buffet Orders', to: '/buffet-orders', active: false },
          { text: 'View', to: '/buffet-orders/:id', active: false },
          { text: 'Edit', to: '/buffet-orders/:id/edit', active: true },
        ],
        pageTitle: 'Edit Buffet Order',
        permission: 'update_buffet_order',
      },
    },

    // =============================================================================
    // EVENT ROUTES
    // =============================================================================
    {
      path: '/events',
      name: 'browse-events',
      component: () => import('../views/event/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Event', to: '/events', active: true },
        ],
        pageTitle: 'Event',
        permission: 'browse_event',
      },
    },
    {
      path: '/events/create',
      name: 'create-event',
      component: () => import('../views/event/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Event', to: '/events', active: false },
          { text: 'Create Event', to: '/events/create', active: true },
        ],
        pageTitle: 'Add Event',
        permission: 'create_event',
      },
    },
    {
      path: '/events/:id',
      name: 'view-event',
      component: () => import('../views/event/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Event', to: '/events', active: false },
          { text: 'View Event', to: '/events/:id', active: true },
        ],
        pageTitle: 'View Event',
        permission: 'view_event',
      },
    },
    {
      path: '/events/:id/edit',
      name: 'edit-event',
      component: () => import('../views/event/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Event', to: '/events', active: false },
          { text: 'View Event', to: '/events/:id', active: false },
          { text: 'Edit Event', to: '/events/:id/edit', active: true },
        ],
        pageTitle: 'Edit Event',
        permission: 'update_event',
      },
    },
    // =============================================================================
    // PACKAGE ROUTES
    // =============================================================================
    {
      path: '/packages',
      name: 'browse-packages',
      component: () => import('../views/package/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Package', to: '/packages', active: true },
        ],
        pageTitle: 'Package',
        permission: 'browse_package',
      },
    },
    {
      path: '/packages/create',
      name: 'create-package',
      component: () => import('../views/package/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Package', to: '/packages', active: false },
          { text: 'Create Package', to: '/packages/create', active: true },
        ],
        pageTitle: 'Add Package',
        permission: 'create_package',
      },
    },
    {
      path: '/packages/:id',
      name: 'view-package',
      component: () => import('../views/package/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Package', to: '/packages', active: false },
          { text: 'View Package', to: '/packages/:id', active: true },
        ],
        pageTitle: 'View Package',
        permission: 'view_package',
      },
    },
    {
      path: '/packages/:id/edit',
      name: 'edit-package',
      component: () => import('../views/package/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Packages', to: '/packages', active: false },
          { text: 'Package', to: '/packages/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Package',
        permission: 'update_package',
      },
    },
    // =============================================================================
    // REPORT ROUTES
    // =============================================================================
    {
      path: '/reports',
      name: 'browse-reports',
      component: () => import('../views/report/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Ads Report', to: '/reports', active: true },
        ],
        pageTitle: 'Ads Report',
        permission: 'browse_report',
      },
    },
    {
      path: '/reports/create',
      name: 'create-report',
      component: () => import('../views/report/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Ads Report', to: '/reports', active: false },
          { text: 'Create Report', to: '/reports/create', active: true },
        ],
        pageTitle: 'Add Report',
        permission: 'create_report',
      },
    },
    {
      path: '/reports/:id',
      name: 'view-report',
      component: () => import('../views/report/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Ads Report', to: '/reports', active: false },
          { text: 'View Report', to: '/reports/:id', active: true },
        ],
        pageTitle: 'View Report',
        permission: 'view_report',
      },
    },
    {
      path: '/reports/:id/edit',
      name: 'edit-report',
      component: () => import('../views/report/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Ads Reports', to: '/reports', active: false },
          { text: 'Ads Report', to: '/reports/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Report',
        permission: 'update_report',
      },
    },
    // =============================================================================
    // STOCK ROUTES
    // =============================================================================
    {
      path: '/stocks',
      name: 'browse-stocks',
      component: () => import('../views/stock/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Stocks', to: '/stocks', active: true },
        ],
        pageTitle: 'Stocks',
        permission: 'browse_stock',
      },
    },
    {
      path: '/stocks/create',
      name: 'create-stock',
      component: () => import('../views/stock/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Stocks', to: '/stocks', active: false },
          { text: 'Create Stock', to: '/stocks/create', active: true },
        ],
        pageTitle: 'Add Stock',
        permission: 'create_stock',
      },
    },
    {
      path: '/stocks/:id',
      name: 'view-stock',
      component: () => import('../views/stock/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Stocks', to: '/stocks', active: false },
          { text: 'View Stock', to: '/stocks/:id', active: true },
        ],
        pageTitle: 'View Stock',
        permission: 'view_stock',
      },
    },
    {
      path: '/stocks/:id/edit',
      name: 'edit-stock',
      component: () => import('../views/stock/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Stocks', to: '/stocks', active: false },
          { text: 'Stock', to: '/stocks/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Stock',
        permission: 'update_stock',
      },
    },
    // =============================================================================
    // ACCOUNTING ROUTES
    // =============================================================================
    {
      path: '/accounting',
      name: 'browse-accounting',
      component: () => import('../views/accounting/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Accounting', to: '/accounting', active: true },
        ],
        pageTitle: 'Accounting',
        permission: 'browse_accounting',
      },
    },
    {
      path: '/accounting/create',
      name: 'create-accounting',
      component: () => import('../views/accounting/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Accounting', to: '/accounting', active: false },
          { text: 'Create Accounting', to: '/accounting/create', active: true },
        ],
        pageTitle: 'Add Accounting',
        permission: 'create_accounting',
      },
    },
    {
      path: '/accounting/:id/edit',
      name: 'edit-accounting',
      component: () => import('../views/accounting/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Accounting', to: '/accounting', active: false },
          { text: 'Details', to: '/accounting/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Accounting',
        permission: 'update_accounting',
      },
    },
    // =============================================================================
    // EMPLOYER ROUTES
    // =============================================================================
    {
      path: '/employers',
      name: 'browse-employer',
      component: () => import('../views/accounting/employer/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Employer', to: '/employers', active: true },
        ],
        pageTitle: 'Employer',
        permission: 'browse_employer',
      },
    },
    {
      path: '/employers/create',
      name: 'create-employer',
      component: () => import('../views/accounting/employer/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Employer', to: '/employers', active: false },
          { text: 'Create Employer', to: '/employers/create', active: true },
        ],
        pageTitle: 'Create Employer',
        permission: 'create_employer',
      },
    },
    {
      path: '/employers/:id/edit',
      name: 'edit-employer',
      component: () => import('../views/accounting/employer/Update.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Employer', to: '/employers', active: false },
          { text: 'Details', to: '/employers/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Employer',
        permission: 'update_employer',
      },
    },
    // =============================================================================
    // SUPPLIER ROUTES
    // =============================================================================
    {
      path: '/suppliers',
      name: 'browse-supplier',
      component: () => import('../views/accounting/supplier/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Supplier', to: '/suppliers', active: true },
        ],
        pageTitle: 'Supplier',
        permission: 'browse_supplier',
      },
    },
    {
      path: '/suppliers/create',
      name: 'create-supplier',
      component: () => import('../views/accounting/supplier/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Supplier', to: '/suppliers', active: false },
          { text: 'Create Supplier', to: '/suppliers/create', active: true },
        ],
        pageTitle: 'Create Supplier',
        permission: 'create_supplier',
      },
    },
    {
      path: '/suppliers/:id/edit',
      name: 'edit-supplier',
      component: () => import('../views/accounting/supplier/Update.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Supplier', to: '/suppliers', active: false },
          { text: 'Details', to: '/suppliers/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Supplier',
        permission: 'update_supplier',
      },
    },
    // =============================================================================
    // OPERATIONS ROUTES
    // =============================================================================
    {
      path: '/operations',
      name: 'browse-operations',
      component: () => import('../views/operation/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Operations', to: '/operations', active: true },
        ],
        pageTitle: 'Operations',
        permission: 'browse_operation',
      },
    },
    // =============================================================================
    // ROLE ROUTES
    // =============================================================================
    {
      path: '/roles',
      name: 'browse-roles',
      component: () => import('../views/settings/role/Browse.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Roles', to: '/roles', active: true },
        ],
        pageTitle: 'Roles',
        permission: 'browse_role',
      },
    },
    {
      path: '/roles/create',
      name: 'create-role',
      component: () => import('../views/settings/role/Create.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Roles', to: '/roles', active: false },
          { text: 'Create Role', active: true },
        ],
        pageTitle: 'Create Role',
        permission: 'create_role',
      },
    },
    {
      path: '/roles/:id',
      name: 'view-role',
      component: () => import('../views/settings/role/View.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Roles', to: '/roles', active: false },
          { text: 'Role Details', active: true },
        ],
        pageTitle: 'View Role',
        permission: 'browse_role',
      },
    },
    {
      path: '/roles/:id/edit',
      name: 'edit-role',
      component: () => import('../views/settings/role/Edit.vue'),
      beforeEnter: guard,
      meta: {
        breadcrumb: [
          { text: 'Home', to: '/', active: false },
          { text: 'Roles', to: '/roles', active: false },
          { text: 'Role', to: '/roles/:id', active: false },
          { text: 'Edit', active: true },
        ],
        pageTitle: 'Edit Role',
        permission: 'update_role',
      },
    },
    // =============================================================================
    // AUTH ROUTES
    // =============================================================================
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-403',
      name: 'error-403',
      component: () => import('@/views/error/NotAuthorized.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
