import { Box, Button, Typography } from '@mui/material';

import {
  ICONS,
  LEAD_SCORING_SETTING,
} from '../../constants/pages/LeadsScoring';

import {
  generateLeadAIHeadingStyles,
  okButtonStyles,
} from '../../styles/components/leadScoringSetting/GenerateAILeadModal';

const GeneratedAILeadSuccess = () => {
  return (
    <Box textAlign={'center'}>
      <Typography variant="h1" sx={generateLeadAIHeadingStyles}>
        {LEAD_SCORING_SETTING.successfullAILead}
      </Typography>

      <Box component={'img'} src={ICONS.successfull} />

      <Box>
        <Button sx={okButtonStyles}>{LEAD_SCORING_SETTING.ok}</Button>
      </Box>
    </Box>
  );
};

export default GeneratedAILeadSuccess;
