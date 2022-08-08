import { rndBetween } from '@laufire/utils/lib';

const hundred = 100;

const studentManager = {
	addStudent: (context) => ({
		...studentManager.getAllStudentsData(context),
	}),
	addInput: ({ state, data }) => ({
		...state.inputs, ...data,
	}),

	getAllStudentsData: (context) => {
		const { state: { inputs }, state, config: { idMax, idMin }} = context;

		return studentManager.isInputsValid(context)
			?	{
				studentDetails: [
					...state.studentDetails,
					{
						id: rndBetween(idMin, idMax),
						StudentName: state.name,
						tamil: inputs.tamil,
						english: inputs.english,
						science: inputs.science,
					},
				],
				...studentManager.clearInputs(context),
			}
			: { studentDetails: [
				...state.studentDetails,
			] };
	},

	isInputsValid: (context) => {
		const { config: { subjects }, state: { inputs }} = context;

		return (
			subjects.every((mark) =>
				inputs[mark] <= hundred && inputs[mark] >= 0)
		&& !studentManager.hasEmptyInputs(context)
				? 'success'
				: 'error');
	},
	clearInputs: () => ({
		name: '',
		inputs: {
			tamil: '',
			english: '',
			science: '',
		},
	}),
	hasEmptyInputs: (context) => {
		const { state: { inputs }, config: { subjects }} = context;

		return ['name', ...subjects].find((ele) => inputs[ele] === '');
	},
	isMarkValid: (mark) => mark >= 0 && mark <= hundred,
};

export default studentManager;
