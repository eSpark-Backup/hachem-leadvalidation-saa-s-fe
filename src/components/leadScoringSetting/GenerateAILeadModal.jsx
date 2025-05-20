import PropTypes from 'prop-types';

import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material';

import DonutChartSingleWithText from '../charts/DonutChartSingleWithText';
import TableModal from '../global/TableModal';

import { PIE_CHARTS2 } from '../../constants/components/charts/PieCharts';
import {
  ALT_ATTRIBUTE,
  ICONS,
  LEAD_SCORING_SETTING,
} from '../../constants/pages/LeadsScoring';

import {
  aiCheckHeadingStyles,
  aiCheckingBoxStyles,
  aiCheckingChildBoxStyles,
  checkHeadingBoxStyles,
  checkingStackStyles,
  customLinearProgressStyles,
  generateLeadAIHeadingStyles,
  pieChartBoxStyles,
  progressContainerStyles,
  progressLabelStyles,
  viewButtonStyles,
} from '../../styles/components/leadScoringSetting/GenerateAILeadModal';

const GenerateAILeadModal = ({ open, handleClose }) => {
  return (
    <TableModal open={open} handleClose={handleClose}>
      {/* <GeneratedAILeadSuccess handleClose={handleClose} /> */}

      <Typography variant="h1" sx={generateLeadAIHeadingStyles}>
        {LEAD_SCORING_SETTING.generateLeadAI}
      </Typography>

      <Box sx={pieChartBoxStyles}>
        <DonutChartSingleWithText
          data={PIE_CHARTS2}
          color="#54D14D"
          inActiveColor="#F7F8FB"
          text={80.47}
          width={134}
          height={134}
        />
      </Box>

      <Stack sx={checkingStackStyles}>
        {Array.from({ length: 2 }).map((_, index) => (
          <Box sx={aiCheckingBoxStyles} key={index}>
            <Box sx={aiCheckingChildBoxStyles}>
              <Box
                component={'img'}
                src={ICONS.document}
                alt={ALT_ATTRIBUTE.document}
              />

              <Box sx={checkHeadingBoxStyles}>
                <Typography
                  sx={aiCheckHeadingStyles}
                >{`${LEAD_SCORING_SETTING.engineCheck} I`}</Typography>

                <Button sx={viewButtonStyles(index == 1)}>
                  {LEAD_SCORING_SETTING.toView}
                </Button>
              </Box>

              <Box
                component={'img'}
                src={index == 0 ? ICONS.trash : ICONS.check}
                alt={index == 0 ? ALT_ATTRIBUTE.trash : ALT_ATTRIBUTE.check}
                sx={{ cursor: index == 0 ? 'pointer' : 'default' }}
              />
            </Box>

            <Box sx={progressContainerStyles}>
              <LinearProgress
                variant="determinate"
                value={index == 1 ? 100 : 40}
                sx={customLinearProgressStyles(index == 1)}
              />

              <Typography
                sx={progressLabelStyles}
                component={'label'}
              >{`${index == 1 ? 100 : 40}%`}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </TableModal>
  );
};

GenerateAILeadModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default GenerateAILeadModal;
