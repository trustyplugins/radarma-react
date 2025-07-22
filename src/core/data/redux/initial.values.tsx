import { bookingData } from '../json/all_booking';
import { ipaddress } from '../json/banip_address';
import { banktransfer } from '../json/bank_transferlist';
import { blogData } from '../json/blog_categories';
import { commentsData } from '../json/blog_comments';
import { CancelledData } from '../json/cancelled_booking';
import { dashboard } from '../json/dashboard_data';
import { membershipTransaction } from '../json/membership_transaction';
import { pageData } from '../json/page_list';
import { pagesData } from '../json/pages_list';
import { smstemplate } from '../json/sms_template';
import { statesData } from '../json/state';
import { subCategories } from '../json/sub_categories';
import { walletHistory } from '../json/wallet_history';
import { SalesReport } from '../json/sales_services';
import { ServicesData } from '../json/service';
import { ProviderLogin } from '../json/provider_loginactivity';
import { ProviderDevice } from '../json/providerdevice_management';
import { ProviderOffer } from '../json/provider_offer';
import { newsletter } from '../json/email_newsletter';
import { bookingCompletedData } from '../json/booking-completed';
import { cashOnDeliveryData } from '../json/cash-on-delivery';
import { citiesData } from '../json/cities';
import { ContactMessagesViewData } from '../json/contact-message-viewdata';
import { ContactMessages } from '../json/contact-messages';
import { countriesData } from '../json/countries';
import { couponsData } from '../json/coupons';
import { currenciesData } from '../json/currencies';
import { customersData } from '../json/customersdata';
// import { providersSidebar } from '../json/provider_sidebar';
import { RefundRequestData } from '../json/refund_requestsdata';
import { RegisterReportData } from '../json/register_reportdata';
import { RejectedTranferlistdata } from '../json/rejected_transferlistdata';
import { ReviewTypes } from '../json/review_typedata';
import { ReviewData } from '../json/reviewdata';
import { SalesTransactionsData } from '../json/sales_transactionsdata';
import { walletData } from '../json/wallet';
import { faqData } from '../json/faq';
import { featureServicesData } from '../json/feature-services';
import { payoutRequestsDate } from '../json/payout-requests';
import { pendingServiceData } from '../json/pending-services';
import { successfulTransferlistData } from '../json/successfull-transferlist';
import { systemBackUpData } from '../json/system-backup';
import { taxRatesData } from '../json/tax-rates';
import { testimonialsData } from '../json/testimonials';
import { verficationRequestData } from '../json/verfication-request';
import { header } from '../json/header';
import { adminDashboard1Data } from '../json/admin-dashboard1';
import { adminDashboard2Data } from '../json/admin-dashboard2';
import { adminEarningsData } from '../json/admin-earnings';
import { announcementsData } from '../json/announcements';
import { approvedTransferlistData } from '../json/approved-transferlist';
import { inActiveServicesData } from '../json/inactive-services';
import { inProgressBookingData } from '../json/inprogress-booking';
import { providerCouponsData } from '../json/provider-coupons';
import { providerSalesData } from '../json/provider-sales';
import { providerWalletData } from '../json/provider-wallet';
import { providersData } from '../json/providers';
import { DeviceManagementData } from '../json/device-managementdata';
import { DataBackupdata } from '../json/database_backupdata';
import { DeleteAccountrequestsdata } from '../json/delete_account_requestsdata';
import { DeletedServicesdata } from '../json/deleted_services_data';
import { emailTemplateData } from '../json/email-template';
import { userData } from '../json/users';
import { providerEarningsAdminData } from '../json/provider_earnings';
import { pendingTransferlistData } from '../json/pendingTransfetList-data';
import { providerEarning } from '../json/provider_earning';
import { offer } from '../json/offer';
import { customerWalletData } from '../service/admin/customerWalletData';
import { adminDashboard3Data } from '../json/admin-dashboard3';
import { refundReportData } from '../json/refund-reports';
import { categoriesData } from '../json/categoriesdata';
// import { customerWalletData } from '../json/customerWalletData';

const initialState = {
  header_data: header,
  dashboard_data: dashboard,
  toggleSidebar: false,
  toggleSidebar2: false,
  showLoader: true,
  darkMode: false,
  mouseOverSidebar: false,
  newsletterData: newsletter,
  ipaddressData: ipaddress,
  banktransferData: banktransfer,
  // providersSidebar:providersSidebar,
  current_route: { base: '', page: '', last: '' },
  current_route_array: [],
  refund_request: RefundRequestData,
  rejected_transferlist: RejectedTranferlistdata,
  review_data: ReviewData,
  review_data_type: ReviewTypes,
  sales_transactions: SalesTransactionsData,
  register_report: RegisterReportData,
  blog_data: blogData,
  blog_comments: commentsData,
  states_Date: statesData,
  all_booking: bookingData,
  cancelled_booking: CancelledData,
  page_data: pageData,
  pages_data: pagesData,
  sub_categories: subCategories,
  sms_template: smstemplate,
  wallet_history: walletHistory,
  membership_transaction: membershipTransaction,
  sales_report: SalesReport,
  service_data: ServicesData,
  providerlogin_activity: ProviderLogin,
  providerdevice_management: ProviderDevice,
  provider_offer: ProviderOffer,
  wallet: walletData,
  cities: citiesData,
  countries: countriesData,
  constantMessages: ContactMessages,
  contactMessageView: ContactMessagesViewData,
  currencies: currenciesData,
  coupons: couponsData,
  bookingCompleted: bookingCompletedData,
  cashOnDelivery: cashOnDeliveryData,
  customerData: customersData,
  faq: faqData,
  featureService: featureServicesData,
  payoutRequest: payoutRequestsDate,
  pendingService: pendingServiceData,
  successfulTransfetList: successfulTransferlistData,
  systemBackUp: systemBackUpData,
  taxRates: taxRatesData,
  testmonials: testimonialsData,
  verficationRequest: verficationRequestData,
  provider_wallet: providerWalletData,
  provider_coupons: providerCouponsData,
  admin_earnings: adminEarningsData,
  announcements: announcementsData,
  approved_transferlist: approvedTransferlistData,
  inactive_services: inActiveServicesData,
  admin_dashboard_1: adminDashboard1Data,
  admin_dashboard_2: adminDashboard2Data,
  inprogress_booking: inProgressBookingData,
  providers: providersData,
  provider_sales: providerSalesData,
  device_managementdata: DeviceManagementData,
  database_backup_data: DataBackupdata,
  delete_account_request_data: DeleteAccountrequestsdata,
  deleted_services_data: DeletedServicesdata,
  email_template: emailTemplateData,
  users: userData,
  provider_earnings_admin: providerEarningsAdminData,
  provider_earning: providerEarning,
  pendingTransferList: pendingTransferlistData,
  offer: offer,
  customerWallet: customerWalletData,
  mobileSidebar: false,
  refund_reports: refundReportData,
  admin_dashboard_3: adminDashboard3Data,
  offer_data: offer,
 categoriesData :categoriesData
};

export default initialState;
