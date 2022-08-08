import { React } from 'react';
import TextField from '@mui/material/TextField';
import { Table, TableCell, TableHead,
	TableRow, Grid } from '@mui/material';
import SaveButton from './SaveButton';
import MarkInput from './MarkInputs';

const GetStudentDetails = (context) => {
	const { state: { inputs }} = context;

	return <TableRow>
		<TableCell/>
		<TableCell align="center">
			<TextField
				fullWidth={ true }
				label="StudentName"
				id="name"
				color="primary"
				variant="standard"
				value={ inputs.name }
				onChange={ (evt) =>
					context.actions
						.setInputs({ name: evt.target.value }) }
			/></TableCell>
		{MarkInput(context)}
		{SaveButton(context)}
	</TableRow>;
};

const Inputs = (context) =>
	<Grid paddingBottom={ 8 }>
		<Table className="table">
			<TableHead>{ GetStudentDetails(context)}</TableHead>
		</Table>
	</Grid>;

export default Inputs;
