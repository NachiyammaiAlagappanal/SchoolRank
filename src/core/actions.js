import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = ({ data }) => data;

const addStudent = (context) => ({
	status: studentManager.getStatus(context),
	studentDetails: studentManager.addStudent(context),
	name: '',
	english: '',
	tamil: '',
	science: '',
<<<<<<< HEAD
=======
});
const editAlert = () => ({
	Alert: false,
>>>>>>> 92619a9b0e8e68884361287bc49b1bf0ee90d4c3
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
	error: studentManager.checkInput(context),
	close: true,
});
const close = (context) => ({
	close: context.data,
});

const setChart = (context) => ({
	selectedChart: context.data,
});

const setChart = (context) => ({
	selectedChart: context.data,
});

const actions = {
	setStudentName,
	setMark,
	addStudent,
	changingRange,
	changingTab,
	Toggle,
<<<<<<< HEAD
=======
	editAlert,
	getAlert,
	close,
>>>>>>> 92619a9b0e8e68884361287bc49b1bf0ee90d4c3
	setChart,
};

export default actions;
