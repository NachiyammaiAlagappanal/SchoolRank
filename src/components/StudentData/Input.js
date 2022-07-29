import { React } from 'react';
import TextField from '@mui/material/TextField';
import { Table, TableCell, TableHead,
	TableRow, Grid } from '@mui/material';
import SaveButton from './saveButton';
import MarksInput from './MarksInput';
import DialogBox from './DialogBox';

const studentDetails = (context) =>
	<TableRow>
		<TableCell/>
		<TableCell align="center">
			<TextField
				fullWidth={ true }
				label="StudentName"
				id="name"
				color="primary"
				variant="standard"
				value={ context.state.name }
				onChange={ (evt) =>
					context.actions
						.setStudentName(evt.target.value) }
			/></TableCell>
		{MarksInput(context)}
		{SaveButton(context)}
	</TableRow>;

const Inputs = (context) =>
	<Grid paddingBottom={ 8 }>
		<Table>
			<TableHead>{ studentDetails(context)}</TableHead>
		</Table>
		<DialogBox { ...context }/>
	</Grid>;

export default Inputs;
