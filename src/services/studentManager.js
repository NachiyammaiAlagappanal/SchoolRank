/* eslint-disable no-console */
import { rndBetween } from '@laufire/utils/lib';

const studentManager = {
	addStudent: (context) => {
		const { state } = context;

		console.log(studentManager.checkAndAddStudent(context));
		return [
			...state.studentDetails,
			...studentManager.checkAndAddStudent(context),
		];
	},
	hasEmptyInputs: (state) => {
		const details = [
			state.name,
			state.TAMIL,
			state.ENGLISH,
			state.SCIENCE,
		];

		return details.some((ele) => ele === '');
	},
	checkAndAddStudent: ({ state, config: { idMax, idMin }}) =>
		(studentManager.hasEmptyInputs(state)
			?	[]
			: [{
				id: rndBetween(idMin, idMax),
				StudentName: state.name,
				TAMIL: state.TAMIL,
				ENGLISH: state.ENGLISH,
				SCIENCE: state.SCIENCE,
			}]),
	getAlert: ({ state }) => (studentManager.hasEmptyInputs(state)
		? 'Some Input is empty or Invalid'
		: ''),
};

export default studentManager;
