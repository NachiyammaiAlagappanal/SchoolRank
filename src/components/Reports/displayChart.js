import PieChart from './PieChart';
import HeatMap from './HeatMap';
import mapData from '../../services/chartManager';

const chartComponents = {
	HeatMap,
	PieChart,
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
