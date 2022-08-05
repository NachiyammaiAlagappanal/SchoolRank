import { React } from 'react';
import Inputs from './Inputs';
import StudentDataTable from '../StudentDataTable';
import Notifications from './Notifications';
import { Box, Paper, Grid } from '@mui/material';
import DialogBox from './DialogBox';

const Data = (context) => {
	const { state: { studentDetails }} = context;

	return <Box padding={ 5 }>
		<Inputs { ...context }/>
		<Paper
			elevation={ 20 }
			sx={ { margin: '8', padding: '5' } }
		>
			<Grid container={ true } justifyContent="center">
				<StudentDataTable { ...{ ...context,
					data: { content: studentDetails }} }
				/></Grid>
			<Notifications { ...context }/>
			<DialogBox { ...context }/>
		</Paper>
	</Box>;
};

export default Data;
