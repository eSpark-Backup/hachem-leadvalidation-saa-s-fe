import CopyIcon from '/assets/images/global/table-icons/copy.svg';
import DownloadIcon from '/assets/images/global/table-icons/download.svg';
import DropdownIcon from '/assets/images/global/table-icons/dropdown.svg';
import SearchIcon from '/assets/images/global/table-icons/search-icon.svg';
import GradientDropdownIcon from '/assets/images/global/table-icons/gradient-dropdown.svg';
// Table Row Icons
import EyeIcon from '/assets/images/global/table-icons/eye.svg';
import EditIcon from '/assets/images/global/table-icons/edit.svg';
import TrashIcon from '/assets/images/global/table-icons/trash.svg';
// Pagination Icons
import LargeLeftArrowIcon from '/assets/images/global/table-icons/large-left-arrow.svg';
import LargeRightArrowIcon from '/assets/images/global/table-icons/large-right-arrow.svg';
// Date Filter Button icons
import UpArrowIcon from '/assets/images/global/table-icons/up-arrow.svg';
import DownArrowIcon from '/assets/images/global/table-icons/down-arrow.svg';
// Manage Client/Supplier icons
import ServiceIcon from '/assets/images/admin/service.svg';
import ContactIcon from '/assets/images/admin/contact.svg';
import EmailIcon from '/assets/images/admin/mail.svg';

const TABLE_TEXTS = {
  copy: 'Copy',
  download: 'Download',
};

const PLACEHOLDERS = {
  search: 'Search',
};

const ALT_ATTRIBUTE = {
  search: 'Search',
  copy: 'Copy',
  download: 'Download',
  dropdown: 'Dropdown',
  eye: 'Eye',
  edit: 'Edit',
  trash: 'Trash',
  left: 'Left',
  right: 'Right',
  service: 'Service',
  contact: 'Contact',
  email: 'Email',
};

const ICONS = {
  copy: CopyIcon,
  download: DownloadIcon,
  dropdown: DropdownIcon,
  eye: EyeIcon,
  edit: EditIcon,
  trash: TrashIcon,
  largeLeftArrow: LargeLeftArrowIcon,
  largeRightArrow: LargeRightArrowIcon,
  search: SearchIcon,
  upArrow: UpArrowIcon,
  downArrow: DownArrowIcon,
  service: ServiceIcon,
  contact: ContactIcon,
  email: EmailIcon,
  gradientDropdown: GradientDropdownIcon,
};

const TABLE_STATIC_TEXTS = {
  idText: "Klarin's User ID",
  reject: 'Reject',
  accept: 'Accept',
  assign: 'Assign',
  lowCredit: 'Low Credits',
  bodyText: 'Send Recharge Alert to get Credits',
  send: 'Send',
  history: 'History',
  this_month: 'This Month',
  month: 'Month',
  confirmDelete: 'Do you want to delete this lead?',
  delete: 'Delete',
  cancel: 'Cancel',
  confirmLead: 'Do you want to accept this lead?',
};

export { TABLE_TEXTS, PLACEHOLDERS, ALT_ATTRIBUTE, ICONS, TABLE_STATIC_TEXTS };
