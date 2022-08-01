import { React } from 'react';
import { Alert, Snackbar } from '@mui/material';

const vertical = 'top';
const horizontal = 'middle';

const Indication = (error, actions) =>
	<Snackbar
		key={ vertical + horizontal }
		anchorOrigin={ { vertical, horizontal } }
		open={ error }
		autoHideDuration={ 600 }
		onClose={ () => actions.close(false) }
	>
		<Alert
			onClick={ () => {
				actions.close(false);
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
