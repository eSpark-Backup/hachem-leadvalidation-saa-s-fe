import PropTypes from 'prop-types';

import { Input } from '@mui/material';

import { scoringInputStyles } from '../../styles/pages/LeadScoringSetting';

const InputField = ({ placeholder, incWidth, type, name }) => {
  return (
    <Input
      sx={scoringInputStyles(incWidth)}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  incWidth: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default InputField;
