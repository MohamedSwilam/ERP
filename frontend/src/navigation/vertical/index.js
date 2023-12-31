export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Users',
    route: 'browse-users',
    icon: 'UserIcon',
    permission: 'browse_user',
  },
  {
    title: 'Calendar',
    route: 'calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Customers',
    route: 'browse-customers',
    icon: 'UsersIcon',
    permission: 'browse_customer',
  },
  {
    title: 'Orders',
    route: 'browse-orders',
    icon: 'Edit3Icon',
    permission: 'browse_order',
  },
  {
    title: 'Events',
    route: 'browse-events',
    icon: 'ClipboardIcon',
    permission: 'browse_event',
  },
  {
    title: 'Packages',
    route: 'browse-packages',
    icon: 'PackageIcon',
    permission: 'browse_package',
  },
  {
    title: 'Operations',
    route: 'browse-operations',
    icon: 'ActivityIcon',
    permission: 'browse_operation',
  },
  {
    title: 'Ads Reports',
    route: 'browse-reports',
    icon: 'FileTextIcon',
    permission: 'browse_report',
  },
  {
    title: 'Accounting',
    icon: 'DollarSignIcon',
    children: [
      // This is array of menu items or menu groups
      // NOTE: You can't use menu header as children
      {
        title: 'Accounting',
        route: 'browse-accounting',
        permission: 'browse_accounting',
      },
      {
        title: 'Employers',
        route: 'browse-employer',
        permission: 'browse_employer',
      },
      {
        title: 'Suppliers',
        route: 'browse-supplier',
        permission: 'browse_supplier',
      },
    ],
  },
  {
    title: 'Stocks',
    route: 'browse-stocks',
    icon: 'BoxIcon',
    permission: 'browse_stock',
  },
  {
    title: 'Buffet Orders',
    route: 'browse-buffet-orders',
    icon: 'ShoppingBagIcon',
    permission: 'browse_buffet_order',
  },
  {
    title: 'Roles & Permissions',
    route: 'browse-roles',
    icon: 'ShieldIcon',
    permission: 'browse_role',
  },
]
