import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = (context) => ({
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
const editStatus = () => ({
	error: null,
});
const updateSelected = (context) => ({
	selected: true,
	row: context.data,
});
const handleClose = () => ({
	selected: false,
});

const actions = {
	setStudentName,
	setMark,
	addStudent,
	updateFilter,
	toggleMenu,
	toggleTab,
	getAlert,
	closeAlertMessage,
	editStatus,
	setChart,
	updateSelected,
	handleClose,
};

export default actions;
