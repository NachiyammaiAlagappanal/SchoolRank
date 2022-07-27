import { React } from 'react';
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

const ChartBox = (context) => {
	const { state: { selectedChart }} = context;
	const SelectedChart = chartComponents[selectedChart];
	const hasNoData = chartManager.hasNoData(context);

	return hasNoData
		? 'No Data'
		: <SelectedChart { ...{ ...context,	data: mapDatum(context) } }/>;
};

export default ChartBox;
