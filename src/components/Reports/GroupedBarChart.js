/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';

const GroupedBarChart = ({ config: { chartProps: { width, height }}, data }) => {
	const spec = {
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		layer: [{
			params: [{
				name: 'brush',
				select: { type: 'interval', encodings: ['x'] },
			}],
			mark: 'bar',
			encoding: {
				x: {
					field: 'studentName',
					type: 'ordinal',
				},
				y: {
					aggregate: 'average',
					field: 'marks',
					type: 'quantitative',
				},
				xOffset: { field: 'subjectName' },
				color: { field: 'subjectName' },
			},
		}, {
			transform: [{
				filter: { param: 'brush' },
			}],
			mark: 'rule',
			encoding: {
				y: {
					aggregate: 'average',
					field: 'marks',
					type: 'quantitative',
				},
				color: { value: 'firebrick' },
				size: { value: 2 },
			},
		}],
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default GroupedBarChart;
