/* eslint-disable no-console */
import { map } from '@laufire/utils/collection';
import FilterManager from './FilterManager';

const mapData = (context) => {
	const { state: { studentDetails }} = context;
	const studentData = FilterManager
		.filterMark({ ...context, data: studentDetails });
	const newData = map(studentData, (student) => ({
		studentName: student.StudentName,
		subjectName: context.config.subjects,
		marks: [student.tamil, student.english, student.science],
	}));

	console.log(newData);
	return newData;
};

export default mapData;
