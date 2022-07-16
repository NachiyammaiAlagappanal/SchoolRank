import { React } from 'react';
import Inputs from './Input';
import SaveButton from './saveButton';
import StudentMarkList from './studentMarkList';
import AlertMessage from './alertMessage';

const StudentData = (context) => <div className="Data" role="Data">
	<h3>Students Database - Add Student Details</h3>
	<AlertMessage { ...context }/>
	<Inputs { ...context }/>
	<SaveButton { ...context }/>
	<StudentMarkList { ...context }/>
</div>;

export default StudentData;
