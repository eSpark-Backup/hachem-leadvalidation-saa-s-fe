import DropdownIcon from '../../assets/images/client/dropdown.svg';
import CloseIcon from '../../assets/images/client/close.svg';
import DocumentIcon from '../../assets/images/client/document-text.svg';
import TrashIcon from '../../assets/images/client/trash.svg';
import CheckIcon from '../../assets/images/client/check.svg';
import SuccessfullIcon from '../../assets/images/auth/Verified_image.svg';

const LEAD_SCORING_SETTING = {
  title: 'Leads Scoring Setting',
  buttonText: 'Score with AI',
  rate: 'Validation rate',
  points: '+70',
  leadWithAi: 'Scoring leads with AI',
  standard: {
    heading: 'Standard AI Validation',
    label: 'Quick and efficient validation using a single AI engine.',
  },
  advance: {
    heading: 'Advanced AI Validation',
    label:
      'Double-checked scoring powered by two AI engines for extra reliability.',
  },
  start: 'Start',
  generateLeadAI: 'Generating AI Valid Leads',
  engineCheck: 'AI ENGINE CHECKING',
  toView: 'Click to view',
  successfullAILead: 'Successfully Generated AI Valid Leads Score',
  ok: 'OK',
};

const TABLE_HEADER = [
  { key: 'name', label: 'Name' },
  { key: 'address', label: 'Address' },
  { key: 'services', label: 'Services' },
  { key: 'phone', label: 'Phone' },
  { key: 'date', label: 'Date' },
  { key: 'email', label: 'Email' },
  { key: 'city', label: 'City' },
  { key: 'requirement', label: 'Requirement' },
];

const TABLE_BODY = [
  {
    id: 1,
    name: 'Floyd Miles - 20pts',
    address: '2118 Thornridge... - 40pts',
    services: 'Services - 0',
    phone: '+420 605 287 598 - 20pts',
    date: `${new Date('1/15/12')} - 0`,
    email: 'jessica.hans... - 30pts',
    city: 'Okl, OK - 50pts',
    requirement: 'Requirement - 30pts',
    hasPoints: true,
  },
  {
    id: 2,
    name: 'Jacob Jones - 20pts',
    supplier_id: '10025',
    address: '1901 Thornridge.... - 40pts',
    services: 'Services - 0',
    phone: '+420 605 287 598 - 20pts',
    date: `${new Date('1/15/12')} - 0`,
    email: 'jessica.hans... - 30pts',
    city: 'Okl, OK - 50pts',
    requirement: 'Requirement - 30pts',
    hasPoints: true,
  },
  {
    id: 3,
    name: 'Kristin Watson - 20pts',
    supplier_id: '10025',
    address: '6391 Elgin St.... - 40pts',
    services: 'Services - 0',
    phone: '+420 605 287 598 - 20pts',
    date: `${new Date('1/15/12')} - 0`,
    email: 'jessica.hans... - 30pts',
    city: 'Okl, OK - 50pts',
    requirement: 'Requirement - 30pts',
    hasPoints: true,
  },
  {
    id: 4,
    name: 'Devon Lane - 20pts',
    supplier_id: '10025',
    address: '4140 Parker Rd... - 40pts',
    services: 'Services - 0',
    phone: '+420 605 287 598 - 20pts',
    date: `${new Date('1/15/12')} - 0`,
    email: 'jessica.hans... - 30pts',
    city: 'Okl, OK - 50pts',
    requirement: 'Requirement - 30pts',
    hasPoints: true,
  },
  {
    id: 5,
    name: 'Marvin McKinney - 20pts',
    supplier_id: '10025',
    address: '2715 Ash Dr. San... - 40pts',
    services: 'Services - 0',
    phone: '+420 605 287 598 - 20pts',
    date: `${new Date('1/15/12')} - 0`,
    email: 'jessica.hans... - 30pts',
    city: 'Okl, OK - 50pts',
    requirement: 'Requirement - 30pts',
    hasPoints: true,
  },
  {
    id: 6,
    name: 'Floyd Miles - 20pts',
    supplier_id: '10025',
    address: '3891 Ranchview... - 40pts',
    services: 'Services - 0',
    phone: '+420 605 287 598 - 20pts',
    date: `${new Date('1/15/12')} - 0`,
    email: 'jessica.hans... - 30pts',
    city: 'Okl, OK - 50pts',
    requirement: 'Requirement - 30pts',
    hasPoints: true,
  },
];

const ALT_ATTRIBUTE = {
  dropdown: 'Dropdown',
  close: 'Close',
  document: 'Document',
  trash: 'Trash',
  check: 'Check',
  successfull: 'Successfull',
};

const ICONS = {
  dropdown: DropdownIcon,
  close: CloseIcon,
  document: DocumentIcon,
  trash: TrashIcon,
  check: CheckIcon,
  successfull: SuccessfullIcon,
};

const SCORING_SETTINGS = [
  {
    name: 'name',
    placeholder: 'Valid Name\t+05 pts',
    type: 'number',
  },
  {
    name: 'duplicate',
    placeholder: 'No Duplicate\t+02 pts',
    type: 'number',
  },
  {
    name: 'blacklised',
    placeholder: 'No Blacklised\t+30 pts',
    type: 'number',
  },
  {
    name: 'phone',
    placeholder: 'Valid Phone\t+30 pts',
    type: 'number',
  },
  {
    name: 'address',
    placeholder: 'Valid Address\t+10 pts',
    type: 'number',
  },
  {
    name: 'email',
    placeholder: 'Valid Email\t+30 pts',
    type: 'number',
  },
  {
    name: 'zip_code',
    placeholder: 'Valid Zip Code\t+30 pts',
    type: 'number',
  },
  {
    name: 'mandatory_fields',
    placeholder: 'Mandatory fields filled\t+30 pts',
    type: 'number',
  },
];

export {
  ICONS,
  SCORING_SETTINGS,
  ALT_ATTRIBUTE,
  LEAD_SCORING_SETTING,
  TABLE_BODY,
  TABLE_HEADER,
};
