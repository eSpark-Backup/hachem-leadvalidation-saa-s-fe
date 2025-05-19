import SingleLineChartWeeks from '../charts/SingleLineChartWeeks';
import { Box, CardContent, Typography } from '@mui/material';
import DropdownButton from '../report-analytics/DropdownButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/globals';

const SalesAnalysis = ({
  chartData,
  modalOpen,
  btnTitle,
  title,
  handleOpenChartModalDropDown,
  open,
  color,
  fillColor,
  strokeWidth,
  up,
  totalSales,
  inPer,
  curreny,
  anchorRef,
}) => {
  return (
    <>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '5px',
                pb: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#000',
                }}
              >
                {title}
              </Typography>
              <InfoOutlinedIcon sx={{ color: '#7D7D82' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Typography variant="h2" fontWeight="bold">
                {`${curreny} ${formatNumber(totalSales)}`}
              </Typography>
              <img
                src={
                  up
                    ? '/src/assets/images/billing/upIcons.svg'
                    : '/src/assets/images/billing/downIcons.svg'
                }
              />
              <Typography sx={{ color: '#FF4E4E' }}>{inPer}</Typography>
            </Box>
          </Box>
          <DropdownButton
            ref={anchorRef}
            onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
            label={btnTitle}
          />
        </Box>
        <SingleLineChartWeeks
          data={chartData}
          color={color}
          fillColor={fillColor}
          strokeWidth={strokeWidth}
        />
      </CardContent>
    </>
  );
};
SalesAnalysis.propTypes = {
  chartData: PropTypes.any,
  modalOpen: PropTypes.any,
  btnTitle: PropTypes.any,
  title: PropTypes.any,
  handleOpenChartModalDropDown: PropTypes.any,
  open: PropTypes.any,
  color: PropTypes.any,
  fillColor: PropTypes.any,
  strokeWidth: PropTypes.any,
  up: PropTypes.any,
  totalSales: PropTypes.any,
  inPer: PropTypes.any,
  curreny: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default SalesAnalysis;
