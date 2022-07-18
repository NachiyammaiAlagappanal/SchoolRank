import { React } from 'react';
import Inputs from './Input';
import StudentMarkList from './studentMarkList';
import AlertMessage from './snackBar.js';

const StudentData = (context) => <div className="Data" role="Data">
	<h3>Students Database - Add Student Details</h3>
	<Inputs { ...context }/>
	<AlertMessage { ...context }/>
	<StudentMarkList { ...context }/>
</div>;

export default StudentData;
