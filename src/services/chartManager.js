/* eslint-disable no-console */
import { map } from '@laufire/utils/collection';
import FilterManager from './FilterManager';

const chartManager = {
	mapData: (context) => {
		const { state: { studentDetails }} = context;
		const studentData = FilterManager
			.filterMark({ ...context, data: studentDetails });

		return (
			map(studentData, (student) => ({
				studentName: student.StudentName,
				subjectName: context.config.subjects,
				marks: [student.tamil, student.english, student.science],
			}))
		);
	},
	hasNoData: (context) => {
		const { state: { studentDetails }} = context;

		return (
			FilterManager
				.filterMark({ ...context, data: studentDetails }).length === 0
		);
	},
	rowMapData: ({ config, state: { row }}) =>
		({
			subjectName: config.subjects,
			marks: [row.tamil, row.english, row.science],
		}),
};

export default chartManager;
