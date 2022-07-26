import PieChart from './PieChart';
import HeatMap from './HeatMap';
import chartManager from '../../services/chartManager';
import ColouredScatterPlot from './ColouredScatterPlot';
import GroupedBarChart from './GroupedBarChart';

const chartComponents = {
	HeatMap,
	PieChart,
	ColouredScatterPlot,
	GroupedBarChart,
};

const mapDatum = (context) => ({
	values: chartManager.mapData(context),
});

const DisplayChart = (context) => {
	const { state: { selectedChart }} = context;
	const hasNoData = chartManager.hasNoData(context);

	return hasNoData
		? 'No Data'
		: selectedChart.map((chart) => chartComponents[chart]({ ...context,
			data: mapDatum(context) }));
};

export default DisplayChart;
