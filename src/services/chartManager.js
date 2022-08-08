import { map } from '@laufire/utils/collection';
import FilterManager from './FilterManager';

const chartManager = {
	getFilteredStudentsData: (context) => {
		const { config, state: { studentDetails }} = context;
		const studentData = FilterManager
			.filterMark({ ...context, data: studentDetails });

		return (
			map(studentData, (student) => ({
				studentName: student.StudentName.toUpperCase(),
				subjectName: config.subjects,
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

	getStudentData: ({ config, state: { row }}) =>
		({
			subjectName: config.subjects,
			marks: [row.tamil, row.english, row.science],
		}),
};

export default chartManager;
