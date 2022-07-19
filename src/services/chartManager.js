/* eslint-disable no-console */
import { map } from '@laufire/utils/collection';

const mapData = (context) => {
	const { state: { studentDetails }} = context;

	const newData = map(studentDetails, (student) => ({
		studentName: student.StudentName,
		subjectName: context.config.subjects,
		marks: [student.tamil, student.english, student.science],
	}));

	console.log(newData);
	return newData;
};

export default mapData;
