import { Box, CardContent, Typography } from '@mui/material';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';

import { styles } from '../../styles/components/report-analytics/ReportCard';

import { REPORT_CARD } from '../../constants/components/report-analytics/ReportCard';

const ReportCard = ({
  title,
  value,
  chartComponent: ChartComponent,
  chartProps,
  label,
  open,
  handleOpenChartModalDropDown,
  modalOpen,
  anchorRef,
}) => {
  const onDropdownClick = () => {
    if (open === false) {
      modalOpen?.();
    } else {
      handleOpenChartModalDropDown?.();
    }
  };

  return (
    <CardContent>
      <Box sx={styles.headerBox}>
        <Box>
          <Typography
            variant={REPORT_CARD.subtitleVariant}
            color={REPORT_CARD.subtitleColor}
            textTransform="uppercase"
          >
            {title}
          </Typography>
          <Typography variant={REPORT_CARD.valueVariant} fontWeight="bold">
            {value}
          </Typography>
        </Box>
        <DropdownButton
          ref={anchorRef}
          onClick={onDropdownClick}
          label={label}
        />
      </Box>
      <Box>
        <ChartComponent {...chartProps} />
      </Box>
    </CardContent>
  );
};

ReportCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  chartComponent: PropTypes.elementType.isRequired,
  chartProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  open: PropTypes.bool,
  handleOpenChartModalDropDown: PropTypes.func,
  modalOpen: PropTypes.func,
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

ReportCard.defaultProps = {
  chartProps: {},
  open: false,
  handleOpenChartModalDropDown: null,
  modalOpen: null,
  anchorRef: null,
};

export default ReportCard;
