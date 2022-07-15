import { React } from 'react';
import Inputs from './Input';
import SaveButton from './saveButton';
import StudentMarkList from './studentMarkList';

const StudentData = (context) => {
	const { state: { alert }} = context;

	return <div className="Data" role="Data">
		<h3>Students Database - Add Student Details</h3>
		<span>{alert}</span>
		<div>{Inputs(context)}</div>
		<div>{SaveButton(context)}</div>
		<div className="grid-container" id="grid-container">
			{ StudentMarkList(context)}
		</div>
	</div>;
};

export default StudentData;
