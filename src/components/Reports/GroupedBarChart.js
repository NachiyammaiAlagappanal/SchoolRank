import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';

const xAxis = () => ({
	field: 'studentName',
	type: 'ordinal',
	title: 'Student Name',
});

const yAxis = (hundred) => ({
	field: 'marks',
	type: 'quantitative',
	title: 'Marks Obtained',
	scale: { domain: [0, hundred] },
});

const params = () => [{
	name: 'brush',
	select: { type: 'interval', encodings: ['x'] },
}];

const encoding = () => ({
	y: { datum: 40 },
	color: { value: 'firebrick' },
	size: { value: 2 },
});

const layer = (hundred) => [{
	params: params(),
	mark: { type: 'bar' },
	encoding: {
		x: xAxis(),
		y: yAxis(hundred),
		xOffset: { field: 'subjectName' },
		color: { field: 'subjectName', title: 'Subject' },
	},
}, {
	transform: [
		{ filter: { param: 'brush' }},
		{ calculate: '40', as: 'minMark' },
	],
	mark: 'rule',
	encoding: encoding(),
}];

const GroupedBarChart = ({ config, data }) => {
	const { chartProps: { width, height }, hundred } = config;
	const spec = {
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		layer: layer(hundred),
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default GroupedBarChart;
