import { React } from 'react';
import Inputs from './Input';
import TableContain from '../Table';
import Message from './message';
import { Box } from '@mui/material';

const StudentData = (context) => {
	const { state: { studentDetails }} = context;

	return <Box>
		<h3>
			Students Database - Add Student Details</h3>
		<Inputs { ...context }/>
		<TableContain { ...{ ...context, data: { content: studentDetails }} }/>
		{ Message(context) }
	</Box>;
};

export default StudentData;
