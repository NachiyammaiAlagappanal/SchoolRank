import { React } from 'react';
import Inputs from './Input';
import TableContain from '../Table';
import Status from './Status';
import { Box, Paper, Grid } from '@mui/material';

const StudentData = (context) => {
	const { state: { studentDetails }} = context;

	return <Box padding={ 5 }>
		<Inputs { ...context }/>
		<Paper
			elevation={ 20 }
			sx={ { margin: '8', padding: '5' } }
		>
			<Grid container={ true } justifyContent="center">
				<TableContain { ...{ ...context,
					data: { content: studentDetails }} }
				/></Grid>
			{ Status(context) }
		</Paper>
	</Box>;
};

export default StudentData;
