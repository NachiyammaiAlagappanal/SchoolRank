const config = {
	idMin: 1001,
	idMax: 5000,
	subjects: ['tamil', 'english', 'science'],
	charts: ['HeatMap', 'PieChart', 'ColouredScatterPlot', 'GroupedBarChart'],
	chartProps: {
		width: 300,
		height: 300,
	},
	notification: {
		success: {
			severity: 'success',
			message: 'Successfully Saved',
		},
		error: {
			severity: 'error',
			message: 'Error! Invalid Input',
		},
	},
};

export default config;
