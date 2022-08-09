import { map } from '@laufire/utils/collection';
import FilterManager from './FilterManager';

const chartManager = {
	getFilteredStudentsData: (context) => {
		const { config: { subjects }, state: { studentDetails }} = context;
		const studentData = FilterManager
			.filterMark({ ...context, data: studentDetails });

		return (
			map(studentData, (student) => ({
				studentName: student.StudentName.toUpperCase(),
				subjectName: subjects,
				marks: subjects.map((subject) => student[subject]),
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

	getStudentData: ({ config: { subjects }, state: { row }}) =>
		({
			subjectName: subjects,
			marks: subjects.map((subject) => row[subject]),
		}),
};

export default chartManager;
