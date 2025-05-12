import PropTypes from 'prop-types';

import { Input } from '@mui/material';

import { scoringInputStyles } from '../../styles/pages/LeadScoringSetting';

const InputField = ({ placeholder, incWidth }) => {
  return <Input sx={scoringInputStyles(incWidth)} placeholder={placeholder} />;
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  incWidth: PropTypes.bool,
};

export default InputField;
