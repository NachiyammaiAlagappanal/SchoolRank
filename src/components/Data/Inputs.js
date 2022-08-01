import { React } from 'react';
import TextField from '@mui/material/TextField';
import { Table, TableCell, TableHead,
	TableRow, Grid } from '@mui/material';
import SaveButton from './SaveButton';
import GetMarks from './GetMarks';
import DialogBox from './DialogBox';

const GetStudentDetails = (context) => {
	const { state } = context;

	return <TableRow>
		<TableCell/>
		<TableCell align="center">
			<TextField
				fullWidth={ true }
				label="StudentName"
				id="name"
				color="primary"
				variant="standard"
				value={ state.name }
				onChange={ (evt) =>
					context.actions
						.setStudentName(evt.target.value) }
			/></TableCell>
		{GetMarks(context)}
		{SaveButton(context)}
	</TableRow>;
};

const Inputs = (context) =>
	<Grid paddingBottom={ 8 }>
		<Table className="table">
			<TableHead>{ GetStudentDetails(context)}</TableHead>
		</Table>
		<DialogBox { ...context }/>
	</Grid>;

export default Inputs;
