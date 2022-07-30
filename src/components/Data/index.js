import { React } from 'react';
import Inputs from './Inputs';
import StudentDataTable from './StudentDataTable';
import StatusUpdate from './StatusUpdate';
import { Box, Paper, Grid } from '@mui/material';

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
			<StatusUpdate { ...context }/>
		</Paper>
	</Box>;
};

export default Data;
