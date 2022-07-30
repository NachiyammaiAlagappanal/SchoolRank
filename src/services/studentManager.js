import { rndBetween } from '@laufire/utils/lib';
import { keys, values } from '@laufire/utils/collection';

const hundred = 100;

const studentManager = {
	addStudent: (context) => ({
		...studentManager.setStudentDetails(context),
	}),

	setStudentDetails: (context) => {
		const { state, config: { idMax, idMin }} = context;

		return studentManager.isInputsValid(context)
			?	{
				studentDetails: [
					...state.studentDetails,
					{
						id: rndBetween(idMin, idMax),
						StudentName: state.name,
						tamil: state.tamil,
						english: state.english,
						science: state.science,
					},
				],
				...studentManager.clearInputs(context),
			}
			: { studentDetails: [
				...state.studentDetails,
			] };
	},

	isInputsValid: (context) => {
		const { config: { subjects }, state } = context;

		return (
			subjects.every((mark) => state[mark] <= hundred && state[mark] >= 0)
		&& !studentManager.hasEmptyInputs(context)
		);
	},
	clearInputs: () => ({
		name: '',
		tamil: '',
		english: '',
		science: '',
	}),
	hasEmptyInputs: (context) => {
		const { state, config: { subjects }} = context;

		return ['name', ...subjects].find((ele) => state[ele] === '');
	},
	validateMarks: (context) => {
		const { data, state: { validation }, seed } = context;

		const key = keys(data);
		const value = values(data);

		return value >= 0 && value <= hundred
			? seed.validation
			: { ...validation, [key]: true };
	},
	setErrorMessage: (error) => error && 'Marks range between 0 to 100 only',
};

export default studentManager;
