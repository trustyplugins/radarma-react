import React from 'react';
import * as Icon from 'react-feather';
import { all_routes } from '../routes/all_routes';
const routes = all_routes;
export const adminSidebar2 = [
  {
    tittle: 'Listings',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Listings',
        hasSubRoute: true,
        showSubRoute: false,
        route: routes.services,
        icon: <Icon.Briefcase className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Add Listing',
            route: routes.addServices,
          },
          {
            menuValue: 'Listings',
            route: routes.allServices,
          },
        ],
      },
    ],
  },
  {
    tittle: 'SETTINGS',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Logout',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.logout,
        icon: <Icon.LogOut className="react-feather-icon" />,
      },
    ],
  },
];
