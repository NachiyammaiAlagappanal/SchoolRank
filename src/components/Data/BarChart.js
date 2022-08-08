import React from 'react';
import { VegaLite } from 'react-vega';
import { rndString } from '@laufire/utils/random';
import chartManager from '../../services/chartManager';

const layer = (hundred) => [{
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
}];

const BarChart = (context) => {
	const { config: { hundred }} = context;
	const spec = {
		data: {
			values: chartManager.getStudentData(context),
		},
		width: 200,
		height: 200,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		layer: layer(hundred),
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, actions } }/>;
};

export default BarChart;
