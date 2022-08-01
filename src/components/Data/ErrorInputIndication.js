import { React } from 'react';
import { Alert, Snackbar } from '@mui/material';

const vertical = 'top';
const horizontal = 'center';

const Indication = (error, actions) =>
	<Snackbar
		key={ vertical + horizontal }
		anchorOrigin={ { vertical, horizontal } }
		open={ error }
		autoHideDuration={ 600 }
		onClose={ () => actions.closeAlertMessage(false) }
	>
		<Alert
			onClick={ () => {
				actions.closeAlertMessage(false);
			} }
			severity="error"
		>
			Enter valid Input!
			Marks range only between 0 to 100
		</Alert>
	</Snackbar>;

const ErrorInputIndication = (error, actions) =>
	error && Indication(error, actions);

export default ErrorInputIndication;
