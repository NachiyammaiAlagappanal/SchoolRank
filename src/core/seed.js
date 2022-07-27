/* eslint-disable no-magic-numbers */
const seed = {
	name: '',
	english: '',
	tamil: '',
	science: '',
	studentDetails: [],
	range: {
		english: [0, 100],
		tamil: [0, 100],
		science: [0, 100],
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
