/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';

const GroupedBarChart = ({ config, data }) => {
	const { chartProps: { width, height }, hundred } = config;
	const spec = {
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		layer: [{
			params: [{
				name: 'brush',
				select: { type: 'interval', encodings: ['x'] },
			}],
			mark: { type: 'bar', tooltip: true },
			encoding: {
				x: {
					field: 'studentName',
					type: 'ordinal',
					title: 'Student Name',
				},
				y: {
					field: 'marks',
					type: 'quantitative',
					title: 'Marks Obtained',
					scale: { domain: [0, hundred] },
				},
				xOffset: { field: 'subjectName' },
				color: { field: 'subjectName', title: 'Subject' },
			},
		}, {
			transform: [
				{ filter: { param: 'brush' }},
				{ calculate: '40', as: 'minMark' },
			],
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

export default GroupedBarChart;
