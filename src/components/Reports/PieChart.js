import React from 'react';
import { VegaLite } from 'react-vega';

const PieChart = ({ config: { chartProps: { width, height }}, data }) => {
	const spec = {
		description: 'A simple Pie chart',
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		mark: { type: 'arc', tooltip: true },
		encoding: {
			column: { field: 'studentName' },
			color: { field: 'subjectName',
				type: 'nominal' },
			theta: { field: 'marks',
				type: 'quantitative' },
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite { ...{ spec, data, actions } }/>;
};

export default PieChart;
