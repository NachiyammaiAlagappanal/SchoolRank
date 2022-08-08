import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';

const xAxis = () => ({
	field: 'subjectName',
	type: 'nominal',
	title: 'Subject',
});

const yAxis = (hundred) => ({
	field: 'marks',
	type: 'quantitative',
	title: 'Marks Obtained',
	scale: { domain: [0, hundred] },
});

const color = () => ({
	field: 'studentName',
	type: 'nominal',
});

const shape = () => ({
	field: 'studentName',
	type: 'nominal',
	title: 'Student Name',
});

const ColouredScatterPlot = ({ config, data }) => {
	const { chartProps: { width, height }, hundred } = config;
	const spec = {
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		mark: { type: 'point', tooltip: { content: 'data' }},
		encoding: {
			x: xAxis(),
			y: yAxis(hundred),
			color: color(),
			shape: shape(),
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default ColouredScatterPlot;
