import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = ({ data }) => data;

const addStudent = (context) =>
	studentManager.addStudent(context);

const changingRange = (context) => ({
	range: FilterManager.updateRange(context),
});
const changingTab = (context) => ({
	value: context.data,
});
const Toggle = (context) => ({
	alignment: context.data,
});
const getAlert = (context) => ({
	error: studentManager.isInputsValid(context),
	close: true,
});
const close = (context) => ({
	close: context.data,
});
const setChart = (context) => ({
	selectedChart: context.data,
});
const validateMarks = (context) => ({
	validation: studentManager.validateMarks(context),
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
	changingRange,
	changingTab,
	Toggle,
	getAlert,
	close,
	editStatus,
	setChart,
	validateMarks,
	unSelected,
	handleClose,
};

export default actions;
