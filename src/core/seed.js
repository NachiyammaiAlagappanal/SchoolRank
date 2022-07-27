/* eslint-disable no-magic-numbers */
const seed = {
	name: '',
	english: '',
	tamil: '',
	science: '',
	studentDetails: [],
	range: {
		english: [20, 30],
		tamil: [20, 30],
		science: [60, 80],
	},
	value: 0,
	alignment: 'Table',
	error: null,
	close: true,
	selectedChart: 'HeatMap',
	validation: { english: false,
		tamil: false,
		science: false },
	selected: false,
	row: [],
};

export default seed;
