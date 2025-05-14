export const LEADS_SETTINGS = [
  {
    key: 'valid-name',
    name: 'Valid Name',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
  {
    key: 'valid-phone-number',
    name: 'Valid Phone Number',
    defaultValue: 20,
    unit: 'pts',
    min: 0,
    max: 100,
  },
  {
    key: 'duplicate-leads',
    name: 'Duplicate Leads',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
  {
    key: 'valid-address',
    name: 'Valid Address',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
  {
    key: 'valid-email',
    name: 'Valid Email',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
  {
    key: 'valid-zipcode',
    name: 'Valid Zipcode',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
];
export const FRAUD_SETTINGS = [
  {
    title: 'Disposable Email Detection',
    description:
      'Flag leads using known disposable or temporary email services',
    icon: '/src/assets/images/system-setting/sheild-icon.svg',
    initialValue: true,
    key: 'disposable-email-detection',
  },
  {
    title: 'Multiple Submissions',
    description:
      'Flag leads with multiple submissions from the same IP address within a time period',
    icon: '/src/assets/images/system-setting/light-icon.svg',
    initialValue: false,
    key: 'multiple-submissions',
  },
  {
    title: 'Suspicious Data Patterns',
    description:
      'Detect suspicious patterns in form submissions like keyboard smashing',
    icon: '/src/assets/images/system-setting/caution-icon.svg',
    initialValue: true,
    key: 'suspicious-data-patterns',
  },
  {
    title: 'Geographic IP Mismatch',
    description: `Flag when IP location doesn't match submitted location data`,
    icon: '/src/assets/images/system-setting/sheild-icon.svg',
    initialValue: true,
    key: 'geographic-ip-mismatch',
  },
  {
    title: 'Suspicious Referrers',
    description: 'Flag leads from known suspicious or spam referrer sources',
    icon: '/src/assets/images/system-setting/caution-icon.svg',
    initialValue: true,
    key: 'suspicious-referrers',
  },
];
export const OPTIONS = [
  {
    id: 'lead',
    label: 'Lead Scoring',
    icon: '/src/assets/images/system-setting/gear-icon.svg',
  },
  {
    id: 'fraud',
    label: 'Fraud Detection',
    icon: '/src/assets/images/system-setting/sheild-icon.svg',
  },
  {
    id: 'reject',
    label: 'Rejection Messages',
    icon: '/src/assets/images/system-setting/message-icon.svg',
  },
];
export const CARDS = [
  {
    id: 1,
    title: 'Low Credits',
    message:
      'Low Credits, please recharge your subscription to get more credits!',
  },
];

export const SYSTEM_SETTING = {
  headerTitle: 'System Settings',
  leadSettingsTitle: 'Lead Rejection Messages',
  fraudDetectionTitle: 'Fraud Detection',
  fraudDetectionDesc:
    'Configure rules to automatically detect and flag potentially fraudulent leads.',
  rejectionMessagesTitle: 'Lead Rejection Messages',
  rejectionMessagesDesc:
    'Customize messages sent to rejected leads based on reason.',
  addNew: '+ Add New',
  reset: 'Reset Changes',
  save: 'Save Changes',
  modalTitleAdd: 'Add New Message',
  modalTitleEdit: 'Edit Message',
  modalReason: 'Message Reason',
  modalTemplate: 'Message Template',
  modalPlaceholderReason: 'Enter message reason',
  modalPlaceholderTemplate: 'Enter message template',
  modalCancel: 'Cancel',
  modalSave: 'Save Message',
};
