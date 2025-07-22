/* eslint-disable @typescript-eslint/no-explicit-any */
export const header_data = () => ({ type: 'HEADER_DATA' });
export const set_header_data = (payload: any) => ({
  type: 'HEADER_DATA',
  payload,
});
export const dashboard_data = () => ({ type: 'DASHBOARD_DATA' });
export const set_dashboard_data = (payload: any) => ({
  type: 'DASHBOARD_DATA',
  payload,
});
export const toggleSidebar = () => ({ type: 'TOOGLE_SIDEBAR_DATA' });
export const set_toggleSidebar_data = (payload: boolean) => ({
  type: 'TOOGLE_SIDEBAR_DATA',
  payload,
});
export const toggleSidebar2 = () => ({ type: 'TOOGLE_SIDEBAR_DATA_2' });
export const set_toggleSidebar_data_2 = (payload: boolean) => ({
  type: 'TOOGLE_SIDEBAR_DATA_2',
  payload,
});
export const mouseOverSidebar = () => ({ type: 'TOOGLE_MOUSEOVER_DATA' });
export const set_mouseoversidebar_data = (payload: boolean) => ({
  type: 'TOOGLE_MOUSEOVER_DATA',
  payload,
});
export const toggleDarkMode = () => ({ type: 'TOOGLE_DARK_MODE' });
export const set_dark_mode = (payload: boolean) => ({
  type: 'TOOGLE_MOUSEOVER_DATA',
  payload,
});
export const provider_sidebar = () => ({ type: 'PROVIDER_SIDEBAR_DATA' });
export const set_ProviderSidebar_data = (payload: boolean) => ({
  type: 'TOOGLE_SIDEBAR_DATA',
  payload,
});
export const current_route = () => ({ type: 'CURRENT_ROUTE_DATA' });
export const set_current_route = (payload: any) => ({
  type: 'CURRENT_ROUTE_DATA',
  payload,
});
export const current_route_array = () => ({ type: 'CURRENT_ROUTE_DATA' });
export const set_current_route_array = (payload: any) => ({
  type: 'CURRENT_ROUTE_ARRAY_DATA',
  payload,
});
export const set_refund_request = (payload: any) => ({
  type: 'REFUND_REQUEST',
  payload,
});
export const newsletterData = () => ({ type: 'NEWSLETTER' });
export const setnewsletterData = (payload: any) => ({
  type: 'NEWSLETTER',
  payload,
});
export const ipaddressData = () => ({ type: 'IPADDRESSDATA' });
export const setipaddressData = (payload: any) => ({
  type: 'IPADDRESSDATA',
  payload,
});
export const banktransferDate = () => ({ type: 'BANKTRANSFERDATA' });
export const setbanktransferDate = (payload: any) => ({
  type: 'BANKTRANSFERDATA',
  payload,
});
export const blog_data = () => ({ type: 'BLOGDATA' });
export const set_blog_data = (payload: any) => ({
  type: 'BLOGDATA',
  payload,
});
export const blog_comments = () => ({ type: 'BLOGCOMMENTS' });
export const set_blog_comments = (payload: any) => ({
  type: 'BLOGCOMMENTS',
  payload,
});
export const all_booking = () => ({ type: 'ALLBooking' });
export const set_all_booking = (payload: any) => ({
  type: 'ALLBooking',
  payload,
});
export const cancelled_booking = () => ({ type: 'CANCELLEDBooking' });
export const set_cancelled_booking = (payload: any) => ({
  type: 'CANCELLEDBooking',
  payload,
});
export const page_data = () => ({ type: 'PAGEDATA' });
export const set_page_data = (payload: any) => ({
  type: 'PAGEDATA',
  payload,
});
export const pages_data = () => ({ type: 'PAGESDATA' });
export const set_pages_data = (payload: any) => ({
  type: 'PAGESDATA',
  payload,
});
export const states_Date = () => ({ type: 'STATESDATA' });
export const set_states_Date = (payload: any) => ({
  type: 'STATESDATA',
  payload,
});
export const sub_categories = () => ({ type: 'STATESDATA' });
export const set_sub_categories = (payload: any) => ({
  type: 'STATESDATA',
  payload,
});
export const sms_template = () => ({ type: 'SMSTEMPLATE' });
export const set_sms_template = (payload: any) => ({
  type: 'SMSTEMPLATE',
  payload,
});
export const wallet_history = () => ({ type: 'WALLETHISTORY' });
export const set_wallet_history = (payload: any) => ({
  type: 'WALLETHISTORY',
  payload,
});
export const membership_transaction = () => ({ type: 'MEMBERSHIPTRANSACTION' });
export const set_membership_transaction = (payload: any) => ({
  type: 'MEMBERSHIPTRANSACTION',
  payload,
});
export const salesReportData = () => ({ type: 'SALESREPORT' });
export const setsalesReportData = (payload: any) => ({
  type: 'SALESREPORT',
  payload,
});
export const serviceData = () => ({ type: 'SERVICE_DATA' });
export const setserviceData = (payload: any) => ({
  type: 'SERVICE_DATA',
  payload,
});
export const providerlogin_activity = () => ({ type: 'LOGINACTIVITY' });
export const set_providerlogin_activity = (payload: any) => ({
  type: 'LOGINACTIVITY',
  payload,
});
export const providerdevice_management = () => ({ type: 'DEVICEMANAGEMENT' });
export const set_providerdevice_management = (payload: any) => ({
  type: 'DEVICEMANAGEMENT',
  payload,
});
export const provider_offer = () => ({ type: 'PROVIDEROFFER' });
export const set_provider_offer = (payload: any) => ({
  type: 'PROVIDEROFFER',
  payload,
});
export const set_show_loader = (payload: any) => ({
  type: 'SHOW_LOADER',
  payload,
});

export const set_rejected_transferlist = (payload: any) => ({
  type: 'REJECTED_TRANSFERLIST',
  payload,
});

export const set_review_data = (payload: any) => ({
  type: 'REVIEW_DATA',
  payload,
});

export const set_review_data_type = (payload: any) => ({
  type: 'REVIEW_DATA_TYPES',
  payload,
});

export const set_salary_transactions = (payload: any) => ({
  type: 'SALES_TRANSACTIONS',
  payload,
});

export const set_register_report = (payload: any) => ({
  type: 'REGISTER_REPORT_DATA',
  payload,
});
export const set_wallet = (payload: any) => ({
  type: 'WALLET',
  payload,
});
export const set_cities = (payload: any) => ({
  type: 'CITIES',
  payload,
});
export const set_countries = (payload: any) => ({
  type: 'COUNTRIES',
  payload,
});
export const set_contact_message = (payload: any) => ({
  type: 'CONTACTMESSAGES',
  payload,
});
export const set_contact_message_view = (payload: any) => ({
  type: 'CONTACTMESSAGESVIEW',
  payload,
});
export const set_currencies = (payload: any) => ({
  type: 'CURRENCIES',
  payload,
});
export const set_coupons = (payload: any) => ({
  type: 'COUPONS',
  payload,
});
export const set_completed_booking = (payload: any) => ({
  type: 'COMPLETED_BOOKING',
  payload,
});
export const set_cash_on_delivery = (payload: any) => ({
  type: 'CASH_ON_DELIVERY',
  payload,
});
export const customers = (payload: any) => ({
  type: 'CUSTOMERS',
  payload,
});
export const faq = (payload: any) => ({
  type: 'FAQ',
  payload,
});
export const feature_Service = (payload: any) => ({
  type: 'FEATURE_SERVICE',
  payload,
});
export const payout_request = (payload: any) => ({
  type: 'PAYOUT_REQUEST',
  payload,
});
export const pending_service = (payload: any) => ({
  type: 'PENDING_SERVICE',
  payload,
});
export const succesful_transferlist = (payload: any) => ({
  type: 'SUCCESSFUL_TRANSFERLIST',
  payload,
});
export const system_backup = (payload: any) => ({
  type: 'SYSTEM_BACKUP',
  payload,
});
export const tax_rates = (payload: any) => ({
  type: 'TAX_RATES',
  payload,
});
export const testimonial = (payload: any) => ({
  type: 'TESTIMONIAL',
  payload,
});
export const verfication_request = (payload: any) => ({
  type: 'VERFICATION_REQUEST',
  payload,
});
export const setProviderWallet = (payload: any) => ({
  type: 'provider_wallet',
  payload,
});
export const setDeviceManagement = (payload: any) => ({
  type: 'device_management',
  payload,
});
export const setProviderCoupons = (payload: any) => ({
  type: 'provider_coupons',
  payload,
});
export const setAdminEarnings = (payload: any) => ({
  type: 'admin_earnings',
  payload,
});
export const setAnnouncements = (payload: any) => ({
  type: 'announcements',
  payload,
});
export const setApprovedTransferList = (payload: any) => ({
  type: 'approved_transferlist',
  payload,
});
export const setInActiveServices = (payload: any) => ({
  type: 'inactive_services',
  payload,
});
export const setAdminDashboard1 = (payload: any) => ({
  type: 'admin_dashboard-1',
  payload,
});
export const setAdminDashboard2 = (payload: any) => ({
  type: 'admin-dashboard-2',
  payload,
});
export const setAdminDashboard3 = (payload: any) => ({
  type: 'admin_dashboard-3',
  payload,
});
export const setInProgressBooking = (payload: any) => ({
  type: 'inprogress_booking',
  payload,
});
export const setProviders = (payload: any) => ({
  type: 'providers',
  payload,
});
export const setProviderSales = (payload: any) => ({
  type: 'provider_sales',
  payload,
});
export const set_device_management = (payload: any) => ({
  type: 'Device_Management_Data',
  payload,
});

export const set_databasebackup_data = (payload: any) => ({
  type: 'Database_Backupdata',
  payload,
});

export const set_deleteaccount_requestdata = (payload: any) => ({
  type: 'Delete_Account_Requestdata',
  payload,
});

export const set_deleted_services_data = (payload: any) => ({
  type: 'Deleted_Services_Data',
  payload,
});
export const setemail = (payload: any) => ({
  type: 'EMAILTEMPLATE',
  payload,
});
export const setUsers = (payload: any) => ({
  type: 'USERS',
  payload,
});
export const setPendingTransferList = (payload: any) => ({
  type: 'PENDINGTRANSFERLIST',
  payload,
});

export const setProviderEarningsAdmin = (payload: any) => ({
  type: 'provider_earnings_admin',
  payload,
});
export const setProviderEarnings = (payload: any) => ({
  type: 'provider_earnings',
  payload,
});
export const get_is_mobile_sidebar = () => ({ type: 'MOBILE_SIDEBAR' });
export const set_is_mobile_sidebar = (payload: any) => ({
  type: 'MOBILE_SIDEBAR',
  payload,
});
export const setProvider= (payload: any) => ({
  type: 'provider_earning',
  payload,
});
export const setoffer= (payload: any) => ({
  type: 'OFFER',
  payload,
});
export const setcustomer_wallet= (payload: any) => ({
  type: 'CUSTOMER_WALLET',
  payload,
  
});
export const refundReports = (payload: any) => ({
  type: 'refund_reports',
  payload
});
export const setOffer= (payload: any) => ({
  type: 'offer_data',payload
});
export const categories = (payload: any) => ({
  type: 'CATEGORIES',
  payload
});