import { React } from 'react';
import { Alert, Snackbar } from '@mui/material';

const vertical = 'top';
const horizontal = 'center';

const Indication = (error) =>
	<Snackbar
		key={ vertical + horizontal }
		anchorOrigin={ { vertical, horizontal } }
		open={ error }
	>
		<Alert
			severity="error"
		>
			Enter valid Input!
			Marks range only between 0 to 100
		</Alert>
	</Snackbar>;

const ErrorInputIndication = (error) =>
	error && Indication(error);

export default ErrorInputIndication;
