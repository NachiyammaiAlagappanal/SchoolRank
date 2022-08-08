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

const inputType = {
	true: 'success',
	false: 'error',
};

const vertical = 'top';
const horizontal = 'center';

const Notifications = (context) => {
	const { state: { error }} = context;

	return (
		<Collapse in={ checkStatus(error) }>
			<Snackbar
				key={ vertical + horizontal }
				anchorOrigin={ { vertical, horizontal } }
				open={ checkStatus(error) }
			>

				<Alert
					severity={ severity[inputType[error]] }
				>
					{message[inputType[error]] }
				</Alert>
			</Snackbar></Collapse>);
};

export default Notifications;
