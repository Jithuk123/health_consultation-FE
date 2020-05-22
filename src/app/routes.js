// import Dashboard from './Containers/Dashboard';
// import Notifications from './Containers/Notifications.jsx';
// import Icons from './Containers/Icons';
// import Typography from './Containers/Typography.jsx';
// import TableList from './Containers/Tables';
// import Maps from './views/Map.jsx';
// import UserPage from './Containers/User.jsx';
// import UpgradeToPro from './Containers/Upgrade.jsx';
import MyDashboard from './Container/Dashboard';
import Doctor from './Container/Doctor';
import LabTechnician from './Container/LabTechnician';
import Medicine from './Container/Medicine';
import MedicalTest from './Container/MedicalTests';
import Profile from './Container/Profile';
import Appointments from './Container/Appointments';

import PatientAppointment from './Container/D-PatientAppointment';
import CreatePatient from './Container/D-CreatePatient';
import CreateAppointment from './Container/D-CreateAppointment';
import Prescription from './Container/D-Prescription';
import Observation from './Container/D-Observation';

import UpcommingTest from './Container/L-UpcommingTest';
import UpdateResult from './Container/L-UpdateResult';

var routes = [
  {
    path: '/dashboard',
    name: 'MyDashboard',
    icon: 'nc-icon nc-bank',
    component: MyDashboard,
    layout: '/admin',
  },
  {
    path: '/doctors',
    name: 'DOCTOR',
    icon: 'fas fa-user-md',
    component: Doctor,
    layout: '/admin',
  },
  {
    path: '/lab-technician',
    name: 'LAB TECHNICIAN',
    icon: 'fas fa-microscope',
    component: LabTechnician,
    layout: '/admin',
  },
  {
    path: '/medicine',
    name: 'MEDICINES',
    icon: 'fas fa-pills',
    component: Medicine,
    layout: '/admin',
  },
  {
    path: '/lab-tests',
    name: 'LAB TESTS',
    icon: 'fas fa-vials',
    component: MedicalTest,
    layout: '/admin',
  },
  {
    path: '/appointments',
    name: 'APPOINTMENTS',
    icon: 'fas fa-newspaper',
    component: Appointments,
    layout: '/admin',
  },
  {
    path: '/profile-page',
    name: 'MyProfile',
    icon: 'nc-icon nc-single-02',
    component: Profile,
    layout: '/admin',
  },
  {
    path: '/myAppointments',
    name: 'D-Appointment',
    icon: 'fas fa-newspaper',
    component: PatientAppointment,
    layout: '/doctor',
  },

  {
    path: '/createPatient',
    name: 'D-createPatient',
    icon: 'fas fa-newspaper',
    component: CreatePatient,
    layout: '/doctor',
  },
  {
    path: '/createAppointment',
    name: 'D-createAppointmen',
    icon: 'fas fa-newspaper',
    component: CreateAppointment,
    layout: '/doctor',
  },

  {
    path: '/prescription',
    name: 'D-Prescription',
    icon: 'fas fa-newspaper',
    component: Prescription,
    layout: '/doctor',
  },

  {
    path: '/observations',
    name: 'D-Observations',
    icon: 'fas fa-newspaper',
    component: Observation,
    layout: '/doctor',
  },

  {
    path: '/upcommingTests',
    name: 'L-upcomming Test',
    icon: 'nc-icon nc-single-02',
    component: UpcommingTest,
    layout: '/lab-technician',
  },

  {
    path: '/UpdateResult',
    name: 'L-Update Result',
    icon: 'nc-icon nc-single-02',
    component: UpdateResult,
    layout: '/lab-technician',
  },
  // {

  //   path: '/user-page',
  //   name: 'Profile',
  //   icon: 'nc-icon nc-single-02',
  //   component: UserPage,
  //   layout: '/admin',
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   icon: 'nc-icon nc-bank',
  //   component: Dashboard,
  //   layout: '/admin',
  // },

  // {
  //   path: '/notifications',
  //   name: 'Notifications',
  //   icon: 'nc-icon nc-bell-55',
  //   component: Notifications,
  //   layout: '/admin',
  // },

  // {
  //   path: '/tables',
  //   name: 'Table List',
  //   icon: 'nc-icon nc-tile-56',
  //   component: TableList,
  //   layout: '/admin',
  // },

  // {
  //   path: '/typography',
  //   name: 'Typography',
  //   icon: 'nc-icon nc-caps-small',
  //   component: Typography,
  //   layout: '/admin',
  // },
  // {
  //   path: '/icons',
  //   name: 'Icons',
  //   icon: 'nc-icon nc-diamond',
  //   component: Icons,
  //   layout: '/admin',
  // },

  // {
  //   path: '/upgrade',
  //   name: 'Upgrade to PRO',
  //   icon: 'nc-icon nc-spaceship',
  //   component: UpgradeToPro,
  //   layout: '/admin',
  // },
];
export default routes;
