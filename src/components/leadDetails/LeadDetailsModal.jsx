import PropTypes from 'prop-types';

import { Box, Button, Typography } from '@mui/material';

import TableModal from '../global/TableModal';

import { MY_LEAD_DETAILS } from '../../constants/pages/MyLeadsDetail';
import { ALT_ATTRIBUTE, ICONS } from '../../constants/pages/LeadsScoring';
import { PIE_CHARTS2 } from '../../constants/components/charts/PieCharts';
import DonutChartSingleWithText from '../charts/DonutChartSingleWithText';

import {
  generateLeadAIHeadingStyles,
  okButtonStyles,
  pieChartBoxStyles,
} from '../../styles/components/leadScoringSetting/GenerateAILeadModal';

const LeadDetailsModal = ({ open, handleClose, type, progress }) => {
  return (
    <TableModal open={open} handleClose={handleClose}>
      {type === 'download' && progress !== 100 ? (
        <Box textAlign={'center'}>
          <Typography variant="h1" sx={generateLeadAIHeadingStyles}>
            {MY_LEAD_DETAILS.download}
          </Typography>

          <Box sx={pieChartBoxStyles}>
            <DonutChartSingleWithText
              data={PIE_CHARTS2}
              color="#54D14D"
              inActiveColor="#F7F8FB"
              text={progress}
              width={134}
              height={134}
            />
          </Box>
        </Box>
      ) : (
        <Box textAlign={'center'}>
          <Typography variant="h1" sx={generateLeadAIHeadingStyles}>
            {progress === 100
              ? MY_LEAD_DETAILS.downloaded
              : MY_LEAD_DETAILS.copy}
          </Typography>

          <Box
            component={'img'}
            src={ICONS.successfull}
            alt={ALT_ATTRIBUTE.successfull}
          />

          <Box>
            <Button sx={okButtonStyles} onClick={handleClose}>
              {MY_LEAD_DETAILS.ok}
            </Button>
          </Box>
        </Box>
      )}
    </TableModal>
  );
};

LeadDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string,
  progress: PropTypes.number.isRequired,
};

export default LeadDetailsModal;
