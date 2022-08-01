import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = ({ data }) => data;

const addStudent = (context) =>
	studentManager.addStudent(context);

const updateRange = (context) => ({
	range: FilterManager.updateRange(context),
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
const setValidation = (context) => ({
	validation: studentManager.getValidationStatus(context),
});
const editStatus = () => ({
	error: null,
});
const unSelected = (context) => ({
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
	updateRange,
	toggleMenu,
	toggleTab,
	getAlert,
	closeAlertMessage,
	editStatus,
	setChart,
	setValidation,
	unSelected,
	handleClose,
};

export default actions;
