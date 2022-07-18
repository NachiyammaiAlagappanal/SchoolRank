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
	getAlert: ({ state }) => !studentManager.hasEmptyInputs(state),
};

export default studentManager;
