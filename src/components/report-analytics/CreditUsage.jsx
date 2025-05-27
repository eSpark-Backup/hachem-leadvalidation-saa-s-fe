import SingleLineChartWeeks from '../charts/SingleLineChartWeeks';
import PropTypes from 'prop-types';
import ClientCardHeader from './ClientCardHeader';

const CreditUsage = ({
  title,
  label,
  chartData,
  chartColor,
  fillColor,
  strokeWidth,
  handleOpenChartModalDropDown,
  open,
  modalOpen,
  anchorRef,
}) => {
  return (
    <>
      <ClientCardHeader
        title={title}
        label={label}
        anchorRef={anchorRef}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
      />
      <SingleLineChartWeeks
        data={chartData}
        color={chartColor}
        fillColor={fillColor}
        strokeWidth={strokeWidth}
      />
    </>
  );
};

CreditUsage.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColor: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  handleOpenChartModalDropDown: PropTypes.func,
  open: PropTypes.any,
  modalOpen: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default CreditUsage;
