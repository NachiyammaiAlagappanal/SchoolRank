/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';

const ColouredScatterPlot = ({ config: { chartProps: { width, height }}, data }) => {
	const spec = {
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		mark: 'point',
		encoding: {
			x: {
				field: 'subjectName',
				type: 'nominal',
				scale: { zero: false },
			},
			y: {
				field: 'marks',
				type: 'quantitative',
			},
			color: { field: 'studentName', type: 'nominal' },
			shape: { field: 'studentName', type: 'nominal' },
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default ColouredScatterPlot;
