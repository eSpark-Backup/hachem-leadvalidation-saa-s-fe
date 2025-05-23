import SingleLineChartWeeks from '../charts/SingleLineChartWeeks';
import { Box, CardContent, Typography } from '@mui/material';
import DropdownButton from '../report-analytics/DropdownButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import UpIcons from '/src/assets/images/billing/upIcons.svg';
import DownIcons from '/src/assets/images/billing/downIcons.svg';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/globals';
import { styles } from '../../styles/components/billing/SalesAnalysis';
import { SALES_ANALYSIS } from '../../constants/components/billing/SalesAnalysis';

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
    <CardContent>
      <Box sx={styles.headerContainer}>
        <Box>
          <Box sx={styles.titleWrapper}>
            <Typography sx={styles.title}>{title}</Typography>
            <InfoOutlinedIcon sx={styles.icon} />
          </Box>
          <Box sx={styles.salesWrapper}>
            <Typography variant="h2" fontWeight="bold">
              {`${curreny} ${formatNumber(totalSales)}`}
            </Typography>
            <img
              src={up ? UpIcons : DownIcons}
              alt={SALES_ANALYSIS.trendIconAlt}
            />
            <Typography sx={styles.percentage}>{inPer}</Typography>
          </Box>
        </Box>
        <DropdownButton
          ref={anchorRef}
          onClick={!open ? modalOpen : handleOpenChartModalDropDown}
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
  );
};

SalesAnalysis.propTypes = {
  chartData: PropTypes.any,
  modalOpen: PropTypes.func,
  btnTitle: PropTypes.string,
  title: PropTypes.string,
  handleOpenChartModalDropDown: PropTypes.func,
  open: PropTypes.bool,
  color: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  up: PropTypes.bool,
  totalSales: PropTypes.number,
  inPer: PropTypes.string,
  curreny: PropTypes.string,
  anchorRef: PropTypes.any,
};

export default SalesAnalysis;
