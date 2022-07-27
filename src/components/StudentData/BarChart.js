import React from 'react';
import { VegaLite } from 'react-vega';
import { rndString } from '@laufire/utils/random';

const BarChart = ({ config: { chartProps:
	{ width, height }, hundred }, data }) => {
	const spec = {
		description: 'A simple Pie chart',
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		mark: { type: 'bar', tooltip: true },
		encoding: {
			x: { field: 'subjectName',
				type: 'nominal' },
			y: { field: 'marks',
				type: 'quantitative',
				scale: { domain: [0, hundred] }},
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default BarChart;
