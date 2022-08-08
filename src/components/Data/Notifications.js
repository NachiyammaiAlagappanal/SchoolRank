import { React } from 'react';
import { Alert, Collapse, Snackbar } from '@mui/material';

const checkStatus = (error) => error !== '';

const message = {
	success: 'Successfully Saved!',
	error: 'Invalid Input check it out!',
};

const severity = {
	success: 'success',
	error: 'error',
};

const vertical = 'top';
const horizontal = 'center';

const Notifications = (context) => {
	const { state: { error }} = context;

	return (
		<Snackbar
			key={ vertical + horizontal }
			anchorOrigin={ { vertical, horizontal } }
			open={ checkStatus(error) }
		>
			<Collapse in={ checkStatus(error) }>
				<Alert
					severity={ severity[error] }
				>
					{message[error] }
				</Alert></Collapse>
		</Snackbar>);
};

export default Notifications;
