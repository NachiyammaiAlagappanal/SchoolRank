/* eslint-disable no-console */
import { React } from 'react';
import PieChart from './PieChart';
import HeatMap from './HeatMap';
import mapData from '../../services/chartManager';

const mapDatum = (context) => ({
	values: mapData(context),
});

const DisplayChart = (context) => {
	const { state: { selectedChart }} = context;

	console.log(selectedChart);
	return selectedChart === 'HeatMap'
		?	<HeatMap { ...context } data={ mapDatum(context) }/>
		: selectedChart === 'PieChart'
			? <PieChart { ...context } data={ mapDatum(context) }/>
			: 	<HeatMap { ...context } data={ mapDatum(context) }/>;
};

export default DisplayChart;
