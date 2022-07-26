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

const Message = (context) =>
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
		Invalid Input — <strong>check it out!</strong>
	</Alert>;

const AlertBox = (context) => {
	const { state: { close }} = context;

	return (
		<Stack
			sx={ { width: '40%', margin: 'auto' } }
			spacing={ 2 }
		>
			<Collapse in={ close }>{Message(context)}</Collapse>
		</Stack>);
};

const action = () =>
	<Button
		variant="contained"
		color="success"
	><DoneIcon/> </Button>;

const snackBar = (error, actions) =>
	<Snackbar
		key={ vertical + horizontal }
		anchorOrigin={ { vertical, horizontal } }
		open={ error }
		onClose={ () => actions.editStatus() }
		autoHideDuration={ 600 }
		message="Successfully Saved"
		action={ action() }
	/>;

const AlertMessage = (context) => {
	const { state: { error }, actions } = context;

	return (
		error === false
			? AlertBox(context)
			:	snackBar(error, actions)

	);
};

export default AlertMessage;
