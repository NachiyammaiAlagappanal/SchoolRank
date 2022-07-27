/* eslint-disable max-lines-per-function */
import React from 'react';
import { VegaLite } from 'react-vega';
import { rndString } from '@laufire/utils/random';

const BarChart = ({ config: { hundred }, data }) => {
	const spec = {
		width: 200,
		height: 200,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		layer: [{
			mark: { type: 'bar' },
			encoding: {
				x: { field: 'subjectName',
					type: 'nominal',
					title: 'Subject' },
				y: { field: 'marks',
					type: 'quantitative',
					scale: { domain: [0, hundred] },
					title: 'Mark Obtained' },
			},
		}, {
			mark: 'rule',
			encoding: {
				y: { datum: 40 },
				color: { value: 'firebrick' },
				size: { value: 2 },
			},
		}],
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default BarChart;
