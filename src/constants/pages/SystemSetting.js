import CautionIcon from '/src/assets/images/system-setting/caution-icon.svg';
import GearIcon from '/src/assets/images/system-setting/gear-icon.svg';
import LightIcon from '/src/assets/images/system-setting/light-icon.svg';
import MessageIcon from '/src/assets/images/system-setting/message-icon.svg';
import SheildIcon from '/src/assets/images/system-setting/sheild-icon.svg';

const LEADS_SETTINGS = [
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

const FRAUD_SETTINGS = [
  {
    title: 'Disposable Email Detection',
    description:
      'Flag leads using known disposable or temporary email services',
    icon: SheildIcon,
    initialValue: true,
    key: 'disposable-email-detection',
  },
  {
    title: 'Multiple Submissions',
    description:
      'Flag leads with multiple submissions from the same IP address within a time period',
    icon: LightIcon,
    initialValue: false,
    key: 'multiple-submissions',
  },
  {
    title: 'Suspicious Data Patterns',
    description:
      'Detect suspicious patterns in form submissions like keyboard smashing',
    icon: CautionIcon,
    initialValue: true,
    key: 'suspicious-data-patterns',
  },
  {
    title: 'Geographic IP Mismatch',
    description: `Flag when IP location doesn't match submitted location data`,
    icon: SheildIcon,
    initialValue: true,
    key: 'geographic-ip-mismatch',
  },
  {
    title: 'Suspicious Referrers',
    description: 'Flag leads from known suspicious or spam referrer sources',
    icon: CautionIcon,
    initialValue: true,
    key: 'suspicious-referrers',
  },
];

const OPTIONS = [
  {
    id: 'lead',
    label: 'Lead Scoring',
    icon: GearIcon,
  },
  {
    id: 'fraud',
    label: 'Fraud Detection',
    icon: SheildIcon,
  },
  {
    id: 'reject',
    label: 'Rejection Messages',
    icon: MessageIcon,
  },
];

const CARDS = [
  {
    id: 1,
    title: 'Low Credits',
    message:
      'Low Credits, please recharge your subscription to get more credits!',
  },
];

const SYSTEM_SETTING = {
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

const SYSTEM_SETTING_FORM = { title: '', message: '' };

export {
  OPTIONS,
  CARDS,
  SYSTEM_SETTING,
  FRAUD_SETTINGS,
  LEADS_SETTINGS,
  SYSTEM_SETTING_FORM,
};
