import Student from './student';
import { React } from 'react';

const studentMarkList = (context) =>
	<div className="grid-container" id="grid-container">
		{context.state.studentDetails.map(Student)}
	</div>;

export default studentMarkList;
