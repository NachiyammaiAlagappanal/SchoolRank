import { rndString } from '@laufire/utils/random';

const studentManager = {
	addStudent: (context) => {
		const { config, state } = context;

		return [
			...state.studentDetails,
			{
				id: rndString(config.idLength),
				StudentName: state.name,
				ENGLISH: state.ENGLISH,
				TAMIL: state.TAMIL,
				SCIENCE: state.SCIENCE,
			},
		];
	},
};

export default studentManager;
