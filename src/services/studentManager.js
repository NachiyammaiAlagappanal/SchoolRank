/* eslint-disable no-console */
import { values } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';

const studentManager = {
	addStudent: (context) => {
		const { config, state } = context;
		const { idMin, idMax } = config;

		return [
			...state.studentDetails,
			{
				id: rndBetween(idMin, idMax),
				StudentName: state.name,
				ENGLISH: state.ENGLISH,
				TAMIL: state.TAMIL,
				SCIENCE: state.SCIENCE,
			},
		];
	},
	validateMark: ({ data }) => {
		const mark = Number(values(data));
		const max = 100;

		return mark <= max && mark >= 0 ? data : '';
	},
};

export default studentManager;
