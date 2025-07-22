export const adminDashboard3Data = [
  {
    '#': '1',
    date: '28 Sep 2023',
    bookingTime: '10:00:00 - 11:00:00',
    provider: 'John Smith',
    user: 'Sharon',
    service: 'Computer Repair',
    amount: '$80',
    status: 'Pending',
    userImg: 'assets/admin/img/customer/user-03.jpg',
    serviceImg: 'assets/admin/img/services/service-03.jpg',
    providerImg: 'assets/admin/img/customer/user-01.jpg',
  },
  {
    '#': '2',
    date: '10 Sep 2023',
    bookingTime: '18:00:00 - 19:00:00',
    provider: 'Johnny',
    user: 'Pricilla',
    service: 'Car Repair Services',
    amount: '$50',
    status: 'Completed',
    userImg: 'assets/admin/img/customer/user-04.jpg',
    serviceImg: 'assets/admin/img/services/service-02.jpg',
    providerImg: 'assets/admin/img/customer/user-04.jpg',
  },
  {
    '#': '3',
    date: '25 Sep 2023',
    bookingTime: '12:00:00 - 13:00:00',
    provider: 'Robert',
    user: 'Amanda',
    service: 'Steam Car Wash',
    amount: '$50',
    status: 'Inprogress',
    userImg: 'assets/admin/img/customer/user-06.jpg',
    serviceImg: 'assets/admin/img/services/service-04.jpg',
    providerImg: 'assets/admin/img/customer/user-06.jpg',
  },
  {
    '#': '4',
    date: '08 Sep 2023',
    bookingTime: '07 Oct 2023 11:22:51',
    provider: 'Sharonda',
    user: 'James',
    service: 'House Cleaning',
    amount: '$50',
    status: 'Cancelled',
    userImg: 'assets/admin/img/customer/user-09.jpg',
    serviceImg: 'assets/admin/img/services/service-09.jpg',
    providerImg: 'assets/admin/img/customer/user-09.jpg',
  },
  {
    '#': '5',
    date: '28 Sep 2023',
    bookingTime: '10:00:00 - 11:00:00',
    provider: 'John Smith',
    user: 'Sharon',
    service: 'Computer Repair',
    amount: '$80',
    status: 'Pending',
    userImg: 'assets/admin/img/customer/user-01.jpg',
    serviceImg: 'assets/admin/img/services/service-03.jpg',
    providerImg: 'assets/admin/img/customer/user-01.jpg',
  },
];

export interface AdminDashboardThree {
  '#': string;
  date: string;
  bookingTime: string;
  provider: string;
  user: string;
  service: string;
  amount: string;
  status: string;
  userImg: string;
  serviceImg: string;
  providerImg: string;
}
