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

export { stats };
