import PropTypes from 'prop-types';

import { Box, Button, Checkbox, Modal, Stack, Typography } from '@mui/material';

import { LEAD_SCORING_SETTING } from '../../constants/pages/LeadsScoring';

import { backdropStyles } from '../../styles/components/globals/table/Common';
import {
  checkBoxHeadingStyles,
  checkBoxLabelStyles,
  checkBoxStackStyles,
  scoringCheckboxStyles,
  scoringHeadingTextStyles,
  scoringModalBoxStyles,
  startButtonBoxStyles,
  startButtonStyles,
} from '../../styles/components/leadScoringSetting/ScoringModal';

const ScoringModal = ({ open, handleClose, startGeneratedAI }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiModal-backdrop': backdropStyles,
      }}
    >
      <Box sx={scoringModalBoxStyles}>
        <Typography variant="h1" sx={scoringHeadingTextStyles}>
          {LEAD_SCORING_SETTING.leadWithAi}
        </Typography>

        <Stack sx={checkBoxStackStyles}>
          <Box>
            <Typography variant="h5" sx={checkBoxHeadingStyles}>
              {LEAD_SCORING_SETTING.standard.heading}
            </Typography>

            <Typography component={'label'} sx={checkBoxLabelStyles}>
              {LEAD_SCORING_SETTING.standard.label}
            </Typography>
          </Box>

          <Box>
            <Checkbox sx={scoringCheckboxStyles} disableRipple />
          </Box>
        </Stack>

        <Stack sx={{ ...checkBoxStackStyles, mt: 2 }}>
          <Box>
            <Typography variant="h5" sx={checkBoxHeadingStyles}>
              {LEAD_SCORING_SETTING.advance.heading}
            </Typography>

            <Typography component={'label'} sx={checkBoxLabelStyles}>
              {LEAD_SCORING_SETTING.advance.label}
            </Typography>
          </Box>

          <Box>
            <Checkbox sx={scoringCheckboxStyles} disableRipple />
          </Box>
        </Stack>

        <Box sx={startButtonBoxStyles}>
          <Button sx={startButtonStyles} onClick={startGeneratedAI}>
            {LEAD_SCORING_SETTING.start}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

ScoringModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  startGeneratedAI: PropTypes.func,
};

export default ScoringModal;
