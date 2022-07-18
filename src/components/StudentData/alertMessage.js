/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Snackbar from '@mui/material/Snackbar';
import DoneIcon from '@mui/icons-material/Done';
import { Alert, Collapse, Stack } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const vertical = 'top';
const horizontal = 'center';

const action = () =>
	<Button
		variant="contained"
		color="success"
	><DoneIcon/> </Button>;

const AlertMessage = (context) => {
	const { state: { status, error, close }} = context;

	return (
		error !== null && status === false
			?	<Stack sx={ { width: '100%' } } spacing={ 2 }>
				<Collapse in={ close }>
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={ () => {
									context.actions.close(false);
								} }
							>
								<CloseIcon fontSize="inherit"/>
							</IconButton>
						}
						severity="error"
					>
						<AlertTitle>Error</AlertTitle>
						This is an error alert — <strong>check it out!</strong>
					</Alert>
				</Collapse>
			</Stack>
			: 						<div>
				<Snackbar
					key={ vertical + horizontal }
					anchorOrigin={ { vertical, horizontal } }
					open={ status }
					autoHideDuration={ 3 }
					onClick={ () => context.actions.editAlert() }
					message="Successfully Saved"
					action={ action() }
				/></div>
	);
};

export default AlertMessage;
