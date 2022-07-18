import { React } from 'react';
import Inputs from './Input';
import StudentMarkList from './studentMarkList';
import SaveButton from './saveButton.js';

const StudentData = (context) => <div className="Data" role="Data">
	<h3>Students Database - Add Student Details</h3>
	<Inputs { ...context }/>
	<SaveButton { ...context }/>
	<StudentMarkList { ...context }/>
</div>;

export default StudentData;
