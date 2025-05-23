import uploadedIcon from '/src/assets/images/dashboard/statics-card/uploaded.svg';
import uploadedLight from '/src/assets/images/dashboard/statics-card/Uploaded-light.svg';
import rejectedIcon from '/src/assets/images/dashboard/statics-card/rejected.svg';
import rejectedLight from '/src/assets/images/dashboard/statics-card/Rejected-light.svg';
import acceptedIcon from '/src/assets/images/dashboard/statics-card/accepted.svg';
import acceptedLight from '/src/assets/images/dashboard/statics-card/accepted-light.svg';
import pendingIcon from '/src/assets/images/dashboard/statics-card/pending.svg';
import pendingLight from '/src/assets/images/dashboard/statics-card/pending-light.svg';

const stats = [
  {
    label: 'Uploaded Leads',
    icon: uploadedIcon,
    light: uploadedLight,
  },
  {
    label: 'Rejected',
    icon: rejectedIcon,
    light: rejectedLight,
  },
  {
    label: 'Accepted',
    icon: acceptedIcon,
    light: acceptedLight,
  },
  {
    label: 'Pending',
    icon: pendingIcon,
    light: pendingLight,
  },
];

const DASHBOARD_STATICS_CARDS = {
  sectionTitle: 'Statistics',
  latestActionTitle: 'Latest Action',
  iconAlt: 'icon',
  lightIconAlt: 'light icon',
};

const LEAD_STATS = [
  { label: 'valid Leads', value: 80.47, color: '#54D14D' },
  { label: 'Duplicate Leads', value: 50.56, color: '#136BE5' },
  { label: 'False Leads', value: 19.53, color: '#FF4343' },
];

export { stats, DASHBOARD_STATICS_CARDS, LEAD_STATS };
