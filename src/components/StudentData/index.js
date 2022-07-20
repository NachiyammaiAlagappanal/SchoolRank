import { React } from 'react';
import Inputs from './Input';
import SaveButton from './saveButton.js';
import TableContain from '../Table';

const StudentData = (context) => {
	const { state: { studentDetails }} = context;

	return <div className="Data" role="Data">
		<h3>
			Students Database - Add Student Details</h3>
		<Inputs { ...context }/>
		<SaveButton { ...context }/>
		<TableContain { ...{ ...context, data: { content: studentDetails }} }/>
	</div>;
};

export default StudentData;
