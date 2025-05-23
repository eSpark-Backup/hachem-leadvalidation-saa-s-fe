import card1Image from '../../../assets/images/dashboard/topcards/card1-image.svg';
import card2Image1 from '../../../assets/images/dashboard/topcards/card2-image1.svg';
import card2Image2 from '../../../assets/images/dashboard/topcards/card2-image2.svg';
import card3Image from '../../../assets/images/dashboard/topcards/card3-image.svg';

import {
  CLIENT_DASHBOARD_LEADS,
  CLIENT_LEADS_FILTER_TYPES,
  CLIENT_LEADS_SELECT_FILTERS,
  CLIENT_LEADS_TABLE_BODY,
  CLIENT_LEADS_TABLE_HEADER,
} from '../../pages/ClientDashboard';
import {
  SUPPLIER_AVAILABLE_LEADS_FILTER_TYPES,
  SUPPLIER_AVAILABLE_LEADS_SELECT_FILTERS,
  SUPPLIER_AVAILABLE_LEADS_TABLE_BODY,
  SUPPLIER_AVAILABLE_LEADS_TABLE_HEADER,
  SUPPLIER_DASHBOARD_AVAILABLE_LEADS,
} from '../../pages/SupplierDashboard';

const CLIENT_CARDS = [
  {
    title: 'Current credit',
    icon: card1Image,
    unit: 'Credits',
  },
  {
    title: 'New Supplier',
    icon: card2Image1,
    isInverted: true,
  },
  {
    title: 'Validation',
    postText: '%',
    icon: card2Image2,
    isInverted: true,
  },
  {
    title: 'Supplier performance',
    postText: '%',
    icon: card3Image,
    unit: 'Average',
    bgColor: 'linear-gradient(135deg, #24A956 0%, #126D30 100%)',
    titleColor: '#fff',
    valueColor: '#fff',
    unitColor: '#fff',
  },
];

const SUPPLIER_CARDS = [
  {
    title: 'Valid Leads',
    // icon: card4ImageGreen,
    isHaveChart: true,
    chartTitle: 'This Month',
    chartColor: '#54D14D',
  },
  {
    title: 'Rejected Leads',
    // icon: card4ImagePink,
    isHaveChart: true,
    chartTitle: 'This Month',
    chartColor: '#FF4343',
  },
  {
    title: 'Pending Leads',
    // icon: card4ImageBlue,
    isHaveChart: true,
    chartTitle: 'This Month',
    chartColor: '#314CFF',
  },
  {
    title: 'Over All Leads',
    icon: card3Image,
    bgColor: 'linear-gradient(135deg, #24A956 0%, #126D30 100%)',
    titleColor: '#fff',
    valueColor: '#fff',
    unitColor: '#fff',
  },
];

const ADMIN_CARDS = [
  {
    title: 'Valid Leads',
    // icon: card4ImageGreen,
    isHaveChart: true,
    chartTitle: 'This Month',
    chartColor: '#54D14D',
  },
  {
    title: 'Rejected Leads',
    // icon: card4ImagePink,
    isHaveChart: true,
    chartTitle: 'This Month',
    chartColor: '#FF4343',
  },
  {
    title: 'Pending Leads',
    // icon: card4ImageBlue,
    isHaveChart: true,
    chartTitle: 'This Month',
    chartColor: '#314CFF',
  },
  {
    title: 'Over All Uploaded Leads',
    icon: card3Image,
    bgColor: 'linear-gradient(135deg, #24A956 0%, #126D30 100%)',
    titleColor: '#fff',
    valueColor: '#fff',
    unitColor: '#fff',
  },
];

const CLIENT_CARDS_DATA = [682.5, 321, 86.23, 65.29];

const SUPPLIER_CARDS_DATA = [682.5, 522.5, 422.5, 65250];

const ADMIN_CARDS_DATA = [682.5, 522.5, 422.5, 65, 250];

const CLIENT_LEADS = {
  header: CLIENT_LEADS_TABLE_HEADER,
  data: CLIENT_LEADS_TABLE_BODY,
  title: CLIENT_DASHBOARD_LEADS.title,
  filterTypes: CLIENT_LEADS_FILTER_TYPES,
  select_filters: CLIENT_LEADS_SELECT_FILTERS,
  filterType: CLIENT_DASHBOARD_LEADS.filterType,
};

const SUPPLIER_AVAILABLE_LEADS = {
  header: SUPPLIER_AVAILABLE_LEADS_TABLE_HEADER,
  data: SUPPLIER_AVAILABLE_LEADS_TABLE_BODY,
  title: SUPPLIER_DASHBOARD_AVAILABLE_LEADS.title,
  filterTypes: SUPPLIER_AVAILABLE_LEADS_FILTER_TYPES,
  select_filters: SUPPLIER_AVAILABLE_LEADS_SELECT_FILTERS,
  filterType: SUPPLIER_DASHBOARD_AVAILABLE_LEADS.filterType,
};

const DASHBOARD_TOP_CARDS = {
  iconAltSuffix: 'icon',
};

export {
  ADMIN_CARDS,
  CLIENT_CARDS,
  SUPPLIER_CARDS,
  CLIENT_CARDS_DATA,
  SUPPLIER_CARDS_DATA,
  ADMIN_CARDS_DATA,
  CLIENT_LEADS,
  SUPPLIER_AVAILABLE_LEADS,
  DASHBOARD_TOP_CARDS,
};
