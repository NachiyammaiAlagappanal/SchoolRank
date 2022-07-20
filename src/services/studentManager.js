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
	hasEmptyInputs: (state) => {
		const details = [
			state.name,
			state.tamil,
			state.english,
			state.science,
		];

		return details.some((ele) => ele === '');
	},
	checkAndAddStudent: ({ state, config: { idMax, idMin }}) =>
		(studentManager.hasEmptyInputs(state)
			?	[]
			: [{
				id: rndBetween(idMin, idMax),
				StudentName: state.name,
				tamil: state.tamil,
				english: state.english,
				science: state.science,
			}]),
	getStatus: ({ state }) => !studentManager.hasEmptyInputs(state),

	checkInput: ({ state }) => (studentManager.hasEmptyInputs(state)
		? true
		: null),
	checkValidation: (context) => {
		const { data, state: { validation }, seed } = context;

		const key = keys(data);
		const value = values(data);

		return value >= 0 && value <= hundred
			? seed.validation
			: { ...validation, [key]: true };
	},
	errorMessage: (error) => error && 'Marks range between 0 to 100 only',
};

export default studentManager;
