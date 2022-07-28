import { rndBetween } from '@laufire/utils/lib';
import { keys, values } from '@laufire/utils/collection';

const hundred = 100;

const studentManager = {
	addStudent: (context) => {
		const { state } = context;

		return [
			...state.studentDetails,
			...studentManager.checkAndAddStudent(context),
		];
	},
	hasEmptyInputs: (context) => {
		const { state, config: { subjects }} = context;

		return ['name', ...subjects].find((ele) => state[ele] === '');
	},

	checkAndAddStudent: (context) => {
		const { state, config: { idMax, idMin }} = context;

		studentManager.dataOnSave(context);
		return studentManager.isInputsValid(context)
			?	[{
				id: rndBetween(idMin, idMax),
				StudentName: state.name,
				tamil: state.tamil,
				english: state.english,
				science: state.science,
			}]
			: [];
	},

	checkValidation: (context) => {
		const { data, state: { validation }, seed } = context;

		const key = keys(data);
		const value = values(data);

		return value >= 0 && value <= hundred
			? seed.validation
			: { ...validation, [key]: true };
	},
	dataOnSave: (context) => (studentManager.isInputsValid(context)
		? context.actions.clearInputs()
		: []),

	isInputsValid: (context) => {
		const { config: { subjects }, state } = context;

		return (
			subjects.every((mark) => state[mark] <= hundred && state[mark] >= 0)
		&& !studentManager.hasEmptyInputs(context)
		);
	},
	errorMessage: (error) => error && 'Marks range between 0 to 100 only',
};

export default studentManager;
