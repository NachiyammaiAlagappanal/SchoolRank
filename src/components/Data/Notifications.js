import { React } from 'react';
import { Alert, Collapse, Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const inputType = {
	true: 'success',
	false: 'error',
};

const checkStatus = (error) => error !== '';

const action = (actions) =>
	<IconButton
		aria-label="close"
		color="inherit"
		size="small"
		onClick={ () => {
			actions.editError();
		} }
	>
		<CloseIcon fontSize="inherit"/>
	</IconButton>;

const vertical = 'top';
const horizontal = 'center';

const Notifications = (context) => {
	const { state: { notification }, actions, config: { message }} = context;

	return (
		<Collapse in={ checkStatus(notification) }>
			<Snackbar
				key={ vertical + horizontal }
				anchorOrigin={ { vertical, horizontal } }
				autoHideDuration={ 6000 }
				open={ checkStatus(notification) }
				onClose={ () => {
					actions.editError();
				} }
			>
				<Alert
					severity={ inputType[notification] }
					action={ action(actions) }
				>{ message[inputType[notification]] }
				</Alert></Snackbar></Collapse>);
};

export default Notifications;
