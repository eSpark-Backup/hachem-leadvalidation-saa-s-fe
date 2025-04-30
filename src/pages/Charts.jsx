import LeadsChart from '../components/charts/LeadsChart.jsx';
import LeadsPerformanceChart from '../components/charts/LeadsPerformanceChart.jsx';
import MostGenerateLeadsCard from '../components/charts/MostGenerateLeadsCard.jsx';
import ClientStaticsChart from '../components/charts/ClientStaticsChart.jsx';
import SupplierBreakdown from '../components/charts/SupplierBreadkDown.jsx';
import ActiveSupplierChart from '../components/charts/ActiveSupplierChart.jsx';
import WeeklyCreditScore from '../components/charts/WeeklyCreditScore.jsx';
import ClientStatsChart from '../components/charts/ClientStatsChart.jsx';
import ClientChart from '../components/charts/ClientChart.jsx';
import PieCharts from '../components/charts/PieCharts.jsx';
import DonutChart from '../components/charts/DonutChart.jsx';
import DonutChartWithText from '../components/charts/DonutChartWithText.jsx';
import DonutChartWithImage from '../components/charts/DonutChartWithImage.jsx';
import SupplierBreakdown2 from '../components/charts/SupplierBreadkDown2.jsx';
import { WEEKLY_CREDIT_SCORE } from '../constants/components/charts/WeeklyCreditScore.js';
import { CLIENT_STATICS_CHART } from '../constants/components/charts/ClientStaticsChart.js';
import { LEADS_PERFORMANCE_CHART } from '../constants/components/charts/LeadsPerformanceChart.js';
import { LEADS_CHART } from '../constants/components/charts/LeadsChart.js';
import {
  DATA_LAST_MONTH,
  DATA_THIS_MONTH,
} from '../constants/components/charts/SupplierBreadkDown.js';
import {
  COLORS,
  MOST_GENERATE_LEADS_CARD,
} from '../constants/components/charts/MostGenerateLeadsCard.js';
import { ACTIVE_SUPPLIER_CHART } from '../constants/components/charts/ActiveSupplierChart.js';
import {
  DONUT_CHART_WITH_IMAGE,
  DONUT_CHART_WITH_IMAGE_COLORS,
} from '../constants/components/charts/DonutChartWithImage.js';
import { DONUT_CHART_WITH_TEXT } from '../constants/components/charts/DonutChartWithText.js';
import {
  PIE_CHARTS,
  PIE_CHARTS_COLORS,
} from '../constants/components/charts/PieCharts.js';
import { CLIENT_CHART } from '../constants/components/charts/ClientChart.js';
import { CLIENT_STATS_CHART } from '../constants/components/charts/ClientStatsChart.js';
import {
  DONUT_CHART,
  DONUT_CHART_COLORS,
  DONUT_CHART_RADIAN,
} from '../constants/components/charts/DonutChart.js';
import SingleLineChart2 from '../components/charts/SingleLineChart2.jsx';
import SingleLineChart from '../components/charts/SingleLineChart.jsx';
import { SINGLE_LINE_CHART2 } from '../constants/components/charts/SingleLineChart2.js';
import { SINGLE_LINE_CHART } from '../constants/components/charts/SingleLineChart.js';

const Charts = () => {
  return (
    <>
      <ClientStaticsChart data={CLIENT_STATICS_CHART} />
      <LeadsPerformanceChart data={LEADS_PERFORMANCE_CHART} />
      <LeadsChart data={LEADS_CHART} />
      <SupplierBreakdown
        dataLastMonth={DATA_LAST_MONTH}
        dataThisMonth={DATA_THIS_MONTH}
      />
      <SupplierBreakdown2
        dataLastMonth={DATA_LAST_MONTH}
        dataThisMonth={DATA_THIS_MONTH}
      />
      <SingleLineChart data={SINGLE_LINE_CHART} />
      <SingleLineChart2 data={SINGLE_LINE_CHART2} />
      <MostGenerateLeadsCard data={MOST_GENERATE_LEADS_CARD} colors={COLORS} />
      <ActiveSupplierChart data={ACTIVE_SUPPLIER_CHART} />
      <WeeklyCreditScore data={WEEKLY_CREDIT_SCORE} />
      <ClientChart data={CLIENT_CHART} />
      <ClientStatsChart data={CLIENT_STATS_CHART} />
      <PieCharts data={PIE_CHARTS} colors={PIE_CHARTS_COLORS} />
      <DonutChart
        data={DONUT_CHART}
        radian={DONUT_CHART_RADIAN}
        colors={DONUT_CHART_COLORS}
      />
      <DonutChartWithText
        data={DONUT_CHART_WITH_TEXT}
        colors={DONUT_CHART_WITH_TEXT - COLORS}
      />
      <DonutChartWithImage
        data={DONUT_CHART_WITH_IMAGE}
        colors={DONUT_CHART_WITH_IMAGE_COLORS}
      />
    </>
  );
};

export default Charts;
