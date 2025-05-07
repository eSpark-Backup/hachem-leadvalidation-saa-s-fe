import { Input } from '@mui/material';

import { scoringInputStyles } from '../../styles/pages/LeadScoringSetting';

const InputField = ({ placeholder }) => {
  return <Input sx={scoringInputStyles} placeholder={placeholder} />;
};

export default InputField;
