import { React } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Table, TableCell, TableHead, TableRow } from '@mui/material';
import SaveButton from './saveButton';
import MarksInput from './MarksInput';

const studentDetails = (context) =>
	<TableRow>
		<TableCell/>
		<TableCell align="center">
			<TextField
				fullWidth={ true }
				label="StudentName"
				id="name"
				focused={ true }
				color="primary"
				value={ context.state.name }
				onChange={ (evt) =>
					context.actions
						.setStudentName(evt.target.value) }
			/></TableCell>
		{MarksInput(context)}
		{SaveButton(context)}
	</TableRow>;

const Inputs = (context) =>

	<Box>
		<Table className="table">
			<TableHead>{ studentDetails(context)}</TableHead>
		</Table>
	</Box>;

export default Inputs;
