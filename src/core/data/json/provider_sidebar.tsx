import React from 'react';
import { all_routes } from '../routes/all_routes';
import * as Icon from 'react-feather';
const routes = all_routes;

export const providersSidebar = [
    {
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: <Icon.Bookmark className="react-feather-icon" />,
          subMenus: [],
        },
        {
          menuValue: 'My Services',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-briefcase',
          subMenus: [],
        },
        {
          menuValue: 'Bookings',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-calendar',
          subMenus: [],
        },
        {
          menuValue: 'Payout',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-credit-card',
          subMenus: [],
        },
        {
          menuValue: 'Availability',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-clock',
          subMenus: [],
        },
        {
          menuValue: 'Holidays & Leave',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-calendar',
          subMenus: [],
        },
        {
          menuValue: 'Coupons',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-bookmark',
          subMenus: [],
        },
        {
          menuValue: 'Subscription',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-dollar-sign',
          subMenus: [],
        },
        {
          menuValue: 'Offers',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-percent',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-star',
          subMenus: [],
        },
        {
          menuValue: 'Earnings',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-dollar-sign',
          subMenus: [],
        },
        {
          menuValue: 'Chat',
          route: routes.addSubscription,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'icon-message-circle',
          subMenus: [],
        },
      ],
    },
  ];