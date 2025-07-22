/* eslint-disable @typescript-eslint/no-explicit-any */
import initialState from './initial.values';

const rootReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case 'HEADER_DATA':
      return { ...state, header_data: action.payload };
    case 'DASHBOARD_DATA':
      return { ...state, dashboard_data: action.payload };
    case 'TOOGLE_SIDEBAR_DATA':
      return { ...state, toggleSidebar: action.payload };
    case 'TOOGLE_SIDEBAR_DATA_2':
      return { ...state, toggleSidebar2: action.payload };
    case 'TOOGLE_MOUSEOVER_DATA':
      return { ...state, mouseOverSidebar: action.payload };
    case 'TOOGLE_DARK_MODE':
      return { ...state, darkMode: action.payload };
    case 'CURRENT_ROUTE_DATA':
      return { ...state, current_route: action.payload };
    case 'CURRENT_ROUTE_ARRAY_DATA':
      return { ...state, current_route_array: action.payload };
    case 'REFUND_REQUEST':
      return { ...state, refund_request: action.payload };
    case 'REJECTED_TRANSFERLIST':
      return { ...state, rejected_transferlist: action.payload };
    case 'SHOW_LOADER':
      return { ...state, showLoader: action.payload };
    case 'NEWSLETTER':
      return { ...state, newsletterData: action.payload };
    case 'REVIEW_DATA':
      return { ...state, review_data: action.payload };
    case 'REVIEW_DATA_TYPES':
      return { ...state, review_data_type: action.payload };
    case 'SALES_TRANSACTIONS':
      return { ...state, sales_transactions: action.payload };
    case 'REGISTER_REPORT_DATA':
      return { ...state, register_report: action.payload };
    case 'IPADDRESSDATA':
      return { ...state, ipaddressData: action.payload };
    case 'BANKTRANSFERDATA':
      return { ...state, banktransferData: action.payload };
    case 'BLOGDATA':
      return { ...state, blog_data: action.payload };
    case 'blog_comments':
      return { ...state, blog_comments: action.payload };
    case 'all_booking':
      return { ...state, all_booking: action.payload };
    case ' cancelled_booking':
      return { ...state, cancelled_booking: action.payload };
    case 'states_Date':
      return { ...state, states_Date: action.payload };
    case ' page_data ':
      return { ...state, page_data: action.payload };
    case ' pages_data ':
      return { ...state, pages_data: action.payload };
    case ' sub_categories ':
      return { ...state, sub_categories: action.payload };
    case ' sms_template ':
      return { ...state, sms_template: action.payload };
    case '  wallet_history ':
      return { ...state, wallet_history: action.payload };
    case '  membership_transaction ':
      return { ...state, membership_transaction: action.payload };
    case 'SERVICE_DATA':
      return { ...state, service_data: action.payload };
    case 'SALESREPORT':
      return { ...state, sales_report: action.payload };
    case 'LOGINACTIVITY':
      return { ...state, providerlogin_activity: action.payload };
    case 'DEVICEMANAGEMENT':
      return { ...state, providerdevice_management: action.payload };
    case 'PROVIDEROFFER':
      return { ...state, provider_offer: action.payload };

    case 'WALLET':
      return { ...state, wallet: action.payload };
    case 'CITIES':
      return { ...state, cities: action.payload };
    case 'COUNTRIES':
      return { ...state, countries: action.payload };
    case 'CONTACTMESSAGES':
      return { ...state, constantMessages: action.payload };
    case 'CONTACTMESSAGESVIEW':
      return { ...state, contactMessageView: action.payload };
    case 'CURRENCIES':
      return { ...state, currencies: action.payload };
    case 'COUPONS':
      return { ...state, coupons: action.payload };
    case 'COMPLETED_BOOKING':
      return { ...state, bookingCompleted: action.payload };
    case 'CASH_ON_DELIVERY':
      return { ...state, cashOnDelivery: action.payload };
    case 'CUSTOMERS':
      return { ...state, customerData: action.payload };
    case 'FAQ':
      return { ...state, faqData: action.payload };
    case 'FEATURE_SERVICE':
      return { ...state, featureService: action.payload };
    case 'PAYOUT_REQUEST':
      return { ...state, payout_request: action.payload };
    case 'PENDING_SERVICE':
      return { ...state, pendingService: action.payload };
    case 'SUCCESSFUL_TRANSFERLIST':
      return { ...state, successfulTransfetList: action.payload };
    case 'SYSTEM_BACKUP':
      return { ...state, systemBackUp: action.payload };
    case 'TAX_RATES':
      return { ...state, taxRates: action.payload };
    case 'TESTIMONIAL':
      return { ...state, testmonials: action.payload };
    case 'VERFICATION_REQUEST':
      return { ...state, verficationRequest: action.payload };
    case 'provider_wallet':
      return { ...state, provider_wallet: action.payload };
    case 'device_management':
      return { ...state, device_management: action.payload };
    case 'provider_coupons':
      return { ...state, provider_coupons: action.payload };
    case 'admin_earnings':
      return { ...state, admin_earnings: action.payload };
    case 'announcements':
      return { ...state, announcements: action.payload };
    case 'approved_transferlist':
      return { ...state, approved_transferlist: action.payload };
    case 'inactive_Services':
      return { ...state, inactive_Services: action.payload };
    case 'admin_dashboard_1':
      return { ...state, admin_dashboard_1: action.payload };
    case 'admin_dashboard_2':
      return { ...state, admin_dashboard_2: action.payload };
    case 'admin_dashboard_3':
      return { ...state, admin_dashboard_3: action.payload };
    case 'inprogress_booking':
      return { ...state, inprogress_booking: action.payload };
    case 'providers':
      return { ...state, providers: action.payload };
    case 'provider_sales':
      return { ...state, provider_sales: action.payload };
    case 'Device_Management_Data':
      return { ...state, device_managementdata: action.payload };

    case 'Database_Backupdata':
      return { ...state, database_backup_data: action.payload };

    case 'Delete_Account_Requestdata':
      return { ...state, delete_account_request_data: action.payload };

    case 'Deleted_Services_Data':
      return { ...state, deleted_services_data: action.payload };

    case 'EMAILTEMPLATE':
      return { ...state, email_template: action.payload };
    case 'USERS':
      return { ...state, users: action.payload };
    case 'PENDINGTRANSFERLIST':
      return { ...state, pendingTransferList: action.payload };
    case 'provider_earnings_admin':
      return { ...state, provider_earnings_admin: action.payload };
    case 'MOBILE_SIDEBAR':
      return { ...state, mobileSidebar: action.payload };
    case 'provider_earning':
      return { ...state, provider_earning: action.payload };
    case 'OFFER':
      return { ...state, offer: action.payload };
    case 'CUSTOMER_WALLET':
      return { ...state, customerWallet: action.payload };
    case 'refund_reports':
      return { ...state, refund_reports: action.payload };
      case ' offer_data':
      return { ...state,  offer_data: action.payload };
    case 'categoriesData':
      return { ...state, CATEGORIES: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
