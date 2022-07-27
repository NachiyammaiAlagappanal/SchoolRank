/* eslint-disable max-lines-per-function */
import React from 'react';
import { VegaLite } from 'react-vega';
import { rndString } from '@laufire/utils/random';

const PieChart = ({ config: { chartProps: { width, height }}, data }) => {
	const spec = {
		description: 'A simple Pie chart',
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		mark: { type: 'arc', tooltip: { content: 'data' }},
		encoding: {
			color: { field: 'studentName',
				type: 'nominal' },
			theta: { aggregate: 'sum', field: 'marks',
				type: 'quantitative' },
			tooltip: [
				{ field: 'studentName', type: 'nominal', title: 'Name' },
				{ field: 'subjectName', type: 'nominal' },
				{ field: 'marks', type: 'quantitative' },
			],
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default PieChart;
