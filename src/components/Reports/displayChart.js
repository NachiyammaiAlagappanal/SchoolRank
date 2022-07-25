import PieChart from './PieChart';
import HeatMap from './HeatMap';
import mapData from '../../services/chartManager';
import ColouredScatterPlot from './ColouredScatterPlot';
import GroupedBarChart from './GroupedBarChart';

const chartComponents = {
	HeatMap,
	PieChart,
	ColouredScatterPlot,
	GroupedBarChart,
};

const mapDatum = (context) => ({
	values: mapData(context),
});

const DisplayChart = (context) => {
	const { state: { selectedChart }} = context;

	return selectedChart.map((chart) => chartComponents[chart]({ ...context,
		data: mapDatum(context) }));
};

export default DisplayChart;
