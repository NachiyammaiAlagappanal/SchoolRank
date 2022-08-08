import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setInputs = (context) => ({
	inputs: studentManager.addInput(context),
});

const addStudent = (context) =>
	studentManager.addStudent(context);

const updateFilter = (context) => ({
	filter: FilterManager.updateFilter(context),
});
const toggleMenu = (context) => ({
	value: context.data,
});
const toggleTab = (context) => ({
	alignment: context.data,
});
const getAlert = (context) => ({
	error: studentManager.isInputsValid(context),
	close: true,
});
const closeAlertMessage = (context) => ({
	close: context.data,
});
const setChart = (context) => ({
	selectedChart: context.data,
});
const updateSelected = (context) => ({
	selected: true,
	row: context.data,
});
const handleClose = () => ({
	selected: false,
});
const editError = () => ({
	error: false,
});

const actions = {
	setInputs,
	addStudent,
	updateFilter,
	toggleMenu,
	toggleTab,
	getAlert,
	editError,
	closeAlertMessage,
	setChart,
	updateSelected,
	handleClose,
};

export default actions;
