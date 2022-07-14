import Student from './student';

const studentMarkList = (context) =>
	context.state.studentDetails.map(Student);

export default studentMarkList;
