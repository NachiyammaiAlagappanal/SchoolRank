import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';
const xAxis = () => ({
	field: 'subjectName',
	type: 'nominal',
	title: 'Subject',
});
const yAxis = () => ({
	field: 'studentName',
	type: 'nominal',
	title: 'Student Name',
});
const color = (hundred) => ({
	aggregate: 'max',
	condition: {
		param: 'brush',
		field: 'marks',
		type: 'quantitative',
		title: 'Marks',
		scale: { domain: [0, hundred] },
	},
});
const config = () => ({
	view: {
		strokeWidth: 0, step: 13,
	},
	axis: {
		domain: false, grid: true, tickBand: 'extent',
	},
});
const params = () => [
	{
		name: 'brush',
		select: 'interval',
	},
];

const HeatMap = ({ config: { chartProps:
	{ width, height }, hundred }, data }) => {
	const spec = {
		description: 'A Heat Map .',
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		config: config(),
		params: params(),
		mark: { type: 'rect', tooltip: true },
		encoding: {
			x: xAxis(),
			y: yAxis(),
			color: color(hundred),
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default HeatMap;
