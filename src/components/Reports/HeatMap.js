/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';

const HeatMap = ({ config: { chartProps:
	{ width, height }, hundred }, data }) => {
	const spec = {
		description: 'A Heat Map .',
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		config: {
			view: {
				strokeWidth: 0, step: 13,
			},
			axis: {
				domain: false, grid: true, tickBand: 'extent',
			},
		},
		params: [
			{
				name: 'brush',
				select: 'interval',
			},
		],
		mark: { type: 'rect', tooltip: true },
		encoding: {
			x: {
				field: 'subjectName',
				type: 'nominal',
				title: 'Subject',
			},
			y: {
				field: 'studentName',
				type: 'nominal',
				title: 'Student Name',
			},
			color: {
				aggregate: 'max',
				condition: {
					param: 'brush',
					field: 'marks',
					type: 'quantitative',
					title: 'Marks',
					scale: { domain: [0, hundred] },
				},
			},
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default HeatMap;
