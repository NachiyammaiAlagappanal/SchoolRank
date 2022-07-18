import { React } from 'react';
import { Alert, Stack } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';

const AlertMessage = ({ state }) => (state.Alert !== null
	?	<Stack sx={ { width: '100%' } } spacing={ 2 }>
		<Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			This is an error alert — <strong>check it out!</strong>
		</Alert>
	</Stack>
	: '');

export default AlertMessage;
