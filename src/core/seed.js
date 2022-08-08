/* eslint-disable no-magic-numbers */
const seed = {
	inputs: {
		name: '',
		tamil: '',
		english: '',
		science: '',
	},
	studentDetails: [{
		id: 1000,
		StudentName: 'Shalini',
		tamil: 60,
		english: 75,
		science: 90,
	},
	{
		id: 1001,
		StudentName: 'Yazhini',
		tamil: 75,
		english: 92,
		science: 80,
	}],
	filter: {
		english: [0, 100],
		tamil: [0, 100],
		science: [0, 100],
	},
	value: 0,
	alignment: 'Table',
	notification: '',
	selectedChart: 'HeatMap',
	selected: false,
	row: [],
};

export default seed;
