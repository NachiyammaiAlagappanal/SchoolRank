import { React } from 'react';
import Inputs from './Input';
import TableContain from '../Table';
import AlertMessage from './alertMessage';

const StudentData = (context) => {
	const { state: { studentDetails }} = context;

	return <div className="Data" role="Data">
		<h3>
			Students Database - Add Student Details</h3>
		<Inputs { ...context }/>
		<TableContain { ...{ ...context, data: { content: studentDetails }} }/>
		{ AlertMessage(context)}
	</div>;
};

export default StudentData;
