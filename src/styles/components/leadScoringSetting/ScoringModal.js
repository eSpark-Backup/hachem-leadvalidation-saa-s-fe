import {
  buttonStyles,
  headingStyles,
  modalStyles,
} from '../../pages/LeadScoringSetting';

const scoringModalBoxStyles = {
  ...modalStyles,
  width: { xs: '90%', sm: '574px' },
  padding: { xs: '33px 26px 25px', sm: '33px 36px 25px 53px' },
};

const scoringHeadingTextStyles = {
  ...headingStyles,
  color: '#09102B',
  fontWeight: 500,
  marginBottom: '26px',
};

const checkBoxStackStyles = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const checkBoxHeadingStyles = {
  color: '#212332',
  fontSize: '18px !important',
  lineHeight: '18px',
  marginBottom: '3px',
};

const checkBoxLabelStyles = {
  color: '#212332',
  fontSize: '14px',
  lineHeight: '15px',
  fontWeight: 500,
};

const scoringCheckboxStyles = {
  borderRadius: '20px',
  p: 0,
};

const startButtonBoxStyles = { textAlign: 'right' };

const startButtonStyles = {
  ...buttonStyles,
  padding: '10px 37px',
  marginTop: '37px',
};

export {
  scoringModalBoxStyles,
  scoringHeadingTextStyles,
  checkBoxStackStyles,
  checkBoxHeadingStyles,
  checkBoxLabelStyles,
  scoringCheckboxStyles,
  startButtonBoxStyles,
  startButtonStyles,
};
