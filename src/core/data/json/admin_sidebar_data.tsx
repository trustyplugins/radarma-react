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
          {
            menuValue: 'Listing Settings',
            route: routes.serviceSettings,
          },
        ],
      },
      {
        menuValue: 'Taxonomies',
        hasSubRoute: true,
        showSubRoute: false,
        route: routes.city,
        icon: <Icon.FileText className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'City',
            route: routes.city,
          },
          {
            menuValue: 'Sector/Phase',
            route: routes.sectorPhase,
          },
          {
            menuValue: 'Categories',
            route: routes.mainCategory,
          },
          {
            menuValue: 'Sub Categories',
            route: routes.subCategories,
          },
          {
            menuValue: 'Tags',
            route: routes.sortingTags,
          },
          {
            menuValue: 'Sub Tags',
            route: routes.subTags,
          },
          {
            menuValue: 'JSON',
            route: routes.jsonData,
          }
        ],
      },
      {
        menuValue: 'AI Agent',
        hasSubRoute: true,
        showSubRoute: false,
        route: routes.city,
        icon: <Icon.FileText className="react-feather-icon" />,
        subMenus: [
          {
            menuValue: 'Add Listing',
            route: routes.ai_add_listing,
          },
         
        ],
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
        ],
      },
      {
        menuValue: 'Roles & Permissions',
        hasSubRoute: false,
        showSubRoute: false,
        route: routes.roles,
        icon: <Icon.File className="react-feather-icon" />,
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
        route: routes.logout,
        icon: <Icon.LogOut className="react-feather-icon" />,
      },
    ],
  },
];
