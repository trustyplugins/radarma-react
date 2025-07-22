import React from 'react';
import * as Icon from 'react-feather';
import { all_routes } from '../routes/all_routes';
const routes = all_routes;
export const adminSidebar = [
  {
    tittle: 'Home',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Dashboard',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.dashboard,
        icon: <Icon.Grid className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'Services',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Services',
        hasSubRoute: true,
        showSubRoute: false,
        route: routes.services,
        icon: <Icon.Briefcase className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Add Service',
            route: routes.addServices,
          },
          {
            menuValue: 'Services',
            route: routes.allServices,
          },
          {
            menuValue: 'Service Settings',
            route: routes.serviceSettings,
          },
        ],
      },
      {
        menuValue: 'Categories',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.categoriesList,
        icon: <Icon.FileText className="react-feather-icon" />,
      },
      {
        menuValue: 'Sub Categories',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.subCategories,
        icon: <Icon.Clipboard className="react-feather-icon" />,
      },
      {
        menuValue: 'Review',
        hasSubRoute: true,
        showSubRoute: false,
        icon: <Icon.Star className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Review Type',
            route: routes.reviewType,
          },
          {
            menuValue: 'Review',
            route: routes.review,
          },
        ],
      },
    ],
  },
  {
    tittle: 'Booking',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Bookings',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.booking,
        icon: <Icon.Grid className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'FINANCE & ACCOUNTS',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Bank Transfer',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.bankTransferList,
        icon: <Icon.File className="react-feather-icon" />,
      },
      {
        menuValue: 'Wallet',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.wallet,
        icon: <Icon.CreditCard className="react-feather-icon" />,
      },
      {
        menuValue: 'Refund Request',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.refundRequest,
        icon: <Icon.GitPullRequest className="react-feather-icon" />,
      },
      {
        menuValue: 'Cash on Delivery',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.cashOnDelivery,
        icon: <Icon.DollarSign className="react-feather-icon" />,
      },
      {
        menuValue: 'Payouts',
        hasSubRoute: true,
        showSubRoute: false,
        icon: <Icon.CreditCard className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Payout Requests',
            route: routes.payoutRequest,
          },
          {
            menuValue: 'Payout Settings',
            route: routes.payoutSettings,
          },
        ],
      },
      {
        menuValue: 'Sales Transactions',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.salestransactions,
        icon: <Icon.BarChart className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'Others',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Chat',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.chat,
        icon: <Icon.MessageSquare className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'Content',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Pages',
        hasSubRoute: true,
        showSubRoute: false,
        icon: <Icon.File className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Add Page',
            route: routes.addPages,
          },
          {
            menuValue: 'Pages',
            route: routes.pagesList,
          },
          {
            menuValue: 'Pages List',
            route: routes.pageList,
          },
        ],
      },
      {
        menuValue: 'Blog',
        hasSubRoute: true,
        showSubRoute: false,
        icon: <Icon.FileText className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'All Blog',
            route: routes.allBlog,
          },
          {
            menuValue: 'Add Blog',
            route: routes.addBlog,
          },
          {
            menuValue: 'Categories',
            route: routes.blogsCategories,
          },
          {
            menuValue: 'Blog Comments',
            route: routes.blogComments,
          },
        ],
      },
      {
        menuValue: 'Location',
        hasSubRoute: true,
        showSubRoute: false,
        icon: <Icon.MapPin className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Countries',
            route: routes.countries,
          },
          {
            menuValue: 'States',
            route: routes.state,
          },
          {
            menuValue: 'Cities',
            route: routes.cities,
          },
        ],
      },
      {
        menuValue: 'Testimonials',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.testimonials,
        icon: <Icon.Star className="react-feather-icon" />,
      },
      {
        menuValue: 'FAQ',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.faqadmin,
        icon: <Icon.HelpCircle className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'MEMBERSHIP',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Membership',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.membership,
        icon: <Icon.User className="react-feather-icon" />,
      },
      {
        menuValue: 'Membership Addons',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.membershipaddons,
        icon: <Icon.UserPlus className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'REPORTS',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Admin Earnings',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.adminEarnings,
        icon: <Icon.User className="react-feather-icon" />,
      },
      {
        menuValue: 'Provider Earnings',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.providerEarning,
        icon: <Icon.DollarSign className="react-feather-icon" />,
      },
      {
        menuValue: 'Provider Sales',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.providerSales,
        icon: <Icon.DollarSign className="react-feather-icon" />,
      },

      {
        menuValue: 'Provider Wallet',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.providerWallet,
        icon: <Icon.CreditCard className="react-feather-icon" />,
      },
      {
        menuValue: 'Customer Wallet',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.adminCustomerWallet,
        icon: <Icon.User className="react-feather-icon" />,
      },
      {
        menuValue: 'Membership Transaction',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.membershipTransaction,
        icon: <Icon.Tv className="react-feather-icon" />,
      },
      {
        menuValue: 'Refund Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.refundReport,
        icon: <Icon.FileText className="react-feather-icon" />,
      },
      {
        menuValue: 'Register Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.registerreport,
        icon: <Icon.GitPullRequest className="react-feather-icon" />,
      },
      {
        menuValue: 'Sales Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.salesReport,
        icon: <Icon.BarChart className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'USER MANAGEMENT',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Users',
        hasSubRoute: true,
        showSubRoute: false,
        icon: <Icon.User className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Users',
            route: routes.users,
          },
          {
            menuValue: 'Customers',
            route: routes.userCustomer,
          },
          {
            menuValue: 'Providers',
            route: routes.userProviders,
          },
        ],
      },
      {
        menuValue: 'Roles & Permissions',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.roles,
        icon: <Icon.File className="react-feather-icon" />,
      },
      {
        menuValue: 'Delete Account Requests',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.deleteaccountrequests,
        icon: <Icon.Trash2 className="react-feather-icon" />,
      },
      {
        menuValue: 'Verification Requests',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.verificationRequest,
        icon: <Icon.DollarSign className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'MARKETING',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Coupons',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.coupons,
        icon: <Icon.Bookmark className="react-feather-icon" />,
      },
      {
        menuValue: 'Service Offers',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.offer,
        icon: <Icon.Briefcase className="react-feather-icon" />,
      },
      {
        menuValue: 'Featured Services',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.featureServices,
        icon: <Icon.Briefcase className="react-feather-icon" />,
      },
      {
        menuValue: 'Email Newsletter',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.emailNewsletter,
        icon: <Icon.Mail className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'MANAGEMENT',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Cache System',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.cacheSystem,
        icon: <Icon.User className="react-feather-icon" />,
      },
      {
        menuValue: 'Email Templates',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.emailTemplates,
        icon: <Icon.Mail className="react-feather-icon" />,
      },
      {
        menuValue: 'Sms Templates',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.smsTemplate,
        icon: <Icon.MessageSquare className="react-feather-icon" />,
      },
      {
        menuValue: 'Menu Management',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.menuManagement,
        icon: <Icon.FileText className="react-feather-icon" />,
      },
      {
        menuValue: 'Widgets',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.websiteSettings,
        icon: <Icon.CreditCard className="react-feather-icon" />,
      },
      {
        menuValue: 'Create Menu',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.createMenu,
        icon: <Icon.List className="react-feather-icon" />,
      },
      {
        menuValue: 'Plugin Managers',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.pluginManager,
        icon: <Icon.Tv className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'SUPPORT',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Contact Messages',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.contactMessages,
        icon: <Icon.MessageSquare className="react-feather-icon" />,
      },
      {
        menuValue: 'Abuse Reports',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.abuseReport,
        icon: <Icon.FileText className="react-feather-icon" />,
      },
      {
        menuValue: 'Announcements',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.announcements,
        icon: <Icon.Volume2 className="react-feather-icon" />,
      },
    ],
  },
  {
    tittle: 'SETTINGS',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Settings',
        hasSubRoute: false,
        showSubRoute: false,
        base: 'settings',
        route: routes.localization,
        icon: <Icon.Settings className="react-feather-icon" />,
      },
      {
        menuValue: 'Logout',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.signin,
        icon: <Icon.LogOut className="react-feather-icon" />,
      },
    ],
  },
];
