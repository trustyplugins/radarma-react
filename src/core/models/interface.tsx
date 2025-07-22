import { ReactNode } from 'react';

export interface Header {
  menu(menu: any): unknown;
  map(arg0: (item: Header) => void): unknown;
  id?:number;
  img: string;
  subMenus: string;
  showSubRoute: string;
  menuValue: ReactNode;
  hasSubRoute: boolean;
  separateRoute: boolean;
  tittle: string;
  // menu(menu: string): unknown;
  showAsTab: boolean;
  routes: string;
  // map(arg0: (menus: string) => void): unknown;
  header_data: any;
  header: {
    tittle: string;
    showAsTab: boolean;
    separateRoute: boolean;
    menu: Array<{
      menuValue: string;
      routes?: string;
      hasSubRoute: boolean;
      showSubRoute: boolean;
      subMenus: Array<{
        menuValue: string;
        routes?: string;
        hasSubRoute: boolean;
        showSubRoute: boolean;
        subMenus: never[];
        last?: string;
      }>;
      last?: string;
    }>;
  }[];
}
export interface adminEarningsValue {
  '#': string;
  service: string;
  provider: string;
  paymentType: string;
  amount: string;
  commission: string;
  status: string;
  date: string;
  img: string;
}
export interface blogCategoriesValue {
  blog_data: any;
  data?:any;
  id?: number;
  img?: string;
  category?: string;
  language?: string;
  date?: string;
  Action?: string;
  value?: any;
}

export interface SubMenu {
  menuValue: string;
  routes: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  subMenus: SubMenu[];
}

export interface Menu {
  map(arg0: (item: string) => void): unknown;
  menuValue: string;
  img?: string;
  routes?: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  subMenus: SubMenu[];
}

export interface HeaderItem {
  subMenus: string | number;

  showSubRoute: boolean;
  menuValue: ReactNode;
  hasSubRoute: boolean;
  routes: string;
  map: string;
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: Menu[];
}

export interface MembershipTrans {
  membership_transaction: string;
  id: number;
  providername: string;
  subscription: string;
  amount: string;
  duration: string;
  startdate: string;
  enddate: string;
}

export interface devicemanage {
  device_managementdata: string;
  device: string;
  date: string;
  ipAddress: string;
  location: string;
  status: string;
}

export interface SMSTemp {
  [x: string]: string;
  ReferenceID: string ;
  smsTitle: string;
  Date: string;
  Action: string;
}

export interface Providerinterface {
  payoutDate: string;
  planDetails: string;
  amount: string;
  invoice: string;
  status: 'Paid' | 'Pending';
}

export interface deletedServices {
  deleted_services_data: string;
  id: number;
  image: string;
  discount: string;
  amt: string;
  tax: string;
  date1: string;
  date2: string;
  icon: string;
  icon1: string;
  name: string;
  category: string;
  created: string;
  sub: string;
  bg: string;
  content: string;
  class: string;
  bg1: string;
  content1: string;
  bg2: string;
  content2: string;
}

export interface providerLogins {
  providerlogin_activity: string;
  date: string;
  device: string;
  ipAddress: string;
  location: string;
  status: string;
}

export interface payoutDatas {
  payoutDate: string;
  amount: string;
  refunds: string;
  fees: string;
  total: string;
  status: string;
  paymentProcessed: string;
  color?: boolean;
  background?: boolean;
}

export interface ProviderEarningsAdmin {
  [x: string]: string | number;
  '#': string;
  service: string;
  user: string;
  paymentType: string;
  amount: string;
  status: string;
  date: string;
  img: string;
}

export interface ProviderEarningsadmindatas {
  ProviderEarningsAdmin: string;
  '#': string;
  service: string;
  user: string;
  paymentType: string;
  amount: string;
  status: string;
  date: string;
  img: string;
}
export interface AppState {
  mouseOverSidebar: string;
  toggleSidebar2: string;
  toggleSidebar: boolean;
  mobileSidebar: boolean;
  darkMode?:boolean;
}

export interface Pageinfos {
  current_route?: string;
  base: string;
  page: string;
  last: string;
}

interface Customer {
  name: string;
  image: string;
}

interface Service {
  name: string;
  image: string;
}

export interface Reviews {
  review_data: string;
  id: string;
  date: string;
  customer1: Customer;
  customer2: Customer;
  service: Service;
  status: string;
  rating: string;
  review: string;
}

export interface Device {
  providerdevice_management: string;
  device: string;
  date: string;
  ipAddress: string;
  location: string;
  status: string;
}

export interface Offers {
  provider_offer: string;
  img: string;
  service: string;
  amount: string;
  offer: string;
  offerprice: string;
  date: string;
  action: string;
  enddate: string;
}

export interface Coupons {
  coupons: string;
  name: string;
  code: string;
  type: string;
  discount: string;
  limit: string;
  used: string;
  validDate: string;
  content: string;
  servicesName: string;
  status: string;
}

export interface VerficationRequestInterface {
  name: string;
}
export interface DeleteAccountInterface {
  announcements: string | number;
  email: string;
  customerName: string;
  customer: string;
  delete_account_request_data: string;
  name: string;
}
export interface AccountInterface {
  announcements: string;
  name: string;
}
export interface ServiceSalesInterface {
  service: string;
  img: string;
  sales_report: string;
  name: string;
}
export interface CustomerWalletInterface {
  customerWallet: string;
  name: string;
}
export interface ProviderEarningsInterface {
  provider_earnings_admin: string;
  name: string;
}
export interface ProviderSalesInterface {
  provider_sales: string;
  name: string;
}
export interface ProviderWalletInterface {
  provider_wallet: string;
  name: string;
}
export interface RefundReportInterface {
  refund_reports: string;
  name: string;
}
export interface RegisterReportInterface {
  register_report: string;
  name: string;
}
export interface PageListInterface {
  page_data: string;
  name: string;
}
export interface PagesListInterface {
  pages_data: string;
  name: string;
}
export interface ReviewInterface {
  review_data: string;
  service: string;
  customer2: string;
  customer1: string;
  name: string;
}
export interface ReviewTypeInterface {
  isActive: boolean | undefined;
  review_data_type: string;
  name: string;
}
export interface OfferInterface {
  offer: string;
  name: string;
}
export interface InactiveserviceInterface {
  inactive_services: string;
  name: string;
}
export interface ActiveserviceInterface {
  status: string;
  service: string;
  img: string;
  name: string;
}
export interface AllserviceInterface {
  img1: string;
  status: string;
  service: string;
  img: string;
  service_data: string;
  name: string;
}
export interface DeletedServiceInterface {
  name: string;
}
export interface CurrentRoute {
  current_route_array: string;
  id: number;
  path: string;
}

export interface CustomerDevicemanage {
  device_management: string;
  device: string;
  date: string;
  ipAddress: string;
  location: string;
  status: string;
}

export type SidebarItem = {
  link: string;
  name: string;
  icon: JSX.Element;
};

export interface CustomerSidebarItem {
  link: string;
  name: string;
  icon: React.ReactElement;
}

// export interface filterdropdwn {
//   className: string | undefined;
//   placeholder: string;
//   list: SelectItemOptionsType | undefined;
//   id: number;
//   name: string;
// }

export interface ListItem {
  name: string;
}

export interface FilterDropDownProps {
  list: ListItem[];
  placeholder?: string;
  className?: string;
}

export interface Userinterface {
  id: number;
  img: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  lastActivity: string;
  created: string;
  status: string;
  action: string;
}

export interface rowdatas {
  name: string;
  img: string;
  id: number;
}

export interface DeleteAccounts {
  id: string;
  dates: string;
  dates1: string;
  customer: string; // Assuming this is the path to the customer image
  content: string;
  customerName: string;
  email: string;
}

export interface Taxes {
  taxRates: string;
  id: number;
  taxName: string;
  taxPercentage: string;
  action: string;
}

export interface Provider {
  providers: string;
  '#': string;
  providerName: string;
  providerEmail: string;
  mobile: string;
  regDate: string;
  lastActivity: string;
  status: string;
  img: string;
}

export interface AnnouncementValues {
  announcements: string;
  '#': string;
  subject: string;
  message: string;
  sendTo: string;
  date: string;
}

export interface NewslettersItem {
  newsletterData: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  date2: string;
  img: string;
}

export interface ChangeEvent {
  target: {
    value: string;
  };
}

export interface emailletter {
  target: string;
  name: string;
}

export interface FaqItem {
  faq: any;
  id: number;
  title: string;
  category: string;
  details: string;
  action: string;
}

export interface FeatureServicesdata {
  featureService: string;
  id: string;
  service: string;
  serviceStatus: string;
  category: string;
  amount: string;
  providerName: string;
  status: string;
  action: string;
}

export interface WalletHistoryItems {
  id: number;
  type: string;
  amount: string;
  date: string;
  paymenttype: string;
  status: string;
}

export interface WalletHistoryrowData {
  status: string;
  name: string;
}
export interface approvedtransfer {
  status: string;
  img3: string;
  receipt: string;
  img2: string;
  customer: string;
  img: string;
  service: string;
  name: string;
}

export interface ApprovedTransferdatas {
  '#': string;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img: string;
  img2: string;
  img3: string;
}

export interface BankTransferItemdatas {
  banktransferData: string | number;
  '#': string;
  img1: string;
  img2: string;
  img3: string;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
}

export interface RefundRequestdatas {
  refund_request: string | number;
  id: number;
  profile: string;
  texts: string;
  dates: string;
  customer: string;
  customer1: string;
  customerName: string;
  customerName1: string;
  amt: string;
  pending: string;
  reason: string;
  bg: string;
}

export interface PendingTransferinterface {
  pendingTransferList: string | number;
  '#': string;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
  img: string;
  img2: string;
  img3: string;
}
export interface RejectedTransferdatas {
  rejected_transferlist: string | number;
  id: string;
  name: string;
  customer: string;
  invoice: string;
  description: string;
  date: string;
  status: string;
  image: string;
  customerimg: string;
  invoiceimg: string;
  className: string;
}

export interface Customerdatas {
  name: string;
  image: string;
  email: string;
}

export interface Servicesdatas {
  image: string;
  name: string;
}

export interface SalesTransactiondatas {
  sales_transactions: string | number;
  id: string;
  customer1: Customerdatas;
  customer2: Customerdatas;
  service: Servicesdatas;
  price: string;
  discount: string;
  tax: string;
  date: string;
  payment_method: string;
  status: {
    text: string;
    badgeClass: string;
  };
}

// admin
export interface AbuseReportData {
  reportedByUser: ReactNode;
  img2: string | undefined;
  img1: string | undefined;
  provider: ReactNode;
  name: string;
}

export interface AddBlogInterface {
  isFocused: string | number;
  target: string | number;
  img1: string | undefined;
}
export interface BlogCommentsInterface {
  blog_comments: blogCategoriesValue;
}
export interface BookingInterface {
  all_booking: string;
  status: string;
  img3: string;
  service: string;
  img2: string;
  user: string;
  img1: string;
  provider: string;
  name: string;
}
export interface CancelledBookingInterface {
  cancelled_booking: string | number;
  status: string;
  img2: string;
  img1: string;
  provider: string;
  img3: string;
  service: string;
  user: string;
}
export interface CompletedBookingInterface {
  bookingCompleted: string;
  id: string;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  dateAndTime: string;
  action: string;
  img?: string;
  userImg?: string;
  serviceImg?: string;
  name?: string;
  payoutMethod?: string;
  createdAt?: string;
}

export interface CompletedBookingInterface {
  user: string;
}

export interface PendingBookinginterface {
  bookingCompleted: string;
  id: string;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  dateAndTime: string;
  action: string;
  img?: string;
  userImg?: string;
  serviceImg?: string;
  name?: string;
  payoutMethod?: string;
  createdAt?: string;
}

export interface InprogressBookingInterface {
  status: string;
  img2: string;
  img1: string;
  provider: string;
  img3: string;
  service: string;
  inprogress_booking: string;
  user: string;
}

export interface CashOnDeliveryInterface {
  status: string;
  cashOnDelivery: string;
}
export interface CategoriesListInterface {
  categoriesData: string;
}
export interface SubCategoriesListInterface {
  sub_categories: string;
  status: string;
  data:any;
}
export interface ContactMessagesInterface {
  contactMessageView: string | number;
  name: string;
  image: string | undefined;
  img: string;
  constantMessages: string;
  status: string;
}

export interface ContactMessagesInterface {
  img: string;
}
export interface CouponsInterface {
  coupons: string;
  status: string;
}
export interface AdminDashboardInterface {
  providerImg: string;
  provider: string;
  userImg: string;
  user: string;
  serviceImg: string;
  providerName: string;
  img: string;
  service: string;
}
export interface VerficationRequestInterface {
  status: string | number | readonly string[] | undefined;
  verficationRequest: string;
}
export interface AccountSettingsInterface {
  target: string | number;
}
export interface BanIpAddressInterface {
  ipaddressData: string;
  user: string;
}
export interface ProviderEarningfront {
  provider_earning: string | number;
  '#': string;
  service: string;
  user: string;
  paymentType: string;
  amount: string;
  status: string;
  date: string;
  img: string;
  EarnedAmount: string;
}

export interface addblogsinterface {
  target: string | number;
  name: string;
}

export interface providerRowData {
  status: string;
}

export interface serviceinfodata {
  target: string | number;
  status: string;
  id: number;
  additionalService: string;
  price: number;
  duration: string;
}

export interface langdata {
  img1: string;
  language: string | number;
  status: string;
}

export interface SideBarData {
  tittle: string;
  active: boolean;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: MenuItem[];
  menuValue: string;
  menuValue1?: string;
  showSubRoute: boolean;
  route: string;
  hasSubRoute: boolean;
  base: string;
  subMenus: subMenus[];
  Mainmenu: mainMenu[];
  url: string;
}
export interface mainMenu {
  menu: MenuItem[];
  separateRoute: boolean;
  menuValue: string;
  tittle: string;
  route: string;
  base: string;
  icon: string;
  showAsTab: boolean;
  url: string;
}
export interface subMenus {
  url: string;
  separateRoute: boolean;
  menuValue: string;
  tittle: string;
  icon: string;
  showAsTab: boolean;
  showSubRoute: boolean;
  title: string;
  route?: string;
  base?: string;
}
export interface MenuItem {
  menuValue: string;
  showSubRoute: boolean;
  route: string;
  hasSubRoute: boolean;
  icon: string;
  base: string;
  url: string;
}
export interface emailTemp {
  email_template: string | number;
  referenceId: number;
  emailTitle: string;
  date: string;
  action: string;
}

export interface DataBackups {
  database_backup_data: string | number;
  id: number;
  name: string;
  date: string;
  class: string;
}

export interface StateDatas {
  states_Date: string | number;
  id: number;
  countryName: string;
  img: string;
  countryCode: string;
  stateName: string;
  Action: string;
}

export interface SuccessfulTransferdata {
  successfulTransfetList: string | number;
  '#': string;
  img1: string;
  img2: string;
  img3: string;
  service: string;
  customer: string;
  receipt: string;
  description: string;
  date: string;
  status: string;
}

export interface AdminDashboardOne {
  admin_dashboard_1: string | number;
  '#': string;
  service: string;
  category: string;
  amount: string;
  img: string;
}

export interface AdminDashboardTwo {
  admin_dashboard_2: string | number;
  '#': string;
  providerName: string;
  email: string;
  phone: string;
  img: string;
}

export interface storage {
  name: string;
}

export interface CurrenciesInterface {
  currencies: string | number;
}
export interface DatabasebackupInterface {
  database_backup_data: string | number;
}

export interface LanguageInterface {
  img1: string;
  language: string;
}
export interface SystemBackupInterface {
  systemBackUp: string | number;
}
export interface TaxRatesInterface {
  taxRates: any;
}
