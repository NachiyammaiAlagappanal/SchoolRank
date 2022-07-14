import FilterManager from '../services/FilterManager';
import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = (context) => studentManager.validateMark(context);

const addStudent = (context) => ({
	name: '',
	ENGLISH: '',
	TAMIL: '',
	SCIENCE: '',
	studentDetails: studentManager.addStudent(context),
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

const actions = {
	setStudentName,
	setMark,
	addStudent,
	changingRange,
	changingTab,
	Toggle,
};

export default actions;
