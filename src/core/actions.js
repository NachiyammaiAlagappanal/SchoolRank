import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = ({ data }) => data;

const addStudent = (context) => ({
	studentDetails: studentManager.addStudent(context),
	name: '',
	english: '',
	tamil: '',
	science: '',
});
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
const checkValidation = (context) => ({
	validation: studentManager.checkValidation(context),
});
const editStatus = () => ({
	status: false,
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
	checkValidation,
	unSelected,
	handleClose,
};

export default actions;
